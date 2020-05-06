import { HelpAPI } from './api/help';
import HelpNavV from './nav-button.vue';

class HelpFixture extends HelpAPI {
    added() {
        this.$iApi.component('help-nav-button', HelpNavV);
    }
}

export default HelpFixture;
