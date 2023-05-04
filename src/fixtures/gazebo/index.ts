import { markRaw } from 'vue';
import { FixtureInstance } from '@/api';
import type { AsyncComponentEh } from '@/stores/panel';

import GazeboAppbarButtonV from './appbar-button.vue';

import GazeboP1Screen1V from './p1-screen-1.vue';
import GazeboP1Screen2V from './p1-screen-2.vue';

import GazeboP2Screen2V from './p2-screen-2.vue';
import GazeboP2Screen3V from './p2-screen-3.vue';

import messages from './lang/lang.csv?raw';

const BEHOLD_TEXT_EVENT = 'gazebo/beholdMyText';

class GazeboFixture extends FixtureInstance {
    added(): void {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.event.registerEventName(BEHOLD_TEXT_EVENT);

        this.$iApi.component('gazebo-appbar-button', GazeboAppbarButtonV);

        /**
         * -- Vue3 Migration --
         * All screen loading methods have been replaced with direct component loading.
         * That is, each screen component is directly loaded by importing it above
         *
         * // TODO: Migrate different loading techniques from Vue2 to Vue3. Refer to the TODOs below for examples
         */

        this.$iApi.panel.register(
            {
                // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
                // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
                id: 'p1',
                config: {
                    screens: {
                        'p-1-screen-1': markRaw(GazeboP1Screen1V),
                        'p-1-screen-2': markRaw(GazeboP1Screen2V)
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '500px'
                    },
                    alertName: 'gz.alert1'
                }
            },
            { i18n: { messages } }
        );

        this.$iApi.panel.register(
            {
                // panel-2 has examples of how properly bind things and interact with stuff; good panel ✔
                // use API functions; underlying store structure might change and all the code accessing the store directly will break
                id: 'p2',
                config: {
                    screens: {
                        /**
                         * // This should work:
                         * manually lazy-loading a screen component
                         */
                        //'p-2-screen-1': () => import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`),

                        /**
                         * // This should work:
                         * for the demo purposes, delay resolution of a component by 2 seconds
                         */
                        'p-2-screen-1': () => {
                            return new Promise<AsyncComponentEh>(resolve =>
                                setTimeout(
                                    () =>
                                        import(`./p2-screen-1.vue`).then(
                                            data => {
                                                resolve(data);
                                            }
                                        ),
                                    2000
                                )
                            );
                        },

                        /**
                         * // This should work:
                         * letting the core to lazy-load a screen component; need to provide a path relative to the fixtures home folder
                         */
                        'p-2-screen-2': markRaw(GazeboP2Screen2V),

                        /**
                         * // This should work:
                         * returning a `VueConstructor` in a promise
                         */
                        'p-2-screen-3': () => {
                            return new Promise<AsyncComponentEh>(resolve =>
                                resolve(markRaw(GazeboP2Screen3V))
                            );
                        }
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '500px'
                    },
                    alertName: 'gz.alert2'
                }
            },
            { i18n: { messages } }
        );
    }
}

export default GazeboFixture;
