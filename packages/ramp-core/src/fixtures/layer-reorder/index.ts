import { markRaw } from 'vue';
import LayerReorderScreenV from './screen.vue';
import LayerReorderAppbarButtonV from './appbar-button.vue';
import messages from './lang/lang.csv';
import { LayerReorderAPI } from './api/layer-reorder';

class LayerReorderFixture extends LayerReorderAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component(
            'layer-reorder-appbar-button',
            LayerReorderAppbarButtonV
        );

        this.$iApi.panel.register(
            {
                'layer-reorder-panel': {
                    screens: {
                        'layer-reorder-screen': markRaw(LayerReorderScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'layerreorder.title'
                }
            },
            {
                i18n: { messages }
            }
        );
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default LayerReorderFixture;
