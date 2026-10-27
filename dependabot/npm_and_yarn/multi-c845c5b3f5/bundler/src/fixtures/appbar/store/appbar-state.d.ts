export type AppbarItemSet = {
    [name: string]: string | AppbarItemInstance;
};
export interface AppbarFixtureConfig {
    items: (string | AppbarItemConfig)[][];
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
     * ID of the component of this appbar item.
     *
     * @type {string}
     * @memberof AppbarItemConfig
     */
    componentId?: string;
    /**
     * The options for the displayed appbar button.
     *
     * @type {object}
     * @memberof AppbarItemConfig
     */
    options?: object;
}
export declare class AppbarItemInstance implements AppbarItemConfig {
    id: string;
    /**
     * Optional object containing any options to be passed to the appbar component.
     *
     * @type {object}
     * @memberof AppbarItemInstance
     */
    options: object;
    /**
     * An actual id of the appbar Vue component to use when rendering in the template.
     *
     * @type {string}
     * @memberof AppbarItemInstance
     */
    componentId?: string;
    constructor(value: AppbarItemConfig);
}
