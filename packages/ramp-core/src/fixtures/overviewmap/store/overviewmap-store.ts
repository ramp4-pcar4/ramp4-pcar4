import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { OverviewmapState } from './overviewmap-state';
import { RootState } from '@/store/state';


const getters = {};

const mutations = {};

const actions = {};

export enum OverviewmapStore {
}

export function overviewmap() {
    const state = new OverviewmapState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
