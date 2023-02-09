import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MapnavState } from './mapnav-state';
import type { MapnavItem } from './mapnav-state';
import type { RootState } from '@/store/state';

type MapnavContext = ActionContext<MapnavState, RootState>;

export enum MapnavAction {
    REMOVE_ITEM = 'removeItem'
}

export enum MapnavMutation {
    REMOVE_ITEM = 'REMOVE_ITEM'
}

const actions = {
    [MapnavAction.REMOVE_ITEM](context: MapnavContext, value: string) {
        context.commit(MapnavMutation.REMOVE_ITEM, value);
    }
};

const mutations = {
    [MapnavMutation.REMOVE_ITEM](state: MapnavState, value: string) {
        if (value in state.items) {
            delete state.items[value];
        }
        const index = state.order.indexOf(value);
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
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['items', 'order']) }
    };
}
