# GeoCodes.ZIPCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted** | **String** | A string with the formatted version of the ZIP code. This may include the +4 extension if available. | [optional] 
**plusFour** | **Number** | The optional plus-four code, if available. Note that this will omit leading zeroes, so if you need to display the ZIP Code, you need to either pad with zeroes or use the &#39;formatted&#39; field. Provided as a convenience for developers that need the numeric form. | [optional] 
**zip** | **Number** | The main 5-digit ZIP Code. Note that this will omit leading zeroes, so if you need to display the ZIP Code, you need to either pad with zeroes or use the &#39;formatted&#39; field. Provided as a convenience for developers that need the numeric form. | 


