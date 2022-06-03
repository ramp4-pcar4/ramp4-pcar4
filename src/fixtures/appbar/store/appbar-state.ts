export class AppbarState {
    /**
     * A set of all fixed appbar buttons.
     *
     * @type {AppbarItem[]}
     * @memberof AppbarState
     */
    items: AppbarItemSet = {};

    /**
     * An ordered list of fixed appbar item ids.
     *
     * @type {string[]}
     * @memberof AppbarState
     */
    order: string[] = [];

    /**
     * An ordered list of panel IDs. Used to display the buttons registered to the panels.
     *
     * @type {string[]}
     * @memberof AppbarState
     */
    temporary: string[] = [];
}

export type AppbarItemSet = { [name: string]: string | AppbarItemInstance };

export interface AppbarFixtureConfig {
    items: (string | AppbarItemConfig)[];
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
     * The options for the displayed appbar button.
     *
     * @type {object}
     * @memberof AppbarItemConfig
     */
    options?: object;
}

export class AppbarItemInstance implements AppbarItemConfig {
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

    constructor(value: AppbarItemConfig) {
        const params = {
            options: {},
            ...value
        };
        ({ id: this.id, options: this.options } = params);

        // this should work too, but it doesn't;
        // ({ id: this.id, options: this.options } = { options: {}, ...(typeof value === 'string' ? { id: value} : value) });
    }
}
