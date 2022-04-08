export class MapnavState {
    /**
     * A set of all open (visible and hidden) mapnav items.
     *
     * @type {MapnavItem[]}
     * @memberof MapnavState
     */
    items: MapnavItemSet = {};

    /**
     * An ordered list of mapnav item ids.
     *
     * @type {string[]}
     * @memberof MapnavState
     */
    order: string[] = [];
}

export interface MapnavFixtureConfig {
    zoomOption: string;
    items: string[];
}

export interface MapnavItem {
    id: string;
    componentId?: string;
}

export type MapnavItemSet = { [name: string]: MapnavItem };
