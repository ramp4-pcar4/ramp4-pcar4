import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNortharrowStore = defineStore('northarrow', () => {
    const arrowIcon = ref('');
    const poleIcon = ref('');

    return { arrowIcon, poleIcon };
});
