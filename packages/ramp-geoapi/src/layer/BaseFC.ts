// put things here that would be common to all FCs
// TODO add proper comments

import esri = __esri;
import { InfoBundle, LegendSymbology } from '../gapiTypes';
import BaseBase from '../BaseBase';
import BaseLayer from './BaseLayer';
import ScaleSet from './ScaleSet';

export default class BaseFC extends BaseBase {

    protected parentLayer: BaseLayer;
    layerIdx: number; // final name TBD
    name: string;
    uid: string;
    scaleSet: ScaleSet;
    supportsFeatures: boolean;
    legend: Array<LegendSymbology>; // TODO old ramp stored this in same structure as arcgis server i.e. legend.layer[idx].legend[]
    //                                      not really seeing a reason to keep the outer structure. if we find we need it, can change back or to something better

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {

        super(infoBundle);
        this.parentLayer = parent;
        this.layerIdx = layerIdx;
        this.uid = this.parentLayer.bestUid(layerIdx);
        this.name = '';
        this.scaleSet = new ScaleSet();
        this.supportsFeatures = false; // default state. featurish layers should set to true when the load
        this.legend = [];
    }

    /**
     * Returns the visibility of the feature class.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the feature class
     */
    getVisibility (): boolean {
        // basic case - fc vis === layer vis
        return this.parentLayer._innerLayer.visible;
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    setVisibility (value: boolean): void {
        // basic case - set layer visibility
        this.parentLayer._innerLayer.visible = value;
    }

    /**
     * Returns the opacity of the feature class.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the feature class
     */
    getOpacity (): number {
        // basic case - fc opac === layer opac
        return this.parentLayer._innerLayer.opacity;
    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    setOpacity (value: number): void {
        // basic case - set layer opacity
        this.parentLayer._innerLayer.opacity = value;
    }

}