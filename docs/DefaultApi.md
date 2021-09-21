# GeoCodes.DefaultApi

All URIs are relative to *https://api.geo.codes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](DefaultApi.md#ping) | **GET** /ping | Ping the service without credentials



## ping

> String ping()

Ping the service without credentials

An endpoint that always responds with the string \&quot;pong\&quot;. This can be used as a health check.&lt;br&gt;&lt;br&gt;  This endpoint does not require an account to be accessed, and does not count as a lookup. Requests may still be rejected due to rate limiting to preserve the health of the service.  Alpha of Version 1 of the geo.codes API. Once V1 is stabilized, routes under &#x60;/v1&#x60; are guaranteed to follow semver-style backwards compatibility guarantees.

### Example

```javascript
import GeoCodes from 'geo_codes';

let apiInstance = new GeoCodes.DefaultApi();
apiInstance.ping().then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

