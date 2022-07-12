import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MapCaptionState } from './map-caption-state';
import type { RootState } from '@/store';
import type { Attribution, MapCoords, ScaleBar } from '@/geo/api';

type MapCaptionContext = ActionContext<MapCaptionState, RootState>;

const getters = {};

const actions = {
    setAttribution: (context: MapCaptionContext, attribution: Attribution) => {
        context.commit('SET_ATTRIBUTION', attribution);
    },
    setCoords: (context: MapCaptionContext, coords: MapCoords) => {
        context.commit('SET_COORDS', coords);
    },
    setScale: (context: MapCaptionContext, scale: ScaleBar) => {
        context.commit('SET_SCALE', scale);
    },
    toggleScale: (context: MapCaptionContext, useImperial?: boolean) => {
        context.commit('TOGGLE_SCALE', useImperial);
    }
};

const mutations = {
    SET_ATTRIBUTION: (state: MapCaptionState, value: Attribution) => {
        state.attribution = value;
    },
    SET_COORDS: (state: MapCaptionState, value: MapCoords) => {
        state.coords = value;
    },
    SET_SCALE: (state: MapCaptionState, value: ScaleBar) => {
        state.scale = value;
    },
    TOGGLE_SCALE: (state: MapCaptionState, value: boolean) => {
        if (value !== undefined) {
            state.scale.isImperialScale = value;
        } else {
            state.scale.isImperialScale = !state.scale.isImperialScale;
        }
    }
};

export enum MapCaptionStore {
    /**
     * (State) attribution: Attribution
     */
    attribution = 'mapcaption/attribution',
    /**
     * (Action) setAttribution: (attribution: Attribution)
     */
    setAttribution = 'mapcaption/setAttribution!',
    /**
     * (State) coords: MapCoords
     */
    coords = 'mapcaption/coords',
    /**
     * (Action) setCoords: (coords: MapCoords)
     */
    setCoords = 'mapcaption/setCoords!',
    /**
     * (State) scale: ScaleBar
     */
    scale = 'mapcaption/scale',
    /**
     * (Action) setScale: (scale: ScaleBar)
     */
    setScale = 'mapcaption/setScale!',
    /**
     * (Action) toggleScale: (useImperial?: boolean)
     */
    toggleScale = 'mapcaption/toggleScale!'
}

export function mapcaption() {
    const state = new MapCaptionState(
        {
            text: {},
            logo: {}
        },
        {},
        {}
    );

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
