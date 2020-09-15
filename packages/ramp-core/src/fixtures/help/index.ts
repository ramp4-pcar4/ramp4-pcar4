import { HelpAPI } from './api/help';
import HelpNavV from './nav-button.vue';

import messages from './lang/lang.csv';

class HelpFixture extends HelpAPI {
    added() {
        // since this has no panel we need to merge in translations ourselves
        Object.entries(messages).forEach(value => this.$vApp.$i18n.mergeLocaleMessage(...value));

        this.$iApi.component('help-nav-button', HelpNavV);
    }
}

export default HelpFixture;
