import { HelpAPI } from './api/help';
import { help } from './store/index';
import HelpScreenV from './screen.vue';
import HelpNavButtonV from './nav-button.vue';

import messages from './lang/lang.csv';

class HelpFixture extends HelpAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('help-nav-button', HelpNavButtonV);

        this.$vApp.$store.registerModule('help', help());

        this.$iApi.panel.register(
            {
                'help-panel': {
                    screens: {
                        'help-screen': HelpScreenV
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '750px'
                    }
                }
            },
            {
                i18n: { messages }
            }
        );
        // parse help section of config and store information in help store
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('help');
    }
}

export default HelpFixture;
