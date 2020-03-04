// TODO add proper comments

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import AttribFC from './AttribFC';

export default class FeatureFC extends AttribFC {

    tooltipField: string;

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {
        super(infoBundle, parent, layerIdx);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter (exclusions: Array<string> = []): void {
        // note DynamicFC will override this function to handle the dynamic layer case

        const sql = this.filter.getCombinedSql(exclusions);
        // feature layer on a server
        (<esri.FeatureLayer>this.parentLayer.innerLayer).definitionExpression = sql;
    }

}