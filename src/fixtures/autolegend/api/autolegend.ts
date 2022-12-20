import { FixtureInstance } from '@/api/internal';
import type { LegendAPI } from '@/fixtures/legend/api/legend';
import type { RampLayerConfig } from '@/geo/api';
import { LayerStore } from '@/store/modules/layer';

export class AutolegendAPI extends FixtureInstance {
    /**
     * Parses the layers config and creates a layer item in the legend for each layer.
     */
    addLayerItems() {
        // adds legend fixture if not added, does nothing otherwise. fake
        const legendApi = this.$iApi.fixture.get<LegendAPI>('legend');

        // make a layer item for each layer in layers config.
        const layersConfig: RampLayerConfig[] =
            this.$vApp.$store.get(LayerStore.layerConfigs) ?? [];
        layersConfig.forEach((lc: RampLayerConfig) => {
            const itemConfig = {
                layerId: lc.id,
                name: lc.name,
                layerControls: lc.controls,
                disabledLayerControls: lc.disabledControls,
                expanded: false
            };
            legendApi.addItem(itemConfig);
        });

        // update the legend for all layers that currently exist
        // other layers will be updated layer via the event API
        this.$iApi.geo.layer.allLayers().forEach(l => {
            legendApi.updateLegend(l);
        });
        this.$iApi.geo.layer.allErrorLayers().forEach(l => {
            legendApi.updateLegend(l);
        });
    }
}
