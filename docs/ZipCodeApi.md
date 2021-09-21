# GeoCodes.ZipCodeApi

All URIs are relative to *https://api.geo.codes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddressReverseZipCode**](ZipCodeApi.md#v1AddressReverseZipCode) | **GET** /v1/address/reverse_zip_code | Convert a coordinate to a ZIP Code
[**v1AddressZipCode**](ZipCodeApi.md#v1AddressZipCode) | **GET** /v1/address/zip_code | Convert a ZIP Code to a coordinate



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

let apiInstance = new GeoCodes.ZipCodeApi();
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

let apiInstance = new GeoCodes.ZipCodeApi();
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

