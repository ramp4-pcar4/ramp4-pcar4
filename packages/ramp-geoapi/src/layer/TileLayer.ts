// TODO add proper comments

import esri = __esri;
import { InfoBundle, RampLayerConfig, } from '../gapiTypes';
import { LayerType } from '../api/apiDefs';
import BaseLayer from './BaseLayer';
import BaseFC from './BaseFC';
import TreeNode from './TreeNode';

export class TileLayer extends BaseLayer {

    _innerLayer: esri.TileLayer;

    constructor (infoBundle: InfoBundle, config: RampLayerConfig, reloadTree?: TreeNode) {
        super(infoBundle, config, reloadTree);
        this.supportsIdentify = false;
        this._layerType = LayerType.TILE;


        this._innerLayer = new this.esriBundle.TileLayer(this.makeEsriLayerConfig(config));
        this.initLayer();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): esri.TileLayerProperties {
        // TODO flush out
        const esriConfig: esri.TileLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions (): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        const tileFC = new BaseFC(this.infoBundle(), this, 0);
        this.fcs[0] = tileFC;

        this.layerTree.children.push(new TreeNode(0, tileFC.uid, this.name));

        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        const legendPromise = this.gapi.utils.symbology.mapServerToLocalLegend(this.origRampConfig.url).then(legArray => {
            tileFC.legend = legArray;
        });

        loadPromises.push(legendPromise);

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

}

export default TileLayer;