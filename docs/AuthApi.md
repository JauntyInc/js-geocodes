# GeoCodes.AuthApi

All URIs are relative to *https://api.geo.codes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1Test**](AuthApi.md#v1Test) | **GET** /v1/test | Ping function that tests the API Key



## v1Test

> String v1Test()

Ping function that tests the API Key

**Description**  An endpoint that always responds with the string &#x60;authorized!&#x60; when authentication works. This can be used as a check that the authentication on a request is valid.  Please include your key on the &#x60;Authorization&#x60; header or the query parameter &#x60;api_key&#x60;  **No account required**  This endpoint requires an account to be accessed, but does not count as a lookup. Requests may still be rejected due to rate limiting by any facet (account, IP, etc), in order to preserve the health of the service.

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

let apiInstance = new GeoCodes.AuthApi();
apiInstance.v1Test().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[ApiKeyHeaderAuth](../README.md#ApiKeyHeaderAuth), [ApiKeyURLAuth](../README.md#ApiKeyURLAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

