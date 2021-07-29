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
                            :legendItem="legendItem"
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
            <!-- display each symbol -->
            <div
                class="m-5"
                v-for="(item, idx) in legendItem.layer.getLegend(
                    legendItem.layerUID
                )"
                :key="idx"
            >
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
                        v-if="
                            legendItem.layer.getLegend(legendItem.layerUID)
                                .length > 1
                        "
                        :checked="item.visibility"
                        :value="item"
                        :legendItem="legendItem"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { GlobalEvents, LayerInstance } from '@/api';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { LegendEntry, Controls } from '../store/legend-defs';

import LegendCheckboxV from './checkbox.vue';
import LegendSymbologyStackV from './symbology-stack.vue';
import LegendOptionsV from './legend-options.vue';
import { LayerType } from '@/geo/api';

@Component({
    components: {
        checkbox: LegendCheckboxV,
        'symbology-stack': LegendSymbologyStackV,
        options: LegendOptionsV
    }
})
export default class LegendEntryV extends Vue {
    @Prop() legendItem!: LegendEntry;

    // Making handlers a list in case more are added in the future
    handlers: Array<string> = [];

    mounted() {
        // Update checkbox value when the layer reloads
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_RELOAD_END,
                (reloadedLayer: LayerInstance) => {
                    let updateVisibilityFlag: boolean = false;
                    if (reloadedLayer.layerType === LayerType.MAPIMAGE) {
                        // Check if this.uid is a child of reloadedLayer
                        if (
                            this.legendItem.layerUID &&
                            reloadedLayer
                                .getLayerTree()
                                .findChildByUid(this.legendItem.layerUID)
                        ) {
                            updateVisibilityFlag = true;
                        }
                    } else if (this.legendItem.layerUID === reloadedLayer.uid) {
                        updateVisibilityFlag = true;
                    }

                    if (updateVisibilityFlag) {
                        // Wait for layer to fully load
                        this.legendItem.layer?.isLayerLoaded().then(() => {
                            this.legendItem.toggleVisibility(true);
                        });
                    }
                }
            )
        );
    }

    unmounted() {
        // Remove all event handlers for this component
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
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
                this.legendItem.layerUID
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
                this.legendItem.layerUID
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

    get layerType() {
        return this.legendItem.layer?.layerType;
    }

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
    }

    removeLayer() {
        this.$iApi.geo.map.removeLayer(this.legendItem.layerUID!);
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
