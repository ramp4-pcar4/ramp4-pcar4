import { markRaw } from 'vue';
import { LegendAPI } from './api/legend';
import { legend } from './store/index';
import LegendScreenV from './screen.vue';
import LegendAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv';

class LegendFixture extends LegendAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);
        this.$iApi.panel.register(
            {
                'legend-panel': {
                    screens: {
                        'legend-screen': markRaw(LegendScreenV)
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
    }

    removed() {
        this.$vApp.$store.unregisterModule('legend');
    }
}

export default LegendFixture;
