import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MapCaptionState } from './map-caption-state';
import { RootState } from '@/store';
import { Attribution, MouseCoords, ScaleBar } from '@/geo/api';

type MapCaptionContext = ActionContext<MapCaptionState, RootState>;

const getters = {};

const actions = {
    setAttribution: (context: MapCaptionContext, attribution: Attribution) => {
        context.commit('SET_ATTRIBUTION', attribution);
    },
    setCursorCoords: (context: MapCaptionContext, cursorCoords: MouseCoords) => {
        context.commit('SET_CURSOR_COORDS', cursorCoords);
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
    SET_CURSOR_COORDS: (state: MapCaptionState, value: MouseCoords) => {
        state.cursorCoords = value;
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
     * (State) cursorCoords: MouseCoords
     */
    cursorCoords = 'mapcaption/cursorCoords',
    /**
     * (Action) setCursorCoords: (cursorCoords: MouseCoords)
     */
    setCursorCoords = 'mapcaption/setCursorCoords!',
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
