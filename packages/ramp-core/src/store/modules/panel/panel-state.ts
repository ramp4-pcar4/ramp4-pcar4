import Vue, { VueConstructor } from 'vue';

export class PanelState {
    /**
     * A list of all open (visible and hidden) panels.
     *
     * @type {{ [name: string]: PanelConfig }}
     * @memberof PanelState
     */
    items: { [name: string]: PanelConfig } = {};

    /**
     * A list of all panels in the arrangement they would be put on screen.
     * The last item will be the first on screen (rightmost, therefore rightmost in array).
     * Note: The `visible` array is used for whats actually on screen, this is used for calculating `visible`.
     *
     * @type {PanelConfig[]}
     * @memberof PanelState
     */
    orderedItems: PanelConfig[] = [];

    /**
     * Indicates a pinned panel.
     *
     * @type {(PanelConfig | null)}
     * @memberof PanelState
     */
    pinned: PanelConfig | null = null;

    /**
     * Indicates the most recently opened panel has priority
     * This is given the value of that recent panel in order to check on removal
     *
     * @type {PanelConfig | null}
     * @memberof PanelState
     */
    priority: PanelConfig | null = null;

    /**
     * The panels that are displayed on the screen
     *
     * @type {PanelConfig[]}
     * @memberof PanelState
     */
    visible: PanelConfig[] = [];

    /**
     * The screen width that the visible panels are allowed to use.
     *
     * @type {number}
     * @memberof PanelState
     */
    width: number = 0;
}

export type PanelConfigScreen = { id: string; component: VueConstructor<Vue> };
export type PanelConfigRoute = { id: string; props?: object };

export interface PanelConfig {
    /**
     * ID of this panel.
     *
     * @type {string}
     * @memberof Panel
     */
    id: string;

    /**
     * The width of this panel.
     *
     * @type {number}
     * @memberof Panel
     */
    width?: number;

    /**
     * Specifies which panel screen to display and optional props to be passed to the screen panel component.
     *
     * @type {PanelConfigRoute}
     * @memberof PanelConfig
     */
    route?: PanelConfigRoute;

    /**
     * A collection of panel screens to be displayed inside the panel.
     *
     * @type {PanelConfigScreen[]}
     * @memberof PanelConfig
     */
    screens: PanelConfigScreen[];
}
