<template>
    <panel-screen>
        <template #header>
            <!-- TODO: add translation -->
            Legend
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned"></pin>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <legend-header></legend-header>
            <legend-component v-for="(item, idx) in children" :legendItem="item" :key="idx"></legend-component>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelInstance } from '@/api';

import { LegendStore } from './store';
import { LegendItem } from './store/legend-defs';
import LegendHeader from './legend-header.vue';
import LegendComponent from './components/legend-component.vue';

@Component({
    components: {
        LegendHeader,
        LegendComponent
    }
})
export default class LegendV extends Vue {
    @Prop() panel!: PanelInstance;
    // fetch store properties/data
    @Get(LegendStore.children) children!: Array<LegendItem>;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }
}
</script>

<style lang="scss" scoped></style>
