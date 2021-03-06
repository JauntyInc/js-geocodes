/**
 * geo.codes
 * The alpha version of the [https://geo.codes](https://geo.codes) API service. See API documentation [here](https://geo.codes/docs/api). 10,000 free queries per month.
 *
 * The version of the OpenAPI document: 1.0.0-alpha
 * Contact: help@geo.codes
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ZIPCode from './ZIPCode';

/**
 * The ReverseZIPCode model module.
 * @module GeoCodes/model/ReverseZIPCode
 * @version 1.0.0-alpha
 */
class ReverseZIPCode {
    /**
     * Constructs a new <code>ReverseZIPCode</code>.
     * @alias module:GeoCodes/model/ReverseZIPCode
     * @param zipCode {module:GeoCodes/model/ZIPCode} 
     */
    constructor(zipCode) { 
        
        ReverseZIPCode.initialize(this, zipCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, zipCode) { 
        obj['zip_code'] = zipCode;
    }

    /**
     * Constructs a <code>ReverseZIPCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GeoCodes/model/ReverseZIPCode} obj Optional instance to populate.
     * @return {module:GeoCodes/model/ReverseZIPCode} The populated <code>ReverseZIPCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReverseZIPCode();

            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ZIPCode.constructFromObject(data['zip_code']);
            }
        }
        return obj;
    }

/**
     * Returns The distance in meters that the point was from the ZIP Code. If it was within the ZIP code, this will be 0. Calculated using the distance between the input point and the ZIP Code's geometry.
     * @return {Number}
     */
    getDistance() {
        return this.distance;
    }

    /**
     * Sets The distance in meters that the point was from the ZIP Code. If it was within the ZIP code, this will be 0. Calculated using the distance between the input point and the ZIP Code's geometry.
     * @param {Number} distance The distance in meters that the point was from the ZIP Code. If it was within the ZIP code, this will be 0. Calculated using the distance between the input point and the ZIP Code's geometry.
     */
    setDistance(distance) {
        this['distance'] = distance;
    }
/**
     * @return {module:GeoCodes/model/ZIPCode}
     */
    getZipCode() {
        return this.zip_code;
    }

    /**
     * @param {module:GeoCodes/model/ZIPCode} zipCode
     */
    setZipCode(zipCode) {
        this['zip_code'] = zipCode;
    }

}

/**
 * The distance in meters that the point was from the ZIP Code. If it was within the ZIP code, this will be 0. Calculated using the distance between the input point and the ZIP Code's geometry.
 * @member {Number} distance
 */
ReverseZIPCode.prototype['distance'] = undefined;

/**
 * @member {module:GeoCodes/model/ZIPCode} zip_code
 */
ReverseZIPCode.prototype['zip_code'] = undefined;






export default ReverseZIPCode;

