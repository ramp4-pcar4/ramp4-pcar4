<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('areas-of-interest.title') }}
        </template>

        <template #content>
            <div class="h-600 overflow-y-auto">
                <div class="mx-5">
                    <ul v-focus-list v-if="areas.length > 0">
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

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import AreaOfInterestV from './item.vue';

import type { PanelInstance } from '@/api';
import { AreasOfInterestStore } from './store';
import type { AreaOfInterest } from './store';

export default defineComponent({
    name: 'AreasOfInterestScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>
        }
    },
    components: {
        'area-item': AreaOfInterestV
    },
    data() {
        return {
            areas: this.get(AreasOfInterestStore.areas),
            showThumbnail: false
        };
    },
    mounted() {
        this.showThumbnail = this.areas.some(
            (area: AreaOfInterest) => area.thumbnail
        );
    }
});
</script>

<style lang="scss" scoped></style>
