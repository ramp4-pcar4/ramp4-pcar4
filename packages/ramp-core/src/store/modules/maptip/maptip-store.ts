import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MaptipState } from './maptip-state';
import { RootState } from '@/store';

type MaptipContext = ActionContext<MaptipState, RootState>;

const getters = {};

const actions = {
    setMaptipInstance: (context: MaptipContext, maptipInstance: any) => {
        context.commit('SET_MAPTIP_INSTANCE', maptipInstance);
    },
    setMaptipProperties: (context: MaptipContext, maptip: any) => {
        context.commit('SET_MAPTIP_PROPERTIES', maptip);
    },
    setMaptipTemplate: (context: MaptipContext, template: string) => {
        context.commit('SET_MAPTIP_TEMPLATE', template);
    },
    setMaptipDefaultTemplate: (context: MaptipContext, template: string) => {
        context.commit('SET_MAPTIP_TEMPLATE_DEFAULT', template);
    }
};

const mutations = {
    SET_MAPTIP_INSTANCE: (state: MaptipState, value: any) => {
        state.maptipInstance = value;
    },
    SET_MAPTIP_PROPERTIES: (state: MaptipState, value: any) => {
        state.maptipProperties = value;
    },
    SET_MAPTIP_TEMPLATE: (state: MaptipState, value: string) => {
        state.template = value || state.defaultTemplate;
        state.maptipInstance.setContent(state.template);
    },
    SET_MAPTIP_TEMPLATE_DEFAULT: (state: MaptipState, value: string) => {
        state.defaultTemplate = value;
    }
};

export enum MaptipStore {
    /**
     * (State) maptipProperties: any
     */
    maptipProperties = 'maptip/maptipProperties',
    /**
     * (State) maptipInstance: any
     */
    maptipInstance = 'maptip/maptipInstance',
    /**
     * (State) template: string
     */
    template = 'maptip/template',
    /**
     * (Action) setMaptipProperties: (maptip: any)
     */
    setMaptipProperties = 'maptip/setMaptipProperties!',
    /**
     * (Action) setMaptipTemplate: (template: string)
     */
    setMaptipTemplate = 'maptip/setMaptipTemplate!',
    /**
     * (Action) setMaptipDefaultTemplate: (template: string)
     */
    setMaptipDefaultTemplate = 'maptip/setMaptipDefaultTemplate!',
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
