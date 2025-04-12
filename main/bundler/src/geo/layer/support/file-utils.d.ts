import { APIScope } from '../../../api/internal';
import { FieldType, LayerType, RampLayerConfig, CsvOptions, GeoJsonField, GeoJsonOptions } from '../../api';
export declare class FileUtils extends APIScope {
    /**
     * Fetch file data from remote URL.
     * @param url the URL to get the data from
     * @param fileType the type of the file layer (csv, shape, or geoJson)
     */
    fetchFileData(url: string, fileType: LayerType): Promise<any>;
    /**
     * Extracts fields from the first feature in the feature collection
     */
    extractGeoJsonFields(geoJson: any): Array<GeoJsonField>;
    /**
     * Extracts fields from csv file does no guesswork on property types and calls everything a string.
     */
    extractCsvFields(csvData: string, delimiter?: string): {
        name: string;
        type: FieldType;
    }[];
    /**
     * Returns all the fields from csv file that can be possible lat/long fields
     * @param csvData the csv file data
     * @param delimiter the delimiter in the data
     */
    filterCsvLatLonFields(csvData: any, delimiter?: string): {
        lat: any;
        lon: any;
    };
    /**
     * Convert GeoJSON to Esri json, a format that can be read by a feature layer constructor
     *
     * @param geoJson {Object} a GeoJSON object
     * @param options {GeoJsonOptions} any options for the transformation
     * @returns {Object} feature layer constructor object
     */
    geoJsonToEsriJson(geoJson: any, options: GeoJsonOptions): Promise<__esri.FeatureLayerProperties>;
    csvToGeoJson(csvData: string, opts: CsvOptions | undefined): Promise<any>;
    /**
     * Converts Shapefile data to geojson.
     *
     * @param {ArrayBuffer} shapeData an ArrayBuffer of the Shapefile in zip format
     * @returns {Promise} a promise resolving with geojson
     */
    shapefileToGeoJson(shapeData: ArrayBuffer): Promise<any>;
    /**
     * Converts FlatGeobuf data to geojson.
     *
     * @param {ArrayBuffer} fgbData an ArrayBuffer of a FlatGeobuf file
     * @param {number} maxLoadTime how long we are will permit this to run, in milliseconds
     * @returns {Promise} a promise resolving with geojson
     */
    fgbToGeoJson(fgbData: ArrayBuffer, maxLoadTime: number): Promise<any>;
    /**
     * Attempt to infers the type of a given value
     * Will check if the value's type is one of int, double
     * Defaults to string type if not
     */
    inferType(value: any): FieldType;
    /**
     * Will property convert json-based raw data (on a layer config) to a json object
     * while respecting caching considerations.
     *
     * @param {String | Object} rawData json-compatible payload from config
     * @param {Boolean} [caching=false] if layer is concerned about caching the payload
     * @returns {Object} data as a Json object
     */
    rawDataJsonParser(rawData: any, caching?: boolean): any;
    /**
     * Unzip a single zipped file.
     *
     * @param {ArrayBuffer} zippedData zipped file as ArrayBuffer
     * @returns {Promise<ArrayBuffer>} contents of the unzipped file as ArrayBuffer
     */
    unzipSingleFile(zippedData: ArrayBuffer): Promise<ArrayBuffer>;
    /**
     * Helper method for extracting binary-encoded file source from a layer config.
     *
     * @param {RampLayerConfig} layerConfig a ramp layer config. Should be layer type that is a binary format.
     */
    binaryInitHelper(layerConfig: RampLayerConfig): Promise<ArrayBuffer>;
    /**
     * Convert an ArrayBuffer to a UTF-8 string
     *
     * @param {ArrayBuffer} input binary input
     * @returns {string} input in string form
     */
    arbToStr(input: ArrayBuffer): string;
}
