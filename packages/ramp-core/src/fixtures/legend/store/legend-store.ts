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
            // entry must be toggled on or must be part of a visbiility set and there is another entry in the set toggled on
            if (!entry.visibility || (entry.parent instanceof LegendGroup && entry.parent.visibility)) {
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

/**
 * Helper function that checks if all entries are visible/not visible.
 *
 * @function checkVisibility
 * @param {LegendElement}   child Current legend item that is being checked
 * @param {boolean}         visible Specifies whether visibility or expand/collapse functionality is to be changed
 */
// function checkVisibility(child: LegendElement, visible: boolean): boolean {
//     // traverse tree to check if all legend items have visibility toggled on/off
//     if (child.children && child.children.length > 0) {
//         child.children.forEach(ch => {
//             if (!checkVisibility(ch, visible)) {
//                 return false;
//             }
//         });
//     }
//     if (child.type === 'legendEntry' && child.visibility === visible) {
//         return false;
//     }
//     return true;
// }

/**
 * Helper function that checks if all entries are expanded/collapsed.
 *
 * @function checkExpanded
 * @param {LegendElement} child Current legend item that is being checked
 * @param {Object}        expanded Specifies whether visibility or expand/collapse functionality is to be changed
 */
// function checkExpanded(child: LegendElement, expanded: boolean): boolean {
//     // traverse tree to check if all legend groups are expanded/collapsed
//     if (child.children && child.children.length > 0) {
//         child.children.forEach(ch => {
//             if (!checkExpanded(ch, expanded)) {
//                 return false;
//             }
//         });
//     }
//     if (child.type === 'legendGroup' && child.expanded === expanded) {
//         return false;
//     }
//     return true;
// }

/**
 * Helper function that toggles visibility for all entries or expands/collapses all groups.
 *
 * @function toggle
 * @param {LegendElement}   child Current legend item that is being checked
 * @param {Object}          options Specifies whether visibility or expand/collapse functionality is to be changed
 */
// function toggle(child: LegendElement, options: any) {
//     const visibility = options.visibility;
//     const expand = options.expand;
//     // traverse the tree and make recursive calls
//     if (child.children && child.children.length > 0) {
//         child.children.forEach(ch => {
//             // level order traversal
//             toggle(ch, options);
//         });
//     }
//     // for current legend child toggle properties if possible, check for appropriate legend element type
//     if (visibility && child.type === 'legendEntry') {
//         // TODO: call functions to toggle visibility on/off for legend entry once implemented
//         // e.g. visibility ? child.toggleVisibility(true) : child.toggleVisibility(false);
//     }
//     if (expand && child.type === 'legendGroup') {
//         // TODO: call functions to expand/collapse group for legend group once implemented
//         // e.g. expand ? child.expand(true) : child.expand(false);
//     }
// }

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
