import { markRaw } from 'vue';
import GeosearchScreenV from './screen.vue';
import { GeosearchAPI } from './api/geosearch';
import GeosearchNavButtonV from './nav-button.vue';

import messages from './lang/lang.csv?raw';
import { useAppbarStore } from '../appbar/store';
import { useGeosearchStore } from './store';
import { useMapnavStore } from '../mapnav/store';

class GeosearchFixture extends GeosearchAPI {
    async added() {
        // console.log(`[fixture] ${this.id} added`);

        const geosearchStore = useGeosearchStore(this.$vApp.$pinia);
        geosearchStore.initService(this.$iApi.language, this.config);

        this.$iApi.component('geosearch-nav-button', GeosearchNavButtonV);

        this.$iApi.panel.register(
            {
                id: 'geosearch',
                config: {
                    screens: {
                        'geosearch-component': markRaw(GeosearchScreenV)
                    },
                    button: {
                        tooltip: 'geosearch.title',
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'
                    },
                    alertName: 'geosearch.title'
                }
            },
            { i18n: { messages } }
        );
    }

    removed() {
        // console.log(`[fixture] ${this.id} removed`);

        if (this.$iApi.fixture.get('appbar')) {
            const appbarStore = useAppbarStore(this.$vApp.$pinia);
            appbarStore.removeButton('geosearch');
        }

        if (this.$iApi.fixture.get('mapnav')) {
            const mapnavStore = useMapnavStore(this.$vApp.$pinia);
            mapnavStore.removeItem('geosearch');
        }

        const geosearchStore = useGeosearchStore(this.$vApp.$pinia);
        geosearchStore.$reset();

        this.$iApi.panel.remove('geosearch');
    }
}

export default GeosearchFixture;
