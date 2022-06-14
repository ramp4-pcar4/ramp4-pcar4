import { make } from 'vuex-pathify';

import { MetadataState } from './metadata-state';

const getters = {};

const mutations = {};

const actions = {};

export enum MetadataStore {
    status = 'metadata/status',
    response = 'metadata/response'
}

export function metadata() {
    const state = new MetadataState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
