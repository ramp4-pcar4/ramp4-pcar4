import type { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { MapnavState } from './mapnav-state';
import type { MapnavItem } from './mapnav-state';
import type { RootState } from '@/store/state';

type MapnavContext = ActionContext<MapnavState, RootState>;

type StoreActions = { [key: string]: Action<MapnavState, RootState> };
type StoreMutations = { [key: string]: Mutation<MapnavState> };

export enum MapnavAction {
    REMOVE_ITEM = 'removeItem'
}

export enum MapnavMutation {
    REMOVE_ITEM = 'REMOVE_ITEM'
}

const getters = {
    /**
     * Return a list of mapnav items with registered components (ones that can be rendered right now).
     *
     * @param {Mapnav} state
     * @returns {MapnavItem[]}
     */
    visible(state: MapnavState): MapnavItem[] {
        return state.order
            .map<MapnavItem>(id => state.items[id])
            .filter(item => item.componentId);
    }
};

const actions = {
    [MapnavAction.REMOVE_ITEM](context: MapnavContext, value: string) {
        const item = context.state.items[value];
        if (item) {
            context.commit(MapnavMutation.REMOVE_ITEM, item);
        }
    }
};

const mutations = {
    [MapnavMutation.REMOVE_ITEM](state: MapnavState, value: string) {
        delete state.items[value];
        let index = state.order.indexOf(value);
        if (index !== -1) {
            state.order.splice(index, 1);
        }
    }
};

export function mapnav() {
    const state = new MapnavState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['items', 'order']) }
    };
}
