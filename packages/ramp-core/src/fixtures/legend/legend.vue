<template>
    <panel-screen>
        <template #header>
            {{ $t('legend.title') }}
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned"></pin>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <legend-header></legend-header>
            <div v-focus-list>
                <legend-component v-for="(item, idx) in children" :legendItem="item" :key="idx"></legend-component>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelInstance } from '@/api';

import { LegendStore } from './store';
import { LegendItem } from './store/legend-defs';
import LegendHeaderV from './legend-header.vue';
import LegendComponentV from './components/legend-component.vue';

@Component({
    components: {
        'legend-header': LegendHeaderV,
        'legend-component': LegendComponentV
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
