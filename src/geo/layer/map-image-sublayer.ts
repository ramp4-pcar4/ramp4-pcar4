import { AttribLayer, InstanceAPI, type MapImageLayer } from '@/api/internal';
import {
    DataFormat,
    InitiationState,
    LayerFormat,
    LayerType,
    SpatialReference
} from '@/geo/api';
import type {
    RampLayerConfig,
    RampLayerMapImageSublayerConfig
} from '@/geo/api';
import { markRaw } from 'vue';

const lblVizMsg = 'Accessed labelVisibility prior to layer being loaded';

/**
 * A layer class which implements an ESRI Map Image Sublayer.
 */
export class MapImageSublayer extends AttribLayer {
    tooltipField: string;

    constructor(
        config: RampLayerMapImageSublayerConfig,
        $iApi: InstanceAPI,
        parent: MapImageLayer
    ) {
        // unknown is to force a narrower interface into the more common layer interface.
        super(config as unknown as RampLayerConfig, $iApi);

        this.layerType = LayerType.SUBLAYER;
        this.layerFormat = LayerFormat.MAPIMAGE;
        this.isSublayer = true;
        this.layerIdx = config.index;
        this.parentLayer = parent;

        this.dataFormat = DataFormat.ESRI_FEATURE; // this will get flipped to raster during the server metadata checks if needed
        this.tooltipField = '';
        this.hovertips = false;
        this.url = this.parentLayer?.url;
        this.canReload = !!(this.url || this.origRampConfig.caching);

        if (!parent.esriLayer) {
            throw new Error(
                'Map Image Layer with no internal esri layer encountered in sublayer creation'
            );
        }

        this.fetchEsriSublayer(parent);

        // force-apply any active filters now to avoid stuff we don't want from drawing on the map
        if (config.initialFilteredQuery || config.permanentFilteredQuery) {
            this.applySqlFilter();
        }
    }

    /**
     * Set the ESRI sublayer using the parent's sublayer list
     *
     * @param {MapImageLayer} parent: Parent MapImageLayer object
     */
    fetchEsriSublayer(parent: MapImageLayer): void {
        if (!parent.esriLayer) {
            console.error(
                'Attempted to fetch the ESRI sublayer when parent has no ESRI layer'
            );
            return;
        }

        // not found check? - unlikely to happen but how do we handle that?
        this.esriSubLayer = markRaw(
            parent.esriLayer.allSublayers.find(s => {
                return s.id === this.layerIdx;
            })
        );
    }

    /**
     * Load actions for a MapImage sublayer
     */
    onLoadActions(): Array<Promise<void>> {
        // Note we do not call super.onLoadActions, which you would see happen in
        //      every other layer. We don't want to wire up the standard "top level"
        //      layer stuff for sublayers.

        // use the tree node created by the parent
        this.layerTree = this.parentLayer!.getLayerTree().findChildByUid(
            this.uid
        )!;
        this.layerTree.name = this.name;
        this.layerTree.layerIdx = this.layerIdx;

        this.identify = !(this.config.state.identify == undefined)
            ? this.config.state.identify
            : this.supportsIdentify;

        return [];
    }

    /**
     * Initiate this sublayer
     *
     * This is called after the parent layer is initiated
     */
    protected async onInitiate(): Promise<void> {
        // initiate gets called from the MapImageLayer.onLoadActions
        // anything that needs to be set prior to the layer doing its initial draw should be done here.
        // this.esriSublayer will be set by the time this call runs.

        // see if any config stuff is overriding labels
        const vizOverr = this.labelVizOverride();
        if (vizOverr !== undefined) {
            this.labelVisibility = vizOverr;
        }

        this.initiationState = InitiationState.INITIATED; // hardcoding this one because we don't want event API to fire here
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        this.parentLayer?.reload();
    }

    /**
     * Indicates if the Esri map sublayer and the parent's Esri map layer exist.
     */
    get layerExists(): boolean {
        return this.parentLayer?.esriLayer && this.esriSubLayer ? true : false;
    }

    /**
     * Returns the visibility of the sublayer.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the sublayer
     */
    get visibility(): boolean {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return false;
        }

        return this.esriSubLayer.visible;
    }

    /**
     * Applies visibility to sublayer.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }
        this.esriSubLayer.visible = value;
    }

    /**
     * Returns the opacity of the sublayer.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the sublayer
     */
    get opacity(): number {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return 0;
        }
        return this.esriSubLayer.opacity;
    }

    /**
     * Applies opacity to sublayer.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number) {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }
        if (!(this.parentLayer as MapImageLayer).isDynamic) {
            console.warn(
                `Opacity of a Map Image Sublayer was set. The service does not support sublayer opacity. LayerId ${this.id}`
            );
        }
        this.esriSubLayer.opacity = value;
    }

    /**
     * Get the mouse tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the mouse tolerance of the parent layer
     */
    get mouseTolerance(): number {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return 0;
        }

        return this.parentLayer.mouseTolerance;
    }

    /**
     * Set the mouse tolerance for this sublayer's parent layer in pixels
     *
     * @param {number} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number) {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }

        this.parentLayer.mouseTolerance = tolerance;
    }

    /**
     * Get the touch tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the touch tolerance of the parent layer
     */
    get touchTolerance(): number {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return 0;
        }

        return this.parentLayer.touchTolerance;
    }

    /**
     * Set the touch tolerance in pixels for this sublayer's parent layer
     *
     * @param {number} tolerance the new touch tolerance of the parent layer
     */
    set touchTolerance(tolerance: number) {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }

        this.parentLayer.touchTolerance = tolerance;
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }

        // TODO possibly check against this sublayer being a Raster Layer sublayer
        const sql = this.filter.getCombinedSql(exclusions);
        this.esriSubLayer.definitionExpression = sql;
    }

    /**
     * Provides the spatial reference of the parent MIL.
     *
     * @returns {SpatialReference} the layer spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this.parentLayer?.esriLayer) {
            return SpatialReference.fromESRI(
                (<any>this._parentLayer?.esriLayer)?.spatialReference!
            );
        } else {
            this.noLayerErr();
            return SpatialReference.latLongSR();
        }
    }

    /**
     * A utility method to allow a parent layer to request this layer to
     * update its internal attribute loader after field data has been
     * properly processed.
     * Generally should only be called internally.
     */
    updateFieldList(): void {
        this.attribs.attLoader.updateFieldList(this.fieldList);
    }

    /**
     * A utility method to allow a parent layer to request this layer to
     * update its fields to be trimmed after field data is processed.
     * Generally should only be called internally.
     */
    updateFieldsToTrim(): void {
        this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim());
    }

    /**
     * Visibility of labels on this layer
     */
    get labelVisibility(): boolean {
        if (this.esriSubLayer) {
            return this.esriSubLayer.labelsVisible;
        } else {
            // should only happen if called prior to layer load.
            // we have nothing in RAMP using this, its just for API respect
            console.error(lblVizMsg);
            return false;
        }
    }

    set labelVisibility(val: boolean) {
        if (this.esriSubLayer) {
            this.esriSubLayer.labelsVisible = val;
        } else {
            // should only happen if called prior to layer load.
            // the only call in RAMP core does that check. Message is just
            // for API respect
            console.error(lblVizMsg);
        }
    }

    /**
     * Does any config override calculating for label visibility.
     *
     * @private
     * @returns {boolean | undefined} undefined if no overrides, otherwise the override value
     */
    protected labelVizOverride(): boolean | undefined {
        // NOTE if we start getting label magic on other layers, migrate this method to MapLayer class

        // layer specific config has first priority.
        let val = this.origRampConfig.labels?.visible;
        if (val !== undefined) {
            return val;
        }

        // map level override has second priority
        val = this.$iApi.geo.map.labelsDefault?.visible;
        if (val !== undefined) {
            return val;
        }

        // at this point, no config fun, so defer to service
        return undefined;
    }
}
