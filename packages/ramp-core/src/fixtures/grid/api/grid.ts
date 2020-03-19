import Vue from 'vue';
import { APIScope } from '@/api/common';
import { InstanceAPI } from '@/api/internal';
import { PanelConfig } from '@/store/modules/panel';
import { GridStore, GridConfig, GridState } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends APIScope {
    constructor(iApi: InstanceAPI, panel: PanelConfig) {
        super(iApi);
        this.$iApi.grid = this;

        this.panel = panel;
    }

    /**
     * Open the grid for the layer with the given uid.
     *
     * @param {string} id
     * @memberof GridAPI
     */
    open(id: string): void {
        // get GridConfig for specified uid
        let gridSettings: GridConfig | undefined = this.$vApp.$store.get(`grid/grids@${id}`);

        // if no GridConfig exists for the given uid, create it.
        if (gridSettings === undefined) {
            gridSettings = {
                uid: id,
                state: new TableStateManager({
                    table: {
                        showFilter: true,
                        filterByExtent: false,
                        lazyFilter: true
                    }
                })
            };

            this.$vApp.$store.set('grid/addLayer!', gridSettings);
        }

        // open the grid
        this.$vApp.$store.set('grid/open', id ? id : null);
        this.$iApi.panel.open(this.panel);
    }
}

export interface GridAPI {
    panel: PanelConfig;
}
