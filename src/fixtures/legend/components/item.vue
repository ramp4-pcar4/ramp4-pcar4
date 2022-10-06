<template>
    <div :key="legendItem.visibility" v-if="!legendItem.hidden">
        <div class="relative">
            <div
                class="flex items-center hover:bg-gray-200"
                :class="[
                    legendItem.type === LegendType.Item
                        ? 'loaded-item default-focus-style'
                        : legendItem.type === LegendType.Error
                        ? 'non-loaded-item bg-red-200'
                        : 'non-loaded-item',
                    legendItem instanceof LayerItem ? 'p-5' : 'px-5 py-10',
                    (isGroup && controlAvailable('expandButton')) ||
                    (!isGroup &&
                        legendItem instanceof LayerItem &&
                        controlAvailable('datatable') &&
                        getDatagridExists() &&
                        legendItem.type === LegendType.Item)
                        ? 'cursor-pointer'
                        : 'cursor-default'
                ]"
                @mouseover.stop="hover($event.currentTarget)"
                @mouseout.self="
                    mobileMode ? null : $event.currentTarget?._tippy?.hide(),
                        (hovered = false)
                "
                @click="
                    () => {
                        if (
                            !isGroup &&
                            legendItem instanceof LayerItem &&
                            controlAvailable('datatable') &&
                            getDatagridExists() &&
                            legendItem.type === LegendType.Item
                        ) {
                            toggleGrid();
                        } else if (isGroup) {
                            toggleExpand();
                        }
                    }
                "
                v-focus-item="'show-truncate'"
                :content="
                    isGroup && controlAvailable('expandButton')
                        ? $t(
                              legendItem.expanded
                                  ? 'legend.group.collapse'
                                  : 'legend.group.expand'
                          )
                        : legendItem instanceof LayerItem &&
                          controlAvailable('datatable') &&
                          getDatagridExists()
                        ? $t('legend.layer.data')
                        : ''
                "
                v-tippy="{
                    placement: 'top-start',
                    trigger: 'manual focus',
                    aria: 'describedby'
                }"
                truncate-trigger
            >
                <!-- smiley face. very important that we migrate this -->
                <div
                    class="flex mr-10"
                    v-if="legendItem.type !== LegendType.Item"
                >
                    <svg
                        v-if="legendItem.type === LegendType.Placeholder"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"
                        />
                    </svg>
                    <!-- sad face for layer error -->
                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <path
                            d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z"
                        ></path>
                    </svg>
                </div>

                <!-- symbology stack toggle-->
                <div
                    class="relative w-32 h-32 mr-15"
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem &&
                        legendItem.layer.legend.length > 0
                    "
                    @mouseover.stop
                >
                    <button
                        type="button"
                        @click.stop="toggleSymbology"
                        :class="[
                            controlAvailable('symbology')
                                ? 'cursor-pointer'
                                : 'cursor-default'
                        ]"
                        :disabled="!controlAvailable('symbology')"
                        :content="
                            legendItem instanceof LayerItem &&
                            legendItem.symbologyExpanded
                                ? $t('legend.symbology.hide')
                                : $t('legend.symbology.expand')
                        "
                        v-tippy="{
                            placement: 'top-start'
                        }"
                    >
                        <symbology-stack
                            v-if="!legendItem.coverIcon"
                            :class="{
                                'pointer-events-none':
                                    !controlAvailable('symbology')
                            }"
                            class="w-32 h-32"
                            :visible="
                                legendItem instanceof LayerItem &&
                                legendItem.symbologyExpanded
                            "
                            :layer="legendItem.layer"
                            :legendItem="legendItem"
                        />
                        <img
                            v-else
                            :class="{
                                'pointer-events-none':
                                    !controlAvailable('symbology')
                            }"
                            class="w-32 h-32 hover:scale-105"
                            :src="legendItem.coverIcon"
                            alt="Cover icon not found :("
                        />
                    </button>
                </div>

                <!-- dropdown icon -->
                <div
                    v-if="
                        legendItem.children.length > 0 &&
                        controlAvailable('expandButton')
                    "
                    class="expand-toggle mr-5 pointer-events-none"
                    :class="{ 'rotate-180': legendItem.expanded }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path
                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                        />
                    </svg>
                </div>

                <!-- name or info section-->
                <div
                    v-if="!isSection"
                    class="flex-1 pointer-events-none"
                    v-truncate="{ externalTrigger: true }"
                >
                    <span>{{
                        legendItem.name ??
                        legendItem?.layer?.name ??
                        legendItem.layerId
                    }}</span>
                </div>
                <div v-else class="flex-1">
                    <h3
                        class="text-lg font-bold"
                        v-if="legendItem.infoType === InfoType.Title"
                    >
                        {{ legendItem.content }}
                    </h3>
                    <p v-else-if="legendItem.infoType === InfoType.Text">
                        {{ legendItem.content }}
                    </p>
                    <img
                        v-else-if="legendItem.infoType === InfoType.Image"
                        :src="legendItem.content"
                        alt="InfoType image not found :("
                    />
                    <div
                        v-else-if="legendItem.infoType === InfoType.Markdown"
                        class="ramp-markdown"
                        v-html="markdownToHtml(legendItem.content)"
                    ></div>
                    <component
                        v-else
                        :is="`${legendItem.uid}-info-section`"
                    ></component>
                </div>

                <!-- reload for error'd items -->
                <div
                    class="relative"
                    v-if="legendItem.type === LegendType.Error"
                >
                    <button
                        type="button"
                        class="text-gray-500 hover:text-black dropdown-button"
                        :class="{
                            disabled: !controlAvailable(`reload`)
                        }"
                        @click.stop="reloadLayer"
                    >
                        <div class="flex p-8">
                            <svg
                                class="inline-block fill-current w-18 h-18"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>

                <!-- options dropdown menu -->
                <options
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem
                    "
                    :legendItem="legendItem"
                />

                <!-- visibility -->
                <checkbox
                    v-if="
                        legendItem.type === LegendType.Item &&
                        controlAvailable('visibilityButton')
                    "
                    :checked="legendItem.visibility"
                    :value="legendItem"
                    :isRadio="legendItem.parent && legendItem.parent.exclusive"
                    :legendItem="legendItem"
                    :disabled="
                        legendItem instanceof LayerItem &&
                        !legendItem.layerControlAvailable('visibility')
                    "
                    :label="isGroup ? 'Group' : 'Layer'"
                />
            </div>
            <div
                v-if="
                    legendItem.type === LegendType.Placeholder ||
                    (legendItem.layerRedrawing && legendItem.visibility)
                "
                class="flex-1 h-3"
            >
                <div class="progress-line"></div>
            </div>
        </div>
        <!-- Symbology Stack Section -->
        <div
            v-if="
                legendItem instanceof LayerItem && legendItem.symbologyExpanded
            "
            v-focus-item
            class="symbology-stack default-focus-style"
        >
            <div v-if="symbologyStack.length > 0">
                <!-- display each symbol -->
                <div class="m-5" v-for="item in symbologyStack" :key="item.uid">
                    <!-- for WMS layers -->
                    <div
                        v-if="layerType === 'ogc-wms'"
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
                            :disabled="!controlAvailable('visibility')"
                            label="Symbol"
                        />
                    </div>
                </div>
            </div>
            <div v-else>
                <!-- display loading text -->
                <div class="flex p-5 ml-48" v-truncate>
                    <div
                        class="relative animate-spin spinner h-20 w-20 mr-10 pt-2"
                        v-if="isAnimationEnabled"
                    ></div>
                    <div class="flex-1 text-gray-500" v-truncate>
                        <span>{{ $t('legend.symbology.loading') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Display children of the group -->
        <div
            class="legend-group border-l-2 ml-4 pl-4"
            v-if="legendItem.expanded"
        >
            <legend-item-v
                v-for="item in legendItem.children"
                :legendItem="item"
                :key="item.uid"
            ></legend-item-v>
        </div>
    </div>
</template>

<script lang="ts">
import { GlobalEvents, LayerInstance } from '@/api';
import type { LegendSymbology, RampLayerConfig } from '@/geo/api';
import { DrawState, LayerControl, LayerState } from '@/geo/api';
import { LayerStore } from '@/store/modules/layer';
import to from 'await-to-js';
import { marked } from 'marked';
import type { PropType } from 'vue';
import { defineComponent, toRaw } from 'vue';
import { LayerItem } from '../store/layer-item';
import type { LegendItem } from '../store/legend-item';
import { LegendControl, LegendType } from '../store/legend-item';
import { InfoType, SectionItem } from '../store/section-item';
import LegendCheckboxV from './checkbox.vue';
import LegendOptionsV from './legend-options.vue';
import LegendSymbologyStackV from './symbology-stack.vue';

export default defineComponent({
    name: 'LegendItemV',
    props: {
        legendItem: {
            type: Object as PropType<LegendItem>,
            required: true
        }
    },
    components: {
        checkbox: LegendCheckboxV,
        'symbology-stack': LegendSymbologyStackV,
        options: LegendOptionsV
    },
    data() {
        return {
            mobileMode: this.get('panel/mobileView'),
            layerConfigs: this.get(LayerStore.layerConfigs),
            LegendType: LegendType,
            symbologyStack: [] as Array<LegendSymbology>,
            handlers: [] as Array<string>,
            LayerItem: LayerItem,
            InfoType: InfoType,
            hovered: false
        };
    },
    computed: {
        /**
         * Get the type of layer
         */
        layerType(): string | undefined {
            return this.legendItem instanceof LayerItem
                ? toRaw(this.legendItem!.layer)?.layerType
                : '';
        },

        /**
         * Get animation enabled status
         */
        isAnimationEnabled(): boolean {
            return this.$iApi.animate;
        },

        /**
         * Get if this item is a group (has at least one child)
         */
        isGroup(): boolean {
            return this.legendItem.children.length > 0;
        },

        /**
         * Get if this item is an info section
         */
        isSection(): boolean {
            return (
                this.legendItem instanceof SectionItem &&
                this.legendItem.content !== ''
            );
        }
    },
    methods: {
        /**
         * Designate between layer controls and legend controls
         */
        controlAvailable(
            control: LegendControl | LayerControl
        ): boolean | undefined {
            if (Object.values(LegendControl).includes(control as LegendControl))
                return this.legendItem.controlAvailable(
                    control as LegendControl
                );
            else
                return this.legendItem.layerControlAvailable(
                    control as LayerControl
                );
        },
        markdownToHtml(md: string) {
            return marked(md);
        },
        toggleExpand() {
            if (
                this.legendItem.children.length === 0 ||
                !this.controlAvailable('expandButton')
            )
                return;
            this.legendItem.toggleExpanded();
            this.$nextTick(() =>
                this.$el.querySelector('.legend-group')?.scrollIntoView(false)
            );
            this.$iApi.updateAlert(
                this.$t(
                    `legend.alert.group${
                        this.legendItem.expanded ? 'Expanded' : 'Collapsed'
                    }`
                )
            );
        },
        /**
         * Display symbology stack for the layer.
         */
        toggleSymbology(): void {
            if (this.controlAvailable(LayerControl.Symbology)) {
                const expanded = this.legendItem!.toggleSymbology();
                this.$nextTick(() =>
                    this.$el
                        .querySelector('.symbology-stack')
                        ?.scrollIntoView(false)
                );
                this.$iApi.updateAlert(
                    this.$t(
                        `legend.alert.symbology${
                            expanded ? 'Expanded' : 'Collapsed'
                        }`
                    )
                );
            }
        },

        /**
         * Toggles data table panel to open/close for the LegendItem.
         */
        toggleGrid(): void {
            if (
                this.controlAvailable(LayerControl.Datatable) &&
                this.getDatagridExists()
            ) {
                this.$iApi.event.emit(
                    GlobalEvents.GRID_TOGGLE,
                    this.legendItem!.layer
                );
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
         * Indicates if the data grid fixture has been added
         */
        getDatagridExists(): boolean {
            try {
                return !!this.$iApi.fixture.get('grid');
            } catch (e) {
                return false;
            }
        },
        /**
         * Reloads a layer on the map.
         */
        reloadLayer() {
            if (this.controlAvailable(LayerControl.Reload)) {
                // reload legend item state back to placeholder state
                this.legendItem.reload();
                // want the animation to play for half a second because a reload can fail "instantly", making it look like nothing happened to the user
                setTimeout(() => {
                    // call reload on layer if it exists
                    if (this.legendItem.layer !== undefined) {
                        this.legendItem!.layer!.reload()
                            .then(() =>
                                this.$iApi.$vApp.$store.set(
                                    LayerStore.removeErrorLayer,
                                    this.legendItem.layer!
                                )
                            )
                            .catch(() =>
                                this.$iApi.$vApp.$store.set(
                                    LayerStore.addErrorLayers,
                                    [this.legendItem.layer!]
                                )
                            );
                    } else {
                        // otherwise attempt to re-create layer with layer config
                        const layerConfig =
                            this.legendItem!.layerIdx === undefined
                                ? this.layerConfigs.find(
                                      (lc: RampLayerConfig) =>
                                          lc.id === this.legendItem.layerId
                                  )
                                : this.layerConfigs.find(
                                      (lc: RampLayerConfig) =>
                                          lc.id ===
                                          this.legendItem.parentLayerId
                                  );
                        if (layerConfig !== undefined) {
                            this.recreateLayer(layerConfig);
                        }
                    }
                    // catch error if reload fails
                    this.legendItem.loadPromise.catch(() => {
                        console.error(
                            'Failed to reload layer - ',
                            this.legendItem.name
                        );
                    });
                }, 500);
            }
        },
        /**
         * Attempt to recreate and instantiate layer from config.
         */
        async recreateLayer(layerConfig: RampLayerConfig) {
            try {
                // try to re-create new layer based on layerConfig
                // same code to how layers are initialized when layer config array changes, expose this as layer API method?
                await new Promise<LayerInstance>(async (resolve, reject) => {
                    const layer = this.$iApi.geo.layer.createLayer(layerConfig);
                    this.$iApi.$vApp.$store.set(
                        LayerStore.removeErrorLayer,
                        layer!
                    );
                    // check if the layer error'd while already in the map
                    const checkLayer = this.$iApi.geo.layer.getLayer(layer.id);
                    if (checkLayer) {
                        const [reloadErr] = await to(checkLayer.reload());
                        if (reloadErr) {
                            this.$iApi.$vApp.$store.set(
                                LayerStore.addErrorLayers,
                                [layer!]
                            );
                            reject(reloadErr);
                        }
                    } else {
                        this.$iApi.geo.map
                            .addLayer(layer!)
                            .catch(() => reject());
                    }
                    resolve(layer!);
                });
            } catch {
                return;
            }
        },
        /**
         * Helper function needed to delay tooltips using the _tippy?.show() workaround
         */
        hover(t: EventTarget) {
            this.hovered = true;
            setTimeout(() => {
                if (this.hovered) this.mobileMode ? null : t._tippy?.show();
            }, 300);
        }
    },
    mounted() {
        if (this.legendItem instanceof LayerItem) {
            // load the symbology only when the layer is loaded
            this.legendItem.loadPromise.then(() => {
                this.symbologyStack = [];

                // Wait for symbology to load
                if (!this.legendItem!.layer) {
                    // This should never happen because the layer is loaded before the legend item component is mounted
                    console.warn(
                        'Attempted to mount legend item component with undefined layer'
                    );
                    return;
                }

                // watch for when layer state turns to ERROR
                this.handlers.push(
                    this.$iApi.event.on(
                        GlobalEvents.LAYER_LAYERSTATECHANGE,
                        (payload: { layer: LayerInstance; state: string }) => {
                            // sync legend item state with layer state if errors
                            if (
                                payload.state === LayerState.ERROR &&
                                payload.layer.uid ===
                                    this.legendItem!.layer!.uid
                            ) {
                                this.legendItem.error();
                            } else if (
                                payload.state === LayerState.LOADED &&
                                payload.layer.uid ===
                                    this.legendItem!.layer!.uid
                            ) {
                                this.legendItem.checkVisibilityRules();
                            }
                        }
                    )
                );

                // watch for the layer's drawstate
                this.handlers.push(
                    this.$iApi.event.on(
                        GlobalEvents.LAYER_DRAWSTATECHANGE,
                        (payload: { layer: LayerInstance; state: string }) => {
                            if (
                                this.legendItem.layer.uid === payload.layer.uid
                            ) {
                                if (
                                    payload.layer.drawState ===
                                    DrawState.REFRESH
                                ) {
                                    // if layer is redrawing, turn on the indicator right away
                                    this.legendItem.layerRedrawing = true;
                                } else {
                                    // wait for a short duration and check draw state again
                                    setTimeout(() => {
                                        // check draw state again
                                        this.legendItem.layerRedrawing =
                                            payload.layer.drawState ===
                                            DrawState.REFRESH;
                                    }, 500);
                                }
                            }
                        }
                    )
                );

                Promise.all(
                    toRaw(this.legendItem!.layer!.legend).map(
                        (item: LegendSymbology) => item.drawPromise
                    )
                ).then(() => {
                    this.symbologyStack = toRaw(this.legendItem!.layer!.legend);
                });
            });
        }
    },
    beforeUnmount() {
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
    }
});
</script>

<style lang="scss" scoped>
.legend-group {
    transition: max-height 0.7s ease-in;
}
.expand-toggle {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rotate-180 {
    transform: rotate(-180deg);
}
@media (hover) {
    .loaded-item {
        .options {
            @apply hidden;
        }
    }
    .loaded-item:hover {
        .options {
            @apply block;
        }
    }
}
.loaded-item:focus-within {
    .options {
        @apply block;
    }
}
.non-loaded-item {
    @apply px-5 py-5 pb-10 pr-0 align-middle;
}
.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
