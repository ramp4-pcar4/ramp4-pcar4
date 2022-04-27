import { markRaw } from 'vue';
import BasemapScreenV from './screen.vue';
import { FixtureInstance } from '@/api';
import BasemapAppbarButtonV from './appbar-button.vue';
import BasemapNavButtonV from './nav-button.vue';
import messages from './lang/lang.csv?raw';

class BasemapFixture extends FixtureInstance {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('basemap-appbar-button', BasemapAppbarButtonV);
        this.$iApi.component('basemap-nav-button', BasemapNavButtonV);

        this.$iApi.panel.register(
            {
                id: 'basemap-panel',
                config: {
                    screens: { 'basemap-component': markRaw(BasemapScreenV) },
                    alertName: 'basemap.title'
                }
            },
            { i18n: { messages } }
        );
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
        // TODO:
        // - remove mapnav button
        // - remove appbar button (blocked by #882)
        this.$iApi.panel.remove('basemap-panel');
    }
}

export default BasemapFixture;
