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
    getAllExpanded: (state: LegendState, expanded: boolean): boolean => {
        return state.children.every((entry: LegendItem) => !(entry instanceof LegendGroup) || checkExpanded(entry, expanded));
    },
    getAllVisibility: function(state: LegendState, visible: boolean): boolean {
        return state.children.every((entry: LegendEntry | LegendGroup) => checkVisibility(entry, visible));
    }
};

const mutations = {
    ADD_ITEM: (state: LegendState, value: LegendEntry) => {
        state.children = [...state.children, value];
    }
};

const actions = {
    /** Expand all legend groups */
    expandGroups: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendEntry | LegendGroup) => {
            toggle(entry, { expand: true });
        });
    },
    /** Collapse all legend groups */
    collapseGroups: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendEntry | LegendGroup) => {
            toggle(entry, { expand: false });
        });
    },
    /** Turn visibility on for all legend entries */
    showAll: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendEntry | LegendGroup) => {
            toggle(entry, { visibility: true });
        });
    },
    /** Turn visibility off for all legend entries */
    hideAll: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendEntry | LegendGroup) => {
            toggle(entry, { visibility: false });
        });
    },
    /** Add legend entry to store */
    addEntry: (context: LegendContext, item: LegendEntry) => {
        context.commit('ADD_ITEM', item);
    }
};

/**
 * Helper function that checks if all entries are visible/not visible.
 *
 * @function checkVisibility
 * @param {LegendElement}   child Current legend item that is being checked
 * @param {boolean}         visible Specifies whether visibility or expand/collapse functionality is to be changed
 */
function checkVisibility(child: LegendEntry | LegendGroup, visible: boolean): boolean {
    // traverse tree to check if all legend items have visibility toggled on/off
    if (child.children && child.children.length > 0) {
        child.children.forEach(ch => {
            if (!checkVisibility(ch, visible)) {
                return false;
            }
        });
    }
    // visibility set edge case: entry must be toggled on or must be part of a visbiility set and there is another entry in the set toggled on
    if (!child.visibility && !(child.parent instanceof LegendGroup && child.parent.visibility)) {
        return false;
    } else if (child.visibility !== visible) {
        return false;
    }
    return true;
}

/**
 * Helper function that checks if all entries are expanded/collapsed.
 *
 * @function checkExpanded
 * @param {LegendElement} child Current legend item that is being checked
 * @param {Object}        expanded Specifies whether visibility or expand/collapse functionality is to be changed
 */
function checkExpanded(child: LegendItem, expanded: boolean): boolean {
    // traverse tree to check if all legend groups are expanded/collapsed
    if (child.children && child.children.length > 0) {
        child.children.forEach(ch => {
            if (!checkExpanded(ch, expanded)) {
                return false;
            }
        });
    }
    if (child instanceof LegendGroup && child.expanded === expanded) {
        return false;
    }
    return true;
}

/**
 * Helper function that toggles visibility for all entries or expands/collapses all groups.
 *
 * @function toggle
 * @param {LegendElement}   child Current legend item that is being checked
 * @param {Object}          options Specifies whether visibility or expand/collapse functionality is to be changed
 */
function toggle(child: LegendEntry | LegendGroup, options: any) {
    const visibility = options.visibility;
    const expand = options.expand;
    // for current legend child toggle properties if possible, check for appropriate legend element type
    if (visibility !== undefined) {
        // visibility set edge case
        if (!(child.parent instanceof LegendGroup && child.parent.visibility === visibility)) {
            child.toggleVisibility(visibility);
        }
    }
    if (expand !== undefined && child instanceof LegendGroup) {
        child.toggleExpanded(expand);
    }
    // traverse the tree and make recursive calls
    if (child.children && child.children.length > 0) {
        child.children.forEach(ch => {
            // level order traversal
            toggle(ch, options);
        });
    }
}

export enum LegendStore {
    /**
     * (State) children: Array<LegendItem>
     */
    children = 'legend/children',
    /**
     * (Action) expandGroups - expand all possible legend groups
     */
    expandGroups = 'legend/expandGroups',
    /**
     * (Action) collapseGroups - collapse all legend groups
     */
    collapseGroups = 'legend/collapseGroups',
    /**
     * (Action) showAll - turn on visibility for all possible legend entries
     */
    showAll = 'legend/showAll',
    /**
     * (Action) hideAll - turn off visibility for all legend entries
     */
    hideAll = 'legend/hideAll',
    /**
     * (Action) addEntry - add entry to legend store
     */
    addEntry = 'legend/addEntry!'
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
