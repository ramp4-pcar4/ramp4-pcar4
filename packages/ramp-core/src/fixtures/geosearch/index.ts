import { PanelConfig } from '@/store/modules/panel';
import { FixtureConfigHelper } from '@/store/modules/fixture';
// import on-map components
import GeosearchComponent from './geosearch-component.vue';
import { GeosearchAPI } from './api/geosearch';
import { geosearch } from './store/index';

class GeosearchFixture extends FixtureConfigHelper {
    async added() {
        console.log(`[fixture] ${this.id} added`);
        const geosearchScreen = [{ id: 'geosearch-component', component: GeosearchComponent }];

        this.vApp.$store.registerModule('geosearch', geosearch());

        this.$iApi.emit('geosearchApi', new GeosearchAPI(this.$iApi));

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
        this.$iApi.geosearch = null;
        this.vApp.$store.unregisterModule('geosearch');
    }
}

export default new GeosearchFixture('geosearch');

import GeosearchAppbarButton from './geosearch-appbar-button.vue';
export { GeosearchAppbarButton as AppbarButton };
