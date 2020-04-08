import { FixtureInstance } from '@/api';

import GazeboAppbarButton from './appbar-button.vue';

import P1Screen1V from './p1-screen-1.vue';
import P1Screen2V from './p1-screen-2.vue';

/* import P2Screen1V from './p2-screen-1.vue';
import P2Screen2V from './p2-screen-2.vue'; */
import P2Screen3V from './p2-screen-3.vue';

import Vue from 'vue';
import { AsyncComponentFunction } from '@/store/modules/panel';

class GazeboFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('gazebo-appbar-button', GazeboAppbarButton);

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
                    // manually lazy-loading a screen component
                    // 'p-2-screen-1': () => import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`),

                    // for the demo purposes, delay resolution of a component by 2 seconds
                    'p-2-screen-1': () => {
                        return new Promise<typeof import('*.vue')>(resolve =>
                            setTimeout(
                                () =>
                                    import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`).then(data => {
                                        resolve(data);
                                    }),
                                2000
                            )
                        );
                    },

                    // letting the core to lazy-load a screen component; need to provide a path relative to the fixtures home folder
                    'p-2-screen-2': 'gazebo/p2-screen-2.vue',
                    // importing directly; no lazy-loading
                    'p-2-screen-3': P2Screen3V
                },
                style: {
                    'flex-grow': '1',
                    'max-width': '500px'
                }
            }
        });

        this.$iApi.panel
            .get('p2')
            .open({ screen: 'p-2-screen-2' })
            .pin();
    }
}

export default GazeboFixture;
