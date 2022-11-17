import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { GridState } from './grid-state';
import type { GridConfig } from './grid-state';
import type { RootState } from '@/store/state';

type GridContext = ActionContext<GridState, RootState>;

export enum GridAction {
    addGrid = 'addGrid',
    removeGrid = 'removeGrid'
}

export enum GridMutation {
    ADD_GRID = 'ADD_GRID',
    REMOVE_GRID = 'REMOVE_GRID'
}

const getters = {
    get:
        (state: GridState) =>
        (id: string): GridConfig | null => {
            return state.grids[id];
        }
};

const actions = {
    [GridAction.addGrid](context: GridContext, value: GridConfig): void {
        context.commit(GridMutation.ADD_GRID, value);
    },
    [GridAction.removeGrid](context: GridContext, id: string): void {
        context.commit(GridMutation.REMOVE_GRID, id);
    }
};
const mutations = {
    [GridMutation.ADD_GRID](state: GridState, value: GridConfig): void {
        state.grids = { ...state.grids, [value.id]: value };
    },
    [GridMutation.REMOVE_GRID](state: GridState, id: string): void {
        if (state.grids[id] !== undefined) {
            delete state.grids[id];
        }
    }
};

export enum GridStore {
    grids = 'grid/grids',
    currentId = 'grid/currentId'
}

export function grid() {
    const state = new GridState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: {
            ...mutations,
            ...make.mutations(['grids', 'currentId'])
        }
    };
}
