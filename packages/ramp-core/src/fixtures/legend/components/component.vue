<template>
    <component
        class="select-none"
        :is="getCurrentTemplate()"
        :legendItem="legendItem"
        :props="props"
        :key="legendItem.uid"
    ></component>
</template>

<script lang="ts">
import LayerEntryV from './entry.vue';
import LegendGroupV from './group.vue';
import LegendVisibilitySetV from './visibility-set.vue';
import LegendPlaceholderV from './placeholder.vue';
import { defineComponent, PropType } from 'vue';
import { LegendItem, LegendTypes } from '../store/legend-defs';

export default defineComponent({
    name: 'LegendComponentV',
    props: {
        legendItem: { type: Object as PropType<LegendItem>, required: true },
        props: { type: Object }
    },
    methods: {
        getCurrentTemplate(): string {
            const templates: any = {
                [LegendTypes.Set]: LegendVisibilitySetV,
                [LegendTypes.Group]: LegendGroupV,
                [LegendTypes.Entry]: LayerEntryV,
                [LegendTypes.Placeholder]: LegendPlaceholderV
            };
            return templates[this.legendItem.type];
        }
    }
});
</script>

<style lang="scss" scoped></style>
