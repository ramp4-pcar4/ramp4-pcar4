import { FixtureInstance, LayerInstance } from '@/api';
import { TreeNode } from '@/geo/api';
import { LegendConfig, LegendStore } from '../store';
import {
    LegendItem,
    LegendEntry,
    LegendGroup,
    LegendSet
} from '../store/legend-defs';
import { LayerStore } from '@/store/modules/layer';

export class LegendAPI extends FixtureInstance {
    /**
     * Returns `LegendConfig` section of the global config file.
     *
     * @readonly
     * @type {LegendConfig}
     * @memberof LegendFixture
     */
    get config(): LegendConfig | undefined {
        return super.config;
    }

    /**
     * Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {LegendConfig} [legendConfig]
     * @returns
     * @memberof LegendAPI
     */
    _parseConfig(legendConfig?: LegendConfig) {
        if (!legendConfig || !legendConfig.root.children) {
            return;
        }

        const layers: LayerInstance[] | undefined = this.$vApp.$store.get(
            LayerStore.layers
        );
        let legendEntries: Array<LegendItem> = [];
        let stack: Array<any> = [];
        // initialize stack with all legend elements listed in config

        legendConfig.root.children.forEach(legendItem =>
            stack.push(legendItem)
        );

        // parse children from legend root structure through traversal
        while (stack.length > 0) {
            // pop legend entry in stack and check if it has a corresponding layer
            const lastEntry = stack.pop();
            lastEntry.layers = layers;

            // (assuming visibility sets and groups will specify in config `exclusiveVisibility` or `children` properties, respectively)
            if (
                lastEntry.children !== undefined ||
                lastEntry.exclusiveVisibility !== undefined
            ) {
                // create a wrapper legend object for group or visibility set
                let legendGroup;
                if (lastEntry.exclusiveVisibility) {
                    legendGroup = new LegendSet(lastEntry, lastEntry.parent);
                } else {
                    legendGroup = new LegendGroup(lastEntry, lastEntry.parent);
                }
                legendEntries.push(legendGroup);

                // NOTE: the below code is if storing nested legend items is necessary, alternative method is to just store top-level legend items and perform traversals, there are pros and cons for each method
                // if (lastEntry?.children !== undefined && lastEntry.children.length > 0) {
                //     // push all children in current legend node back onto stack (for legend groups)
                //     lastEntry?.children.forEach((groupChild: any) => {
                //         groupChild.parent = legendGroup;
                //         stack.push(groupChild);
                //     });
                // } else {
                //     // push all children in current legend node back onto stack (for visibility sets)
                //     lastEntry?.exclusiveVisibility.forEach((setChild: any) => {
                //         setChild.parent = legendGroup;
                //         stack.push(setChild);
                //     });
                // }
            } else if (
                lastEntry.layerId !== undefined &&
                layers !== undefined
            ) {
                // create a wrapper legend object for single legend entry
                const legendEntry = new LegendEntry(
                    lastEntry,
                    lastEntry.parent
                );
                legendEntries.push(legendEntry);
            }
        }

        // console.log('all legend entries: ', legendEntries);
        this.$vApp.$store.set(LegendStore.children, legendEntries);
        // TODO: validate legend items?
    }

    /**
     * Legend generation for layers.
     *
     * @param {BaseLayer} [layer]
     * @returns
     * @memberOf LegendFixture
     */
    generateDefaultLegend(
        layer: LayerInstance | undefined,
        parent: LegendGroup | undefined
    ) {
        // return if input is invalid
        if (!layer) {
            return;
        }

        // Creates legend config from layer tree children
        const parseLayerTreeChildren = (children: Array<TreeNode>): any => {
            return children.map((node: TreeNode) =>
                node.isLayer
                    ? {
                          name: node.name,
                          layerId: layer.id,
                          entryIndex: node.layerIdx
                      }
                    : {
                          name: node.name,
                          children: parseLayerTreeChildren(node.children)
                      }
            );
        };

        const layerTree: TreeNode = layer.getLayerTree();
        let entry: LegendEntry | LegendGroup;
        if (layerTree.children.length === 1 && layerTree.children[0].isLayer) {
            // create LegendEntry from layer
            const config = {
                name: layerTree.name,
                layers: this.$vApp.$store.get(LayerStore.layers),
                layerId: layer.id
            };
            entry = new LegendEntry(config, parent);
        } else {
            // create LegendGroup
            const config = {
                name: layerTree.name,
                layers: this.$vApp.$store.get(LayerStore.layers),
                children: parseLayerTreeChildren(layerTree.children)
            };
            entry = new LegendGroup(config, parent);
        }

        // add entry to store
        this.$vApp.$store.set(LegendStore.addEntry, entry);
    }
}
