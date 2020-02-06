import Vue, { VueConstructor } from 'vue';

export class PanelState {
    items: { [name: string]: PanelConfig } = {};

    pinned: string | null = null;
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
