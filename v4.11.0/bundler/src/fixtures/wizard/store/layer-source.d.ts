import { LayerType, FieldDefinition, RampLayerConfig } from '../../../geo/api';
import { APIScope, InstanceAPI } from '../../../api/internal';
export interface LayerInfo {
    config: RampLayerConfig;
    configOptions: Array<string>;
    fields?: Array<FieldDefinition>;
    latLonFields?: {
        lat: Array<string>;
        lon: Array<string>;
    };
    layers?: Array<SublayerInfo>;
    layersRaw?: [];
}
export interface SublayerInfo {
    id: number | string;
    label: string;
    children: Array<number | string> | undefined;
}
export declare class LayerSource extends APIScope {
    layerCount: number;
    sublayerCount: number;
    constructor($iApi: InstanceAPI);
    /**
     * Get layer info from a file url or data
     *
     * @param {string} url a service url to load, name of file if file data is provided
     * @param {string} fileType format of the file (layer type)
     * @param {ArrayBuffer} [fileData] raw file data buffer
     * @returns {Promise<LayerInfo | undefined>} LayerInfo object
     */
    fetchFileInfo(url: string, fileType: LayerType, fileData?: ArrayBuffer): Promise<LayerInfo | undefined>;
    getGeojsonInfo(url: string, fileData: ArrayBuffer | object): Promise<LayerInfo>;
    getCsvInfo(url: string, fileData: ArrayBuffer | string): Promise<LayerInfo>;
    getShapfileInfo(url: string, fileData: ArrayBuffer): Promise<LayerInfo>;
    /**
     * Get layer info from a service url
     *
     * @param {string} url a service url to load
     * @param {string} serviceType type of layer
     * @returns {Promise<LayerInfo | undefined>} LayerInfo object
     */
    fetchServiceInfo(url: string, serviceType: string, nested: boolean): Promise<LayerInfo | undefined>;
    getFeatureInfo(url: string): Promise<LayerInfo>;
    /**
     * Gets MIL data from source, formats it as a tree, and returns a promise of the data with configuration
     *
     * @param {string} url
     * @returns {Promise<LayerInfo>} data configuration
     */
    getMapImageInfo(url: string, nested: boolean): Promise<LayerInfo>;
    createLayerHierarchy(layers: any[], nested: boolean): SublayerInfo[];
    getTileInfo(url: string): Promise<LayerInfo>;
    getImageryInfo(url: string): Promise<LayerInfo>;
    getWfsInfo(url: string): Promise<LayerInfo>;
    /**
     * Gets WMS data from source, formats it, and returns a promise of the data with configuration
     *
     * @param {string} url
     * @returns {Promise<LayerInfo>} data configuration
     */
    getWmsInfo(url: string, nested: boolean): Promise<LayerInfo>;
    mapWmsLayerList(layers: any, nested: boolean): any;
    /**
     * Guesses type of file or service given a URL
     *
     * @param {string} url
     * @returns {string} file or layer type
     */
    guessFormatFromURL(url: string): string;
}
