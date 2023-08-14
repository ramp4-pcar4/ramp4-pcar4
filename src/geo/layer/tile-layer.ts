import { InstanceAPI, MapLayer, NotificationType } from '@/api/internal';
import { DataFormat, LayerFormat, LayerType, LayerState } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { EsriTileLayer } from '@/geo/esri';
import { markRaw } from 'vue';

/**
 * A layer class which implements an ESRI Tile Layer.
 */
export class TileLayer extends MapLayer {
    declare esriLayer: EsriTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;

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

        loadPromises.push(this.checkProj());

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

    /**
     * Check if the layer's projection matches the current basemap's.
     * If they do not match the layer will enter the error state and the user will receive a warning notification
     * If they layers do match and the layer was previously in the error state, it will reload.
     */
    checkProj(): Promise<void> {
        const layerSR = this.getSR();
        const mapSR = this.$iApi.geo.map.getSR();
        const isEqual = mapSR.isEqual(layerSR);

        // If the layer is loaded and the projections do not match, it will enter the error state
        if (this.layerState === LayerState.LOADED && !isEqual) {
            this.$iApi.notify.show(
                NotificationType.WARNING,
                this.$iApi.$i18n.t('layer.mismatch', {
                    name: this.name || this.id
                })
            );

            this.onError();
            // If the layer has errored and the projections now match, reload the layer
        } else if (this.layerState === LayerState.ERROR && isEqual) {
            this.reload();
            // Reject the promise if the layer has not errored and the projections do not match
        } else if (this.layerState !== LayerState.ERROR && !isEqual) {
            this.$iApi.notify.show(
                NotificationType.WARNING,
                this.$iApi.$i18n.t('layer.mismatch', {
                    name: this.name || this.id
                })
            );

            return Promise.reject();
        }

        return Promise.resolve();
    }
}
