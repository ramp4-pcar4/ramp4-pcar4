import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { AppbarState, AppbarItemInstance } from './appbar-state';
import type { RootState } from '@/store/state';

type AppbarContext = ActionContext<AppbarState, RootState>;

export enum AppbarAction {
    ADD_TEMP_BUTTON = 'addTempButton',
    REMOVE_TEMP_BUTTON = 'removeTempButton'
}

export enum AppbarMutation {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    ADD_TEMP_BUTTON = 'ADD_TEMP_BUTTON',
    REMOVE_TEMP_BUTTON = 'REMOVE_TEMP_BUTTON'
}

const getters = {
    /**
     * Return a list of appbar items with registered components (ones that can be rendered right now).
     *
     * @param {AppbarState} state
     * @returns {AppbarItemInstance[][]}
     */
    visible(state: AppbarState): AppbarItemInstance[][] {
        return state.order
            .map<AppbarItemInstance[]>(subArray =>
                subArray
                    .map(id => state.items[id])
                    .filter(item => {
                        if (typeof item === 'string' || item.componentId) {
                            return true;
                        }
                    })
            )
            .filter(subArray => subArray.length > 0);
    }
};

const actions = {
    [AppbarAction.ADD_TEMP_BUTTON](context: AppbarContext, value: string) {
        if (!context.state.temporary.find(id => id === value)) {
            context.commit(AppbarMutation.ADD_TEMP_BUTTON, value);
        }
    },
    [AppbarAction.REMOVE_TEMP_BUTTON](context: AppbarContext, value: string) {
        if (context.state.temporary.find(id => id === value)) {
            context.commit(AppbarMutation.REMOVE_TEMP_BUTTON, value);
        }
    }
};

const mutations = {
    [AppbarMutation.ADD_TEMP_BUTTON](state: AppbarState, value: string) {
        state.temporary.push(value);
    },
    [AppbarMutation.REMOVE_TEMP_BUTTON](state: AppbarState, value: string) {
        state.temporary.splice(state.temporary.indexOf(value), 1);
    }
};

export function appbar() {
    const state = new AppbarState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: {
            ...mutations,
            ...make.mutations(['items', 'order', 'temporary', 'tempButtonDict'])
        }
    };
}
