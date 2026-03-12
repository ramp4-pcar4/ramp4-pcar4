import { AttribLayer, InstanceAPI, IdentifyResult } from '../../api/internal';
import { Extent, BaseGeometry, IdentifyParameters, RampLayerConfig } from '../api';
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
    getGraphicExtent(objectId: number): Promise<Extent | undefined>;
    getLocalGeometry(objectId: number): Promise<BaseGeometry | undefined>;
    zoomToFeature(objectId: number): Promise<boolean>;
}
