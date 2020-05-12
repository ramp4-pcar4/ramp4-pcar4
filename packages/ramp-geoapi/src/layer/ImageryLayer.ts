// TODO add proper comments

import esri = __esri;
import { InfoBundle, RampLayerConfig, } from '../gapiTypes';
import { LayerType } from '../api/apiDefs';
import BaseLayer from './BaseLayer';
import BaseFC from './BaseFC';
import TreeNode from './TreeNode';

export class ImageryLayer extends BaseLayer {

    _innerLayer: esri.ImageryLayer;

    constructor (infoBundle: InfoBundle, config: RampLayerConfig, reloadTree?: TreeNode) {
        super(infoBundle, config, reloadTree);
        this.supportsIdentify = false;
        this._layerType = LayerType.IMAGERY;


        this._innerLayer = new this.esriBundle.ImageryLayer(this.makeEsriLayerConfig(config));
        this.initLayer();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): esri.ImageryLayerProperties {
        // TODO flush out
        const esriConfig: esri.ImageryLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions (): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        const imgFC = new BaseFC(this.infoBundle(), this, 0);
        this.fcs[0] = imgFC;

        this.layerTree.children.push(new TreeNode(0, imgFC.uid, this.name));

        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        const legendPromise = this.gapi.utils.symbology.mapServerToLocalLegend(this.origRampConfig.url).then(legArray => {
            imgFC.legend = legArray;
        });

        loadPromises.push(legendPromise);

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

}

export default ImageryLayer;