import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MaptipState } from './maptip-state';
import type { RootState } from '@/store';
import type { Point } from '@/geo/api';

type MaptipContext = ActionContext<MaptipState, RootState>;

const getters = {};

const actions = {
    setMaptipInstance: (context: MaptipContext, maptipInstance: any) => {
        context.commit('SET_MAPTIP_INSTANCE', maptipInstance);
    },
    setMaptipPoint: (context: MaptipContext, maptipPoint: Point) => {
        context.commit('SET_MAPTIP_Point', maptipPoint);
    },
    setMaptipContent: (context: MaptipContext, content: string) => {
        context.commit('SET_MAPTIP_CONTENT', content);
    }
};

const mutations = {
    SET_MAPTIP_INSTANCE: (state: MaptipState, value: any) => {
        state.maptipInstance = value;
    },
    SET_MAPTIP_POINT: (state: MaptipState, value: Point) => {
        state.maptipPoint = value;
    },
    SET_MAPTIP_CONTENT: (state: MaptipState, value: string) => {
        state.content = value;
    }
};

export enum MaptipStore {
    /**
     * (State) maptipPoint: Point
     */
    maptipPoint = 'maptip/maptipPoint',
    /**
     * (State) maptipInstance: any
     */
    maptipInstance = 'maptip/maptipInstance',
    /**
     * (State) content: string
     */
    content = 'maptip/content',
    /**
     * (Action) setMaptipPoint: (maptip: Point)
     */
    setMaptipPoint = 'maptip/setMaptipPoint!',
    /**
     * (Action) setMaptipContent: (content: string)
     */
    setMaptipContent = 'maptip/setMaptipContent!',
    /**
     * (Action) setMaptipInstance: (tooltipInstance: any)
     */
    setMaptipInstance = 'maptip/setMaptipInstance!'
}

export function maptip() {
    const state = new MaptipState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
