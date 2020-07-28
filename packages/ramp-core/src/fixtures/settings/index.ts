import { SettingsAPI } from './api/settings';

import ScreenV from './SettingsV.vue';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

class SettingsFixture extends SettingsAPI {
    async added() {
        this.$iApi.panel.register({
            'settings-panel': {
                screens: {
                    'settings-screen-content': ScreenV
                },
                style: {
                    width: '350px'
                }
            }
        });

        let handler = (payload: any) => {
            const settingsFixture: SettingsAPI = this.$iApi.fixture.get('settings');
            settingsFixture.open(payload);
        };

        // Create a new event: opens the settings panel and hooks it up to the requested layer.
        this.$iApi.event.on('settings/open', handler, 'settings_opened_handler');
    }
}

export default SettingsFixture;
