import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MapCaptionState } from './mapcaption-state';
import { RootState } from '@/store';
import { Attribution } from '@/geo/api';

type MapCaptionContext = ActionContext<MapCaptionState, RootState>;

const getters = {};

const actions = {
    setAttribution: (context: MapCaptionContext, attribution: Attribution) => {
        context.commit('SET_ATTRIBUTION', attribution);
    }
};

const mutations = {
    SET_ATTRIBUTION: (state: MapCaptionState, value: Attribution) => {
        state.attribution = value;
    }
};

export enum MapCaptionStore {
    /**
     * (State) attribution: any // TODO: Create concrete definition type for attribution
     */
    attribution = 'mapcaption/attribution',
    /**
     * (Action) setAttribution: (attribution: any)
     */
    setAttribution = 'mapcaption/setAttribution!'
}

export function mapcaption() {
    const state = new MapCaptionState({
        text: { disabled: true },
        logo: { disabled: true }
    });

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
