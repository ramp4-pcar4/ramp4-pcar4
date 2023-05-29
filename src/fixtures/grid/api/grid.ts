import { FixtureInstance } from '@/api';
import { useGridStore } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends FixtureInstance {
    private gridStore = useGridStore(this.$vApp.$pinia);
    /**
     * Open the grid with the given id.
     *
     * @param {string} id
     * @param {boolean} [open] force panel open or closed
     * @memberof GridAPI
     */
    toggleGrid(id: string, open?: boolean): void {
        // fetch id of grid containing layer with given id
        const gridId = Object.keys(this.gridStore.grids).find(gid =>
            JSON.stringify(this.gridStore.grids[gid].layerIds).includes(id)
        );

        // if no GridConfig exists for the given id, create it.
        if (!gridId) {
            this.gridStore.addGrid({
                id: id,
                layerIds: [id],
                state: new TableStateManager()
            });
        }

        const prevId = this.gridStore.currentId;
        this.gridStore.currentId = gridId ?? id;

        const panel = this.$iApi.panel.get('grid');

        if (open === false) {
            // force close
            panel.close();
            return;
        }

        if (!panel.isOpen || !panel.isVisible) {
            this.$iApi.panel.open('grid');
        } else if (prevId !== id || open === true) {
            // don't toggle off if different layer or force open, use key prop to force rerender
            panel.show({ screen: 'grid-screen', props: { key: id } });
        } else {
            panel.close();
        }
    }

    /**
     * Parses the grid config JSON snippet from the config file.
     *
     * @param {any} config
     * @memberof GridAPI
     */
    _parseConfig(config?: any) {
        this.handlePanelWidths(['grid']);

        const layerGridConfigs: any = this.getLayerFixtureConfigs();

        // parse merge grid configs
        if (config) {
            config.mergeGrids.forEach((mergeGrid: any) => {
                const layerIds: string[] = [];

                // extract grid options
                const { gridId, layers, ...gridOptions } = mergeGrid;

                // collate merged layer ids and remove them from layer specific grid configs
                // in case they are defined in two places
                layers.forEach((layer: any) => {
                    if (layer.sublayers) {
                        layer.sublayers?.forEach((sl: number) => {
                            layerIds.push(`${layer.layerId}-${sl}`);
                            delete layerGridConfigs[`${layer.layerId}-${sl}`];
                        });
                    } else {
                        layerIds.push(layer.layerId);
                        delete layerGridConfigs[layer.layerId];
                    }
                });

                const gridConfig = {
                    id: gridId,
                    layerIds: layerIds,
                    state: new TableStateManager(gridOptions)
                };
                this.gridStore.addGrid(gridConfig);
            });
        }

        // construct the details config from the layer fixture configs
        Object.keys(layerGridConfigs).forEach((layerId: string) => {
            const gridConfig = {
                id: layerId,
                layerIds: [layerId],
                state: new TableStateManager(layerGridConfigs[layerId])
            };

            // save the item in the store
            this.gridStore.addGrid(gridConfig);
        });
    }
}
