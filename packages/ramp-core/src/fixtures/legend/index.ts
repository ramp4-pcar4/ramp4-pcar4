import { LegendAPI } from './api/legend';
import { legend } from './store/index';
import LegendAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv';

class LegendFixture extends LegendAPI {
    added() {
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
