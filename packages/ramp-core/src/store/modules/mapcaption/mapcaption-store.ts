import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MapCaptionState } from './mapcaption-state';
import { RootState } from '@/store';
import { Attribution, Point, ScaleBarProperties } from '@/geo/api';

type MapCaptionContext = ActionContext<MapCaptionState, RootState>;

const getters = {};

const actions = {
    setAttribution: (context: MapCaptionContext, attribution: Attribution) => {
        context.commit('SET_ATTRIBUTION', attribution);
    },
    setCursorPoint: (context: MapCaptionContext, cursorPoint: Point) => {
        context.commit('SET_CURSOR_POINT', cursorPoint);
    },
    setScale: (context: MapCaptionContext, scale: ScaleBarProperties) => {
        context.commit('SET_SCALE', scale);
    },
    toggleScale: (context: MapCaptionContext) => {
        context.commit('TOGGLE_SCALE');
    }
};

const mutations = {
    SET_ATTRIBUTION: (state: MapCaptionState, value: Attribution) => {
        state.attribution = value;
    },
    SET_CURSOR_POINT: (state: MapCaptionState, value: Point) => {
        state.cursorPoint = value;
    },
    SET_SCALE: (state: MapCaptionState, value: ScaleBarProperties) => {
        state.scale = value;
    },
    TOGGLE_SCALE: (state: MapCaptionState) => {
        state.scale.isImperialScale = !state.scale.isImperialScale;
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
     * (State) cursorPoint: Point
     */
    cursorPoint = 'mapcaption/cursorPoint',
    /**
     * (Action) setCursorPoint: (cursorPoint: Point)
     */
    setCursorPoint = 'mapcaption/setCursorPoint!',
    /**
     * (State) scale: any
     */
    scale = 'mapcaption/scale',
    /**
     * (Action) setScale: (scale: any)
     */
    setScale = 'mapcaption/setScale!',
    /**
     * (Action) toggleScale: ()
     */
    toggleScale = 'mapcaption/toggleScale!'
}

export function mapcaption() {
    const state = new MapCaptionState(
        {
            text: { disabled: true },
            logo: { disabled: true }
        },
        { label: '0km', width: '0px', isImperialScale: false },
        undefined
    );

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
