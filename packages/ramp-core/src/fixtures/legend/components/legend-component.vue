<template>
    <component
        class="select-none"
        :is="templates[legendItem.type]"
        :legendItem="legendItem"
        :props="props"
    ></component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendStore } from '../store';
import { LegendItem } from '../store/legend-defs';

import LayerEntryV from './legend-entry.vue';
import LegendGroupV from './legend-group.vue';
import LegendVisibilitySetV from './legend-visibility-set.vue';
import LegendPlaceholderV from './legend-placeholder.vue';

@Component
export default class LegendComponentV extends Vue {
    @Prop() legendItem!: LegendItem;
    @Prop() props!: any;

    // Binds each type to its respective Vue component.
    templates = {
        VisibilitySet: LegendVisibilitySetV,
        LegendGroup: LegendGroupV,
        LegendEntry: LayerEntryV,
        Placeholder: LegendPlaceholderV
    };
}
</script>

<style lang="scss" scoped></style>
