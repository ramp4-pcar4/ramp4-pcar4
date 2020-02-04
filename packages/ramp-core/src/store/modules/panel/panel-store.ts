import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { PanelState, Panel } from './panel-state';
import { RootState } from '@/store/state';

type PanelContext = ActionContext<PanelState, RootState>;

type StoreActions = { [key: string]: Action<PanelState, RootState> };
type StoreMutations = { [key: string]: Mutation<PanelState> };

export enum PanelAction {}
// addPanel = 'addPanel'

export enum PanelMutation {
    ADD_PANEL = 'ADD_PANEL'
}

const getters = {
    visible(state: PanelState): Panel[] {
        return Object.keys(state.items)
            .slice(-3)
            .map(key => state.items[key]);
    }
};

const actions = {
    /* [PanelAction.addPanel](context: PanelContext, { value }: { value: Panel }): void {
        context.commit(PanelMutation.ADD_PANEL, { value });
    } */
};

const mutations = {
    [PanelMutation.ADD_PANEL](state: PanelState, { value }: { value: Panel }): void {
        // TODO: find out what is better in terms of performance and use the better one: `object spread` or `Vue.set()`
        state.items = { ...state.items, [value.id]: value };
    }
};

export function panel() {
    const state = new PanelState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['items', 'pinned']) }
    };
}
