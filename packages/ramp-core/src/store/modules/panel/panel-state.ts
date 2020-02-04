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

    route: PanelConfigRoute;

    screens: PanelConfigScreen[];
}
