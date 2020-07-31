import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LegendState } from './legend-state';
import { LegendItem, LegendEntry, LegendGroup } from './legend-defs';
import { RootState } from '@/store';

// use for actions
type LegendContext = ActionContext<LegendState, RootState>;

const getters = {
    getChildById: (state: LegendState, id: string): LegendItem | undefined => {
        return state.children.find((entry: LegendItem) => entry instanceof LegendEntry && entry.uid === id);
    },
    getAllToggled: (state: LegendState, expanded: boolean): boolean => {
        return state.children.every((entry: LegendItem) => !(entry instanceof LegendGroup) || entry.expanded === expanded);
    },
    getAllVisibility: function(state: LegendState, visible: boolean): boolean {
        return state.children.every(
            (entry: LegendEntry | LegendGroup) =>
                entry.visibility === visible || (entry.parent instanceof LegendGroup && entry.parent.visibility === visible)
        );
    }
};

const mutations = {};

const actions = {
    /** Expand all legend groups */
    expandGroups: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendItem) => {
            if (entry instanceof LegendGroup && !entry.expanded) {
                entry.toggleExpanded(true);
            }
        });
    },
    /** Collapse all legend groups */
    collapseGroups: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendItem) => {
            if (entry instanceof LegendGroup && entry.expanded) {
                entry.toggleExpanded(false);
            }
        });
    },
    /** Turn visibility on for all legend entries */
    showAll: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendEntry | LegendGroup) => {
            if (!entry.visibility) {
                entry.toggleVisibility(true);
            }
        });
    },
    /** Turn visibility off for all legend entries */
    hideAll: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendEntry | LegendGroup) => {
            if (entry.visibility) {
                entry.toggleVisibility(false);
            }
        });
    }
};

export enum LegendStore {
    /**
     * (State) children: Array<LegendItem>
     */
    children = 'legend/children'
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
