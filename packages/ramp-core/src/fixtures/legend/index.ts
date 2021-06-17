import { LegendAPI } from './api/legend';
import { LegendStore, legend } from './store';
import LegendV from './legend.vue';
import LegendAppbarButtonV from './appbar-button.vue';
import { GlobalEvents, LayerInstance } from '@/api';

import messages from './lang/lang.csv';

class LegendFixture extends LegendAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);
        this.$iApi.panel.register(
            {
                'legend-panel': {
                    screens: {
                        'legend-screen': LegendV
                    },
                    style: {
                        width: '350px'
                    }
                }
            },
            {
                i18n: { messages }
            }
        );
        // TODO: register legend panel
        this.$iApi.component('legend-appbar-button', LegendAppbarButtonV);
        this.$vApp.$store.registerModule('legend', legend());

        // parse legend section of config and store information in legend store
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        this.$iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (layer: LayerInstance) => {
                this.$iApi.$vApp.$store.dispatch(
                    LegendStore.removeLayerEntry,
                    layer.uid
                );
            },
            'legend_removes_layer_entry'
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('legend');

        this.$iApi.event.off('legend_removes_layer_entry');
    }
}

export default LegendFixture;
