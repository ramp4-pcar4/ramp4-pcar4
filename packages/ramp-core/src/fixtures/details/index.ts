import { DetailsAPI } from './api/details';
import { details } from './store';
import DetailsAppbarButtonV from './appbar-button.vue';
import DetailsLayerV from './details-layers.vue';
import DetailsResultV from './details-result.vue';
import DetailsItemV from './details-item.vue';
import messages from './lang/lang.csv';

class DetailsFixture extends DetailsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'details-panel': {
                    screens: {
                        'details-screen-layers': DetailsLayerV,
                        'details-screen-result': DetailsResultV,
                        'details-screen-item': DetailsItemV
                    },
                    style: {
                        width: '350px'
                    }
                }
            },
            { i18n: { messages } }
        );

        this.$vApp.$store.registerModule('details', details());

        this.$iApi.component('details-appbar-button', DetailsAppbarButtonV);

        // Parse the details portion of the configuration file and save any custom
        // template bindings in the details store.
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('details');
    }
}

export default DetailsFixture;
