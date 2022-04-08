import { markRaw } from 'vue';
import GeosearchScreenV from './screen.vue';
import { GeosearchAPI } from './api/geosearch';
import { geosearch } from './store/index';
import GeosearchAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv?raw';

class GeosearchFixture extends GeosearchAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        // TODO: this appbar registration also seems like a common action; maybe automate
        this.$iApi.component('geosearch-appbar-button', GeosearchAppbarButtonV);

        this.$vApp.$store.registerModule('geosearch', geosearch(this.config));

        this.$iApi.panel.register(
            {
                id: 'geosearch-panel',
                config: {
                    screens: {
                        'geosearch-component': markRaw(GeosearchScreenV)
                    },
                    alertName: 'geosearch.title'
                }
            },
            { i18n: { messages } }
        );
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
        // TODO: remove appbar button (blocked by #882)
        this.$vApp.$store.unregisterModule('geosearch');
        this.$iApi.panel.remove('geosearch-panel');
    }
}

export default GeosearchFixture;
