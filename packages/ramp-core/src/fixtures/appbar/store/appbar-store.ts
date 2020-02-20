import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { AppbarState, AppbarItemConfig } from './appbar-state';
import { RootState } from '@/store/state';

type AppbarContext = ActionContext<AppbarState, RootState>;

export enum AppbarAction {}

export enum AppbarMutation {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM'
}

const getters = {
    getById: (state: AppbarState) => (id: string): AppbarItemConfig | null => {
        return state.items.find(item => item.id === id) || null;
    }
};

const actions = {};

const mutations = {
    [AppbarMutation.ADD_ITEM](state: AppbarState, value: AppbarItemConfig): void {
        state.items.push(value);
    },

    [AppbarMutation.REMOVE_ITEM](state: AppbarState, value: AppbarItemConfig): void {
        state.items.splice(state.items.indexOf(value), 1);
    }
};

export function appbar() {
    const state = new AppbarState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['items']) }
    };
}
