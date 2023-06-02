import { CommonLayer, InstanceAPI, NotificationType } from '@/api/internal';
import { DataFormat, LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { EsriTileLayer } from '@/geo/esri';
import { SpatialReference } from '@/geo/api';
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

        this.checkProj();

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

    /**
     * Check if the layer's projection matches the current basemap's.
     * If it does not match, grouse in the notifications.
     */
    checkProj(): void {
        const layerSR = SpatialReference.fromESRI(
            this.esriLayer?.spatialReference!
        );
        const mapSR = this.$iApi.geo.map.getSR();

        if (!mapSR.isEqual(layerSR)) {
            this.$iApi.notify.show(
                NotificationType.WARNING,
                this.$iApi.$i18n.t('layer.mismatch', { id: this.id })
            );
        }
    }
}
