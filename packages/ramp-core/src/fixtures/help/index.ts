import { HelpAPI } from './api/help';
import { help } from './store/index';
import HelpV from './help.vue';
import HelpNavV from './nav-button.vue';

import messages from './lang/lang.csv';

class HelpFixture extends HelpAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('help-nav-button', HelpNavV);

        this.$vApp.$store.registerModule('help', help());

        this.$iApi.panel.register(
            {
                'help-panel': {
                    screens: {
                        'help-screen': HelpV
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
        this.$iApi.panel.open('help-panel');

        // parse help section of config and store information in help store
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );

    }

    removed() {
        this.$vApp.$store.unregisterModule('help');
    }
}

export default HelpFixture;
