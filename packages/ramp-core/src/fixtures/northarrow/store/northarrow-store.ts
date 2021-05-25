import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { NortharrowState } from './northarrow-state';
import { RootState } from '@/store/state';

const getters = {};

const mutations = {};

const actions = {};

export enum NortharrowStore {
    arrowIcon = 'northarrow/arrowIcon',
    poleIcon = 'northarrow/poleIcon'
}

export function northarrow() {
    const state = new NortharrowState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
