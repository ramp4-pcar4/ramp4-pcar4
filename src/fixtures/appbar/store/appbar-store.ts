import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { AppbarItemInstance, AppbarItemSet } from './appbar-state';

export const useAppbarStore = defineStore('appbar', () => {
    /**
     * A set of all fixed appbar buttons.
     */
    const items = ref<AppbarItemSet>({});

    /**
     * An ordered list of fixed appbar item ids.
     */
    const order = ref<string[][]>([]);

    /**
     * An ordered list of panel IDs. Used to display the buttons registered to the panels.
     */
    const temporary = ref<string[]>([]);

    const visible = computed<(AppbarItemInstance | string)[][]>(() =>
        order.value
            .map<(AppbarItemInstance | string)[]>((subArray: string[]) =>
                subArray
                    .map(id => items.value[id])
                    .filter(item => {
                        if (typeof item === 'string' || item.componentId) {
                            return true;
                        }
                    })
            )
            .filter(subArray => subArray.length > 0)
    );

    function addTempButton(value: string) {
        if (!temporary.value.includes(value)) {
            temporary.value.push(value);
        }
    }

    function removeButton(value: string) {
        const idx = temporary.value.indexOf(value);
        if (idx !== -1) {
            // remove from temporary list
            temporary.value.splice(idx, 1);
        }
        if (value in items.value) {
            // remove from items
            delete items.value[value];
        }
        order.value.forEach((subItems: (string | AppbarItemInstance)[]) => {
            const idx = subItems.indexOf(value);
            if (idx !== -1) {
                // remove from order sub group list
                subItems.splice(idx, 1);
            }
        });
    }

    return { items, order, temporary, visible, addTempButton, removeButton };
});
