import { DetailsAPI } from './api/details';
import { type DetailsConfig, useDetailsStore } from './store';
import DetailsLayerScreenV from './layers-screen.vue';
import DetailsResultScreenV from './result-screen.vue';
import DetailsItemScreenV from './item-screen.vue';
import messages from './lang/lang.csv?raw';

import { markRaw } from 'vue';
import { useAppbarStore } from '../appbar/store';

class DetailsFixture extends DetailsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'details-layers': {
                    screens: {
                        'layers-screen': markRaw(DetailsLayerScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    button: {
                        tooltip: 'details.layers.title',
                        // https://fonts.google.com/icons?selected=Material+Icons:place
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'
                    },
                    alertName: 'details.layers.title'
                },
                'details-items': {
                    screens: {
                        'results-screen': markRaw(DetailsResultScreenV),
                        'item-screen': markRaw(DetailsItemScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    button: {
                        tooltip: 'details.items.title',
                        // https://fonts.google.com/icons?selected=Material%20Icons%3Aarticle%3A
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'
                    },
                    alertName: 'details.items.title'
                }
            },
            { i18n: { messages } }
        );

        // Parse the details portion of the configuration file and save any custom
        // template bindings in the details store.
        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: DetailsConfig | undefined) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();

            this.$iApi.panel.remove('details-items');
            this.$iApi.panel.remove('details-layers');

            if (this.$iApi.fixture.get('appbar')) {
                const appbarStore = useAppbarStore(this.$vApp.$pinia);
                appbarStore.removeButton('details-items');
                appbarStore.removeButton('details-layers');
            }

            const detailsStore = useDetailsStore(this.$vApp.$pinia);
            detailsStore.$reset();
        };
    }
}

export default DetailsFixture;
