import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { DetailsState } from './details-state';
import { RootState } from '@/store/state';

type DetailsContext = ActionContext<DetailsState, RootState>;

export enum DetailsAction {
    setPayload = 'setPayload'
}

export enum DetailsMutation {
    SET_PAYLOAD = 'SET_PAYLOAD'
}

const getters = {};

const actions = {
    [DetailsAction.setPayload](context: DetailsContext, value: any): void {
        context.commit(DetailsMutation.SET_PAYLOAD, value);
    }
};
const mutations = {
    [DetailsMutation.SET_PAYLOAD](state: DetailsState, value: any): void {
        state.payload = value;
    }
};

export enum DetailsStore {
    payload = 'details/payload',
    templates = 'details/templates'
}

export function details() {
    const state = new DetailsState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
