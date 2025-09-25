import { InstanceAPI, MapLayer } from '@/api/internal';
import { DataFormat, LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import type { EsriImageryTileLayer } from '@/geo/esri';
import { EsriAPI } from '@/geo/esri';
import { markRaw } from 'vue';

/**
 * A layer class which implements an ESRI ImageryTile Layer.
 */
export class ImageryTileLayer extends MapLayer {
    declare esriLayer: EsriImageryTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;
        this.layerType = LayerType.IMAGERYTILE;
        this.layerFormat = LayerFormat.IMAGERYTILE;
        this.dataFormat = DataFormat.ESRI_RASTER;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(await EsriAPI.ImageryTileLayer(this.makeEsriLayerConfig(this.origRampConfig)));
        await super.onInitiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.ImageryTileLayerProperties {
        const esriConfig: __esri.ImageryTileLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    protected onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        this.layerTree.name = this.name;

        return loadPromises;
    }
}
