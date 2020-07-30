import { LegendAPI } from './api/legend';
import { legend } from './store/index';

import messages from './lang/lang.csv';

class LegendFixture extends LegendAPI {
    added() {
        // TODO: register legend panel, appbar buttons, etc. once Vue components complete
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
