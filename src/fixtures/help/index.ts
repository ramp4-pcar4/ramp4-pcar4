import { markRaw } from 'vue';
import { HelpAPI } from './api/help';
import HelpScreenV from './screen.vue';
import HelpNavButtonV from './nav-button.vue';

import messages from './lang/lang.csv?raw';
import { useMapnavStore } from '../mapnav/store';
import { useHelpStore } from './store';

class HelpFixture extends HelpAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('help-nav-button', HelpNavButtonV);

        this.$iApi.panel.register(
            {
                help: {
                    screens: {
                        'help-screen': markRaw(HelpScreenV)
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '750px'
                    },
                    alertName: 'help.title'
                }
            },
            {
                i18n: { messages }
            }
        );
        // parse help section of config and store information in help store
        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();

            if (this.$iApi.fixture.get('mapnav')) {
                const mapnavStore = useMapnavStore(this.$vApp.$pinia);
                mapnavStore.removeItem('help');
            }

            const helpStore = useHelpStore(this.$vApp.$pinia);
            helpStore.$reset();

            this.$iApi.panel.remove('help');
        };
    }
}

export default HelpFixture;
