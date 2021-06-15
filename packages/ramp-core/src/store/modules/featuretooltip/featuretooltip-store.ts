import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { FeatureTooltipState } from './featuretooltip-state';
import { RootState } from '@/store';

type FeatureTooltipContext = ActionContext<FeatureTooltipState, RootState>;

const getters = {
    getTooltip: (state: FeatureTooltipState) => (): any | undefined => {
        return state.tooltip;
    }
};

const actions = {
    setTooltip: (context: FeatureTooltipContext, tooltip: any) => {
        console.log('UPDATE STORE', tooltip);
        context.commit('SET_TOOLTIP', tooltip);
    }
};

const mutations = {
    SET_TOOLTIP: (state: FeatureTooltipState, value: any) => {
        state.tooltip = value;
    }
};

export enum FeatureTooltipStore {
    /**
     * (State) tooltip: any | undefined
     */
    tooltip = 'featuretooltip/tooltip',
    /**
     * (Getter) getTooltip: () => any | undefined
     */
    getTooltip = 'featuretooltip/getTooltip!',
    /**
     * (Action) setTooltip: (tooltip: any | undefined)
     */
    setTooltip = 'featuretooltip/setTooltip!'
}

export function featuretooltip() {
    const state = new FeatureTooltipState(undefined);

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
