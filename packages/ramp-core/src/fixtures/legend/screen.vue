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
import { PanelInstance } from '@/api';
import { defineComponent, PropType } from 'vue';

import { LegendStore } from './store';
import LegendHeaderV from './header.vue';
import LegendComponentV from './components/component.vue';

export default defineComponent({
    name: 'LegendScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    components: {
        'legend-header': LegendHeaderV,
        'legend-component': LegendComponentV
    },

    data() {
        return { children: get(LegendStore.children) };
    }
});
</script>

<style lang="scss" scoped></style>
