import { AttribSource, CommonLayer, InstanceAPI } from '../../api/internal';
import { Graphic, AttributeSet, CompactJson, Extent, GetGraphicParams, RampLayerConfig, TabularAttributeSet } from '../api';
/**
 * A common layer class which is inherited by layer classes that implement data-based layers (do not appear on the map).
 */
export declare class DataLayer extends CommonLayer {
    /**
     * This represents a file content transformed to our common consumption format.
     * The implementation classes will handle that transformation, and common routines in this class can process
     * it onInitiate.
     */
    protected sourceJson: CompactJson | undefined;
    protected attribs: AttribSource;
    protected _visibility: boolean;
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    terminate(): Promise<void>;
    reload(): Promise<void>;
    protected onLoadActions(): Array<Promise<void>>;
    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet>;
    getTabularAttributes(): Promise<TabularAttributeSet>;
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic>;
    getIcon(objectId: number): Promise<string>;
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    abortAttributeLoad(): void;
    attribLoadAborted(): boolean;
    clearFeatureCache(): void;
    downloadedAttributes(): number;
    get layerExists(): boolean;
    /**
     * Returns the visibility of the layer data
     *
     * @returns {Boolean} visibility of the layer data
     */
    get visibility(): boolean;
    /**
     * Applies visibility to layer data.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean);
}
