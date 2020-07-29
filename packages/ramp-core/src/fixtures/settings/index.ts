import { SettingsAPI } from './api/settings';

import ScreenV from './SettingsV.vue';

import messages from './lang/lang.csv';

class SettingsFixture extends SettingsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'settings-panel': {
                    screens: {
                        'settings-screen-content': ScreenV
                    },
                    style: {
                        width: '350px'
                    }
                }
            },
            { i18n: { messages } }
        );
    }
}

export default SettingsFixture;
