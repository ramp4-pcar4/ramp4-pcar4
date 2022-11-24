import { FixtureInstance } from '@/api';
import { GridStore } from '../store';
import type { GridConfig } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends FixtureInstance {
    /**
     * Open the grid for the layer with the given id.
     *
     * @param {string} id
     * @param {boolean} [open] force panel open or closed
     * @memberof GridAPI
     */
    toggleGrid(id: string, open?: boolean): void {
        // get GridConfig for specified id
        let gridSettings: GridConfig | undefined = this.$vApp.$store.get(
            `${GridStore.grids}@${id}`
        );

        // if no GridConfig exists for the given id, create it.
        if (gridSettings === undefined) {
            gridSettings = {
                id: id,
                state: new TableStateManager({})
            };

            this.$vApp.$store.set('grid/addGrid!', gridSettings);
        }

        const prevId = this.$vApp.$store.get(GridStore.currentId);
        this.$vApp.$store.set(GridStore.currentId, id ? id : null);

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
     * @memberof GridAPI
     */
    _parseConfig() {
        this.handlePanelWidths(['grid']);

        const layerGridConfigs: any = this.getLayerFixtureConfigs();

        // construct the details config from the layer fixture configs
        Object.keys(layerGridConfigs).forEach((layerId: string) => {
            const gridConfig = {
                id: layerId,
                state: new TableStateManager(layerGridConfigs[layerId])
            };

            // save the item in the store
            this.$vApp.$store.set('grid/addGrid!', gridConfig);
        });
    }
}
