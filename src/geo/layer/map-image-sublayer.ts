import { AttribLayer, InstanceAPI, type MapImageLayer } from '@/api/internal';
import { DataFormat, InitiationState, LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { markRaw } from 'vue';

export class MapImageSublayer extends AttribLayer {
    tooltipField: string;

    constructor(
        config: any,
        $iApi: InstanceAPI,
        parent: MapImageLayer,
        layerIdx = 0
    ) {
        super(config as RampLayerConfig, $iApi);

        this.layerType = LayerType.SUBLAYER;
        this.layerFormat = LayerFormat.MAPIMAGE;
        this.isSublayer = true;
        this.layerIdx = layerIdx;
        this.parentLayer = parent;

        this.dataFormat = DataFormat.ESRI_FEATURE; // this will get flipped to raster during the server metadata checks if needed
        this.tooltipField = '';
        this.hovertips = false;

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
        // For now we just set initiation state to initiated
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
}
