import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LegendState, LegendConfig, LegendElement } from './legend-state';
import { ConfigStore } from '@/store/modules/config';
import { RootState } from '@/store';

// use for actions
type LegendContext = ActionContext<LegendState, RootState>;

const getters = {
    getChildById: (state: LegendState, id: string): LegendElement | undefined => {
        return state.children.find((entry: LegendElement) => entry.type === 'LegendEntry' && entry.layer.uid === id);
    },
    getAllToggled: (state: LegendState, expanded: boolean): boolean => {
        return state.children.every(entry => entry.type !== 'LegendGroup' || entry.expanded === expanded);
    },
    getAllVisibility: function(state: LegendState, visible: boolean): boolean {
        return state.children.every(
            entry => entry.visibility === visible || (entry.parent !== undefined && entry.parent.visibility === visible)
        );
    }
};

const mutations = {};

const actions = {
    expandGroups: function(this: any, context: LegendContext): void {
        context.state.children.forEach(entry => {
            if (entry.type === 'LegendGroup' && !entry.expanded) {
                // TODO: call function to expand legend group once implemented
            }
        });
    },
    collapseGroups: function(this: any, context: LegendContext): void {
        context.state.children.forEach(entry => {
            if (entry.type === 'LegendGroup' && entry.expanded) {
                // TODO: call function to collapse legend group once implemented
            }
        });
    },
    showAll: function(this: any, context: LegendContext): void {
        context.state.children.forEach(entry => {
            if (!entry.visibility) {
                // TODO: call function to toggle visibility on for legend entry once implemented
                // implementations will differ significantly for groups, sets and single entries
            }
        });
    },
    hideAll: function(this: any, context: LegendContext): void {
        context.state.children.forEach(entry => {
            if (entry.visibility) {
                // TODO: call function to toggle visibility off for legend entry once implemented
            }
        });
    },
    updateLegendConfig: function(this: any, context: LegendContext, config: LegendConfig): void {
        this.$vApp.$store.set(ConfigStore.updateConfig, config);
        const newLegendConfig = this.$vApp.$store.get(ConfigStore.getFixtureConfig, 'legend');
        context.commit('SET_LEGEND_CONFIG', newLegendConfig);
    }
};

// commented out functions below were initially used if legend entries were stored in config tree structure
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
     * (State) children: Array<LegendElement>
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
