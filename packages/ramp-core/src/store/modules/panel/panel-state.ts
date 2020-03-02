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
     * Indicates a pinned panel.
     *
     * @type {(PanelConfig | null)}
     * @memberof PanelState
     */
    pinned: PanelConfig | null = null;
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
