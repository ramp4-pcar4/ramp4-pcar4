<template>
    <component
        class="select-none"
        :is="templates[legendItem.type]"
        :legendItem="legendItem"
        :props="props"
    ></component>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

import { LegendItem, LegendTypes } from '../store/legend-defs';

import LayerEntryV from './entry.vue';
import LegendGroupV from './group.vue';
import LegendVisibilitySetV from './visibility-set.vue';
import LegendPlaceholderV from './placeholder.vue';

export default class LegendComponentV extends Vue {
    @Prop() legendItem!: LegendItem;
    @Prop() props!: any;

    // Binds each type to its respective Vue component.
    templates = {
        [LegendTypes.Set]: LegendVisibilitySetV,
        [LegendTypes.Group]: LegendGroupV,
        [LegendTypes.Entry]: LayerEntryV,
        [LegendTypes.Placeholder]: LegendPlaceholderV
    };
}
</script>

<style lang="scss" scoped></style>
