import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInstanceStore = defineStore('instance', () => {
    const started = ref<boolean>(false);
    return { started };
});
