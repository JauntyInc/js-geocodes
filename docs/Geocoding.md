# GeoCodes.Geocoding

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **Number** | The confidence that the address was correctly geocoded. Range 0-100. 100 was an exact record match, 0 is a wild guess. | 
**coordinate** | [**GCSCoordinate**](GCSCoordinate.md) |  | [optional] 
**datasetCitationRequired** | **Boolean** | Whether the original data source requires citation via their license terms. This is not used at the moment, but will be in the future. | 
**matchedAddress** | [**USAddress**](USAddress.md) |  | 
**resultDataset** | **String** | The dataset that the result was derived from. | 
**resultLocation** | **String** | The description of where the point is. At the moment, all of the points are offset from the road, but in the future this will additionally include rooftop and entrance locations. | 
**resultType** | **String** | Describes how the location was derived. All geocodings are interpolated at the moment, but in the future this will include direct lookups. | 


