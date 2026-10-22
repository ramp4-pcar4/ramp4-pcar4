import { PanelWidthObject } from '../../../api';
export interface HelpConfig {
    location: string;
    panelWidth: PanelWidthObject | number;
}
export type DynamicHelpMarkdown = string | Record<string, string>;
export interface DynamicHelpSection {
    id: string;
    markdown: DynamicHelpMarkdown;
}
