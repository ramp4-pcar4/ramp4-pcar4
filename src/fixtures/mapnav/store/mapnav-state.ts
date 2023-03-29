export interface MapnavFixtureConfig {
    zoomOption: string;
    items: string[];
}

export interface MapnavItem {
    id: string;
    componentId?: string;
}

export type MapnavItemSet = { [name: string]: MapnavItem };
