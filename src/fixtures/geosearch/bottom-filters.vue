<template>
    <div class="rv-geosearch-bottom-filters">
        <div class="bg-white">
            <label class="ml-8 cursor-pointer"
                ><input
                    type="checkbox"
                    class="form-checkbox border-2 mx-8 border-gray-600 cursor-pointer"
                    :checked="resultsVisible"
                    @change="
                        updateMapExtent(
                            ($event.target as HTMLInputElement).checked
                        )
                    "
                />{{ t('geosearch.visible') }}</label
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalEvents } from '@/api/internal';
import type { InstanceAPI } from '@/api/internal';
import type { Extent } from '@/geo/api';
import { GeosearchStore } from './store';
import { debounce } from 'throttle-debounce';

import { computed, inject, onBeforeUnmount, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const store = useStore();

const resultsVisible = computed<boolean>(
    () => store.get(GeosearchStore.resultsVisible)!
);

const onMapExtentChange = debounce(300, (newExtent: Extent) => {
    latLongExtent(newExtent).then((e: Extent) => {
        setMapExtent({
            extent: e,
            visible: resultsVisible.value
        });
    });
});

const setMapExtent = (mapExtent: any) => {
    store.dispatch(GeosearchStore.setMapExtent, mapExtent);
};

// Computes the extent information.
const latLongExtent = async (ext: Extent): Promise<Extent> => {
    if (ext.sr.wkid === 4326) {
        return ext;
    } else {
        // var needed to get around casting complaints with async syntax
        const pExt = await iApi.geo.proj.projectGeometry(4326, ext);
        return pExt as Extent;
    }
};

// Called when the checkbox is pressed. Updates the geosearch extent.
const updateMapExtent = (visible: boolean): void => {
    latLongExtent(iApi.geo.map.getExtent()).then(e => {
        setMapExtent({
            extent: e,
            visible: visible
        });
    });
};

onMounted(() => {
    // TODO decide if this event handler should go into the default ramp events, or remain as hard-bound to geosearch.
    //      hard-bound means no one outside can un-hook and replace with a different reaction.
    //      going default means the handler function needs to be public / on the geosearch api.
    //      ^ not entirely true. a person can still unhook the event, however our public documentation will
    //        have no mention of the event handler name. A person would need to discover it.
    // TODO also consider if this handler requires debounce because MAP_EXTENTCHANGE fires at a high rate
    iApi.event.on(
        GlobalEvents.MAP_EXTENTCHANGE,
        onMapExtentChange,
        'geosearch_map_extent'
    );
});

/**
 * This is called while the component is still functional right before everything is removed.
 */
onBeforeUnmount(() => {
    iApi.event.off('geosearch_map_extent');
});
</script>

<style></style>
