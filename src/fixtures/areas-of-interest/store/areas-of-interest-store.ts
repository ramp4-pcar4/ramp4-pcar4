import { make } from 'vuex-pathify';
import { AreasOfInterestState } from './areas-of-interest-state';

const getters = {};

const actions = {};

const mutations = {};

export enum AreasOfInterestStore {
    /**
     * (State) areas: Array<AreaOfInterest>
     */
    areas = 'areasOfInterest/areas'
}

export function areasOfInterest() {
    const state = new AreasOfInterestState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
