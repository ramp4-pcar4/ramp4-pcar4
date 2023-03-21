import type { Attribution, MapCoords, ScaleBar } from '@/geo/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMapCaptionStore = defineStore('map-caption', () => {
    const attribution = ref<Attribution>({ text: {}, logo: {} });
    const scale = ref<ScaleBar>({});
    const coords = ref<MapCoords>({});

    function toggleScale(value?: boolean) {
        if (value !== undefined) {
            scale.value.isImperialScale = value;
        } else {
            scale.value.isImperialScale = !scale.value.isImperialScale;
        }
    }

    return { attribution, scale, coords, toggleScale };
});
