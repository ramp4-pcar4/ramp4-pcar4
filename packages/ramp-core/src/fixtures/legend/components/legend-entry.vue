<template>
    <div class="legend-item">
        <div class="relative">
            <div
                class="default-focus-style p-5 flex items-center hover:bg-gray-200 cursor-pointer h-44"
                @click="toggleGrid"
                v-focus-item="'show-truncate'"
                @mouseover.stop="$event.currentTarget._tippy.show()"
                @mouseout.self="$event.currentTarget._tippy.hide()"
                :content="$t('legend.entry.data')"
                v-tippy="{
                    placement: 'top-start',
                    trigger: 'manual focus',
                    aria: 'describedby',
                    multiple: true
                }"
                truncate-trigger
                :aria-label="legendItem.name"
            >
                <!-- symbology stack toggle-->
                <div class="relative w-32 h-32">
                    <button
                        @click.stop="toggleSymbology"
                        tabindex="-1"
                        :class="{
                            'cursor-default': !legendItem._controlAvailable(
                                'symbology'
                            )
                        }"
                        :disabled="!legendItem._controlAvailable('symbology')"
                        :content="
                            legendItem.displaySymbology
                                ? $t('legend.symbology.hide')
                                : $t('legend.symbology.expand')
                        "
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                    >
                        <symbology-stack
                            :class="{
                                'pointer-events-none': !legendItem._controlAvailable(
                                    'symbology'
                                )
                            }"
                            class="w-32 h-32"
                            :visible="legendItem.displaySymbology"
                            :layer="legendItem.layer"
                            :uid="legendItem.uid"
                            :key="legendItem.uid"
                        />
                    </button>
                </div>

                <!-- name -->
                <div
                    class="flex-1 ml-15 pointer-events-none"
                    v-truncate="{ externalTrigger: true }"
                >
                    <span>{{ legendItem.name }}</span>
                </div>

                <!-- options dropdown menu -->
                <options :legendItem="legendItem"></options>

                <!-- visibility -->
                <checkbox
                    :value="visibility"
                    :isRadio="
                        legendItem.parent &&
                            legendItem.parent.type === 'VisibilitySet'
                    "
                    :legendItem="legendItem"
                    :disabled="!legendItem._controlAvailable('visibility')"
                />
            </div>
        </div>

        <!-- Symbology Stack Section -->
        <div
            v-if="legendItem.displaySymbology"
            v-focus-item
            class="default-focus-style"
        >
            <!-- display each symbol -->
            <div
                class="p-5 flex items-center"
                v-for="(item, idx) in legendItem.layer.getLegend(
                    legendItem.uid
                )"
                :key="idx"
            >
                <div class="symbologyIcon">
                    <span v-html="item.svgcode"></span>
                </div>

                <div class="flex-1 ml-15" v-truncate>{{ item.label }}</div>

                <!-- TODO: add visibility button functionality. It should toggle each symbol individually. -->
                <checkbox :value="visibility" :legendItem="legendItem" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { GlobalEvents } from '@/api';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendStore } from '../store';
import { LegendEntry, Controls } from '../store/legend-defs';

import CheckboxV from './checkbox.vue';
import SymbologyStack from './symbology-stack.vue';
import LegendOptionsV from './legend-options.vue';

@Component({
    components: {
        checkbox: CheckboxV,
        'symbology-stack': SymbologyStack,
        options: LegendOptionsV
    }
})
export default class LegendEntryV extends Vue {
    @Prop() legendItem!: LegendEntry;

    visibility: boolean | undefined = this.legendItem.visibility;

    mounted(): void {
        // TODO figure out a strong type for the payload?
        const visHandler = this.$iApi.event.on(
            GlobalEvents.LAYER_VISIBILITYCHANGE,
            (payload: any) => {
                if (
                    this.legendItem.layer &&
                    this.legendItem.layer
                        .getLayerTree()
                        .findChildByUid(payload.uid)
                ) {
                    // the event is related to this layer.
                    // TODO likely need to refine logic for child layers. see comments in common-layer initiate().
                    //      we could have case where layer turns on but child remains off. in this case additional logic needed.
                    // TODO verify we still use logic below, and not payload.visibility
                    this.visibility = this.legendItem.visibility;
                }
            }
        );
    }

    /**
     * Display symbology stack for the layer.
     */
    toggleSymbology(): void {
        if (this.legendItem._controlAvailable(Controls.Symbology)) {
            this.legendItem.displaySymbology = !this.legendItem
                .displaySymbology;
        }
    }

    /**
     * Toggles data table panel to open/close for the LegendItem.
     */
    toggleGrid() {
        if (this.legendItem._controlAvailable(Controls.Datatable)) {
            this.$iApi.event.emit(
                GlobalEvents.GRID_TOGGLE,
                this.legendItem.uid
            );
        }
    }

    /**
     * Toggles settings panel to open/close type for the LegendItem.
     */
    toggleSettings() {
        if (this.legendItem._controlAvailable(Controls.Settings)) {
            this.$iApi.event.emit(
                GlobalEvents.SETTINGS_TOGGLE,
                this.legendItem.uid
            );
        }
    }

    /**
     * Toggles metadata panel to open/close for the LegendItem.
     */
    toggleMetadata() {
        if (this.legendItem._controlAvailable(Controls.Metadata)) {
            // TODO: toggle metadata panel through API/store call
            // this.$iApi.event.emit('metadata/open', {
            //     type: 'html',
            //     layer: 'Sample Layer Name',
            //     url:
            //         'https://ryan-coulson.com/RAMPMetadataDemo.html'
            // });
        }
    }

    get shellEl() {
        return this.$refs.shell;
    }

    removeLayer() {
        this.$iApi.geo.map.removeLayer(this.legendItem.uid!);
    }
}
</script>

<style lang="scss" scoped>
.legend-item:hover,
.legend-item:focus-within {
    .options {
        display: block;
    }
}
.disabled {
    @apply text-gray-400;
    cursor: default;
}
</style>
