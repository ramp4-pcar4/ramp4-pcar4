import { AttribLayer, InstanceAPI } from '@/api/internal';
import {
    DataFormat,
    LayerType,
    RampLayerConfig,
    RampLayerStateConfig,
    TreeNode
} from '@/geo/api';
import MapImageLayer from './index';
import { markRaw } from 'vue';

export class MapImageSublayer extends AttribLayer {
    tooltipField: string;

    constructor(
        config: { layerType: string; state?: RampLayerStateConfig },
        $iApi: InstanceAPI,
        parent: MapImageLayer,
        layerIdx: number = 0
    ) {
        super(config as RampLayerConfig, $iApi);

        this.layerType = LayerType.SUBLAYER;
        this.isSublayer = true;
        this.layerIdx = layerIdx;
        this.parentLayer = parent;
        this.id = `${parent.id}-${layerIdx}`;

        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';

        if (!parent.esriLayer) {
            throw new Error(
                'Map Image Layer with no internal esri layer encountered in sublayer creation'
            );
        }

        this.fetchEsriSublayer(parent);
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
    async initiate(): Promise<void> {
        // For now we just set initialized to true
        this.initialized = true;
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        this.parentLayer?.reload();
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
     * Get the click tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the click tolerance of the parent layer
     */
    get clickTolerance(): number {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return 0;
        }

        return this.parentLayer.clickTolerance;
    }

    /**
     * Set the click tolerance for this sublayer's parent layer in pixels
     *
     * @param {number} tolerance the new click tolerance
     */
    set clickTolerance(tolerance: number) {
        if (!this.parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }

        this.parentLayer.clickTolerance = tolerance;
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
