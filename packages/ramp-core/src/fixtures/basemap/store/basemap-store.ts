import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { BasemapState } from './basemap-state';
import { RootState } from '@/store/state';

type BasemapContext = ActionContext<BasemapState, RootState>;

const getters = {};

const mutations = {};

const actions = {
    /**
     * Update map projection with newly selected basemap (trigger map reload?).
     *
     * @function selectBasemap
     */
    selectBasemap: function(context: BasemapContext, basemap: any): void {
        // TODO: reloading map with new basemap projection
        context.commit('SET_SELECTED_BASEMAP', basemap);
    }
};

export enum BasemapStore {
    /**
     * (State) tileSchemas: Array<any>
     */
    tileSchemas = 'basemap/tileSchemas',
    /**
     * (State) basemaps: Array<any>
     */
    basemaps = 'basemap/basemaps',
    /**
     * (State) selectedBasemap: any
     */
    selectedBasemap = 'basemap/selectedBasemap',
    /**
     * (Action) selectBasemap: () => void
     */
    selectBasemap = 'basemap/selectBasemap'
}

export function basemap() {
    const state = new BasemapState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
