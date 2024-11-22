import SwipeV from './swipe.vue'; // import on-map component
import EsriSwipe from '@arcgis/core/widgets/Swipe.js';
import EsriCollection from '@arcgis/core/core/Collection';
import { FixtureInstance } from '@/api';

class SwipeFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        const { el, destroy } = this.mount(SwipeV, {
            app: this.$element,
            props: { message: 'This is a swipe.', fixture: this }
        });

        this.$vApp.$el.appendChild(el.childNodes[0]);

        // add esri swipe component here?
        setTimeout(() => {
            const view = this.$iApi.geo.map.esriView;
            const natureLayer = this.$iApi.geo.layer.getLayer('Nature')?.esriLayer;
            const waterLayer = this.$iApi.geo.layer.getLayer('Water')?.esriLayer;
            const leading = new EsriCollection();
            leading.add(natureLayer);
            const trailing = new EsriCollection();
            trailing.add(waterLayer);
            const swipe = new EsriSwipe({
                view: view,
                leadingLayers: leading,
                trailingLayers: trailing,
                position: 50,
                visibleElements: { divider: true, handle: true },
                dragLabel: 'drag the thing',
                disabled: false,
                visible: true
            });
            //view.ui.add(swipe);

            const slider = document.getElementById('layerSlider') as HTMLInputElement;
            slider?.addEventListener('MoveInput', e => {
                swipe.position = (e.detail / this.$iApi?.$rootEl.clientWidth) * 100;
            });
        }, 4000);

        this.removed = (): void => {
            console.log(`[fixture] ${this.id} removed`);
            destroy();
        };
    }
}

export default SwipeFixture;
