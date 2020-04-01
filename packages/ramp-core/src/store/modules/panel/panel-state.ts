import Vue, { VueConstructor } from 'vue';
import { PanelInstance } from '@/api';

export class PanelState {
    /**
     * A list of all open (visible and hidden) panels.
     *
     * @type {{ [name: string]: PanelInstance }}
     * @memberof PanelState
     */
    items: { [name: string]: PanelInstance } = {};

    /**
     * A list of all panels in the arrangement they would be put on screen.
     * The last item will be the first on screen (rightmost, therefore rightmost in array).
     * Note: The `visible` array is used for whats actually on screen, this is used for calculating `visible`.
     *
     * @type {PanelInstance[]}
     * @memberof PanelState
     */
    orderedItems: PanelInstance[] = [];

    /**
     * Indicates a pinned panel.
     *
     * @type {(PanelInstance | null)}
     * @memberof PanelState
     */
    pinned: PanelInstance | null = null;

    /**
     * Indicates the most recently opened panel has priority
     * This is given the value of that recent panel in order to check on removal
     *
     * @type {(PanelInstance | null)}
     * @memberof PanelState
     */
    priority: PanelInstance | null = null;

    /**
     * The panels that are displayed on the screen
     *
     * @type {PanelInstance[]}
     * @memberof PanelState
     */
    visible: PanelInstance[] = [];

    /**
     * The screen width that the visible panels are allowed to use.
     *
     * @type {number}
     * @memberof PanelState
     */
    stackWidth: number = 0;
}

export type PanelConfigScreens = { [key: string]: VueConstructor<Vue> };
export type PanelConfigRoute = { screen: string; props?: object };
export type PanelConfigStyle = { [key: string]: string };

export interface PanelConfig {
    /**
     * A collection of panel screens to be displayed inside the panel.
     *
     * @type {{[name: string]: PanelConfigScreen}}
     * @memberof PanelConfig
     */
    screens: PanelConfigScreens;

    /**
     * The style object to apply to the panel.
     *
     * @type {PanelConfigStyle}
     * @memberof PanelConfig
     */
    style?: PanelConfigStyle;
}
