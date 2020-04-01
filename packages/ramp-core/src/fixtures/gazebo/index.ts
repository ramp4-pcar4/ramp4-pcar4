import { FixtureInstance } from '@/api';
import { PanelConfig } from '@/store/modules/panel';

import P1Screen1V from './p1-screen-1.vue';
import P1Screen2V from './p1-screen-2.vue';

import P2Screen1V from './p2-screen-1.vue';
import P2Screen2V from './p2-screen-2.vue';

class GazeboFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register({
            // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
            // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
            p1: {
                screens: {
                    'p-1-screen-1': P1Screen1V,
                    'p-1-screen-2': P1Screen2V
                }
            },
            // panel-2 has examples of how properly bind things and interact with stuff; good panel ✔
            // use API functions; underlying store structure might change and all the code accessing the store directly will break
            p2: {
                screens: {
                    'p-2-screen-1': P2Screen1V,
                    'p-2-screen-2': P2Screen2V
                },
                style: {
                    'flex-grow': '1',
                    'max-width': '500px'
                }
            }
        });

        this.$iApi.panel.open({ id: 'p1', screen: 'p-1-screen-2' });
        this.$iApi.panel
            .get('p2')
            .open()
            .pin();
    }
}

export default GazeboFixture;

import GazeboAppbarButton from './gazebo-appbar-button.vue';
export { GazeboAppbarButton as AppbarButton };
