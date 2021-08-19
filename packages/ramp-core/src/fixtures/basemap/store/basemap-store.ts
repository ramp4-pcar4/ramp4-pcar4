import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { BasemapState } from './basemap-state';
import { RootState } from '@/store/state';
import { RampBasemapConfig } from '@/geo/api';

type BasemapContext = ActionContext<BasemapState, RootState>;

const getters = {};

const actions = {
    /**
     * Update map projection with newly selected basemap (trigger map reload?).
     *
     * @function setSelectedBasemap
     */
    selectBasemap: function(context: BasemapContext, basemap: RampBasemapConfig | undefined): void {
        if (!basemap) {
            return;
        }
        context.commit('SET_SELECTED_BASEMAP', basemap);
    }
};

const mutations = {
    SET_SELECTED_BASEMAP: (state: BasemapState, basemap: RampBasemapConfig) => {
        // TODO: reload map with new basemap
        state.selectedBasemap = basemap;
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
     * (Action) selectBasemap: (basemap: RampBasemapConfig)
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
