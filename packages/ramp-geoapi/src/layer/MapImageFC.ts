// TODO add proper comments

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import AttribFC from './AttribFC';

export default class MapImageFC extends AttribFC {

    protected innerSubLayer: esri.Sublayer;

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {
        super(infoBundle, parent, layerIdx);
        this.innerSubLayer = (<esri.MapImageLayer>this.parentLayer.innerLayer).allSublayers.find((s: esri.Sublayer) => {
            return s.id === layerIdx;
        });
    }

    /**
     * Returns the visibility of the feature class.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the feature class
     */
    getVisibility (): boolean {
        return this.innerSubLayer.visible;
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    setVisibility (value: boolean): void {
        this.innerSubLayer.visible = value;
    }

    /**
     * Returns the opacity of the feature class.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the feature class
     */
    getOpacity (): number {
        return this.innerSubLayer.opacity;
    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    setOpacity (value: number): void {
        // TODO should we make warning check on parent.isDynamic? currently parent code should manage this
        this.innerSubLayer.opacity = value;
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter (exclusions: Array<string> = []): void {
        // TODO possibly check against this FC being a Raster Layer sublayer

        const sql = this.filter.getCombinedSql(exclusions);
        this.innerSubLayer.definitionExpression = sql;
    }

}