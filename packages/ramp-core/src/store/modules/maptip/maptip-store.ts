import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MaptipState } from './maptip-state';
import { RootState } from '@/store';
import { MaptipProperties } from '@/geo/api';

type MaptipContext = ActionContext<MaptipState, RootState>;

const getters = {};

const actions = {
    setMaptipInstance: (context: MaptipContext, maptipInstance: any) => {
        context.commit('SET_MAPTIP_INSTANCE', maptipInstance);
    },
    setMaptipProperties: (context: MaptipContext, maptip: MaptipProperties) => {
        context.commit('SET_MAPTIP_PROPERTIES', maptip);
    },
    setMaptipContent: (context: MaptipContext, content: string) => {
        context.commit('SET_MAPTIP_CONTENT', content);
    },
    setMaptipDefaultContent: (context: MaptipContext, content: string) => {
        context.commit('SET_MAPTIP_CONTENT_DEFAULT', content);
    }
};

const mutations = {
    SET_MAPTIP_INSTANCE: (state: MaptipState, value: any) => {
        state.maptipInstance = value;
    },
    SET_MAPTIP_PROPERTIES: (state: MaptipState, value: MaptipProperties) => {
        state.maptipProperties = value;
    },
    SET_MAPTIP_CONTENT: (state: MaptipState, value: string) => {
        state.content = value || state.defaultContent;
        state.maptipInstance.setContent(state.content);
    },
    SET_MAPTIP_CONTENT_DEFAULT: (state: MaptipState, value: string) => {
        state.defaultContent = value;
    }
};

export enum MaptipStore {
    /**
     * (State) maptipProperties: MaptipProperties
     */
    maptipProperties = 'maptip/maptipProperties',
    /**
     * (State) maptipInstance: any
     */
    maptipInstance = 'maptip/maptipInstance',
    /**
     * (State) content: string
     */
    content = 'maptip/content',
    /**
     * (Action) setMaptipProperties: (maptip: MaptipProperties)
     */
    setMaptipProperties = 'maptip/setMaptipProperties!',
    /**
     * (Action) setMaptipContent: (content: string)
     */
    setMaptipContent = 'maptip/setMaptipContent!',
    /**
     * (Action) setMaptipDefaultContent: (content: string)
     */
    setMaptipDefaultContent = 'maptip/setMaptipDefaultContent!',
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
