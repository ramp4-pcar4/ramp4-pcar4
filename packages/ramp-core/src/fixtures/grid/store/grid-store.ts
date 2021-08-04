import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { GridState, GridConfig } from './grid-state';
import { RootState } from '@/store/state';

type GridContext = ActionContext<GridState, RootState>;

export enum GridAction {
    addGrid = 'addGrid'
}

export enum GridMutation {
    ADD_GRID = 'ADD_GRID'
}

const getters = {
    get: (state: GridState) => (id: string): GridConfig | null => {
        return state.grids[id];
    }
};

const actions = {
    [GridAction.addGrid](context: GridContext, value: GridConfig): void {
        context.commit(GridMutation.ADD_GRID, value);
    }
};
const mutations = {
    [GridMutation.ADD_GRID](state: GridState, value: GridConfig): void {
        state.grids = { ...state.grids, [value.uid]: value };
    }
};

export enum GridStore {
    grids = 'grid/grids',
    currentUid = 'grid/currentUid'
}

export function grid() {
    const state = new GridState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['grids', 'currentUid']) }
    };
}
