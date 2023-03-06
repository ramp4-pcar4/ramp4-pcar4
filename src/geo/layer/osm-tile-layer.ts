import { CommonLayer, InstanceAPI } from '@/api/internal';
import { DataFormat, LayerFormat, LayerType } from '@/geo/api';

import type { LegendSymbology, RampLayerConfig } from '@/geo/api';

import { EsriOpenStreetMapLayer } from '@/geo/esri';
import { markRaw } from 'vue';

export class OsmTileLayer extends CommonLayer {
    declare esriLayer: EsriOpenStreetMapLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;
        this.layerType = LayerType.OSM;
        this.layerFormat = LayerFormat.OSM;
        this.dataFormat = DataFormat.OSM_TILE;
        this.supportsFeatures = false;
        this.hovertips = false;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(
            new EsriOpenStreetMapLayer(
                this.makeEsriLayerConfig(this.origRampConfig)
            )
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
    ): __esri.OpenStreetMapLayerProperties {
        const esriConfig: __esri.OpenStreetMapLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

        // TODO remove .url from object? should be empty string coming in.

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

        // what is appropriate legend? The default empty array?
        // OSM is not arcgis so no legend rest endpoint to scrape.
        // and if they host their own it's likely massive with all the possible symbols.
        // Right now you see nothing in the spot to the left of the layer name.
        // Maybe we hardcode the OSM icon? It is a map with a magnifying glass,
        // which might be confusing as it will look like a search icon.
        // For now, just using a default "O".  The odds of OSM being an active
        // layer in the legend is pretty low, and a config can override the symbol I believe.

        const legGuts = this.$iApi.geo.symbology.generatePlaceholderSymbology(
            'O',
            '#03fc4e'
        );
        const symbologyItem: LegendSymbology = {
            uid: this.$iApi.geo.shared.generateUUID(),
            label: 'OpenStreetMap', // product name, same in Fr
            svgcode: legGuts.svgcode,
            esriStandard: true,
            drawPromise: Promise.resolve()
        };
        this.legend.push(symbologyItem);

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }
}
