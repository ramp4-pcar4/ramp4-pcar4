import { InstanceAPI, MapLayer, IdentifyResult } from '../../api/internal';
import { RampLayerConfig, IdentifyParameters, Point } from '../api';
import { EsriWMSLayer } from '../esri';
/**
 * A layer class which implements an ESRI WMS Layer.
 */
export declare class WmsLayer extends MapLayer {
    esriLayer: EsriWMSLayer | undefined;
    sublayerNames: Array<string>;
    readonly mimeType: string;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.WMSLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
    canIdentify(): boolean;
    /**
     * Run a getFeatureInfo on a WMS layer, return the result as a promise.
     * Options: specs to be added once finalized
     *
     * @param {Object} options     additional arguemets, see above.
     * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
     */
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(key: string, value: string, forceRefresh?: boolean): void;
    /**
     * Handles click events for WMS layers (makes a WMS GetFeatureInfo call behind the scenes).
     *
     * @param {Array} layerList a list of strings identifying the WMS sublayers to be queried
     * @param {Point} point a RAMP Point indicating where the user clicked
     * @param {String} mimeType the format to be requested for the response
     * @returns {Promise} a promise which resolves with the GetFeatureInfo response
     */
    getFeatureInfo(layerList: Array<string>, point: Point, mimeType: string): Promise<any>;
    /**
     * Finds the appropriate legend URLs for WMS layers.
     *
     * @param {Array} layerList a list of objects identifying the WMS layers to be queried
     * @returns {Array} a list of strings containing URLs for specified layers (order is preserved)
     */
    getLegendUrls(layerList: Array<any>): Array<string>;
    /**
     * Searches for a layer title defined by a wms.
     * @function getWMSLayerTitle
     * @private
     * @param  {String} wmsLayerId   layer id as defined in the wms (i.e. not wmsLayer.id)
     * @return {String}              layer title as defined on the service, '' if no title defined
     */
    getWMSLayerTitle(wmsLayerId: string): string;
    /**
     * Download or refresh the internal symbology for the sublayer.
     *
     * @function loadSymbology
     */
    loadSymbology(): void;
}
