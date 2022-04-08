import { DetailsAPI } from './api/details';
import { details } from './store';
import type { DetailsConfig } from './store';
import DetailsLayersAppbarButtonV from './layers-appbar-button.vue';
import DetailsItemsAppbarButtonV from './items-appbar-button.vue';
import DetailsLayerScreenV from './layers-screen.vue';
import DetailsResultScreenV from './result-screen.vue';
import DetailsItemScreenV from './item-screen.vue';
import messages from './lang/lang.csv?raw';
import { markRaw } from 'vue';

class DetailsFixture extends DetailsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'details-layers-panel': {
                    screens: {
                        'layers-screen': markRaw(DetailsLayerScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'details.layers.title'
                },
                'details-items-panel': {
                    screens: {
                        'results-screen': markRaw(DetailsResultScreenV),
                        'item-screen': markRaw(DetailsItemScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'details.items.title'
                }
            },
            { i18n: { messages } }
        );

        this.$vApp.$store.registerModule('details', details());

        // register a button for each panel
        this.$iApi.component(
            'details-layers-appbar-button',
            DetailsLayersAppbarButtonV
        );
        this.$iApi.component(
            'details-items-appbar-button',
            DetailsItemsAppbarButtonV
        );

        // Parse the details portion of the configuration file and save any custom
        // template bindings in the details store.
        this._parseConfig(this.config);
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: DetailsConfig | undefined) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // TODO: remove appbar buttons (blocked by #882)
            unwatch();
            this.$iApi.panel.remove('details-items-panel');
            this.$iApi.panel.remove('details-layers-panel');

            /*
                TODO: Fix this hack!

                Removing the layers panel will close it first.

                However when a panel closes, it plays a fade-out animation for 1 second before actually closing.

                During the animation, the component is still active and so unregistering the details store below
                will trigger the payload watcher in the layers panel, which causes an exception because the
                watcher is directly bound to the vuex path - which doesn't exist anymore.

                Hence we delay unregistering the details by 1.2s to ensure the layers panel is completely closed
                and unmounted.
            */
            setTimeout(
                () => this.$vApp.$store.unregisterModule('details'),
                1200
            );
        };
    }
}

export default DetailsFixture;
