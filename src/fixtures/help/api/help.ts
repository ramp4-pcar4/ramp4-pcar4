import { FixtureInstance } from '@/api';
import { useHelpStore } from '../store';
import type { DynamicHelpSection, HelpConfig } from '../store';

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
     * Adds or replaces a dynamic Markdown help section.
     *
     * @param {DynamicHelpSection} section help section definition
     * @memberof HelpAPI
     */
    addDynamicSection(section: DynamicHelpSection) {
        const helpStore = useHelpStore(this.$vApp.$pinia);
        helpStore.addDynamicSection(section);
    }

    /**
     * Removes a dynamic Markdown help section.
     *
     * @param {string} id help section identifier
     * @memberof HelpAPI
     */
    removeDynamicSection(id: string) {
        const helpStore = useHelpStore(this.$vApp.$pinia);
        helpStore.removeDynamicSection(id);
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
        this.handlePanelTeleports(['help']);
    }
}
