import Vue, { VueConstructor } from 'vue';

export class AppbarState {
    /**
     * A list of all open (visible and hidden) panels.
     *
     * @type {AppbarItemConfig[]}
     * @memberof AppbarState
     */
    items: AppbarItemConfig[] = [];
}

export interface AppbarItemConfig {
    /**
     * ID of this Appbar item.
     *
     * @type {string}
     * @memberof AppbarItemConfig
     */
    id: string;

    /**
     * The component to be displayed on the Appbar
     *
     * @type {VueConstructor<Vue>}
     * @memberof AppbarItemConfig
     */
    component?: VueConstructor<Vue>;
}
