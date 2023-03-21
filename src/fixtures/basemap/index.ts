import { markRaw } from 'vue';
import BasemapScreenV from './screen.vue';
import { FixtureInstance } from '@/api';
import BasemapNavButtonV from './nav-button.vue';
import messages from './lang/lang.csv?raw';
import { useAppbarStore } from '../appbar/store';
import { useMapnavStore } from '../mapnav/store';

class BasemapFixture extends FixtureInstance {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('basemap-nav-button', BasemapNavButtonV);

        this.$iApi.panel.register(
            {
                id: 'basemap',
                config: {
                    screens: { 'basemap-component': markRaw(BasemapScreenV) },
                    button: {
                        tooltip: 'basemap.title',
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'
                    },
                    alertName: 'basemap.title'
                }
            },
            { i18n: { messages } }
        );
    }

    removed() {
        // console.log(`[fixture] ${this.id} removed`);

        if (this.$iApi.fixture.get('appbar')) {
            const appbarStore = useAppbarStore(this.$vApp.$pinia);
            appbarStore.removeButton('basemap');
        }
        if (this.$iApi.fixture.get('mapnav')) {
            const mapnavStore = useMapnavStore(this.$vApp.$pinia);
            mapnavStore.removeItem('basemap');
        }

        this.$iApi.panel.remove('basemap');
    }
}

export default BasemapFixture;
