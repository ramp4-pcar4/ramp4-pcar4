import GeosearchComponent from './geosearch-component.vue';
import { GeosearchAPI } from './api/geosearch';
import { geosearch } from './store/index';

class GeosearchFixture extends GeosearchAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('geosearch', geosearch());

        this.$iApi.panel.register({
            id: 'geosearch-panel',
            config: {
                screens: { 'geosearch-component': GeosearchComponent }
            }
        });

        this.$iApi.panel.open('geosearch-panel');
    }

    removed() {
        this.$vApp.$store.unregisterModule('geosearch');
    }
}

export default GeosearchFixture;

import GeosearchAppbarButton from './geosearch-appbar-button.vue';
export { GeosearchAppbarButton as AppbarButton };
