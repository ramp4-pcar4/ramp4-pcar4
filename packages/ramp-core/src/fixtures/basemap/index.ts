import BasemapComponent from './basemap.vue';
import { BasemapAPI } from './api/basemap';
import { basemap } from './store/index';
import BasemapAppbarButtonV from './appbar-button.vue';
import BasemapNavButtonV from './nav-button.vue';

import messages from './lang/lang.csv';

class BasemapFixture extends BasemapAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('basemap-appbar-button', BasemapAppbarButtonV);
        this.$iApi.component('basemap-nav-button', BasemapNavButtonV);

        this.$vApp.$store.registerModule('basemap', basemap());

        this.$iApi.panel.register(
            {
                id: 'basemap-panel',
                config: {
                    screens: { 'basemap-component': BasemapComponent }
                }
            },
            { i18n: { messages } }
        );

        this.$iApi.panel.open('basemap-panel');
    }

    removed() {
        this.$vApp.$store.unregisterModule('basemap');
    }
}

export default BasemapFixture;
