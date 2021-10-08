// TODO add proper comments

import { AttribFC } from '@/api/internal';
import { DataFormat } from '@/geo/api';
import MapImageLayer from './index';
import { markRaw } from 'vue';

export class MapImageFC extends AttribFC {
    // @ts-ignore
    protected parentLayer: MapImageLayer;
    protected esriSubLayer: __esri.Sublayer;
    tooltipField: string;

    constructor(parent: MapImageLayer, layerIdx: number = 0) {
        super(parent, layerIdx);
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';

        if (!parent.esriLayer) {
            throw new Error(
                'Map Image Layer with no internal esri layer encountered in FC creation'
            );
        }

        // TODO not found check?
        this.esriSubLayer = markRaw(
            parent.esriLayer.allSublayers.find(s => {
                return s.id === layerIdx;
            })
        );
    }

    /**
     * Returns the visibility of the feature class.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the feature class
     */
    getVisibility(): boolean {
        return this.esriSubLayer.visible;
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    setVisibility(value: boolean): void {
        // TODO we might need to trigger a sublayer visibilty event on the event api here.
        //      see comments in common-layer initialize()
        this.esriSubLayer.visible = value;
    }

    /**
     * Returns the opacity of the feature class.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the feature class
     */
    getOpacity(): number {
        return this.esriSubLayer.opacity;
    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    setOpacity(value: number): void {
        // TODO should we make warning check on parent.isDynamic? currently parent code should manage this
        this.esriSubLayer.opacity = value;
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this.parentLayer.esriLayer) {
            this.noLayerErr();
            return;
        }

        // TODO possibly check against this FC being a Raster Layer sublayer
        const sql = this.filter.getCombinedSql(exclusions);
        this.esriSubLayer.definitionExpression = sql;
    }
}
