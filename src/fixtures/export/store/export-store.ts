import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useExportStore = defineStore('export', () => {
    const componentSelectedState = ref({
        title: true,
        map: true,
        mapElements: true,
        legend: true,
        footnote: true,
        timestamp: true
    });

    const fileName = ref<string>('');

    function toggleSelected(value: {
        name:
            | 'title'
            | 'map'
            | 'mapElements'
            | 'legend'
            | 'footnote'
            | 'timestamp';
        selected?: boolean;
    }) {
        if (componentSelectedState.value[value.name] !== undefined) {
            const currValue: boolean = componentSelectedState.value[value.name];
            componentSelectedState.value[value.name] =
                value.selected !== undefined ? value.selected : !currValue;
        }
    }

    return { componentSelectedState, fileName, toggleSelected };
});
