import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { ScrollguardState } from './scrollguard-state';
import { RootState } from '@/store/state';

type ScrollguardContext = ActionContext<ScrollguardState, RootState>;

export enum ScrollguardAction {
    setEnabled = 'setEnabled'
}

export enum ScrollguardMutation {
    SET_ENABLED = 'SET_ENABLED'
}

const getters = {};

const actions = {
    [ScrollguardAction.setEnabled](
        context: ScrollguardContext,
        value: any
    ): void {
        context.commit(ScrollguardMutation.SET_ENABLED, value);
    }
};
const mutations = {
    [ScrollguardMutation.SET_ENABLED](
        state: ScrollguardState,
        value: any
    ): void {
        state.enabled = value;
    }
};

export enum ScrollguardStore {
    enabled = 'scrollguard/enabled'
}

export function scrollguard() {
    const state = new ScrollguardState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
