// TODO add proper comments

import { CommonFC, CommonLayer, InstanceAPI } from '@/api/internal';
import { LayerType, RampLayerConfig, TreeNode } from '@/geo/api';
import { EsriTileLayer } from '@/geo/esri';

class TileLayer extends CommonLayer {
    esriLayer: EsriTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;
        this._layerType = LayerType.TILE;
    }

    async initiate(): Promise<void> {
        this.esriLayer = new EsriTileLayer(
            this.makeEsriLayerConfig(this.origRampConfig)
        );
        await super.initiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(
        rampLayerConfig: RampLayerConfig
    ): __esri.TileLayerProperties {
        // TODO flush out
        const esriConfig: __esri.TileLayerProperties = super.makeEsriLayerConfig(
            rampLayerConfig
        );

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        const tileFC = new CommonFC(this, 0);
        this.fcs[0] = tileFC;

        this.layerTree?.children.push(new TreeNode(0, tileFC.uid, this.name));

        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        const legendPromise = this.$iApi.geo.utils.symbology
            .mapServerToLocalLegend(this.origRampConfig.url)
            .then(legArray => {
                tileFC.legend = legArray;
            });

        loadPromises.push(legendPromise);

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }
}

export default TileLayer;
