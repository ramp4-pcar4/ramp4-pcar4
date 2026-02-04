import { AttribSource, CommonLayer, InstanceAPI } from '@/api/internal';
import { Graphic } from '@/geo/api';
import type { AttributeSet, CompactJson, Extent, GetGraphicParams, RampLayerConfig, TabularAttributeSet } from '@/geo/api';
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
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet>;
    /**
     * Gets information on a graphic in the most efficient way possible.
     * The options parameter is ignored for data layers, since attributes is the only valid item
     * to request
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request. Ignored for data layers
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic>;
    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string>;
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    /**
     * Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do here.
     * However, we have it there just so that calling this method for a giant list is peaceful, and filtering
     * by layer type is not required.
     */
    abortAttributeLoad(): void;
    /**
     * Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do here.
     * However, we have it there just so that calling this method for a giant list is peaceful, and filtering
     * by layer type is not required.
     */
    attribLoadAborted(): boolean;
    /**
     * Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do here.
     * However, we have it there just so that calling this method for a giant list is peaceful, and filtering
     * by layer type is not required.
     */
    clearFeatureCache(): void;
    /**
     * The number of attributes currently downloaded (will update as download progresses)
     * @returns current download count
     */
    downloadedAttributes(): number;
    /**
     * Override for data layers.
     * Used to determine if layer is available for use.
     */
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
