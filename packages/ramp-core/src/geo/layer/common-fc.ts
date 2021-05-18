// put things here that would be common to all FCs
// used for layer types defined by Core RAMP.

// TODO add proper comments
import { CommonLayer } from '@/api/internal';
import { DataFormat, LegendSymbology, ScaleSet } from '@/geo/api';

// TODO decide if this needs APIScope base or not. Since we have reference to parent layer, could grab via that.
export class CommonFC {
    protected parentLayer: CommonLayer;
    dataFormat: DataFormat;
    layerIdx: number; // final name TBD
    name: string;
    uid: string;
    scaleSet: ScaleSet;
    supportsFeatures: boolean;

    // TODO old ramp stored this in same structure as arcgis server i.e. legend.layer[idx].legend[]
    //      not really seeing a reason to keep the outer structure. if we find we need it, can change back or to something better
    legend: Array<LegendSymbology>;

    constructor(parent: CommonLayer, layerIdx: number = 0) {
        this.parentLayer = parent;
        this.layerIdx = layerIdx;
        this.uid = this.parentLayer.bestUid(layerIdx);
        this.name = '';
        this.scaleSet = new ScaleSet();
        this.supportsFeatures = false; // default state. featurish layers should set to true when the load
        this.legend = [];
        this.dataFormat = DataFormat.UNKNOWN;
    }

    protected noLayerErr(): void {
        console.error('Attempted to manipulate the layer before it was generated');
    }

    /**
     * Returns the visibility of the feature class.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the feature class
     */
    getVisibility(): boolean {
        // basic case - fc vis === layer vis
        if (this.parentLayer.esriLayer) {
            return this.parentLayer.esriLayer.visible;
        } else {
            this.noLayerErr();
            return false; // default to chill things.
        }
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    setVisibility(value: boolean): void {
        // basic case - set layer visibility
        if (this.parentLayer.esriLayer) {
            this.parentLayer.esriLayer.visible = value;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Returns the opacity of the feature class.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the feature class
     */
    getOpacity(): number {
        // basic case - fc opac === layer opac
        if (this.parentLayer.esriLayer) {
            return this.parentLayer.esriLayer.opacity;
        } else {
            this.noLayerErr();
            return 1; // default to chill things.
        }
    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    setOpacity(value: number): void {
        // basic case - set layer opacity
        if (this.parentLayer.esriLayer) {
            this.parentLayer.esriLayer.opacity = value;
        } else {
            this.noLayerErr();
        }
    }
}
