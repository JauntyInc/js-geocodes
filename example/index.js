// Run with the command `npm test`

var GeoCodes = require('geo_codes');

var defaultClient = GeoCodes.ApiClient.instance;

// Configure API key authorization: ApiKeyHeaderAuth
var ApiKeyHeaderAuth = defaultClient.authentications['ApiKeyHeaderAuth'];
ApiKeyHeaderAuth.apiKey = "YOUR API KEY"

var api = new GeoCodes.AddressApi()
var q = "111 8th Ave, New York, NY 10011";
api.v1AddressGeocode(q).then(function(data) {
  console.log('API called successfully. Returned data: ', data);
}, function(error) {
  console.error(error);
});

/**
 
Output:

> test-js-geocodes@1.0.0 test
> node index.js

API called successfully. Returned data:  Geocoding {
  confidence: 65,
  dataset_citation_required: false,
  matched_address: USAddress {
    city: 'New York',
    formatted: '111 8th Ave, New York, NY 10011',
    state_code: 'NY',
    street_address: USStreetAddress {
      formatted: '111 8th Ave',
      street_name: '8th',
      number: '111',
      type: 'Ave'
    },
    zip_code: ZIPCode { zip: 10011, formatted: '10011' }
  },
  result_dataset: 'US Census Bureau 2020 TIGER',
  result_location: 'offset',
  result_type: 'interpolated',
  coordinate: GCSCoordinate {
    latitude: 40.740752706986484,
    longitude: -74.00192922343842
  }
}
 */