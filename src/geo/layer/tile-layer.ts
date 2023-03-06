import { CommonLayer, InstanceAPI } from '@/api/internal';
import { DataFormat, LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { EsriTileLayer } from '@/geo/esri';
import { markRaw } from 'vue';

export class TileLayer extends CommonLayer {
    declare esriLayer: EsriTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;
        this.hovertips = false;
        this.layerType = LayerType.TILE;
        this.layerFormat = LayerFormat.TILE;
        this.dataFormat = DataFormat.ESRI_TILE;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(
            new EsriTileLayer(this.makeEsriLayerConfig(this.origRampConfig))
        );
        await super.onInitiate();
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
        const esriConfig: __esri.TileLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        this.layerTree.name = this.name;

        const legendPromise = this.$iApi.geo.symbology
            .mapServerToLocalLegend(this.origRampConfig.url!)
            .then(legArray => {
                this.legend = legArray;
            });

        loadPromises.push(legendPromise);

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }
}
