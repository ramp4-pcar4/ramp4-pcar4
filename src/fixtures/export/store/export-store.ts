import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';
import type { RootState } from '@/store';
import { ExportState } from './export-state';

type ExportContext = ActionContext<ExportState, RootState>;

const getters = {};

const actions = {
    toggleSelected: (
        context: ExportContext,
        value: { name: string; selected?: boolean }
    ) => {
        context.commit('TOGGLE_SELECTED', value);
    }
};

const mutations = {
    TOGGLE_SELECTED: (
        state: ExportState,
        value: { name: string; selected?: boolean }
    ) => {
        if (state.componentSelectedState[value.name] !== undefined) {
            const currValue: boolean = state.componentSelectedState[value.name];
            state.componentSelectedState[value.name] =
                value.selected !== undefined ? value.selected : !currValue;
        }
    }
};

export enum ExportStore {
    /**
     * (State) componentSelectedState: any
     */
    componentSelectedState = 'export/componentSelectedState',
    /**
     * (State) fileName: string
     */
    fileName = 'export/fileName',
    /**
     * (Action) toggleSelected: (value: { name: string; selected?: boolean })
     */
    toggleSelected = 'export/toggleSelected!'
}

// Using "xport" instead of "export" because export is a reserved keyword
// Will still appear as "export" in the store
export function xport() {
    const state = new ExportState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
