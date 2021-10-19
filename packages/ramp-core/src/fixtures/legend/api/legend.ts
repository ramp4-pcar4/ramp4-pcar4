import { FixtureInstance, LayerInstance } from '@/api';
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
            } else if (lastEntry.layerId !== undefined) {
                // create a wrapper legend object for single legend entry
                // if the entry is a sublayer, override the entry id to the sublayers id
                if (lastEntry.entryIndex !== undefined) {
                    lastEntry.layerId = `${lastEntry.layerId}-${lastEntry.entryIndex}`;
                }
                const legendEntry = new LegendEntry(
                    lastEntry,
                    lastEntry.parent
                );
                legendEntries.push(legendEntry);
            }
        }

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

        const entry = new LegendEntry(
            {
                layerId: layer.id,
                name: layer.name,
                isDefault: true,
                layers: this.$vApp.$store.get(LayerStore.layers),
                entryIndex: layer.layerIdx
            },
            parent
        );
        this.$vApp.$store.set(LegendStore.addEntry, entry);
    }
}
