<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('areas-of-interest.title') }}
        </template>

        <template #content>
            <div class="h-600 overflow-y-auto">
                <div class="mx-5">
                    <ul v-focus-list v-if="areas!.length > 0">
                        <li v-for="(area, idx) in areas" :key="idx">
                            <area-item
                                :area="area"
                                :show-thumbnail="showThumbnail"
                                class="block relative overflow-hidden"
                            ></area-item>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { PropType } from 'vue';

import AreaItem from './item.vue';

import type { PanelInstance } from '@/api';
import { AreasOfInterestStore } from './store';
import type { AreaOfInterest } from './store';
import { useStore } from 'vuex';

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>
    }
});

const store = useStore();

const areas = computed<AreaOfInterest[] | undefined>(() =>
    store.get(AreasOfInterestStore.areas)
);
const showThumbnail = ref(false);

onMounted(() => {
    showThumbnail.value = !!areas.value?.some(
        (area: AreaOfInterest) => area.thumbnail
    );
});
</script>

<style lang="scss" scoped></style>
