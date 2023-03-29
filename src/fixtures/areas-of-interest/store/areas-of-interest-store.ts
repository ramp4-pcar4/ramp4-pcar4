import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { AreaOfInterest } from './areas-of-interest-state';

export const useAreasOfInterestStore = defineStore('areas-of-interest', () => {
    const areas = ref<Array<AreaOfInterest>>([]);
    return { areas };
});
