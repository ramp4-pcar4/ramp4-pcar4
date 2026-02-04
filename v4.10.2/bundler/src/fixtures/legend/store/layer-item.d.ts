import { LayerInstance, InstanceAPI } from '../../../api';
import { LayerControl, LegendSymbology } from '../../../geo/api';
import { LegendItem } from './legend-item';
export declare class LayerItem extends LegendItem {
    _layerId: string;
    _layerIdx?: number | undefined;
    _layerUid: string;
    _isSublayer: boolean;
    _layer: LayerInstance | undefined;
    _layerInitVis: boolean | undefined;
    _layerRedrawing: boolean;
    _layerOffscale: boolean;
    _treeGrown: boolean;
    _customSymbology: boolean;
    _coverIcon?: string;
    _description?: string;
    _symbologyExpanded: boolean;
    _origLayerControls: Array<LayerControl> | undefined;
    _origLayerDisabledControls: Array<LayerControl> | undefined;
    _layerControls: Array<LayerControl>;
    _layerDisabledControls: Array<LayerControl>;
    _maxLines: number | undefined;
    _symbologyRenderStyle: string;
    _symbologyStack: Array<LegendSymbology>;
    handlers: Array<string>;
    /**
     * Creates a new single layer item.
     */
    constructor(iApi: InstanceAPI, config: any, parent?: LegendItem);
    /** Returns the id of the parent layer if this item is a sublayer. Otherwise undefined */
    get parentLayerId(): string | undefined;
    /** Returns the id of the layer */
    get layerId(): string;
    /** Returns layer index only if the layer item is a sublayer. Otherwise returns undefined */
    get layerIdx(): number | undefined;
    /** Returns if the layer is a sublayer */
    get isSublayer(): boolean;
    /** Returns UID of the layer */
    get layerUid(): string;
    /** Returns Ramp Layer associated with legend item. */
    get layer(): LayerInstance;
    set layer(layer: LayerInstance);
    get layerOffscale(): boolean;
    set layerOffscale(offscale: boolean);
    get layerRedrawing(): boolean;
    set layerRedrawing(redrawing: boolean);
    get coverIcon(): string | undefined;
    set coverIcon(icon: string | undefined);
    get description(): string | undefined;
    set description(description: string | undefined);
    /** Returns true if symbology stack is expanded. */
    get symbologyExpanded(): boolean;
    get treeGrown(): boolean;
    set treeGrown(value: boolean);
    get origLayerControls(): LayerControl[] | undefined;
    get origDisabledLayerControls(): LayerControl[] | undefined;
    set symbologyRenderStyle(symbologyRenderStyle: string);
    get symbologyRenderStyle(): string;
    set symbologyStack(symbologyStack: Array<LegendSymbology>);
    get symbologyStack(): Array<LegendSymbology>;
    get maxLines(): number | undefined;
    /**
     * Returns a legend config representation of this item.
     */
    getConfig(): any;
    /**
     * Toggle visibility state of a layer item. Needs to verify parent visibility is updated.
     * @param {boolean} visibility set legend item to visible/not visible if given, otherwise toggle
     * @param {boolean} updateParent whether or not toggleVisibility should 'bubble-up' the legend tree
     * @param {boolean} forceUpdate ignore control check, used when visibility is changed outside of legend fixture
     */
    toggleVisibility(visible?: boolean, updateParent?: boolean, forceUpdate?: boolean): void;
    /**
     * Toggles the symbology expand and returns the new value
     *
     * @param {boolean} expanded optional parameter to toggle expanded to a certain value
     */
    toggleSymbology(expanded?: boolean | undefined): boolean;
    /**
     * Sets the visibility of the symbology with the given uid
     * If the provided UID is undefined, set the visibility of all symbols
     *
     * @param {uid | undefined} uid the uid of the legend symbology
     * @param visible The new visibility value
     */
    setSymbologyVisibility(uid: string | undefined, visible: boolean): void;
    /**
     * Have the item adapt and update to the given layer as it loads.
     * Is either called in the constructor, or through the legend api
     *
     * @param {LayerInstance | undefined} layer the layer to load. If undefined, layer will be fetched via instance API using id/uid.
     */
    load(layer: LayerInstance | undefined): void;
    error(): void;
    /**
     * Check if a control is available for the layer item.
     *
     * @param {LayerControl} control name of the control
     * @return {boolean} Indicates if control is enabled on this legend item or layer
     */
    layerControlAvailable(control: LayerControl): boolean;
    updateLayerControls(): void;
}
