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
import { Vue, Options, Prop } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { get } from '@/store/pathify-helper';
import { PanelInstance } from '@/api';
import { ComputedRef } from 'vue';

import { LegendStore } from './store';
import { LegendEntry, LegendGroup } from './store/legend-defs';
import LegendHeaderV from './header.vue';
import LegendComponentV from './components/component.vue';

@Options({
    components: {
        'legend-header': LegendHeaderV,
        'legend-component': LegendComponentV
    }
})
export default class LegendScreenV extends Vue {
    @Prop() panel!: PanelInstance;
    // fetch store properties/data
    children: ComputedRef<Array<LegendEntry | LegendGroup>> = get(LegendStore.children);
    // @Get(LegendStore.children) children!: Array<LegendEntry | LegendGroup>;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }
}
</script>

<style lang="scss" scoped></style>
