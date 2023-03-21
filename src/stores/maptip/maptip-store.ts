import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Point } from '@/geo/api';

export const useMaptipStore = defineStore('maptip', () => {
    const maptipInstance = ref<any>(undefined);
    const maptipPoint = ref<Point | undefined>(undefined);
    const content = ref('');

    function setMaptipInstance(value: any) {
        maptipInstance.value = value;
    }

    function setMaptipPoint(value: Point) {
        maptipPoint.value = value;
    }

    function setMaptipContent(value: string) {
        content.value = value;
    }

    return {
        maptipInstance,
        maptipPoint,
        content,
        setMaptipInstance,
        setMaptipPoint,
        setMaptipContent
    };
});
