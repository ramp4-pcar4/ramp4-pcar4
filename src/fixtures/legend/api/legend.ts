import { FixtureInstance, LayerInstance } from '@/api';
import { LegendStore } from '../store';
import type { LegendConfig } from '../store';
import { LegendItem, LegendEntry, LegendGroup } from '../store/legend-defs';

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
        // get all layer fixture configs to read layer-specific legend properties
        let layerLegendConfigs: { [layerId: string]: any } =
            this.getLayerFixtureConfigs();

        // parse the header controls, or default the controls
        let controls: Array<string> = legendConfig?.headerControls?.slice() ?? [
            'wizard',
            'layerReorder',
            'groupToggle',
            'visibilityToggle'
        ];
        this.$vApp.$store.set(LegendStore.headerControls, controls);

        if (!legendConfig || !legendConfig.root.children) {
            return;
        }

        this.handlePanelWidths(['legend']);

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

            // pass the layer fixture config to legend item for easy access
            lastEntry.layerLegendConfigs = layerLegendConfigs;

            // (assuming visibility sets and groups will specify in config `exclusiveVisibility` or `children` properties, respectively)
            if (
                lastEntry.children !== undefined ||
                lastEntry.exclusiveVisibility !== undefined
            ) {
                // create a wrapper legend object for group or visibility set
                let legendGroup = new LegendGroup(lastEntry, lastEntry.parent);
                legendEntries.push(legendGroup);
            } else if (lastEntry.layerId !== undefined) {
                // create a wrapper legend object for single legend entry
                // if the entry is a sublayer, override the entry id to the sublayers id
                if (lastEntry.sublayerIndex !== undefined) {
                    lastEntry.layerParentId = lastEntry.layerId;
                    lastEntry.layerId = `${lastEntry.layerId}-${lastEntry.sublayerIndex}`;
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

        // update legend in case layers were added before the legend was created
        this.$iApi.geo.layer.allLayers().forEach(l => {
            this.updateLegend(l);
        });
    }

    /**
     * Generate a legend entry/group given a layer
     *
     * @param {LayerInstance} layer the layer to be used for the legend entry
     * @param {LegendGroup | undefined} parent the parent legend group for this entry
     * @memberOf LegendFixture
     */
    generateLegend(layer: LayerInstance, parent?: LegendGroup | undefined) {
        // if layer supports sublayers, create a legend group
        // else create a legend entry
        const item: LegendEntry | LegendGroup = layer.supportsSublayers
            ? new LegendGroup(
                  {
                      layer: layer,
                      name: layer.name
                  },
                  parent
              )
            : new LegendEntry(
                  {
                      layer: layer,
                      name: layer.name,
                      layerId: layer.id
                  },
                  parent
              );

        // add the legend entry/group to store
        this.$vApp.$store.set(LegendStore.addItem, item);

        if (layer.userAdded) {
            this.$iApi.updateAlert(
                this.$vApp.$t('legend.alert.layerAdded', {
                    name: layer.name
                })
            );
        }
    }

    /**
     * Update an existing legend entry with data from the given layer
     * Does nothing if the legend entry is not found
     *
     * @param {LayerInstance} layer the layer to update the legend entry with
     * @memberOf LegendFixture
     */
    updateLegend(layer: LayerInstance) {
        // helper function to link a layer into a legend entry
        const updateEntry = (layer: LayerInstance) => {
            const entry: LegendEntry | undefined = this.$vApp.$store.get(
                LegendStore.getChildById,
                layer.id
            );
            entry?.loadLayer(layer);
        };

        layer.isLayerLoaded().then(() => {
            updateEntry(layer); // update the root entry first
            if (layer.supportsSublayers) {
                layer.sublayers.forEach((sublayer: LayerInstance) => {
                    updateEntry(sublayer); // the legend entries will use the sublayer
                });
            }
        });
    }
}
