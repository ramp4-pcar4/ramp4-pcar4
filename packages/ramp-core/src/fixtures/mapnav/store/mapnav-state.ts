export class MapnavState {
    /**
     * A set of all open (visible and hidden) panels.
     *
     * @type {MapnavItem[]}
     * @memberof MapnavState
     */
    items: MapnavItemSet = {};

    /**
     * An ordered list of appbar item ids.
     *
     * @type {string[]}
     * @memberof MapnavState
     */
    order: string[] = [];
}

export type MapnavItemSet = { [name: string]: MapnavItemInstance };

export interface MapnavFixtureConfig {
    items: (string | MapnavItemConfig)[];
}

export interface MapnavItemConfig {
    /**
     * ID of this Mapnav item.
     *
     * @type {string}
     * @memberof MapnavItemConfig
     */
    id: string;

    /**
     * The options for the displayed appbar button.
     *
     * @type {object}
     * @memberof MapnavItemConfig
     */
    options?: object;
}

export class MapnavItemInstance implements MapnavItemConfig {
    id: string;

    /**
     * Optional object containing any options to be passed to the appbar component.
     *
     * @type {object}
     * @memberof MapnavItemInstance
     */
    options: object;

    /**
     * An actual id of the appbar Vue component to use when rendering in the template.
     *
     * @type {string}
     * @memberof MapnavItemInstance
     */
    componentId?: string;

    constructor(value: string | MapnavItemConfig) {
        const params = { options: {}, ...(typeof value === 'string' ? { id: value } : value) };
        ({ id: this.id, options: this.options } = params);

        // this should work too, but it doesn't;
        // ({ id: this.id, options: this.options } = { options: {}, ...(typeof value === 'string' ? { id: value} : value) });
    }
}
