import { WizardAPI } from './api/wizard';
import WizardScreenV from './screen.vue';
import { wizard } from './store/index';
import { LayerSource } from './store/layer-source';
import messages from './lang/lang.csv';

class WizardFixture extends WizardAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register(
            {
                'wizard-panel': {
                    screens: {
                        'wizard-screen': WizardScreenV
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

        this.$vApp.$store.registerModule('wizard', wizard());
        this.$vApp.$store.set('wizard/layerSource', new LayerSource(this.$iApi));
    }

    removed() {
        this.$vApp.$store.unregisterModule('wizard');
    }
}

export default WizardFixture;
