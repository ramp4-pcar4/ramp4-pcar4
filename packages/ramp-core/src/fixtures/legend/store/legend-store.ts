import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LegendState, LegendConfig } from './legend-state';
import { LegendItem, LegendEntry, LegendGroup } from './legend-defs';
import { ConfigStore } from '@/store/modules/config';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
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
            (entry: LegendItem) =>
                entry.visibility === visible || (entry.parent instanceof LegendGroup && entry.parent.visibility === visible)
        );
    }
};

const mutations = {};

const actions = {
    /** Creates and saves a single legend item */
    addLegendItem: function(this: any, context: LegendContext, legendItem: any): void {
        const layers = legendItem.layers;
        const itemConfig = legendItem.config;

        // (assuming visibility sets and groups will specify in config `exclusiveVisibility` or `children` properties, respectively)
        if (itemConfig.children !== undefined || itemConfig.exclusiveVisibility !== undefined) {
            itemConfig.layers = layers;
            // create a wrapper legend object for group or visibility set
            const legendObj = new LegendGroup(itemConfig);
            context.state.children.push(legendObj);
        } else if (itemConfig.layerId !== undefined && layers !== undefined) {
            // find matching BaseLayer in layer store to the layerId in config
            const curLayer = layers.find((layer: BaseLayer) => layer.id === itemConfig.layerId);

            // wait for layer to finish loading
            curLayer?.isLayerLoaded().then(() => {
                // obtain uid and layer tree structure
                itemConfig.uid = curLayer?.uid;
                itemConfig.layerTree = curLayer?.getLayerTree();

                // create a wrapper legend object for single legend entry
                const legendObj = new LegendEntry(itemConfig);
                // save newly created legend object
                context.state.children.push(legendObj);
            });
        }
    },
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
        context.state.children.forEach((entry: LegendItem) => {
            if (!entry.visibility) {
                entry.toggleVisibility(true);
            }
        });
    },
    /** Turn visibility off for all legend entries */
    hideAll: function(context: LegendContext): void {
        context.state.children.forEach((entry: LegendItem) => {
            if (entry.visibility) {
                entry.toggleVisibility(false);
            }
        });
    },
    /** Update legend section of saved main config */
    updateLegendConfig: function(this: any, context: LegendContext, config: LegendConfig): void {
        this.$vApp.$store.set(ConfigStore.updateConfig, config);
        const newLegendConfig = this.$vApp.$store.get(ConfigStore.getFixtureConfig, 'legend');
        context.commit('SET_LEGEND_CONFIG', newLegendConfig);
    }
};

export enum LegendStore {
    /**
     * (State) children: Array<LegendItem>
     */
    children = 'legend/children',
    /**
     * (Action) addLegendItem: (itemConfig: any)
     */
    addLegendItem = 'legend/addLegendItem!'
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
