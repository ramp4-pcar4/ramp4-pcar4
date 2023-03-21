import type { GridConfig } from './grid-state';
import type { PanelConfig } from '@/stores/panel';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGridStore = defineStore('grid', () => {
    /**
     * A list of all existing grid configuration files.
     */
    const grids = ref<{ [id: string]: GridConfig }>({});

    /**
     * The grid panel.
     */
    const panel = ref<PanelConfig>();

    /**
     * The id of the layer that is currently open in the grid.
     */
    const currentId = ref<string>();

    function addGrid(value: GridConfig) {
        grids.value = { ...grids.value, [value.id]: value };
    }

    function removeGrid(id: string) {
        if (grids.value[id] !== undefined) {
            delete grids.value[id];
        }
    }

    return { grids, panel, currentId, addGrid, removeGrid };
});
