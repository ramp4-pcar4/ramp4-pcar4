import { InstanceAPI, MapLayer, IdentifyResult } from '../../api/internal';
import { Extent, Graphic, Attributes, AttributeSet, GetGraphicParams, IdentifyParameters, RampLayerConfig, TabularAttributeSet } from '../api';
/**
 * A common layer class which is inherited by layer classes that want to divert an identify to another layer.
 */
export declare class DivertedIdentifyLayer extends MapLayer {
    /**
     * The layer we divert identify requests to
     */
    private diLayer;
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onLoadActions(): Array<Promise<void>>;
    terminate(): Promise<void>;
    /**
     * Validates that we should go ahead with an diverted layer operation
     */
    private diCheck;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
    getAttributes(): Promise<AttributeSet>;
    abortAttributeLoad(): void;
    clearFeatureCache(): void;
    downloadedAttributes(): number;
    attribLoadAborted(): boolean;
    getTabularAttributes(): Promise<TabularAttributeSet>;
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic>;
    zoomToFeature(objectId: number): Promise<boolean>;
    getIcon(objectId: number): Promise<string>;
    setSqlFilter(filterKey: string, whereClause: string): void;
    applySqlFilter(exclusions?: Array<string>): void;
    getSqlFilter(filterKey: string): string;
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    getGraphicExtent(objectId: number): Promise<Extent | undefined>;
    nameValue(attributes: Attributes): string;
}
