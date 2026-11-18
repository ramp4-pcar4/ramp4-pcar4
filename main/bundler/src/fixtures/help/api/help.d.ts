import { FixtureInstance } from '../../../api';
import { DynamicHelpSection, HelpConfig } from '../store';
export declare class HelpAPI extends FixtureInstance {
    /**
     * Toggles help panel
     *
     * @param {boolean} [open] force panel open or closed
     * @memberof HelpAPI
     */
    toggleHelp(open?: boolean): void;
    /**
     * Adds or replaces a dynamic Markdown help section.
     *
     * @param {DynamicHelpSection} section help section definition
     * @memberof HelpAPI
     */
    addDynamicSection(section: DynamicHelpSection): void;
    /**
     * Removes a dynamic Markdown help section.
     *
     * @param {string} id help section identifier
     * @memberof HelpAPI
     */
    removeDynamicSection(id: string): void;
    /**
     * Returns `HelpConfig` section of the global config file.
     *
     * @readonly
     * @type {HelpConfig}
     * @memberof HelpAPI
     */
    get config(): HelpConfig | undefined;
    /**
     * Parses the help config JSON snippet from the config file and save to the fixture store.
     *
     * @param {HelpConfig} [helpConfig]
     * @memberof HelpAPI
     */
    _parseConfig(helpConfig?: HelpConfig): void;
}
