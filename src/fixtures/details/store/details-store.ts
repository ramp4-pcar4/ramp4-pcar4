import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { DetailsState } from './details-state';
import type { RootState } from '@/store/state';
import type { LayerInstance } from '@/api';

type DetailsContext = ActionContext<DetailsState, RootState>;

export enum DetailsAction {
    removeLayer = 'removeLayer',
    setPayload = 'setPayload'
}

export enum DetailsMutation {
    REMOVE_LAYER = 'REMOVE_LAYER',
    SET_PAYLOAD = 'SET_PAYLOAD'
}

const getters = {};

const actions = {
    [DetailsAction.setPayload](context: DetailsContext, value: any): void {
        context.commit(DetailsMutation.SET_PAYLOAD, value);
    },
    [DetailsAction.removeLayer](
        context: DetailsContext,
        layer: LayerInstance
    ): void {
        context.commit(DetailsMutation.REMOVE_LAYER, layer);
    }
};
const mutations = {
    [DetailsMutation.SET_PAYLOAD](state: DetailsState, value: any): void {
        state.payload = value;
    },
    [DetailsMutation.REMOVE_LAYER](
        state: DetailsState,
        layer: LayerInstance
    ): void {
        // check if this layer's results are in the payload
        const idx = state.payload.findIndex(res => res.uid === layer.uid);
        if (idx !== -1) {
            // remove the result
            state.payload.splice(idx, 1);
        }
    }
};

export enum DetailsStore {
    /**
     * (State) payload: IdentifyResult[]
     */
    payload = 'details/payload',
    /**
     * (State) properties:  { [id: string]: DetailsItemInstance }
     */
    properties = 'details/properties',
    /**
     * (State) defaultTemplates:  { [type: string]: string }
     */
    defaultTemplates = 'details/defaultTemplates',
    /**
     * (State) slowLoadingFlag: boolean
     */
    slowLoadingFlag = 'details/slowLoadingFlag',
    /**
     * (State) activeGreedy: number
     */
    activeGreedy = 'details/activeGreedy',
    /**
     * (State) hilightToggle: boolean
     */
    hilightToggle = 'details/hilightToggle',
    /**
     * (Action) setPayload: (payload: ItemResult[])
     */
    setPayload = 'details/setPayload!',
    /**
     * (Action) removeLayer: (layer: LayerInstance)
     */
    removeLayer = 'details/removeLayer!'
}

export function details() {
    const state = new DetailsState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
