import { GlobalEvents, type InstanceAPI, TileLayer } from '@/api';
import { type Graphic, LayerType, type RampBasemapConfig } from '@/geo/api';
import { useConfigStore } from '@/stores/config';
import { FOG_HILIGHT_LAYER_NAME } from '../hilight-defs';
import { LiftHilightMode } from './lift-hilight-mode';

/**
 * Hilight mode that places a translucent tile beneath a graphics to make them
 * stand out from the rest of the map.
 */
export class FogHilightMode extends LiftHilightMode {
    handlers: Array<string> = [];
    // TODO: make these configurable later
    // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1353
    onOpacity: number;
    offOpacity: number;

    private lastAdd: number = 0;

    constructor(config: any, iApi: InstanceAPI) {
        super(config, iApi);
        this.onOpacity = config.options?.onOpacity ?? 0.75;
        this.offOpacity =
            config.options?.offOpacity > 0.02
                ? config.options.offOpacity
                : 0.02;

        if (this.$iApi.geo.map.created) {
            this.hilightSetup();
        } else {
            this.handlers.push(
                this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
                    this.hilightSetup();
                })
            );
        }

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, () => {
                this.getHilightLayer().then(hilightLayer => {
                    if (hilightLayer && hilightLayer.graphics.length === 0) {
                        // if the highlighter is currently "off", update the basemap
                        // if the highlighter is "on", then details (or whatever is using the hilighter) will handle this event
                        this.updateFogLayer();
                    }
                });
            })
        );
    }

    private async hilightSetup() {
        const mapConfig: RampBasemapConfig = useConfigStore(this.$vApp.$pinia)
            .activeBasemapConfig as RampBasemapConfig;
        try {
            const fogLayer = this.$iApi.geo.layer.createLayer({
                id: FOG_HILIGHT_LAYER_NAME,
                layerType: LayerType.TILE,
                cosmetic: true,
                // TODO: what if there's more than 1 URL provided?
                // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/1352
                url: mapConfig.layers[0].url
            });

            await this.$iApi.geo.map.addLayer(fogLayer);
            // off
            fogLayer.opacity = this.offOpacity;

            await this.reorderFogLayer();
        } catch {
            console.error(
                'Something went wrong while setting up the hilighter.'
            );
        }
    }

    private async updateFogLayer() {
        this.$iApi.geo.map.removeLayer(FOG_HILIGHT_LAYER_NAME);
        await this.hilightSetup();
    }

    private async reorderFogLayer() {
        const fogLayer = this.getFogLayer();
        const hilightLayer = await this.getHilightLayer();
        if (!hilightLayer || !fogLayer) {
            return;
        }

        const layerOrder = this.$iApi.geo.layer.layerOrderIds();
        const fogIdx = layerOrder.indexOf(fogLayer.id);
        const hilightIdx = layerOrder.indexOf(hilightLayer.id);

        if (hilightIdx < fogIdx && hilightIdx > -1 && fogIdx > -1) {
            // No +1. Since highlight is below, fog will get pushed down
            // as things shift.
            this.$iApi.geo.map.reorder(hilightLayer, fogIdx, false);
        }
    }

    async add(graphics: Array<Graphic> | Graphic) {
        this.lastAdd = Date.now();

        // turn the fog "on"
        const fogLayer = this.getFogLayer();
        if (!fogLayer) {
            return;
        }
        fogLayer.opacity = this.onOpacity;

        // add the given graphics to the layer
        await super.add(graphics);
    }

    async remove(graphics?: Array<Graphic> | Graphic | undefined) {
        // remove the given graphics from the layer
        await super.remove(graphics);

        // NOTE: because details calls remove and add each time it does a hilight, there can be a flicker
        // when switching between items on the details panel (because the fog gets turned off then on again each time)
        // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1350

        // turn the fog "off"
        const fogLayer = this.getFogLayer();
        if (!fogLayer) {
            return;
        }

        // When we quickly go from highlighting one item to another, if it's the first time
        // highlighting we can have a delay if RAMP needs to fetch feature attribute data
        // from a map server. This can cause a "flicker" on the screen as the fog layer turns
        // off then turns back on again.
        // This timeout will give a small time buffer to give a new highlight a chance
        // to be requested. If we see that one was, we will not turn off and
        // simply wait for next add to finish.
        const lastRemove = Date.now();
        setTimeout(() => {
            if (this.lastAdd < lastRemove) {
                // nothing was added during the timeout, so we turn off the fog
                fogLayer.opacity = this.offOpacity;
            }
        }, 300);
    }

    async reloadHilight(graphics: Array<Graphic> | Graphic) {
        await this.updateFogLayer();
        await super.reloadHilight(graphics);
    }

    /**
     * Returns the "fog" tile layer.
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
