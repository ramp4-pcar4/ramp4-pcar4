import { FixtureInstance } from '@/api';
import { useHelpStore } from '../store';
import type { HelpConfig } from '../store';

export class HelpAPI extends FixtureInstance {
    /**
     * Toggles help panel
     *
     * @param {boolean} [open] force panel open or closed
     * @memberof HelpAPI
     */
    toggleHelp(open?: boolean) {
        const panel = this.$iApi.panel.get('help');
        this.$iApi.panel.toggle(panel, open);
    }

    /**
     * Returns `HelpConfig` section of the global config file.
     *
     * @readonly
     * @type {HelpConfig}
     * @memberof HelpAPI
     */
    get config(): HelpConfig | undefined {
        return super.config;
    }

    /**
     * Parses the help config JSON snippet from the config file and save to the fixture store.
     *
     * @param {HelpConfig} [helpConfig]
     * @memberof HelpAPI
     */
    _parseConfig(helpConfig?: HelpConfig) {
        const helpStore = useHelpStore(this.$vApp.$pinia);
        helpStore.location = helpConfig?.location ?? './help/';
        this.handlePanelWidths(['help']);
    }
}
