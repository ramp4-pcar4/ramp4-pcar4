import type { Attribution, MapCoords, ScaleBar, LangToggle } from '@/geo/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMapCaptionStore = defineStore('map-caption', () => {
    const attribution = ref<Attribution>({ text: {} });
    const scale = ref<ScaleBar>({});
    const coords = ref<MapCoords>({});
    const langtoggle = ref<LangToggle>({});

    function toggleScale(value?: boolean) {
        if (value !== undefined) {
            scale.value.isImperialScale = value;
        } else {
            scale.value.isImperialScale = !scale.value.isImperialScale;
        }
    }

    function setAttribution(newAttribution: Attribution) {
        // note: the 'text' property of an Attribution object is an object that has
        // a property named 'value'. This is different from the Vue 'value' property used
        // to access the value of a ref
        attribution.value.text!.value = newAttribution!.text!.value;
        attribution.value.text!.disabled = newAttribution!.text!.disabled;
    }

    return {
        attribution,
        scale,
        coords,
        langtoggle,
        toggleScale,
        setAttribution
    };
});
