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
        this.$vApp.$watch(
            () => this.config,
            (value: DetailsConfig | undefined) => this._parseConfig(value)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('details');
    }
}

export default DetailsFixture;
