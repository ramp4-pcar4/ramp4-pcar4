import { FixtureConfigHelper } from '@/store/modules/fixture';
import { PanelConfig } from '@/store/modules/panel';

import P1Screen1V from './p1-screen-1.vue';
import P1Screen2V from './p1-screen-2.vue';

import P2Screen1V from './p2-screen-1.vue';
import P2Screen2V from './p2-screen-2.vue';

class GazeboFixture extends FixtureConfigHelper {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        const p1screens = [
            { id: 'p-1-screen-1', component: P1Screen1V },
            { id: 'p-1-screen-2', component: P1Screen2V }
        ];

        const p2screens = [
            { id: 'p-2-screen-1', component: P2Screen1V },
            { id: 'p-2-screen-2', component: P2Screen2V }
        ];

        // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
        // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
        const p1: PanelConfig = {
            id: 'p1',
            screens: p1screens,
            route: {
                id: 'p-1-screen-1'
            }
        };

        // panel-2 has examples of how properly bind things and interact with stuff; good panel ✔
        // use API functions; underlying store structure might change and all the code accessing the store directly will break
        const p2: PanelConfig = {
            id: 'p2',
            screens: p2screens,
            route: {
                id: 'p-2-screen-2',
                props: { greeting: 'Default greeting!' }
            }
        };

        const pApi1 = this.$iApi.panel.open(p1);
        const pApi2 = this.$iApi.panel.open(p2);

        pApi2.pin(true);
    }
}

export default new GazeboFixture('gazebo');
