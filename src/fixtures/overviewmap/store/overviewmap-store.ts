import type { RampMapConfig } from '@/geo/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOverviewmapStore = defineStore('overviewmap', () => {
    const mapConfig = ref<RampMapConfig>({
        lodSets: [],
        extentSets: [],
        basemaps: [],
        tileSchemas: [],
        initialBasemapId: ''
    });
    const basemaps = ref({});
    const startMinimized = ref(true);
    const expandFactor = ref(1.5);
    const borderColour = ref('#FF0000');
    const borderWidth = ref(1);
    const areaColour = ref('#000000');
    const areaOpacity = ref(0.25);

    function updateInitialBasemap(basemapId: string) {
        mapConfig.value.initialBasemapId = basemapId;
    }

    return {
        mapConfig,
        basemaps,
        startMinimized,
        expandFactor,
        borderColour,
        borderWidth,
        areaColour,
        areaOpacity,
        updateInitialBasemap
    };
});
