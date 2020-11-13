import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { NorthArrowState } from './north-arrow-state';
import { RootState } from '@/store/state';


const getters = {};

const mutations = {};

const actions = {};

export enum NorthArrowStore {
    arrowIcon = 'northArrow/arrowIcon',
    poleIcon = 'northArrow/poleIcon'
}

export function northArrow() {
    const state = new NorthArrowState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
