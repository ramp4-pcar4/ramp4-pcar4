import { AttribLayer, InstanceAPI, IdentifyResult } from '../../api/internal';
import { Extent, IdentifyParameters, RampLayerConfig } from '../api';
import { EsriFeatureLayer } from '../esri';
/**
 * A layer class which implements an ESRI Feature Layer.
 */
export declare class FeatureLayer extends AttribLayer {
    esriLayer: EsriFeatureLayer | undefined;
    esriView: __esri.FeatureLayerView | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.FeatureLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
    applySqlFilter(exclusions?: Array<string>): void;
    /**
     * Gets the extent where the provided object id is on the map.
     * Can only be used on feature layers. Not applicable to point geometry.
     *
     * @param objectId the object id to query
     * @returns {Promise} resolves with the extent where the object id is present, rejects if geometry type is invalid or esri layer does not exist
     */
    getGraphicExtent(objectId: number): Promise<Extent>;
}
