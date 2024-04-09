import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExtentguardStore = defineStore('extentguard', () => {
    const active = ref(false);

    function setActive(value: boolean) {
        active.value = value;
    }

    const enforcing = ref(false);

    function setEnforcing(value: boolean) {
        enforcing.value = value;
    }

    const alwaysOn = ref(false);

    function setAlwaysOn(value: boolean) {
        alwaysOn.value = value;
    }

    const extentSetIds = ref<Array<string>>([]);

    function setExtentSetIds(value: Array<string>) {
        extentSetIds.value = value;
    }

    return {
        active,
        setActive,
        enforcing,
        setEnforcing,
        alwaysOn,
        setAlwaysOn,
        extentSetIds,
        setExtentSetIds
    };
});
