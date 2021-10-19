<template>
    <div @click.stop @mouseover.stop class="options display-none cursor-auto">
        <dropdown-menu
            class="relative"
            position="left-start"
            :tooltip="$t('legend.entry.options')"
            tooltip-placement="left"
        >
            <template #header>
                <div class="flex p-8">
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
                    disabled: !legendItem._controlAvailable(`metadata`)
                }"
                @click="toggleMetadata"
            >
                <svg class="fill-current w-18 h-18 mr-10" viewBox="0 0 23 21">
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
                    disabled: !legendItem._controlAvailable(`settings`)
                }"
                @click="toggleSettings"
            >
                <svg class="fill-current w-18 h-18 mr-10" viewBox="0 0 23 21">
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
                    disabled: !legendItem._controlAvailable(`datatable`)
                }"
                @click="toggleGrid"
            >
                <svg class="fill-current w-18 h-18 mr-10" viewBox="0 0 23 21">
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
                    disabled: !legendItem._controlAvailable(`symbology`)
                }"
                @click="toggleSymbology"
            >
                <svg class="fill-current w-18 h-18 mr-10" viewBox="0 0 23 21">
                    <path
                        d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
                    />
                </svg>
                {{ $t('legend.entry.controls.symbology') }}
            </a>
            <!-- Remove -->
            <a
                href="#"
                class="flex leading-snug items-center w-auto"
                :class="{
                    disabled: !legendItem._controlAvailable(`remove`)
                }"
                @click="removeLayer"
            >
                <svg class="fill-current w-18 h-18 mr-10" viewBox="0 0 23 21">
                    <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    ></path>
                </svg>
                {{ $t('legend.entry.controls.remove') }}
            </a>
            <!-- Reload -->
            <a
                href="#"
                class="flex leading-snug items-center w-auto"
                :class="{
                    disabled: !legendItem._controlAvailable(`reload`)
                }"
                @click="reloadLayer"
            >
                <svg class="fill-current w-18 h-18 mr-10" viewBox="0 0 24 24">
                    <path
                        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                    ></path>
                </svg>
                {{ $t('legend.entry.controls.reload') }}
            </a>
        </dropdown-menu>
    </div>
</template>

<script lang="ts">
import { GlobalEvents } from '@/api';
import { defineComponent, toRaw } from 'vue';
import { LegendEntry, Controls } from '../store/legend-defs';

export default defineComponent({
    name: 'LegendOptionsV',
    props: {
        legendItem: LegendEntry
    },
    methods: {
        /**
         * Display symbology stack for the layer.
         */
        toggleSymbology(): void {
            if (this.legendItem!._controlAvailable(Controls.Symbology)) {
                this.legendItem!.displaySymbology =
                    !this.legendItem!.displaySymbology;
            }
        },

        /**
         * Toggles data table panel to open/close for the LegendItem.
         */
        toggleGrid() {
            if (this.legendItem!._controlAvailable(Controls.Datatable)) {
                this.$iApi.event.emit(
                    GlobalEvents.GRID_TOGGLE,
                    this.legendItem!.layerUID
                );
            }
        },

        /**
         * Toggles settings panel to open/close type for the LegendItem.
         */
        toggleSettings() {
            if (this.legendItem!._controlAvailable(Controls.Settings)) {
                this.$iApi.event.emit(
                    GlobalEvents.SETTINGS_TOGGLE,
                    this.legendItem!.layerUID
                );
            }
        },

        /**
         * Toggles metadata panel to open/close for the LegendItem.
         */
        toggleMetadata() {
            if (this.legendItem!._controlAvailable(Controls.Metadata)) {
                // TODO: toggle metadata panel through API/store call
                this.$iApi.event.emit('metadata/open', {
                    type: 'html',
                    layer: 'Sample Layer Name',
                    url: 'https://ryan-coulson.com/RAMPMetadataDemo.html'
                });
            }
        },

        /**
         * Removes layer from map.
         */
        removeLayer() {
            if (this.legendItem!._controlAvailable(Controls.Remove)) {
                this.legendItem!.toggleVisibility(false);
                this.$iApi.geo.map.removeLayer(this.legendItem!.layerUID!);
            }
        },

        /**
         * Reloads a layer on the map.
         */
        reloadLayer() {
            if (this.legendItem!._controlAvailable(Controls.Reload)) {
                toRaw(this.legendItem!.layer!).reload();
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
