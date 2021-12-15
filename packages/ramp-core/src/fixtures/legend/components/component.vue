<template>
    <component
        class="select-none"
        :is="templates[this.legendItem.type]"
        :legendItem="legendItem"
        :props="props"
    ></component>
</template>

<script lang="ts">
import LayerEntryV from './entry.vue';
import LegendGroupV from './group.vue';
import LegendPlaceholderV from './placeholder.vue';
import { defineComponent, PropType, markRaw } from 'vue';
import { LegendItem, LegendTypes } from '../store/legend-defs';

export default defineComponent({
    name: 'LegendComponentV',
    props: {
        legendItem: { type: Object as PropType<LegendItem>, required: true },
        props: { type: Object }
    },
    computed: {
        templates(): any {
            return {
                [LegendTypes.Set]: markRaw(LegendGroupV),
                [LegendTypes.Group]: markRaw(LegendGroupV),
                [LegendTypes.Entry]: markRaw(LayerEntryV),
                [LegendTypes.Placeholder]: markRaw(LegendPlaceholderV)
            };
        }
    },
    mounted() {
        this.legendItem.loadPromise.then(() => {
            // need to manually update once the item loads to avoid some reactivity nuisances
            this.$forceUpdate();
        });
    }
});
</script>

<style lang="scss" scoped></style>
