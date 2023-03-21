import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { AreaOfInterest } from './areas-of-interest-state';

export const useAreasOfInterestStore = defineStore('areasOfInterest', () => {
    const areas = ref<Array<AreaOfInterest>>([]);
    return { areas };
});
