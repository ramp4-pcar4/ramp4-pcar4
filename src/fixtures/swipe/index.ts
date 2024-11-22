import { EsriAPI } from '@/geo/esri';
import SwipeV from './swipe.vue'; // import on-map component
import { FixtureInstance } from '@/api';

class SwipeFixture extends FixtureInstance {
    async added(): Promise<void> {
        const { el, destroy } = this.mount(SwipeV, {
            app: this.$element,
            props: { message: 'This is a swipe.', fixture: this }
        });

        this.$vApp.$el.appendChild(el.childNodes[0]);

        const leadingLayers = await EsriAPI.Collection();
        const trailingLayers = await EsriAPI.Collection();
        await this.$iApi.geo.map.viewPromise;
        const view = this.$iApi.geo.map.esriView;
        const natureLayer = this.$iApi.geo.layer.getLayer('Nature')?.esriLayer;
        const waterLayer = this.$iApi.geo.layer.getLayer('Water')?.esriLayer;

        leadingLayers.add(natureLayer);

        trailingLayers.add(waterLayer);
        const swipe = await EsriAPI.Swipe({ view, leadingLayers, trailingLayers, position: 50 });
        //view?.ui.add(swipe);

        const layerSliderId = '#layerSlider' + this.$element._uid; // uses ID of VueApp object to ensure uniqueness
        const slider = this.$vApp.$el.querySelector(layerSliderId) as HTMLInputElement;
        slider?.addEventListener('MoveInput', e => {
            const evt = e as CustomEvent;
            swipe.position = (evt.detail / this.$iApi?.$rootEl.clientWidth) * 100;
        });

        this.removed = (): void => {
            destroy();
        };
    }
}

export default SwipeFixture;
