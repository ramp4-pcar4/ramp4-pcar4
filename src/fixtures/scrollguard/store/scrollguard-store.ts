import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScrollguardStore = defineStore('scrollguard', () => {
    const enabled = ref(false);

    function setEnabled(value: boolean) {
        enabled.value = value;
    }

    return { enabled, setEnabled };
});
