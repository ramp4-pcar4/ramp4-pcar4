import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMetadataStore = defineStore('metadata', () => {
    const status = ref('');
    const response = ref({ type: 'LineString', coordinates: [] });

    return { status, response };
});
