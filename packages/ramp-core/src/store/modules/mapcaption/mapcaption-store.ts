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
    },
    setScale: (context: MapCaptionContext, scale: any) => {
        context.commit('SET_SCALE', scale);
    }
};

const mutations = {
    SET_ATTRIBUTION: (state: MapCaptionState, value: Attribution) => {
        state.attribution = value;
    },
    SET_SCALE: (state: MapCaptionState, value: any) => {
        state.scale = value;
    }
};

export enum MapCaptionStore {
    /**
     * (State) attribution: Attribution
     */
    attribution = 'mapcaption/attribution',
    /**
     * (Action) setAttribution: (attribution: any)
     */
    setAttribution = 'mapcaption/setAttribution!',
    /**
     * (State) scale: any
     */
    scale = 'mapcaption/scale',
    /**
     * (Action) setScale: (scale: any)
     */
    setScale = 'mapcaption/setScale!'
}

export function mapcaption() {
    const state = new MapCaptionState(
        {
            text: { disabled: true },
            logo: { disabled: true }
        },
        { label: '0km', width: '0px', isImperialScale: false }
    );

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
