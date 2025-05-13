import { EsriAPI } from '@/geo/esri';
import SwipeV from './swipe.vue'; // import on-map component
import { FixtureInstance, GlobalEvents, LayerInstance } from '@/api';
import type { BasemapChange } from '@/geo/api';

class SwipeFixture extends FixtureInstance {
    addLeadingLayer!: (layer: LayerInstance) => void;
    addTrailingLayer!: (layer: LayerInstance) => void;

    async added(): Promise<void> {
        const { el, destroy } = this.mount(SwipeV, {
            app: this.$element,
            props: { message: 'This is a swipe.', fixture: this }
        });

        this.$vApp.$el.appendChild(el.childNodes[0]);

        const leadingLayers = await EsriAPI.Collection();
        const trailingLayers = await EsriAPI.Collection();
        await this.$iApi.geo.map.viewPromise;
        let view = this.$iApi.geo.map.esriView;

        let swipe = await EsriAPI.Swipe({ view, leadingLayers, trailingLayers, position: 50 });
        //view?.ui.add(swipe);

        const layerSliderId = '#layerSlider' + this.$element._uid; // uses ID of VueApp object to ensure uniqueness
        const slider = this.$vApp.$el.querySelector(layerSliderId) as HTMLInputElement;

        this.removed = (): void => {
            this.$vApp.$el.removeChild(el.childNodes[0]);
            swipe.destroy();
            destroy();
        };

        slider?.addEventListener('MoveInput', e => {
            const evt = e as CustomEvent;
            swipe.position = (evt.detail / this.$iApi?.$rootEl.clientWidth) * 100;
        });

        // When a layer is reloaded, remove it and add it back to the swipe component
        this.$iApi.event.on(GlobalEvents.LAYER_RELOAD_END, (reloadedLayer: LayerInstance) => {
            swipe.trailingLayers.forEach(layer => {
                if (layer.id === reloadedLayer.id) {
                    swipe.trailingLayers.remove(layer);
                    this.addTrailingLayer(reloadedLayer);
                }
            });

            swipe.leadingLayers.forEach(layer => {
                if (layer.id === reloadedLayer.id) {
                    swipe.leadingLayers.remove(layer);
                    this.addLeadingLayer(reloadedLayer);
                }
            });
        });

        // Upon a basemap schema change, geo.map.esriView gets set to a new MapView, meaning that the one used by the
        // swipe component wouldn't exist. So, we must reinitialize the swipe component
        this.$iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, async (payload: BasemapChange) => {
            if (payload.schemaChanged) {
                const prevPosition = swipe.position;
                swipe.destroy();
                view = this.$iApi.geo.map.esriView;
                swipe = await EsriAPI.Swipe({ view, leadingLayers, trailingLayers, position: prevPosition });
            }
        });

        this.addTrailingLayer = (layer: LayerInstance): void => {
            if (layer.esriLayer) swipe.trailingLayers.add(layer.esriLayer);
        };

        this.addLeadingLayer = (layer: LayerInstance): void => {
            if (layer.esriLayer) swipe.leadingLayers.add(layer.esriLayer);
        };
    }
}

export default SwipeFixture;
