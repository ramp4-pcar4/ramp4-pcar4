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

import { LegendStore } from './store';

export default defineComponent({
    name: 'LegendScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    components: {
        // async components to avoid circular dependency breakage
        'legend-header': defineAsyncComponent(() => import('./header.vue')),
        'legend-component': defineAsyncComponent(
            () => import('./components/component.vue')
        )
    },

    data() {
        return { children: this.get(LegendStore.children) };
    }
});
</script>

<style lang="scss" scoped></style>
