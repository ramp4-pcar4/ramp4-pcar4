<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('legend.title') }}
        </template>

        <template #content>
            <legend-header></legend-header>
            <div v-focus-list>
                <legend-component
                    v-for="item in children"
                    :legendItem="item"
                    :key="item.uid"
                ></legend-component>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import type { PanelInstance } from '@/api';
import { defineComponent, defineAsyncComponent } from 'vue';
import type { PropType } from 'vue';
import type { LegendAPI } from './api/legend';
import type { LegendItem } from './store/legend-defs';

export default defineComponent({
    name: 'LegendScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    computed: {
        children(): Array<LegendItem> {
            let legendApi = this.$iApi.fixture.get<LegendAPI>('legend');
            if (legendApi) {
                return [...legendApi.getLegend()];
            }
            return [];
        }
    },

    components: {
        // async components to avoid circular dependency breakage
        'legend-header': defineAsyncComponent(() => import('./header.vue')),
        'legend-component': defineAsyncComponent(
            () => import('./components/component.vue')
        )
    }
});
</script>

<style lang="scss" scoped></style>
