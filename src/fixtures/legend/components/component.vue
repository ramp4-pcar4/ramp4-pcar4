<template>
    <KeepAlive>
        <component
            class="select-none"
            :is="templates[legendItem.type]"
            :legendItem="legendItem"
            :props="props"
        ></component>
    </KeepAlive>
</template>

<script lang="ts">
import LayerEntryV from './entry.vue';
import LegendGroupV from './group.vue';
import LegendPlaceholderV from './placeholder.vue';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
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
                [LegendTypes.Set]: LegendGroupV,
                [LegendTypes.Group]: LegendGroupV,
                [LegendTypes.Entry]: LayerEntryV,
                [LegendTypes.Placeholder]: LegendPlaceholderV
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
