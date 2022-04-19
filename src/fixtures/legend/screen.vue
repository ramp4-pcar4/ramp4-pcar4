<template>
    <panel-screen>
        <template #header>
            {{ $t('legend.title') }}
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="this.panel.isPinned"></pin>
            <close @click="panel.close()"></close>
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
import { get } from '@/store/pathify-helper';
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
        return { children: get(LegendStore.children) };
    }
});
</script>

<style lang="scss" scoped></style>
