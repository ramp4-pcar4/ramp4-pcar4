import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { AppbarState, AppbarItemInstance } from './appbar-state';
import type { RootState } from '@/store/state';

type AppbarContext = ActionContext<AppbarState, RootState>;

export enum AppbarAction {
    ADD_TEMP_BUTTON = 'addTempButton',
    REMOVE_BUTTON = 'removeButton'
}

export enum AppbarMutation {
    ADD_TEMP_BUTTON = 'ADD_TEMP_BUTTON',
    REMOVE_BUTTON = 'REMOVE_BUTTON'
}

const getters = {
    /**
     * Return a list of appbar items with registered components (ones that can be rendered right now).
     *
     * @param {AppbarState} state
     * @returns {AppbarItemInstance[][]}
     */
    visible(state: AppbarState): (AppbarItemInstance | string)[][] {
        return state.order
            .map<(AppbarItemInstance | string)[]>(subArray =>
                subArray
                    .map(
                        item =>
                            state.items[
                                typeof item === 'string' ? item : item.id
                            ]
                    )
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
    [AppbarAction.REMOVE_BUTTON](context: AppbarContext, value: string) {
        context.commit(AppbarMutation.REMOVE_BUTTON, value);
    }
};

const mutations = {
    [AppbarMutation.ADD_TEMP_BUTTON](state: AppbarState, value: string) {
        state.temporary.push(value);
    },
    [AppbarMutation.REMOVE_BUTTON](state: AppbarState, value: string) {
        const idx = state.temporary.indexOf(value);
        if (idx !== -1) {
            // remove from temporary list
            state.temporary.splice(idx, 1);
        }
        if (value in state.items) {
            // remove from items
            delete state.items[value];
        }
        state.order.forEach((subItems: (string | AppbarItemInstance)[]) => {
            const idx = subItems.indexOf(value);
            if (idx !== -1) {
                // remove from order sub group list
                subItems.splice(idx, 1);
            }
        });
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
