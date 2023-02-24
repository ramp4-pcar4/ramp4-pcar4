import { InstanceAPI, GraphicLayer, GlobalEvents } from '@/api';
import type { Graphic } from '@/geo/api';
import { HILIGHT_LAYER_NAME } from '../hilight-defs';
import { LiftHilightMode } from './lift-hilight-mode';

// This hilight mode uses the ESRI highlight to outline the given graphics, creating a "glow"
export class GlowHilightMode extends LiftHilightMode {
    handlers: Array<string> = [];

    constructor(config: any, iApi: InstanceAPI) {
        super(config, iApi);

        this.hilightSetup(config);

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
                this.hilightSetup(config);
            })
        );
    }

    private hilightSetup(config: any) {
        this.$iApi.geo.map.viewPromise.then(() => {
            this.$iApi.geo.map.esriView!.highlightOptions = config.options;
        });
    }

    /**
     * Adds the given graphics to the hilight layer.
     */
    async add(graphics: Array<Graphic>) {
        // add the given graphics to the layer
        await super.add(graphics);

        // apply the esri highlight to the graphics
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        if (
            hilightLayer &&
            hilightLayer.esriLayer &&
            hilightLayer.isLoaded &&
            hilightLayer instanceof GraphicLayer
        ) {
            const gs: Array<Graphic> =
                graphics instanceof Array ? graphics : [graphics];
            this.$iApi.geo.map.esriView
                ?.whenLayerView(hilightLayer.esriLayer)
                ?.then(function (layerView) {
                    layerView.highlight(
                        gs.map(
                            (g: Graphic) => hilightLayer.getEsriGraphic(g.id)!
                        )
                    );
                });
        }
    }

    /**
     * Removes the given graphics from the hilight layer.
     */
    async remove(graphics?: Array<Graphic>) {
        await super.remove(graphics);
        // removing the graphic will also remove the esri highlight
        // so there's nothing else to do here
        return;
    }
}
