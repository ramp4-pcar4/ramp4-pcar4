import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import type { RootState } from '@/store';
import { LegendState } from './legend-state';

import { LayerItem } from './layer-item';
import type { LegendItem } from './legend-item';
import { SectionItem } from './section-item';

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
            // this check should never trigger if legend API is used correctly
            if (
                !(value.item instanceof SectionItem) &&
                !(value.item instanceof LayerItem)
            ) {
                console.error(
                    'attempted to add an unsupported legend item type'
                );
                return;
            }

            value.parent.children = [
                ...value.parent.children,
                value.item as LegendItem
            ];
        }
    },
    REMOVE_ITEM: (state: LegendState, item: LegendItem) => {
        const removeItem = (children: Array<LegendItem>) => {
            // remove item
            children = children.filter(child => {
                if (child === item && !child.children.length) {
                    child.onRemoved();
                }
                return child !== item;
            });

            // recursively check child legend items
            children.forEach((child: any) => {
                child.children = removeItem(child.children);
            });

            // remove SectionItems with no remaining children
            children = children.filter(
                item =>
                    !(
                        item instanceof SectionItem &&
                        !item.children.length &&
                        item.content === ''
                    )
            );

            return children;
        };

        state.children = removeItem(state.children);
    },
    REPLACE_ITEM: (
        state: LegendState,
        value: { oldItem: LegendItem; newItem: LegendItem }
    ) => {
        if (value.oldItem.parent === undefined) {
            const children = state.children;
            const index = children.indexOf(value.oldItem);
            if (index > -1) {
                children[index] = value.newItem;
            }
            state.children = children;
        } else {
            const children = value.oldItem.parent.children;
            const index = children.indexOf(value.oldItem);
            if (index > -1) {
                children[index] = value.newItem;
            }
            value.oldItem.parent.children = children;
        }
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
    },
    /** Replace legend item in store */
    replaceItem: (
        context: LegendContext,
        value: { oldItem: LegendItem; newItem: LegendItem }
    ) => {
        context.commit('REPLACE_ITEM', value);
    }
};

export enum LegendStore {
    /**
     * (State) children: Array<LegendItem>
     */
    children = 'legend/children',
    /**
     * (State) headerControls: Array<string>
     */
    headerControls = 'legend/headerControls',
    /**
     * (Action) addItem: (value: { item: LegendItem; parent: LegendItem | undefined })
     */
    addItem = 'legend/addItem',
    /**
     * (Action) removeItem: (item: LegendItem)
     */
    removeItem = 'legend/removeItem',
    /**
     * (Action) replaceItem:  (value: { oldItem: LegendItem; newItem: LegendItem })
     */
    replaceItem = 'legend/replaceItem'
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
