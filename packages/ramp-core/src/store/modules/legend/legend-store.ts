import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LegendState } from './legend-state';
import { RootState } from '@/store';

// use for actions
type LegendContext = ActionContext<LegendState, RootState>;

/* interface actions {
    [key: string]: Action<LegendState, RootState>;
} */

// decide if these are needed
//enum Action {}

//enum Mutation {}

const getters = {};

const actions = {};

const mutations = {};

export function legend() {
    const state = new LegendState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
