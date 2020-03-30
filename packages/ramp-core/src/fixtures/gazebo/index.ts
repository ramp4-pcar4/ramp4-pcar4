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
            p1: {
                screens: {
                    'p-1-screen-1': P1Screen1V,
                    'p-1-screen-2': P1Screen2V
                }
            },
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

        this.$iApi.panel.open('p1');
        this.$iApi.panel.open('p2').pin();

        /* panel2.pin(true); */

        /* const p1screens = [
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
            },
            style: {
                'flex-grow': '1',
                'max-width': '500px'
            }
        }; */

        /* const pApi1 = this.$iApi.panel.open(p1);
        const pApi2 = this.$iApi.panel.open(p2);

        pApi2.pin(true); */
    }

    /* blah() {
        // panels seem to be awfully awkward to use since to open a panel, you need to submit a panel config every time
        // what if instead, all the panels and panel screens are registered upfront?

        // a fixture register some panels;
        // registered panels are stored in the global panel store, but are not yet visible
        this.panels.register({
            p1: {
                screens: {
                    'p-1-screen-1': { component: P1Screen1V },
                    'p-1-screen-2': { component: P1Screen2V }
                }
            },
            p2: {
                screens: {
                    'p-2-screen-1': { component: P1Screen1V },
                    'p-2-screen-2': { component: P1Screen2V }
                },
                style: {
                    'flex-grow': '1',
                    'max-width': '500px'
                }
            }
        });

        this.panels.register({ id: 'p1', { screens: { 'screen-1': { ... } }}}).open('screen-1');

        // getting panel from the global store still works
        const p1 = this.$iApi.panel.get('p1');

        // the panel can be opened through its reference without having to pass the panel config to `$iApi` every time
        // this will open the panel with the first screen listed
        p1.open();

        // or maybe we don't want to do default screen and will require always to provide screen id.
        p1.open('p-1-screen-2');

        // `open` also doubles up as `route`: if the panel is opened already, just modify the route
        p1.open({ screen: 'p-1-screen-2', props: { greeting: 'Default greeting!' }})

        // closing the panel, doesn't not mean the panel is unregistered; it's just removed from the visible stack, or marked as not opened
        p1.close();

        // anyone can open any panel by its id from anywhere
        // this is useful for in fixture appbar buttons where
        // any ideas on how to prevent duplicate panel/screen ids?
        this.$iApi.panel.open('p1');

        // opening and routing the panels while not having a direct panel reference
        this.$iApi.panel.open({ panel: 'p1', screen: 'p-1-screen-2', props: { greeting: 'Default greeting!' } })

        this.$iApi.panel.close('p1');

    } */
}

export default GazeboFixture;

import GazeboAppbarButton from './gazebo-appbar-button.vue';
export { GazeboAppbarButton as AppbarButton };
