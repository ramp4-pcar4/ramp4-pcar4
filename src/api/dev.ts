import { APIScope, InstanceAPI, LayerInstance } from '@/api/internal';
import type { RampLayerConfig } from '@/geo/api';
import type { LegendAPI } from '@/fixtures/legend/api/legend';

/**
 * Contains endpoints useful for dev debugging and such
 */
export class DevAPI extends APIScope {
    constructor(iApi: InstanceAPI) {
        super(iApi);
    }

    /**
     * Add a layer to the map and legend (if legend exists)
     *
     * @param layerConfig a RAMP layer configuration object
     * @param [legendConfig] optional legend block configuration object. If not provided, a default layer block will be created
     * @returns resolves with the layer instance
     */
    async easyLayer(layerConfig: RampLayerConfig, legendConfig?: any): Promise<LayerInstance> {
        // create layer, add to map
        const layer = this.$iApi.geo.layer.createLayer(layerConfig);
        await this.$iApi.geo.map.addLayer(layer);

        const legendFixture = this.$iApi.fixture.get<LegendAPI>('legend');
        if (legendFixture) {
            if (legendConfig) {
                // add our desired legend block
                legendFixture.addItem(legendConfig);
            } else {
                // use the "wizard" style legend block creator
                await legendFixture.addLayerItem(layer);
            }
        }

        return layer;
    }
}
