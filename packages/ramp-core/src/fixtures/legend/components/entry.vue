<template>
    <div class="legend-item">
        <div class="relative">
            <div
                class="
                    default-focus-style
                    p-5
                    flex
                    items-center
                    hover:bg-gray-200
                    cursor-pointer
                    h-44
                "
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
                            'cursor-default':
                                !legendItem._controlAvailable('symbology')
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
                                'pointer-events-none':
                                    !legendItem._controlAvailable('symbology')
                            }"
                            class="w-32 h-32"
                            :visible="legendItem.displaySymbology"
                            :layer="legendItem.layer"
                            :legendItem="legendItem"
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
                    :checked="legendItem.visibility"
                    :value="legendItem"
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
            <div v-if="symbologyStack.length > 0">
                <!-- display each symbol -->
                <div class="m-5" v-for="item in symbologyStack" :key="item.uid">
                    <!-- for WMS layers -->
                    <div
                        v-if="layerType === 'ogcWms'"
                        class="items-center grid-cols-1"
                    >
                        <div
                            v-if="item.imgHeight"
                            class="symbologyIcon w-full p-5"
                            v-html="getLegendGraphic(item)"
                        ></div>
                        <div
                            v-if="item.label"
                            class="flex-1 p-5 bg-black-75 text-white"
                            v-truncate
                        >
                            {{ item.label }}
                        </div>
                    </div>
                    <!-- for non-WMS layers -->
                    <div v-else class="flex items-center">
                        <div class="symbologyIcon">
                            <span v-html="item.svgcode"></span>
                        </div>
                        <div class="flex-1 ml-15" v-truncate>
                            {{ item.label }}
                        </div>
                        <checkbox
                            v-if="symbologyStack.length > 1"
                            :value="item"
                            :legendItem="legendItem"
                            :checked="item.visibility"
                        />
                    </div>
                </div>
            </div>
            <div v-else>
                <!-- display loading text -->
                <div class="flex p-5 ml-48" v-truncate>
                    <div
                        class="
                            relative
                            animate-spin
                            spinner
                            h-20
                            w-20
                            mr-10
                            pt-2
                        "
                        v-if="isAnimationEnabled"
                    ></div>
                    <div class="flex-1 text-gray-500" v-truncate>
                        <!-- TODO: add official translation -->
                        <span>{{ $t('legend.symbology.loading') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import { GlobalEvents } from '@/api';
import { Controls, LegendEntry, LegendGroup } from '../store/legend-defs';
import LegendCheckboxV from './checkbox.vue';
import LegendSymbologyStackV from './symbology-stack.vue';
import LegendOptionsV from './legend-options.vue';
import { LegendSymbology } from '@/geo/api';

export default defineComponent({
    name: 'LegendEntryV',
    props: {
        legendItem: { type: Object as PropType<LegendEntry>, required: true }
    },
    components: {
        checkbox: LegendCheckboxV,
        'symbology-stack': LegendSymbologyStackV,
        options: LegendOptionsV
    },

    data() {
        return {
            symbologyStack: [] as Array<LegendSymbology>
        };
    },

    computed: {
        /**
         * Get the type of layer
         */
        layerType(): string | undefined {
            return toRaw(this.legendItem!.layer)?.layerType;
        },

        /**
         * Get animation enabled status
         */
        isAnimationEnabled(): Boolean {
            return this.$iApi.animate === 'on';
        }
    },

    mounted() {
        this.symbologyStack = [];

        // Wait for symbology to load
        if (!this.legendItem!.layer) {
            // This should never happen because the layer is loaded before the legend entry component is mounted
            console.warn(
                'Attempted to mount legend entry component with undefined layer'
            );
            return;
        }

        Promise.all(
            this._getLegend().map((item: LegendSymbology) => item.drawPromise)
        ).then(() => {
            this.symbologyStack = this._getLegend();
        });
    },

    methods: {
        /**
         * Display symbology stack for the layer.
         */
        toggleSymbology(): void {
            if (this.legendItem!._controlAvailable(Controls.Symbology)) {
                this.legendItem!.toggleDisplaySymbology();
            }
        },

        /**
         * Toggles data table panel to open/close for the LegendItem.
         */
        toggleGrid(): void {
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
        toggleSettings(): void {
            if (this.legendItem!._controlAvailable(Controls.Settings)) {
                this.$iApi.event.emit(
                    GlobalEvents.SETTINGS_TOGGLE,
                    this.legendItem!.layerUID
                );
            }
        },

        /**
         * Toggles metadata panel to open/close for the legendItem!.
         */
        toggleMetadata(): void {
            if (this.legendItem!._controlAvailable(Controls.Metadata)) {
                this.$iApi.event.emit('metadata/open', {
                    type: 'html',
                    layer: 'Sample Layer Name',
                    url: 'https://ryan-coulson.com/RAMPMetadataDemo.html'
                });
            }
        },

        /**
         * Returns a span containing the resized legend graphic.
         */
        getLegendGraphic(item: any): string | undefined {
            const span = document.createElement('span');
            span.innerHTML = item.svgcode;
            const svg = span.firstElementChild;
            // The legend graphic will display either in its original size, or resized to fit the width of the legend item.
            svg?.classList.add('max-w-full');
            svg?.classList.add('h-full');
            svg?.setAttribute('height', item.imgHeight);
            svg?.setAttribute('width', item.imgWidth);
            return span.outerHTML;
        },

        /**
         * Remove layer from the map
         */
        removeLayer(): void {
            this.$iApi.geo.map.removeLayer(this.legendItem!.layer!);
        },

        /**
         * Wrapper to safely get the legend from layer while avoiding ArcGIS and Vue3 conflict
         */
        _getLegend(): LegendSymbology[] {
            return toRaw(this.legendItem!.layer!).legend;
        }
    }
});
</script>

<style lang="scss" scoped>
.legend-item:hover,
.legend-item:focus-within {
    .options {
        @apply block;
    }
}
.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
