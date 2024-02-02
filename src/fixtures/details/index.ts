import { DetailsAPI } from './api/details';
import { type DetailsConfig, useDetailsStore } from './store';
import DetailsScreenV from './details-screen.vue';
import messages from './lang/lang.csv?raw';

import { markRaw } from 'vue';
import { useAppbarStore } from '../appbar/store';

class DetailsFixture extends DetailsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'details-panel': {
                    screens: {
                        'details-screen': markRaw(DetailsScreenV)
                    },
                    style: {
                        width: '425px'
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

            this.$iApi.panel.remove('details-panel');

            if (this.$iApi.fixture.get('appbar')) {
                const appbarStore = useAppbarStore(this.$vApp.$pinia);
                appbarStore.removeButton('details-panel');
            }

            const detailsStore = useDetailsStore(this.$vApp.$pinia);
            detailsStore.$reset();
        };
    }
}

export default DetailsFixture;
