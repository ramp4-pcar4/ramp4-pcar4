import { defineStore } from 'pinia';
import type { DetailsItemInstance, DetailsRequestOrigin } from './details-state';
import type { IdentifyResult, LayerInstance } from '@/api';
import { ref } from 'vue';

export const useDetailsStore = defineStore('details', () => {
    /**
     * An object containing a features attributes.
     */
    const payload = ref<Array<IdentifyResult>>([]);

    /**
     * Details config properties
     */
    const properties = ref<{ [id: string]: DetailsItemInstance }>({});

    /**
     * Details default templates indexed by the identify result format.
     */
    const defaultTemplates = ref<{ [type: string]: string }>({});

    /**
     * The id of the feature that the current details panel is targeting.
     */
    const currentFeatureId = ref<string>();

    /**
     * Indicates whether greedy mode is off (0), or currently running for the last request timestamp.
     */
    const activeGreedy = ref<number>(0);

    /**
     * Indicates the time of the last highlighting action (request highlights or clear highlights).
     */
    const lastHilight = ref<number>(0);

    /**
     * Whether or not the details hilight toggle is on.
     */
    const hilightToggle = ref<boolean>(true);

    /**
     * The source of the last details panel opening call. Can be 'grid' or 'identify'.
     */
    const origin = ref<DetailsRequestOrigin>();

    function removeLayer(layer: LayerInstance) {
        // check if this layer's results are in the payload
        const idx = payload.value.findIndex(res => res.uid === layer.uid);
        if (idx !== -1) {
            // remove the result
            payload.value.splice(idx, 1);
        }
    }

    function addConfigProperty(item: DetailsItemInstance) {
        properties.value = { ...properties.value, [item.id]: item };
    }

    return {
        payload,
        properties,
        defaultTemplates,
        currentFeatureId,
        activeGreedy,
        lastHilight,
        hilightToggle,
        origin,
        removeLayer,
        addConfigProperty
    };
});
