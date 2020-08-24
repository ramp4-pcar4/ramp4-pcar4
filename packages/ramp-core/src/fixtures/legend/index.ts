import { LegendAPI } from './api/legend';
import { legend } from './store/index';
import LegendV from './legend.vue';
import LegendAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv';

class LegendFixture extends LegendAPI {
    added() {
        this.$iApi.panel.register({
            'legend-panel': {
                screens: {
                    'legend-screen': LegendV
                },
                style: {
                    width: '350px'
                }
            }
        });

        this.$iApi.panel.open('legend-panel');

        // TODO: register legend panel
        this.$iApi.component('legend-appbar-button', LegendAppbarButtonV);
        this.$vApp.$store.registerModule('legend', legend());

        // parse legend section of config and store information in legend store
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('legend');
    }
}

export default LegendFixture;
