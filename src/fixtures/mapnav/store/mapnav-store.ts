import type { MapnavItemSet } from './mapnav-state';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMapnavStore = defineStore('mapnav', () => {
    /**
     * A set of all open (visible and hidden) mapnav items.
     */
    const items = ref<MapnavItemSet>({});

    /**
     * An ordered list of mapnav item ids.
     */
    const order = ref<string[]>([]);

    function removeItem(value: string) {
        if (value in items.value) {
            delete items.value[value];
        }
        const index = order.value.indexOf(value);
        if (index !== -1) {
            order.value.splice(index, 1);
        }
    }

    return { items, order, removeItem };
});
