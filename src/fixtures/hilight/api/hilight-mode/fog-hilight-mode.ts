import { GlobalEvents, TileLayer, type InstanceAPI } from '@/api';
import { LayerType, type Graphic, type RampBasemapConfig } from '@/geo/api';
import { ConfigStore } from '@/store/modules/config';
import { FOG_HILIGHT_LAYER_NAME } from '../hilight-defs';
import { LiftHilightMode } from './lift-hilight-mode';

export class FogHilightMode extends LiftHilightMode {
    handlers: Array<string> = [];

    constructor(config: any, iApi: InstanceAPI) {
        super(config, iApi);

        this.hilightSetup();

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, () => {
                const hilightLayer = this.getHilightLayer();
                if (hilightLayer && hilightLayer.graphics.length == 0) {
                    // if the highlighter is currently "off", update the basemap
                    // if the highlighter is "on", then details (or whatever is using the hilighter) will handle this event
                    this.updateFogLayer();
                }
            })
        );
    }

    private async hilightSetup() {
        const mapConfig: RampBasemapConfig = this.$iApi.$vApp.$store.get(
            ConfigStore.getActiveBasemapConfig
        )! as RampBasemapConfig;

        const fogLayer = await this.$iApi.geo.layer.createLayer({
            id: FOG_HILIGHT_LAYER_NAME,
            layerType: LayerType.TILE,
            cosmetic: true,
            // TODO: what if there's more than 1 URL provided?
            url: mapConfig.layers[0].url
        });

        await this.$iApi.geo.map.addLayer(fogLayer);
        // off
        fogLayer.opacity = 0.01;

        this.reorderFogLayer();
    }

    private async updateFogLayer() {
        this.$iApi.geo.map.removeLayer(FOG_HILIGHT_LAYER_NAME);
        await this.hilightSetup();
    }

    private reorderFogLayer() {
        const fogLayer = this.getFogLayer();
        const hilightLayer = this.getHilightLayer();
        if (!hilightLayer || !fogLayer) {
            return;
        }

        const layers = this.$iApi.geo.layer.allLayers();
        const fogIdx: number = layers.indexOf(fogLayer);
        const hilightIdx: number = layers.indexOf(hilightLayer);

        if (hilightIdx < fogIdx) {
            this.$iApi.geo.map.reorder(hilightLayer, fogIdx + 1, false);
        }
    }

    /**
     * Adds the given graphics to the hilight layer.
     */
    async add(graphics: Array<Graphic>) {
        // turn the fog "on"
        const fogLayer = this.getFogLayer();
        if (!fogLayer) {
            return;
        }
        fogLayer.opacity = 0.75;

        // add the given graphics to the layer
        await super.add(graphics);
    }

    /**
     * Removes the given graphics from the hilight layer.
     */
    async remove(graphics?: Array<Graphic>) {
        // remove the given graphics from the layer
        await super.remove(graphics);

        // turn the fog "off"
        const fogLayer = this.getFogLayer();
        if (!fogLayer) {
            return;
        }
        fogLayer.opacity = 0.01;
    }

    async reloadHilight(graphics: Array<Graphic>) {
        await this.updateFogLayer();
        await super.reloadHilight(graphics);
    }

    /**
     * Returns the Hilight layer.
     */
    private getFogLayer(): TileLayer | undefined {
        const hilightLayer = this.$iApi.geo.layer.getLayer(
            FOG_HILIGHT_LAYER_NAME
        );
        if (hilightLayer && hilightLayer instanceof TileLayer) {
            return hilightLayer;
        } else {
            console.warn('Hilight fog layer could not be fetched.');
            return undefined;
        }
    }
}
