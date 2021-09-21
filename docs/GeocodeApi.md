# GeoCodes.GeocodeApi

All URIs are relative to *https://api.geo.codes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddressGeocode**](GeocodeApi.md#v1AddressGeocode) | **GET** /v1/address/geocode | Geocode an unstructured address string
[**v1AddressReverseZipCode**](GeocodeApi.md#v1AddressReverseZipCode) | **GET** /v1/address/reverse_zip_code | Convert a coordinate to a ZIP Code
[**v1AddressStructuredGeocode**](GeocodeApi.md#v1AddressStructuredGeocode) | **GET** /v1/address/structured_geocode | Geocode structured addresses
[**v1AddressZipCode**](GeocodeApi.md#v1AddressZipCode) | **GET** /v1/address/zip_code | Convert a ZIP Code to a coordinate



## v1AddressGeocode

> Geocoding v1AddressGeocode(q, opts)

Geocode an unstructured address string

**Description**&lt;br&gt;&lt;br&gt;  Geocode a single address. This parses the input address and matches it against our records to produce the geocoded result.  This does a best-attempt to geocode the given address in the face of human errors in the input data. This can be the wrong city (\&quot;New York City\&quot; instead of \&quot;New York\&quot;) a missing postal code, a misspelled street name, house numbers that don&#39;t exist, etc.  As more corrections are needed, the certainty in the result drops. This can be tuned with a minimum certainty parameter. If our confidence in the result is less than the minimum certainty, it will not be returned. The default is 30. 30 was chosen to be robust against unclean data without returning results that are unlikely to be true. We don&#39;t recommend setting this parameter above 90 because exact matching is too restrictive for the mistakes that people typically make when writing addresses -- even people writing their own addresses will make mistakes that are never corrected.  **Lookup cost**  This query requires an account. Please sign up at https://geo.codes/signup and get your API key at https://geo.codes/account/api  One query counts as one lookup. It only costs a query if it returns data. If you have exceeded your account quota, the request will not succeed.

### Example

```javascript
import GeoCodes from 'geo_codes';
let defaultClient = GeoCodes.ApiClient.instance;
// Configure API key authorization: ApiKeyHeaderAuth
let ApiKeyHeaderAuth = defaultClient.authentications['ApiKeyHeaderAuth'];
ApiKeyHeaderAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyHeaderAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyURLAuth
let ApiKeyURLAuth = defaultClient.authentications['ApiKeyURLAuth'];
ApiKeyURLAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyURLAuth.apiKeyPrefix = 'Token';

let apiInstance = new GeoCodes.GeocodeApi();
let q = "q_example"; // String | The unstructured address to geocode. Expected to be roughly the format that is used by the USPS to deliver mail.
let opts = {
  'minConfidence': 56 // Number | The minimum confidence in the results required to return an address, as a percentage between 0 and 100. Default: 30. To accept only exact data matches, choose 100. To be as permissive as possible, set it to 0. We don't recommend setting this higher than 90. It is very common for people to write their own addresses in ways that deviate from the exact match.
};
apiInstance.v1AddressGeocode(q, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The unstructured address to geocode. Expected to be roughly the format that is used by the USPS to deliver mail. | 
 **minConfidence** | **Number**| The minimum confidence in the results required to return an address, as a percentage between 0 and 100. Default: 30. To accept only exact data matches, choose 100. To be as permissive as possible, set it to 0. We don&#39;t recommend setting this higher than 90. It is very common for people to write their own addresses in ways that deviate from the exact match. | [optional] 

### Return type

[**Geocoding**](Geocoding.md)

### Authorization

[ApiKeyHeaderAuth](../README.md#ApiKeyHeaderAuth), [ApiKeyURLAuth](../README.md#ApiKeyURLAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddressReverseZipCode

> ReverseZIPCode v1AddressReverseZipCode(latitude, longitude, opts)

Convert a coordinate to a ZIP Code

**Description**&lt;br&gt;  Look up a single ZIP Code from the given latitude and longitude.  This performs a lookup based on US Census \&quot;ZIP Code Tabulation Areas.\&quot; These areas are calculated by the US Census based on the most common ZIP Codes within different US Census blocks. This is necessary because in practice, ZIP Codes are not defined by areas but are defined as collections of addresses. They correspond loosely to areas, but not exactly. To get an accurate ZIP Code for an address, see the geocoding endpoints.  For more information on ZIP Code tabulation areas and why ZIP Codes cannot be accurately represented by areas, [click here](https://geo.codes/resources/articles/complete-guide-to-zip-codes#what-are-zip-code-tabulation-areas).  They have the following limitations: - ZIP Code Tabulation Areas do not have full coverage of the land mass of the United States. This only matters in remote areas without deliverable addresses; in practice this is fine. In these cases, the API will return the closest tabulation area unless the &#x60; + \&quot;&#x60;strict&#x60;\&quot; + &#x60; parameter is provided. - Addresses within a ZIP Code Tabulation Area might have different ZIP Codes. Geocoding an address is the only way to get a perfect ZIP Code. - The PlusFour field on the return value will always be empty.  **Lookup cost**&lt;br&gt;  This query requires an account. Please sign up at https://geo.codes/signup and get your API key at https://geo.codes/account/api  One query counts as one lookup. It only costs a query if it returns data. If you have exceeded your account quota, the request will not succeed.

### Example

```javascript
import GeoCodes from 'geo_codes';
let defaultClient = GeoCodes.ApiClient.instance;
// Configure API key authorization: ApiKeyHeaderAuth
let ApiKeyHeaderAuth = defaultClient.authentications['ApiKeyHeaderAuth'];
ApiKeyHeaderAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyHeaderAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyURLAuth
let ApiKeyURLAuth = defaultClient.authentications['ApiKeyURLAuth'];
ApiKeyURLAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyURLAuth.apiKeyPrefix = 'Token';

let apiInstance = new GeoCodes.GeocodeApi();
let latitude = 3.4; // Number | The latitude of the query
let longitude = 3.4; // Number | The longitude of the query
let opts = {
  'strict': true // Boolean | If true, will only return a result if the given point is within a zip code tabulation area, and will not return the closest one.
};
apiInstance.v1AddressReverseZipCode(latitude, longitude, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **Number**| The latitude of the query | 
 **longitude** | **Number**| The longitude of the query | 
 **strict** | **Boolean**| If true, will only return a result if the given point is within a zip code tabulation area, and will not return the closest one. | [optional] 

### Return type

[**ReverseZIPCode**](ReverseZIPCode.md)

### Authorization

[ApiKeyHeaderAuth](../README.md#ApiKeyHeaderAuth), [ApiKeyURLAuth](../README.md#ApiKeyURLAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddressStructuredGeocode

> Geocoding v1AddressStructuredGeocode(streetAddress, opts)

Geocode structured addresses

**Description**&lt;br&gt;  Geocode a single structured address. This takes address components (street, city, state, etc) and matches it against our records to produce the geocoded result.  This does a best-attempt to geocode the given address in the face of human errors in the input data. This can be the wrong city (\&quot;New York City\&quot; instead of \&quot;New York\&quot;) a missing postal code, a misspelled street name, house numbers that don&#39;t exist, etc.  As more corrections are needed, the certainty in the result drops. This can be tuned with a minimum certainty parameter. If our confidence in the result is less than the minimum certainty, it will not be returned. The default is 30%. 30% was chosen to be robust against unclean data without returning results that are unlikely to be true. We don&#39;t recommend setting this parameter above 90% because exact matching is too restrictive for the mistakes that people typically make when writing addresses -- even people writing their own addresses will make mistakes that are never corrected because they Just Work.  **Lookup cost**&lt;br&gt;  This query requires an account. Please sign up at https://geo.codes/signup and get your API key at https://geo.codes/account/api  One query counts as one lookup. It only costs a query if it returns data. If you have exceeded your account quota, the request will not succeed.

### Example

```javascript
import GeoCodes from 'geo_codes';
let defaultClient = GeoCodes.ApiClient.instance;
// Configure API key authorization: ApiKeyHeaderAuth
let ApiKeyHeaderAuth = defaultClient.authentications['ApiKeyHeaderAuth'];
ApiKeyHeaderAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyHeaderAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyURLAuth
let ApiKeyURLAuth = defaultClient.authentications['ApiKeyURLAuth'];
ApiKeyURLAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyURLAuth.apiKeyPrefix = 'Token';

let apiInstance = new GeoCodes.GeocodeApi();
let streetAddress = "streetAddress_example"; // String | The street address line, including the number and street type.
let opts = {
  'city': "city_example", // String | The city. Not required, but it's highly recommended that you add either the city or postal_code fields.
  'state': "state_example", // String | The state with the address. Not required, but it's highly recommended that you add the postal_code if the state is not present.
  'postalCode': "postalCode_example", // String | The postal code, for example, a ZIP code. Not required, but if this is not present, we recommend adding the city and the state for best results.
  'minConfidence': 56 // Number | The minimum confidence in the results required to return an address, as a percentage between 0 and 100. Default: 30. To accept only exact data matches, choose 100. To be as permissive as possible, set it to 0. We don't recommend setting this higher than 90. It is very common for people to write their own addresses in ways that deviate from the exact match.
};
apiInstance.v1AddressStructuredGeocode(streetAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streetAddress** | **String**| The street address line, including the number and street type. | 
 **city** | **String**| The city. Not required, but it&#39;s highly recommended that you add either the city or postal_code fields. | [optional] 
 **state** | **String**| The state with the address. Not required, but it&#39;s highly recommended that you add the postal_code if the state is not present. | [optional] 
 **postalCode** | **String**| The postal code, for example, a ZIP code. Not required, but if this is not present, we recommend adding the city and the state for best results. | [optional] 
 **minConfidence** | **Number**| The minimum confidence in the results required to return an address, as a percentage between 0 and 100. Default: 30. To accept only exact data matches, choose 100. To be as permissive as possible, set it to 0. We don&#39;t recommend setting this higher than 90. It is very common for people to write their own addresses in ways that deviate from the exact match. | [optional] 

### Return type

[**Geocoding**](Geocoding.md)

### Authorization

[ApiKeyHeaderAuth](../README.md#ApiKeyHeaderAuth), [ApiKeyURLAuth](../README.md#ApiKeyURLAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddressZipCode

> ZIPCode v1AddressZipCode(zipCode)

Convert a ZIP Code to a coordinate

**Description**&lt;br&gt;  Convert a single ZIP Code into a latitude and longitude.  By default, this returns a point that is guaranteed to be interior to the given ZIP Code. It may not necessarily be the centroid, because the centroid of some ZIP Codes do not fall within their borders (imagine a ZIP Code that is shaped like a crescent).  If a Plus-4 ZIP code is passed, only the first 5 digits will be used (i.e. the +4 will be ignored).  This performs a lookup based on US Census \&quot;ZIP Code Tabulation Areas.\&quot; These areas are calculated by the US Census based on the most common ZIP Codes within different US Census blocks. This is necessary because in practice, ZIP Codes are not defined by areas but are defined as collections of addresses. They correspond loosely to areas, but not exactly. To get an accurate ZIP Code for an address, see the geocoding endpoints.  For more information on ZIP Code tabulation areas and why ZIP Codes cannot be accurately represented by areas, [click here](https://geo.codes/resources/articles/complete-guide-to-zip-codes#what-are-zip-code-tabulation-areas).

### Example

```javascript
import GeoCodes from 'geo_codes';
let defaultClient = GeoCodes.ApiClient.instance;
// Configure API key authorization: ApiKeyHeaderAuth
let ApiKeyHeaderAuth = defaultClient.authentications['ApiKeyHeaderAuth'];
ApiKeyHeaderAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyHeaderAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyURLAuth
let ApiKeyURLAuth = defaultClient.authentications['ApiKeyURLAuth'];
ApiKeyURLAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyURLAuth.apiKeyPrefix = 'Token';

let apiInstance = new GeoCodes.GeocodeApi();
let zipCode = "zipCode_example"; // String | The ZIP Code of the query. Can be a ZIP Code or a ZIP+4 Code. If a +4 extension is passed, it will be ignored.
apiInstance.v1AddressZipCode(zipCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCode** | **String**| The ZIP Code of the query. Can be a ZIP Code or a ZIP+4 Code. If a +4 extension is passed, it will be ignored. | 

### Return type

[**ZIPCode**](ZIPCode.md)

### Authorization

[ApiKeyHeaderAuth](../README.md#ApiKeyHeaderAuth), [ApiKeyURLAuth](../README.md#ApiKeyURLAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

