import { markRaw } from 'vue';
import { WizardAPI } from './api/wizard';
import WizardScreenV from './screen.vue';
import { wizard } from './store/index';
import { LayerSource } from './store/layer-source';
import messages from './lang/lang.csv?raw';

class WizardFixture extends WizardAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register(
            {
                wizard: {
                    screens: {
                        'wizard-screen': markRaw(WizardScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'wizard.title'
                }
            },
            {
                i18n: { messages }
            }
        );

        let layerSource: LayerSource | undefined = new LayerSource(this.$iApi);

        this.$vApp.$store.registerModule('wizard', wizard());
        this.$vApp.$store.set('wizard/layerSource', layerSource);

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // TODO: handle appbar button (blocked by #882)
            this.$iApi.panel.remove('wizard');
            this.$vApp.$store.unregisterModule('wizard');
            layerSource = undefined; // will be cleaned up by JS garbage collector
        };
    }
}

export default WizardFixture;
