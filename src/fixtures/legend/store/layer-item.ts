import { GlobalEvents, LayerInstance, type InstanceAPI } from '@/api';
import { DrawState, LayerControl, LayerType } from '@/geo/api';
import type { LegendSymbology } from '@/geo/api';
import { LegendItem, LegendType } from './legend-item';

export class LayerItem extends LegendItem {
    _layerId: string;
    _layerIdx?: number | undefined;
    _layerUid: string = '';

    _layer: LayerInstance | undefined;
    _layerInitVis: boolean | undefined;
    _layerRedrawing: boolean = false;
    _layerOffscale: boolean = false;
    _loadCancelled: boolean = false;
    _treeGrown: boolean = false;

    _coverIcon?: string;
    _description?: string;
    _symbologyExpanded: boolean;
    _origLayerControls: Array<LayerControl> | undefined;
    _origLayerDisabledControls: Array<LayerControl> | undefined;
    _layerControls: Array<LayerControl>;
    _layerDisabledControls: Array<LayerControl>;

    _symbologyRenderStyle: string;
    _symbologyStack: Array<LegendSymbology>;

    handlers: Array<string> = [];

    /**
     * Creates a new single layer item.
     */
    constructor(iApi: InstanceAPI, config: any, parent?: LegendItem) {
        super(iApi, config, parent);
        this._type = LegendType.Placeholder;
        this._layerId = config.layerId;
        this._layerIdx = config.sublayerIndex;
        this._layerControls = config.layerControls ?? [];
        this._origLayerControls = config.layerControls;
        this._layerDisabledControls = config.disabledLayerControls ?? [];
        this._origLayerDisabledControls = config.disabledLayerControls;
        this._layerRedrawing = false;
        this._symbologyExpanded = config.symbologyExpanded || false;
        if (config.coverIcon) this._coverIcon = config.coverIcon;
        if (config.description) this._description = config.description;
        this._symbologyRenderStyle = config.symbologyRenderStyle ?? 'icons';
        this._symbologyStack = config.symbologyStack?.map((symbol: any) => {
            return {
                uid: this.$iApi.geo.shared.generateUUID(),
                label: symbol.text,
                definitionClause: symbol.sqlQuery,
                imgUrl: symbol.image ?? '',
                drawPromise: Promise.resolve(),
                visibility: true, // just a placeholder
                lastVisibility: true
            };
        });
    }

    /** Returns the id of the parent layer (for MIL) */
    get parentLayerId(): string | undefined {
        return this._layerIdx
            ? this._layerId.slice(
                  0,
                  this._layerId.length - `-${this._layerIdx}`.length
              )
            : undefined;
    }

    /** Returns the id of the layer */
    get layerId(): string {
        return this._layerId;
    }

    get layerIdx(): number | undefined {
        return this._layerIdx;
    }

    get layerUid(): string {
        return this._layerUid;
    }

    /** Returns BaseLayer associated with legend item. */
    get layer(): LayerInstance {
        return this._layer!;
    }

    set layer(layer: LayerInstance) {
        this._layer = layer;
        this._layerId = layer.id;
        this._layerIdx = layer.layerIdx;
        this._layerUid = layer.uid;
        this._symbologyStack = this._symbologyStack ?? layer.legend; // set this item's symbology stack to layer's default if undefined in config
        this.updateLayerControls();
    }

    get layerOffscale(): boolean {
        return this._layerOffscale;
    }

    set layerOffscale(offscale: boolean) {
        this._layerOffscale = offscale;
    }

    get layerRedrawing(): boolean {
        return this._layerRedrawing;
    }

    set layerRedrawing(redrawing: boolean) {
        this._layerRedrawing = redrawing;
    }

    get coverIcon(): string | undefined {
        return this._coverIcon;
    }

    set coverIcon(icon: string | undefined) {
        this._coverIcon = icon;
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(description: string | undefined) {
        this._description = description;
    }

    /** Returns true if symbology stack is expanded. */
    get symbologyExpanded(): boolean {
        return this._symbologyExpanded;
    }

    get treeGrown(): boolean {
        return this._treeGrown;
    }

    set treeGrown(value: boolean) {
        this._treeGrown = value;
    }

    get loadCancelled() {
        return this._loadCancelled;
    }

    set loadCancelled(value: boolean) {
        this._loadCancelled = value;
    }

    get origLayerControls() {
        return this._origLayerControls;
    }

    get origDisabledLayerControls() {
        return this._origLayerDisabledControls;
    }

    set symbologyRenderStyle(symbologyRenderStyle: string) {
        this._symbologyRenderStyle = symbologyRenderStyle;
    }

    get symbologyRenderStyle() {
        return this._symbologyRenderStyle;
    }

    set symbologyStack(symbologyStack: Array<LegendSymbology>) {
        this._symbologyStack = symbologyStack;
    }

    get symbologyStack() {
        return this._symbologyStack;
    }

    /**
     * Returns a legend config representation of this item.
     */
    getConfig() {
        const config: any = {
            layerId: this._layerId,
            sublayerIndex: this._layerIdx,
            layerControls: this._layerControls,
            disabledLayerControls: this._layerDisabledControls,
            symbologyExpanded: this._symbologyExpanded,
            coverIcon: this._coverIcon,
            description: this._description
        };
        return { ...super.getConfig(), ...config };
    }

    /**
     * Toggle visibility state of a layer item. Needs to verify parent visibility is updated.
     * @param {boolean} visibility set legend item to visible/not visible if given, otherwise toggle
     * @param {boolean} updateParent whether or not toggleVisibility should 'bubble-up' the legend tree
     * @param {boolean} forceUpdate ignore control check, used when visibility is changed outside of legend fixture
     */
    toggleVisibility(
        visible?: boolean,
        updateParent: boolean = true,
        forceUpdate: boolean = false
    ): void {
        if (
            (!this.layerControlAvailable(LayerControl.Visibility) ||
                this._loadCancelled) &&
            !forceUpdate
        ) {
            return;
        }
        super.toggleVisibility(visible, updateParent);

        // LayerItem additionally deals with symbology and layers
        if (this.layer && this.layer.layerExists) {
            this.layer.visibility = this.visibility;

            // check child symobls for visibility
            const someVisible = this._symbologyStack.some(
                (item: LegendSymbology) => item.lastVisbility
            );

            this._symbologyStack.forEach((item: LegendSymbology) => {
                if (!someVisible) {
                    // if no symbols are visible and we toggled the parent layer on
                    // then set all the child symbols to visible
                    item.lastVisbility = true;
                }
                item.visibility = this.visibility ? item.lastVisbility : false;
            });
        }
    }

    /**
     * Toggles the symbology expand and returns the new value
     *
     * @param {boolean} expanded optional parameter to toggle expanded to a certain value
     */
    toggleSymbology(expanded?: boolean | undefined): boolean {
        this._symbologyExpanded = expanded ?? !this._symbologyExpanded;
        return this._symbologyExpanded;
    }

    /**
     * Sets the visibility of the symbology with the given uid
     * If the provided UID is undefined, set the visibility of all symbols
     *
     * @param {uid | undefined} uid the uid of the legend symbology
     * @param visible The new visibility value
     */
    setSymbologyVisibility(uid: string | undefined, visible: boolean): void {
        this._symbologyStack.some((item: LegendSymbology) => {
            if (uid === undefined || item.uid === uid) {
                item.visibility = visible;
                item.lastVisbility = visible;
            }
            return uid !== undefined && item.uid === uid;
        });
    }

    /**
     * Have the item adapt and update to the given layer as it loads.
     * Is either called in the constructor, or through the legend api
     *
     * @param {LayerInstance | undefined} layer the layer to load. If undefined, layer will be fetched via instance API using id/uid.
     */
    // TS complaining as usual. Can maybe remove the parameter and expect caller to set the layer first?
    // @ts-ignore
    load(layer: LayerInstance | undefined) {
        if (layer) {
            this._layer =
                layer instanceof LayerInstance
                    ? layer
                    : this.$iApi.geo.layer.getLayer(
                          this._layerId ?? this._layerUid
                      );
            this.layer = layer;
            if (this._loadCancelled) {
                this.toggleVisibility(false, true, true);
                return;
            }
            this._layer
                ?.loadPromise()
                .then(() => {
                    if (
                        this._layer?.layerType === LayerType.MAPIMAGE &&
                        !this._layerIdx
                    ) {
                        this.error();
                        console.error(
                            `MapImageLayer has no sublayerIndex defined for layer: ${this._layerId}.`
                        );
                    } else {
                        this._layerInitVis =
                            typeof this._layerInitVis !== 'undefined'
                                ? this._visibility
                                : layer.visibility;
                        super.load();

                        // override layer item visibility in favour of layer visibility
                        // need to store layer's initial visibility, otherwise it will get lost in the toggling from
                        // visibility rule checking
                        this.toggleVisibility(this._layerInitVis, true, true);
                        if (!layer.visibility) {
                            // if the layer is invisible, set all child symbols to invisible
                            this.setSymbologyVisibility(undefined, false);
                        }
                    }

                    // event listener must be added after the layer is loaded
                    this.handlers.push(
                        this.$iApi.event.on(
                            GlobalEvents.LAYER_VISIBILITYCHANGE,
                            (updatedLayer: any) => {
                                if (
                                    updatedLayer.layer.uid === this.layer.uid &&
                                    this._type === LegendType.Item
                                ) {
                                    this.toggleVisibility(
                                        updatedLayer.visibility,
                                        true,
                                        true
                                    );
                                }
                            }
                        )
                    );

                    this.handlers.push(
                        this.$iApi.event.on(
                            GlobalEvents.LAYER_DRAWSTATECHANGE,
                            (payload: {
                                layer: LayerInstance;
                                state: string;
                            }) => {
                                if (this.layer.uid === payload.layer.uid) {
                                    if (
                                        payload.layer.drawState ===
                                        DrawState.REFRESH
                                    ) {
                                        // if layer is redrawing, turn on the indicator right away
                                        this.layerRedrawing = true;
                                    } else {
                                        // wait for a short duration and check draw state again
                                        setTimeout(() => {
                                            // check draw state again
                                            this.layerRedrawing =
                                                payload.layer.drawState ===
                                                DrawState.REFRESH;
                                        }, 500);
                                    }
                                }
                            }
                        )
                    );

                    this._layerOffscale = this.$iApi.geo.map.created
                        ? this.layer?.isOffscale()
                        : false;
                    this.handlers.push(
                        this.$iApi.event.on(
                            GlobalEvents.MAP_SCALECHANGE,
                            () => {
                                // reason for this check is the scale likes to fire during a reprojection,
                                // and if race condition aligns the map view will not exists (as the reprojected
                                // view is getting built) when the offscale check is requested, causing a ruckus.
                                if (this.$iApi.geo.map.created) {
                                    this._layerOffscale =
                                        this.layer?.isOffscale();
                                }
                            }
                        )
                    );
                })
                .catch(() => {
                    this.error();
                });
        }
    }

    error(): void {
        this.updateLayerControls();
        super.error();
        this.toggleVisibility(false, true, true);
    }

    /**
     * Check if a control is available for the layer item.
     *
     * @param {LayerControl} control name of the control
     * @return {boolean} Indicates if control is enabled on this legend item or layer
     */
    layerControlAvailable(control: LayerControl): boolean {
        return this._layerDisabledControls?.includes(control)
            ? false
            : !!this._layerControls?.includes(control);
    }

    // Update layer controls and disabled controls for this layer item.
    updateLayerControls() {
        const cont =
            this.$iApi.geo.layer.getLayerControls(this.layerId) ??
            this.$iApi.geo.layer.getLayerControls(this.parentLayerId ?? '');
        if (!this._origLayerControls) {
            this._layerControls = cont?.controls ?? [];
        }
        if (!this._origLayerDisabledControls) {
            this._layerDisabledControls = cont?.disabledControls ?? [];
        }
    }
}
