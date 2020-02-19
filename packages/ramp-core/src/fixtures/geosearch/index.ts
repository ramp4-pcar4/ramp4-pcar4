import { PanelConfig } from '@/store/modules/panel';
import { FixtureConfigHelper } from '@/store/modules/fixture';
// import on-map components
import GeosearchComponent from './geosearch-component.vue';

class GeosearchFixture extends FixtureConfigHelper {
    added(): void {
        console.log(`[fixture] ${this.id} added`);
        const geosearchScreen = [{ id: 'geosearch-component', component: GeosearchComponent }];

        const geosearchPanel: PanelConfig = {
            id: 'geosearch-panel',
            screens: geosearchScreen,
            route: {
                id: 'geosearch-component'
            }
        };

        const geoPanelApi = this.$iApi.panel.open(geosearchPanel);
        geoPanelApi.pin(true);
    }
}

export default new GeosearchFixture('geosearch');
