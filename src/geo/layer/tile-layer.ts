import { CommonTileLayer, InstanceAPI } from '@/api/internal';
import { LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { EsriAPI } from '@/geo/esri';
import type { EsriTileLayer } from '@/geo/esri';
import { markRaw } from 'vue';

/**
 * A layer class which implements an ESRI Tile Layer.
 */
export class TileLayer extends CommonTileLayer {
    declare esriLayer: EsriTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        this.layerType = LayerType.TILE;
        this.layerFormat = LayerFormat.TILE;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(await EsriAPI.TileLayer(this.makeEsriLayerConfig(this.origRampConfig)));
        await super.onInitiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.TileLayerProperties {
        const esriConfig: __esri.TileLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    protected onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();
        const startTime = Date.now();

        const legendPromise = this.$iApi.geo.symbology
            .mapServerToLocalLegend(this.origRampConfig.url!)
            .then(legArray => {
                if (startTime > this.lastCancel) {
                    this.legend = legArray;
                }
            });

        loadPromises.push(legendPromise);

        return loadPromises;
    }
}
