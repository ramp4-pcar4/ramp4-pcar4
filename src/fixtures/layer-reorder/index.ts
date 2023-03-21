import { markRaw } from 'vue';
import LayerReorderScreenV from './screen.vue';
import messages from './lang/lang.csv?raw';
import { LayerReorderAPI } from './api/layer-reorder';
import { useAppbarStore } from '../appbar/store';

class LayerReorderFixture extends LayerReorderAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register(
            {
                'layer-reorder': {
                    screens: {
                        'layer-reorder-screen': markRaw(LayerReorderScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    button: {
                        tooltip: 'layer-reorder.title',
                        // https://fonts.google.com/icons?selected=Material+Icons:low_priority
                        icon: '<svg class="flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" /></svg>'
                    },
                    alertName: 'layer-reorder.title'
                }
            },
            {
                i18n: { messages }
            }
        );
    }

    removed() {
        // console.log(`[fixture] ${this.id} removed`);
        if (this.$iApi.fixture.get('appbar')) {
            const appbarStore = useAppbarStore(this.$vApp.$pinia);
            appbarStore.removeButton('layer-reorder');
        }
        this.$iApi.panel.remove('layer-reorder');
    }
}

export default LayerReorderFixture;
