import { FixtureInstance } from '@/api';
import { HelpConfig, HelpStore } from '../store';

export class HelpAPI extends FixtureInstance {
    openHelp() {
        const panel = this.$iApi.panel.get('help-panel');
        if (!panel.isOpen) {
            this.$iApi.panel.open(panel);
        }
    }

    /**
     * Returns `HelpConfig` section of the global config file.
     *
     * @readonly
     * @type {HelpConfig}
     * @memberof HelpFixture
     */
    get config(): HelpConfig | undefined {
        return super.config;
    }

    /**
     * Parses the help config JSON snippet from the config file and save to the fixture store.
     *
     * @param {HelpConfig} [helpConfig]
     * @returns
     * @memberof HelpAPI
     */
    _parseConfig(helpConfig?: HelpConfig) {
        if (!helpConfig) return;
        this.$vApp.$store.set(HelpStore.folderName, helpConfig.folderName);
    }
}
