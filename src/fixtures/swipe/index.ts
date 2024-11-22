import { EsriAPI } from '@/geo/esri';
import SwipeV from './swipe.vue'; // import on-map component
import { FixtureInstance } from '@/api';

class SwipeFixture extends FixtureInstance {
    addLeadingLayers!: (esriLayers: Array<__esri.Layer>) => void;
    addTrailingLayers!: (esriLayers: Array<__esri.Layer>) => void;

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

        // Upon a basemap schema change, geo.map.esriView gets set to a new MapView, meaning that the one used by the
        // swipe component wouldn't exist. So, we must reinitialize the swipe component
        window.addEventListener('BasemapSchemaChange', async () => {
            swipe.destroy();
            view = this.$iApi.geo.map.esriView;
            swipe = await EsriAPI.Swipe({ view, leadingLayers, trailingLayers, position: 50 });
        });

        this.addTrailingLayers = (esriLayers: Array<__esri.Layer>): void => {
            esriLayers.forEach(esriLayer => {
                if (esriLayer) swipe.trailingLayers.add(esriLayer);
            });
        };

        this.addLeadingLayers = (esriLayers: Array<__esri.Layer>): void => {
            esriLayers.forEach(esriLayer => {
                if (esriLayer) swipe.leadingLayers.add(esriLayer);
            });
        };
    }
}

export default SwipeFixture;
