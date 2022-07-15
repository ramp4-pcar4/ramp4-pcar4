<template>
    <component
        class="select-none"
        :is="templates[legendItem.type]"
        :legendItem="legendItem"
        :props="props"
    ></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { LegendItem, LegendTypes } from '../store/legend-defs';
import LayerEntryV from './entry.vue';
import LegendGroupV from './group.vue';
import LegendPlaceholderV from './placeholder.vue';
import LegendErrorV from './error.vue';

export default defineComponent({
    name: 'LegendComponentV',
    props: {
        legendItem: { type: Object as PropType<LegendItem>, required: true },
        props: { type: Object }
    },
    computed: {
        templates(): any {
            return {
                [LegendTypes.Set]: LegendGroupV,
                [LegendTypes.Group]: LegendGroupV,
                [LegendTypes.Entry]: LayerEntryV,
                [LegendTypes.Placeholder]: LegendPlaceholderV,
                [LegendTypes.Error]: LegendErrorV
            };
        }
    },
    mounted() {
        // need to manually update once the item loads/fails to avoid some reactivity nuisances
        this.legendItem.loadPromise
            .then(() => {
                this.$forceUpdate();
            })
            .catch(() => {
                this.$forceUpdate();
            });
    }
});
</script>

<style lang="scss" scoped></style>
