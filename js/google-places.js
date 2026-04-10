/* =========================================================
   StorageFinder — Google Places API Module
   ---------------------------------------------------------
   HOW TO ACTIVATE:
   1. Go to https://console.cloud.google.com/
   2. Create a project and enable "Places API" and
      "Maps JavaScript API"
   3. Generate an API key (restrict it to your domain)
   4. Paste your key below

   Free tier: ~$200/month credit — enough for thousands of
   searches. No charge until you exceed the credit.
   ========================================================= */

const SF_GOOGLE_CONFIG = {
  apiKey: 'AIzaSyDbVCROipI6igs2k7PbORT7wmiqQJ0ET1I',
  maxResultsPerQuery: 15,
  searchRadiusMeters: 50000,   // 50 km radius
  detailConcurrency:  5,       // max simultaneous getDetails calls
};

/* =========================================================
   Internal state
   ========================================================= */
let _googleLoaded    = false;
let _googleLoading   = false;
let _googleService   = null;
let _onLoadCallbacks = [];

/* =========================================================
   Public API
   ========================================================= */
const SFGooglePlaces = {

  /** Returns true if a valid API key has been configured. */
  isConfigured() {
    return typeof SF_GOOGLE_CONFIG.apiKey === 'string' &&
           SF_GOOGLE_CONFIG.apiKey.trim().length > 10;
  },

  /**
   * Search Google Places for RV and boat storage near a location.
   * Automatically enriches results with contact details via getDetails.
   * @param {string} locationText  e.g. "Chicago, IL" or "60468"
   * @param {string} type          "all" | "rv" | "boat"
   * @returns {Promise<Array>}     Array of normalized listing objects
   */
  async search(locationText, type = 'all') {
    if (!this.isConfigured()) return [];

    await _ensureGoogleLoaded();

    const queries  = _buildQueries(type);
    const geocoded = await _geocodeWithGoogle(locationText);
    if (!geocoded) return [];

    // Run all text searches in parallel
    const batches  = await Promise.all(queries.map(q => _textSearch(q, geocoded)));
    const flat     = batches.flat();

    // Deduplicate by place_id before fetching details
    const seen    = new Set();
    const unique  = flat.filter(p => {
      if (seen.has(p.place_id)) return false;
      seen.add(p.place_id);
      return true;
    });

    // Enrich with full contact details (phone, website, hours)
    // Uses a concurrency limit to stay within API rate limits
    const enriched = await _batchGetDetails(unique);
    return enriched.filter(Boolean);
  },
};

/* =========================================================
   Private helpers
   ========================================================= */

function _buildQueries(type) {
  if (type === 'rv')   return [
    'RV storage', 'motorhome storage',
    'recreational vehicle storage', 'trailer storage',
  ];
  if (type === 'boat') return [
    'boat storage', 'marina boat storage',
    'marine storage', 'boat yard storage',
  ];
  // "all" — cast wide net
  return [
    'RV storage', 'boat storage',
    'marina storage', 'RV boat storage',
    'boat yard', 'motorhome storage',
  ];
}

/* Load the Google Maps JS library once */
function _ensureGoogleLoaded() {
  if (_googleLoaded)  return Promise.resolve();
  if (_googleLoading) return new Promise(resolve => _onLoadCallbacks.push(resolve));

  _googleLoading = true;
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    div.id    = '_sf_gmap_div';
    div.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;';
    document.body.appendChild(div);

    window._sfGoogleMapsCallback = () => {
      const tempMap    = new google.maps.Map(div, { center: { lat: 0, lng: 0 }, zoom: 1 });
      _googleService   = new google.maps.places.PlacesService(tempMap);
      _googleLoaded    = true;
      _googleLoading   = false;
      _onLoadCallbacks.forEach(cb => cb());
      _onLoadCallbacks = [];
      resolve();
    };

    const script   = document.createElement('script');
    script.src     = `https://maps.googleapis.com/maps/api/js?key=${SF_GOOGLE_CONFIG.apiKey}&libraries=places&callback=_sfGoogleMapsCallback`;
    script.onerror = () => { _googleLoading = false; reject(new Error('Google Maps failed to load.')); };
    document.head.appendChild(script);
  });
}

/* Geocode a text location using Google's Geocoder */
function _geocodeWithGoogle(locationText) {
  return new Promise(resolve => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: locationText + ', USA' }, (results, status) => {
      resolve(status === 'OK' && results.length > 0 ? results[0].geometry.location : null);
    });
  });
}

/* Text search — returns raw place stubs (no contact info yet) */
function _textSearch(query, location) {
  return new Promise(resolve => {
    _googleService.textSearch({
      query,
      location,
      radius: SF_GOOGLE_CONFIG.searchRadiusMeters,
    }, (results, status) => {
      if (!results || status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        resolve([]);
        return;
      }
      if (
        status !== google.maps.places.PlacesServiceStatus.OK &&
        status !== google.maps.places.PlacesServiceStatus.ZERO_RESULTS
      ) {
        console.warn(`[StorageFinder] Places textSearch: ${status}`);
        resolve([]);
        return;
      }
      resolve(results.slice(0, SF_GOOGLE_CONFIG.maxResultsPerQuery));
    });
  });
}

/* Fetch full details for one place_id — this is where phone/website/hours live */
function _getPlaceDetails(placeId) {
  return new Promise(resolve => {
    _googleService.getDetails({
      placeId,
      // Explicitly request only the fields we need to control billing cost.
      // Basic fields: name, place_id, geometry, formatted_address, types
      // Contact fields: formatted_phone_number, website, opening_hours
      // Atmosphere fields: rating, user_ratings_total
      fields: [
        'place_id',
        'name',
        'formatted_address',
        'geometry',
        'formatted_phone_number',
        'international_phone_number',
        'website',
        'opening_hours',
        'rating',
        'user_ratings_total',
        'types',
        'photos',
      ],
    }, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK || !place) {
        resolve(null);
        return;
      }
      resolve(_normalizePlaceDetails(place));
    });
  });
}

/* Run getDetails in controlled batches to avoid rate-limit errors */
async function _batchGetDetails(places) {
  const results   = [];
  const batchSize = SF_GOOGLE_CONFIG.detailConcurrency;

  for (let i = 0; i < places.length; i += batchSize) {
    const chunk = places.slice(i, i + batchSize);
    const batch = await Promise.all(chunk.map(p => _getPlaceDetails(p.place_id)));
    results.push(...batch);

    // Small pause between batches to stay within QPS limits
    if (i + batchSize < places.length) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  return results;
}

/* Normalize a fully-enriched place detail response into a listing object */
function _normalizePlaceDetails(place) {
  if (!place || !place.name) return null;

  const nameLow = place.name.toLowerCase();

  // Determine storage type from name keywords
  let type = 'both';
  const isBoat = nameLow.includes('boat')   || nameLow.includes('marina')  ||
                 nameLow.includes('marine')  || nameLow.includes('yacht')   ||
                 nameLow.includes('harbor')  || nameLow.includes('harbour') ||
                 nameLow.includes('watercraft') || nameLow.includes('nautical');
  const isRV   = nameLow.includes('rv')     || nameLow.includes('motorhome') ||
                 nameLow.includes('trailer') || nameLow.includes('camper')    ||
                 nameLow.includes('recreational vehicle');
  if (isBoat && !isRV)  type = 'boat';
  if (isRV   && !isBoat) type = 'rv';

  // Parse address components
  const fullAddr  = place.formatted_address || '';
  const addrParts = fullAddr.split(',').map(s => s.trim());
  const address   = addrParts[0] || '';
  const city      = addrParts[1] || '';
  const stateMatch = fullAddr.match(/\b([A-Z]{2})\s+\d{5}/);
  const state     = stateMatch ? stateMatch[1] : '';
  const zipMatch  = fullAddr.match(/\b(\d{5})\b/);
  const zip       = zipMatch  ? zipMatch[1]  : '';

  const phone   = place.formatted_phone_number || place.international_phone_number || '';
  const website = place.website ? place.website.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
  const rating  = place.rating  || 0;
  const reviews = place.user_ratings_total || 0;

  // Build hours string from weekday_text array
  const hours = (place.opening_hours?.weekday_text || []).join(' | ');

  // First photo from Places API (already billing at Atmosphere tier for opening_hours)
  const photo = (place.photos && place.photos.length > 0)
    ? place.photos[0].getUrl({ maxWidth: 400, maxHeight: 260 })
    : '';

  return {
    id:           `google-${place.place_id}`,
    name:          place.name,
    type,
    address,
    city,
    state,
    zip,
    phone,
    email:         '',
    website,
    rating,
    reviews,
    featured:      false,
    lat:           place.geometry?.location?.lat() || 0,
    lng:           place.geometry?.location?.lng() || 0,
    priceMonthly:  0,
    description:   '',
    amenities:     [],
    pricing:       [],
    hours,
    photo,
    source:        'google',
  };
}
