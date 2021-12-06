import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { OverviewmapState } from './overviewmap-state';
import { RootState } from '@/store';

type OverviewMapContext = ActionContext<OverviewmapState, RootState>;

const getters = {};

const actions = {
    updateIntialBasemap: (context: OverviewMapContext, basemapId: string) => {
        context.commit('SET_INITIAL_BASEMAP', basemapId);
    }
};

const mutations = {
    SET_INITIAL_BASEMAP: (state: OverviewmapState, basemapId: string) => {
        state.mapConfig!.initialBasemapId = basemapId;
    }
};

export enum OverviewmapStore {
    /**
     * (State) mapConfig: RampMapConfig
     */
    mapConfig = 'overviewmap/mapConfig',
    /**
     * (State) startMinimized: boolean
     */
    startMinimized = 'overviewmap/startMinimized',
    /**
     * (Action) updateIntialBasemap: (basemapId: string)
     */
    updateIntialBasemap = 'overviewmap/updateIntialBasemap!'
}

export function overviewmap() {
    const state = new OverviewmapState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
