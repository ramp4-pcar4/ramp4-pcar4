import type { PanelWidthObject } from '@/api';

export class HelpState {
    /**
     * name of help source folder
     *
     * @type {string}
     * @memberof HelpState
     */
    location = './help/';
}

export interface HelpConfig {
    location: string;
    panelWidth: PanelWidthObject | number;
}
