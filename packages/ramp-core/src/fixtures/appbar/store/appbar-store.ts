import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { AppbarState, AppbarItemInstance } from './appbar-state';
import { RootState } from '@/store/state';

type AppbarContext = ActionContext<AppbarState, RootState>;

export enum AppbarAction {}

export enum AppbarMutation {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM'
}

const getters = {
    /**
     * Return a list of appbar items with registered components (ones that can be rendered right now).
     *
     * @param {AppbarState} state
     * @returns {AppbarItemInstance[]}
     */
    visible(state: AppbarState): AppbarItemInstance[] {
        return state.order.map<AppbarItemInstance>(id => state.items[id]).filter(item => item.componentId);
    }
};

const actions = {};

const mutations = {};

export function appbar() {
    const state = new AppbarState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['items', 'order']) }
    };
}
