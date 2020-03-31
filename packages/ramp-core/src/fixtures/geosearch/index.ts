import { PanelConfig } from '@/store/modules/panel';
import { FixtureConfigHelper } from '@/store/modules/fixture';
// import on-map components
import GeosearchComponent from './geosearch-component.vue';
import { GeosearchAPI } from './api/geosearch';
import { geosearch } from './store/index';

class GeosearchFixture extends GeosearchAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);
        const geosearchScreen = [{ id: 'geosearch-component', component: GeosearchComponent }];

        this.$vApp.$store.registerModule('geosearch', geosearch());

        const geosearchPanel: PanelConfig = {
            id: 'geosearch-panel',
            screens: geosearchScreen,
            route: {
                id: 'geosearch-component'
            }
        };
        this.$iApi.panel.open(geosearchPanel);
    }

    removed() {
        this.$vApp.$store.unregisterModule('geosearch');
    }
}

export default GeosearchFixture;

import GeosearchAppbarButton from './geosearch-appbar-button.vue';
export { GeosearchAppbarButton as AppbarButton };
