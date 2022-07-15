import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { LegendState } from './legend-state';
import { LegendItem, LegendEntry, LegendGroup } from './legend-defs';
import type { RootState } from '@/store';

// use for actions
type LegendContext = ActionContext<LegendState, RootState>;

const getters = {};

const mutations = {
    ADD_ITEM: (
        state: LegendState,
        value: { item: LegendItem; parent: LegendItem | undefined }
    ) => {
        if (value.parent === undefined) {
            // add to root level
            state.children = [...state.children, value.item];
        } else {
            // validate items to keep ts happy

            // below checks should never trigger if legend API is used correctly
            if (!(value.parent instanceof LegendGroup)) {
                console.error(
                    'attempted to create legend item under a non-group legend item'
                );
                return;
            }

            if (
                !(value.item instanceof LegendGroup) &&
                !(value.item instanceof LegendEntry)
            ) {
                console.error(
                    'attempted to add an unsupported legend item type'
                );
                return;
            }

            value.parent.children = [...value.parent.children, value.item];
            if (value.item.visibility) {
                value.parent.checkVisibility(value.item);
            }
        }
    },
    REMOVE_ITEM: (state: LegendState, item: LegendItem) => {
        const removeItem = (children: Array<LegendItem>) => {
            // remove entry
            children = children.filter(entry => {
                if (entry instanceof LegendEntry && entry === item) {
                    entry.remove();
                }
                return entry !== item;
            });

            // recursively check child legend groups
            children
                .filter((entry: LegendItem) => entry instanceof LegendGroup)
                .forEach((group: any) => {
                    group.children = removeItem(group.children);
                });

            // remove groups with no children
            children = children.filter(
                item =>
                    item instanceof LegendEntry || item.children.length !== 0
            );

            return children;
        };

        state.children = removeItem(state.children);
    }
};

const actions = {
    /** Add legend item to store */
    addItem: (
        context: LegendContext,
        value: { item: LegendItem; parent: LegendItem | undefined }
    ) => {
        context.commit('ADD_ITEM', value);
    },
    /** Remove legend item from store */
    removeItem: (context: LegendContext, item: LegendItem) => {
        context.commit('REMOVE_ITEM', item);
    }
};

export enum LegendStore {
    /**
     * (State) children: Array<LegendItem>
     */
    children = 'legend/children',
    /**
     * (State) headerContros: Array<string>
     */
    headerControls = 'legend/headerControls',
    /**
     * (Action) addItem: (value: { item: LegendItem; parent: LegendItem | undefined })
     */
    addItem = 'legend/addItem',
    /**
     * (Action) removeItem: (item: LegendItem)
     */
    removeItem = 'legend/removeItem'
}

export function legend() {
    const state = new LegendState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
