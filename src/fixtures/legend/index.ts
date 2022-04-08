import { markRaw } from 'vue';
import { LegendAPI } from './api/legend';
import { legend } from './store/index';
import LegendScreenV from './screen.vue';
import LegendAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv?raw';

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
                    },
                    alertName: 'legend.title'
                }
            },
            {
                i18n: { messages }
            }
        );

        this.$iApi.component('legend-appbar-button', LegendAppbarButtonV);
        this.$vApp.$store.registerModule('legend', legend());

        // parse legend section of config and store information in legend store
        // here we create a copy of the config because the config parser will mutate the layer ids in the config
        this._parseConfig(JSON.parse(JSON.stringify(this.config)));
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(JSON.parse(JSON.stringify(value)))
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // TODO: remove appbar button (blocked by #882)
            unwatch();
            this.$iApi.panel.remove('legend-panel');
            this.$vApp.$store.unregisterModule('legend');
        };
    }
}

export default LegendFixture;
