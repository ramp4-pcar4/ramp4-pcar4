import Vue, { VueConstructor } from 'vue';

export class PanelState {
    // items2: Panel[] = [];

    items: { [name: string]: Panel } = {};
    pinned: string | null = null;
}

export type PanelScreens = { id: string; component: VueConstructor<Vue> }[];
export type PanelRoute = { id: string; params?: object };

export class Panel {
    id: string;
    route: PanelRoute;
    screens: PanelScreens;

    constructor(id: string, screens: PanelScreens, route: PanelRoute) {
        this.id = id;
        this.screens = screens;
        this.route = route;

        this.screens.forEach(({ id, component }) => {
            (component as any).$item = 'blah';
            Vue.component(id, component);
        });
    }
}
