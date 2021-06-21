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
                            displaySymbology
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
                            :visible="displaySymbology"
                            :layer="legendItem.layer"
                            :uid="legendItem.uid"
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
                <div
                    @click.stop
                    @mouseover.stop
                    class="options hidden cursor-auto"
                >
                    <dropdown-menu
                        position="right"
                        :tooltip="$t('legend.entry.options')"
                        tooltip-placement="left"
                    >
                        <template #header>
                            <div class="flex">
                                <svg
                                    class="fill-current w-18 h-18 mx-8"
                                    viewBox="0 0 23 21"
                                >
                                    <path
                                        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                    />
                                </svg>
                            </div>
                        </template>
                        <!-- metadata -->
                        <a
                            href="#"
                            class="flex leading-snug items-start w-auto"
                            :class="{
                                disabled: !legendItem._controlAvailable(
                                    `metadata`
                                )
                            }"
                            @click="toggleMetadata"
                        >
                            <svg
                                class="fill-current w-18 h-18 mr-10"
                                viewBox="0 0 23 21"
                            >
                                <path
                                    d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                                />
                            </svg>
                            {{ $t('legend.entry.controls.metadata') }}
                        </a>
                        <!-- settings -->
                        <a
                            href="#"
                            class="flex leading-snug items-center w-auto"
                            :class="{
                                disabled: !legendItem._controlAvailable(
                                    `settings`
                                )
                            }"
                            @click="toggleSettings"
                        >
                            <svg
                                class="fill-current w-18 h-18 mr-10"
                                viewBox="0 0 23 21"
                            >
                                <g id="tune">
                                    <path
                                        d="M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z "
                                    />
                                </g>
                            </svg>
                            {{ $t('legend.entry.controls.settings') }}
                        </a>
                        <!-- datatable -->
                        <a
                            href="#"
                            class="flex leading-snug items-center w-auto"
                            :class="{
                                disabled: !legendItem._controlAvailable(
                                    `datatable`
                                )
                            }"
                            @click="toggleGrid"
                        >
                            <svg
                                class="fill-current w-18 h-18 mr-10"
                                viewBox="0 0 23 21"
                            >
                                <path
                                    d="M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z "
                                />
                            </svg>
                            {{ $t('legend.entry.controls.datatable') }}
                        </a>
                        <!-- symbology stack -->
                        <a
                            href="#"
                            class="flex leading-snug items-center w-auto"
                            :class="{
                                disabled: !legendItem._controlAvailable(
                                    `symbology`
                                )
                            }"
                            @click="toggleSymbology"
                        >
                            <svg
                                class="fill-current w-18 h-18 mr-10"
                                viewBox="0 0 23 21"
                            >
                                <path
                                    d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
                                />
                            </svg>
                            {{ $t('legend.entry.controls.symbology') }}
                        </a>
                    </dropdown-menu>
                </div>

                <!-- visibility -->
                <checkbox
                    :value="visibility"
                    :isRadio="props && props.isVisibilitySet"
                    :legendItem="legendItem"
                    :disabled="!legendItem._controlAvailable('visibility')"
                />
            </div>
        </div>

        <!-- Symbology Stack Section -->
        <div v-if="displaySymbology" v-focus-item class="default-focus-style">
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
            this.displaySymbology = !this.displaySymbology;
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
