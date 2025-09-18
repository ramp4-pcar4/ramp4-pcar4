import { CommonTileLayer, InstanceAPI } from '@/api/internal';
import { LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { EsriAPI } from '@/geo/esri';
import type { EsriVectorTileLayer } from '@/geo/esri';
import { markRaw } from 'vue';

/**
 * A layer class which implements an ESRI Vector Tile Layer.
 */
export class VectorTileLayer extends CommonTileLayer {
    declare esriLayer: EsriVectorTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        this.layerType = LayerType.VECTORTILE;
        this.layerFormat = LayerFormat.VECTORTILE;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(await EsriAPI.VectorTileLayer(this.makeEsriLayerConfig(this.origRampConfig)));
        await super.onInitiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.VectorTileLayerProperties {
        const esriConfig: __esri.TileLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    // Note: the samples seen so far are hosted on tiles.arcgis.com, not a typical ArcGis Server. The endpoints
    //       don't appear to expose legends, so no legend grabbing in onLoadActions here
}
