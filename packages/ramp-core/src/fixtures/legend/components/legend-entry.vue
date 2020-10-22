<template>
    <div class="legend-item">
        <div
            class="default-focus-style p-5 flex items-center hover:bg-gray-200 cursor-pointer h-44"
            @click="$iApi.fixture.get('grid').openGrid(legendItem.layer.uid)"
            v-focus-item
        >
            <!-- symbology stack toggle-->
            <div class="relative w-32 h-32">
                <button @click.stop="toggleSymbology">
                    <symbology-stack class="w-32 h-32" :visible="displaySymbology" :layer="legendItem.layer" />
                </button>
                <tooltip v-if="!displaySymbology" position="right"> {{ $t('legend.expand') }} </tooltip>
            </div>

            <!-- name -->
            <div class="flex-1 truncate ml-15">
                <span>{{ legendItem.name }}</span>
            </div>

            <!-- visibility -->
            <div>
                <checkbox :value="visibility" :isRadio="props && props.isVisibilitySet" :legendItem="legendItem" />
            </div>
        </div>

        <!-- Symbology Stack Section -->
        <div v-if="displaySymbology">
            <!-- display each symbol -->
            <div
                class="p-5 flex items-center default-focus-style"
                v-for="(item, idx) in legendItem.layer.getLegend()"
                :key="idx"
                v-focus-item
            >
                <div class="symbologyIcon">
                    <span v-html="item.svgcode"></span>
                </div>

                <div class="flex-1 truncate ml-15">{{ item.label }}</div>

                <!-- TODO: add visibility button functionality. It should toggle each symbol individually. -->
                <checkbox :value="visibility" :legendItem="legendItem" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendStore } from '../store';
import { LegendEntry } from '../store/legend-defs';

import CheckboxV from './checkbox.vue';
import SymbologyStack from './symbology-stack.vue';

@Component({
    components: {
        checkbox: CheckboxV,
        'symbology-stack': SymbologyStack
    }
})
export default class LegendEntryV extends Vue {
    @Prop() legendItem!: LegendEntry;
    @Prop() props!: any;

    displaySymbology: boolean = false;
    visibility: boolean | undefined = this.legendItem.visibility;

    mounted(): void {
        this.legendItem.layer?.visibilityChanged.listen((visibility: boolean) => {
            this.visibility = this.legendItem.visibility;
        });
    }

    /**
     * Display symbology stack for the layer.
     */
    toggleSymbology(): void {
        this.displaySymbology = !this.displaySymbology;
    }
}
</script>

<style lang="scss" scoped></style>
