import { FixtureInstance } from '@/api';
import { LegendConfig, LegendElement } from '../store';
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

        let legendEntries: Array<LegendElement> = [];
        let stack: Array<any> = [];
        // initialize stack
        legendConfig.root.children.forEach(legendItem => stack.push(legendItem));

        // parse children from legend root structure through traversal
        while (stack.length > 0) {
            // pop legend entry in stack and check if it has a corresponding layer
            const lastEntry = stack.pop();
            // TODO: create legend wrapper object once class definitions implemented and bind to legend object
            if (lastEntry.layerId !== undefined) {
                // TODO: figure out a good approach to wait and map layerId to uid then call `getLayerById` to bind GeoApi BaseLayer to legend object
                // lastEntry.layer = this.$vApp.$store.get('layer/getLayerById', lastEntry.layerId);
            }
            legendEntries.push(lastEntry);
            // push all children in current legend node back onto stack
            if (lastEntry?.children !== undefined && lastEntry.children.length > 0) {
                lastEntry?.children.forEach((child: any) => stack.push(child));
            }
        }

        this.$vApp.$store.set('legend/children', legendEntries);
        // TODO: validate legend items?
    }
}
