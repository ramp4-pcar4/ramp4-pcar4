import { FixtureInstance } from '@/api';
import { GridConfig } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends FixtureInstance {
    /**
     * Open the grid for the layer with the given uid.
     *
     * @param {string} id
     * @memberof GridAPI
     */
    openGrid(id: string): void {
        // get GridConfig for specified uid
        let gridSettings: GridConfig | undefined = this.$vApp.$store.get(`grid/grids@${id}`);

        // if no GridConfig exists for the given uid, create it.
        if (gridSettings === undefined) {
            gridSettings = {
                uid: id,
                state: new TableStateManager({
                    table: {
                        showFilter: true,
                        filterByExtent: false
                    }
                })
            };

            this.$vApp.$store.set('grid/addGrid!', gridSettings);
        }

        // open the grid
        this.$vApp.$store.set('grid/open', id ? id : null);

        this.$iApi.panel.open('grid-panel');
    }
}
