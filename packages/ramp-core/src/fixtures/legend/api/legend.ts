import { FixtureInstance } from '@/api';
import { LegendConfig } from '../store';
import { LegendStore } from '../store';
import { LayerStore } from '@/store/modules/layer';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

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

        const layers: BaseLayer[] | undefined = this.$vApp.$store.get(LayerStore.layers);
        // let legendEntries: Array<LegendItem> = [];
        let stack: Array<any> = [];
        // initialize stack with all legend elements listed in config
        legendConfig.root.children.forEach(legendItem => stack.push(legendItem));

        // parse children from legend root structure through traversal
        while (stack.length > 0) {
            // pop legend entry in stack and check if it has a corresponding layer
            const lastEntry = stack.pop();
            this.$vApp.$store.set(LegendStore.addLegendItem, { config: lastEntry, layers: layers });

            // push all children in current legend node back onto stack (for legend groups)
            if (lastEntry?.children !== undefined && lastEntry.children.length > 0) {
                lastEntry?.children.forEach((groupChild: any) => stack.push(groupChild));
            }
            // push all children in current legend node back onto stack (for visibility sets)
            if (lastEntry?.exclusiveVisibility !== undefined && lastEntry.exclusiveVisibility.length > 0) {
                lastEntry?.exclusiveVisibility.forEach((setChild: any) => stack.push(setChild));
            }
        }
    }
}
