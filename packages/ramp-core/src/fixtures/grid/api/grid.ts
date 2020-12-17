import { FixtureInstance } from '@/api';
import { GridConfig } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends FixtureInstance {
    /**
     * Open the grid for the layer with the given uid.
     *
     * @param {string} uid
     * @memberof GridAPI
     */
    openGrid(uid: string): void {
        // get GridConfig for specified uid
        let gridSettings: GridConfig | undefined = this.$vApp.$store.get(`grid/grids@${uid}`);

        // if no GridConfig exists for the given uid, create it.
        if (gridSettings === undefined) {
            gridSettings = {
                uid: uid,
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
        this.$vApp.$store.set('grid/currentUid', uid ? uid : null);

        this.$iApi.panel.open('grid-panel');
    }
}
