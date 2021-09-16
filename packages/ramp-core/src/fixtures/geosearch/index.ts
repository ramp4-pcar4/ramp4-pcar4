import { markRaw } from 'vue';
import GeosearchScreenV from './screen.vue';
import { GeosearchAPI } from './api/geosearch';
import { geosearch } from './store/index';
import GeosearchAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv';

class GeosearchFixture extends GeosearchAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        // TODO: this appbar registration also seems like a common action; maybe automate
        this.$iApi.component('geosearch-appbar-button', GeosearchAppbarButtonV);

        this.$vApp.$store.registerModule('geosearch', geosearch());

        this.$iApi.panel.register(
            {
                id: 'geosearch-panel',
                config: {
                    screens: { 'geosearch-component': markRaw(GeosearchScreenV) }
                }
            },
            { i18n: { messages } }
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('geosearch');
    }
}

export default GeosearchFixture;
