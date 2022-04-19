import { make } from 'vuex-pathify';

import { HelpState } from './help-state';

const getters = {};

const mutations = {};

const actions = {};

export enum HelpStore {
    folderName = 'help/folderName'
}

export function help() {
    const state = new HelpState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
