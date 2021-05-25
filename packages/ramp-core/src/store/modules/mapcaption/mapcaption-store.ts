import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { MapCaptionState } from './mapcaption-state';
import { RootState } from '@/store';

type MapCaptionContext = ActionContext<MapCaptionState, RootState>;

const getters = {};

const actions = {
    setAttribution: (context: MapCaptionContext, attribution: any) => {
        context.commit('SET_ATTRIBUTION', attribution);
    }
};

const mutations = {
    SET_ATTRIBUTION: (state: MapCaptionState, value: any) => {
        // Set it directly because watchers do not need old attribution
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
        text: '',
        iconSrc: '',
        altText: '',
        link: ''
    });

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
