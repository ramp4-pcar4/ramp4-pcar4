<template>
    <div :key="legendItem.uid" v-if="!legendItem.hidden" ref="el">
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
                    (isGroup && controlAvailable(LegendControl.Expand)) ||
                    (!isGroup &&
                        legendItem instanceof LayerItem &&
                        controlAvailable(LayerControl.Datatable) &&
                        getDatagridExists() &&
                        legendItem.type === LegendType.Item)
                        ? 'cursor-pointer'
                        : 'cursor-default'
                ]"
                @mouseover.stop="hover($event.currentTarget!)"
                @mouseout.self="
                    //@ts-ignore
                    mobileMode ? null : $event.currentTarget?._tippy?.hide(),
                        (hovered = false)
                "
                @click="
                    () => {
                        if (
                            !isGroup &&
                            legendItem instanceof LayerItem &&
                            controlAvailable(LayerControl.Datatable) &&
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
                    isGroup && controlAvailable(LegendControl.Expand)
                        ? t(
                              legendItem.expanded
                                  ? 'legend.group.collapse'
                                  : 'legend.group.expand'
                          )
                        : legendItem instanceof LayerItem &&
                          legendItem.type === LegendType.Item &&
                          controlAvailable(LayerControl.Datatable) &&
                          getDatagridExists()
                        ? t('legend.layer.data')
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
                    class="flex ml-3 mr-10"
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
                            controlAvailable(LayerControl.Symbology)
                                ? 'cursor-pointer'
                                : 'cursor-default'
                        ]"
                        :disabled="!controlAvailable(LayerControl.Symbology)"
                        :content="
                            legendItem instanceof LayerItem &&
                            legendItem.symbologyExpanded
                                ? t('legend.symbology.hide')
                                : t('legend.symbology.expand')
                        "
                        v-tippy="{
                            placement: 'top-start'
                        }"
                    >
                        <symbology-stack
                            v-if="!legendItem.coverIcon"
                            :class="{
                                'pointer-events-none': !controlAvailable(
                                    LayerControl.Symbology
                                )
                            }"
                            class="w-32 h-32"
                            :visible="
                                legendItem instanceof LayerItem &&
                                legendItem.symbologyExpanded
                            "
                            :legendItem="legendItem"
                        />
                        <img
                            v-else
                            :class="{
                                'pointer-events-none': !controlAvailable(
                                    LayerControl.Symbology
                                )
                            }"
                            class="w-32 h-32 hover:scale-105"
                            :src="legendItem.coverIcon"
                            alt="Cover icon not found :("
                        />
                    </button>
                </div>

                <!-- dropdown icon -->
                <div
                    v-if="isGroup && controlAvailable(LegendControl.Expand)"
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

                <!-- offscale icon -->
                <div
                    class="relative mr-10"
                    :content="t('legend.layer.offscale')"
                    v-tippy="{
                        placement: 'top-start'
                    }"
                    @mouseover.stop
                    v-if="
                        legendItem instanceof LayerItem &&
                        legendItem.layerOffscale
                    "
                >
                    <svg
                        class="inline-block fill-current w-18 h-18"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"
                        ></path>
                    </svg>
                </div>

                <!-- name or info section-->
                <div
                    v-if="legendItem instanceof LayerItem"
                    class="flex-1 pointer-events-none"
                    v-truncate="{ externalTrigger: true }"
                >
                    <span>{{
                        legendItem.name ??
                        (!legendItem.layer || legendItem?.layer?.name === ''
                            ? legendItem.layerId
                            : legendItem.layer?.name)
                    }}</span>
                </div>
                <div
                    v-else-if="legendItem instanceof SectionItem"
                    class="flex-1"
                >
                    <h3
                        class="text-lg font-bold"
                        v-if="
                            legendItem.infoType === InfoType.Title &&
                            legendItem.content
                        "
                    >
                        {{ legendItem.content }}
                    </h3>
                    <h3 v-else-if="legendItem.infoType === InfoType.Title">
                        {{ legendItem.name }}
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
                        class="text-gray-500 hover:text-black"
                        :content="t('legend.layer.controls.reload')"
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                        @click.stop="reloadIfReady"
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

                <!-- cancel for loading and error'd items -->
                <div
                    v-if="
                        legendItem.type !== LegendType.Item &&
                        legendItem instanceof LayerItem
                    "
                    class="relative"
                >
                    <button
                        type="button"
                        class="text-gray-500 hover:text-black"
                        :content="
                            legendItem.type === LegendType.Error
                                ? t('legend.layer.controls.remove')
                                : t('legend.layer.controls.cancel')
                        "
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                        @click.stop="cancelLayer"
                    >
                        <div class="flex p-8">
                            <svg
                                v-if="
                                    legendItem.type === LegendType.Placeholder
                                "
                                class="fill-current w-18 h-18"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 352 512"
                            >
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                />
                            </svg>
                            <svg
                                v-else
                                class="inline-block fill-current w-18 h-18 mr-1"
                                viewBox="0 0 23 21"
                            >
                                <path
                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>

                <!-- options dropdown menu -->
                <legend-options
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem
                    "
                    :legendItem="legendItem"
                />

                <!-- zoom button for offscale layers -->
                <div
                    class="relative"
                    v-if="
                        legendItem instanceof LayerItem &&
                        legendItem.layerOffscale
                    "
                >
                    <button
                        type="button"
                        class="p-4"
                        :content="t('legend.layer.zoomToVisible')"
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                        @click.stop="
                            (legendItem as LayerItem).layer.zoomToVisibleScale()
                        "
                    >
                        <svg
                            class="m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                            width="18"
                        >
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            ></path>
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
                        </svg>
                    </button>
                </div>

                <!-- visibility -->
                <checkbox
                    v-else-if="
                        legendItem.type === LegendType.Item &&
                        controlAvailable(LegendControl.Visibility)
                    "
                    :checked="legendItem.visibility"
                    :value="legendItem as LegendItem"
                    :isRadio="legendItem.parent && legendItem.parent.exclusive"
                    :legendItem="legendItem"
                    :disabled="
                        legendItem instanceof LayerItem &&
                        !legendItem.layerControlAvailable(
                            LayerControl.Visibility
                        )
                    "
                    :label="isGroup ? 'Group' : 'Layer'"
                />
            </div>
            <div
                v-if="
                    legendItem.type === LegendType.Placeholder ||
                    (legendItem instanceof LayerItem &&
                        legendItem.layerRedrawing &&
                        legendItem.visibility)
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
                <p
                    v-if="
                        legendItem instanceof LayerItem &&
                        legendItem.description
                    "
                    class="m-5"
                >
                    {{ legendItem.description }}
                </p>
                <div class="m-5" v-for="item in symbologyStack" :key="item.uid">
                    <!-- for WMS layers and image render styles -->
                    <div
                        v-if="
                            (item.imgUrl &&
                                legendItem.symbologyRenderStyle === 'images') ||
                            (!item.imgUrl && layerType === 'ogc-wms')
                        "
                        class="items-center grid-cols-1"
                    >
                        <div
                            v-if="item.imgUrl"
                            class="symbologyIcon w-full p-5"
                        >
                            <img class="max-w-full" :src="item.imgUrl" />
                        </div>
                        <div
                            v-else-if="item.imgHeight"
                            class="symbologyIcon w-full p-5"
                            v-html="getLegendGraphic(item)"
                        ></div>
                        <div
                            v-if="item.label"
                            class="flex-1 p-5 bg-black-75 text-white"
                            v-truncate
                        >
                            <span>{{ item.label }}</span>
                            <checkbox
                                v-if="
                                    (!item.imgUrl &&
                                        symbologyStack.length > 1) ||
                                    (item.imgUrl && item.definitionClause)
                                "
                                class="float-right"
                                :value="item"
                                :legendItem="legendItem"
                                :checked="item.visibility"
                                :disabled="
                                    !controlAvailable(LayerControl.Visibility)
                                "
                                label="Symbol"
                            />
                        </div>
                    </div>
                    <!-- for non-WMS layers -->
                    <div v-else class="flex items-center">
                        <div v-if="item.imgUrl" class="symbologyIcon">
                            <img class="w-32 h-32" :src="item.imgUrl" />
                        </div>
                        <div v-else-if="item.svgcode" class="symbologyIcon">
                            <span v-html="item.svgcode"></span>
                        </div>
                        <div class="flex-1 ml-15" v-truncate>
                            {{ item.label }}
                        </div>
                        <checkbox
                            v-if="
                                (!item.imgUrl && symbologyStack.length > 1) ||
                                (item.imgUrl && item.definitionClause)
                            "
                            :value="item"
                            :legendItem="legendItem"
                            :checked="item.visibility"
                            :disabled="
                                !controlAvailable(LayerControl.Visibility)
                            "
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
                        <span>{{ t('legend.symbology.loading') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Display children of the group -->
        <div
            class="legend-group border-l-2 ml-4 pl-4"
            v-if="legendItem.expanded"
        >
            <item
                v-for="item in legendItem.children"
                :legendItem="item"
                :key="item.uid"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalEvents, InstanceAPI } from '@/api';
import type { LegendSymbology, RampLayerConfig } from '@/geo/api';
import { LayerControl } from '@/geo/api';
import { useLayerStore } from '@/stores/layer';
import to from 'await-to-js';
import { marked } from 'marked';
import {
    toRaw,
    computed,
    inject,
    nextTick,
    onMounted,
    ref,
    type PropType
} from 'vue';
import { LayerItem } from '../store/layer-item';
import { LegendControl, LegendType } from '../store/legend-item';
import { InfoType, SectionItem } from '../store/section-item';
import Checkbox from './checkbox.vue';
import LegendOptions from './legend-options.vue';
import { usePanelStore } from '@/stores/panel';
import { useI18n } from 'vue-i18n';

// eslint doesn't recognize <symbology-stack> usage
// eslint-disable-next-line
import SymbologyStack from './symbology-stack.vue';

import type { LegendAPI } from '../api/legend';
import type { LegendItem } from '../store/legend-item';

const layerStore = useLayerStore();
const panelStore = usePanelStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const el = ref();

const props = defineProps({
    legendItem: {
        type: Object as PropType<LegendItem | LayerItem | SectionItem>,
        required: true
    }
});

const mobileMode = ref(panelStore.mobileView);
const layerConfigs = computed(() => layerStore.layerConfigs);
const symbologyStack = ref<Array<LegendSymbology>>([]); // ref instead of reactive to maintain reactivity after promise
const hovered = ref(false);

onMounted(() => {
    if (props.legendItem instanceof LayerItem) {
        // load the symbology only when the layer is loaded
        props.legendItem.loadPromise.then(() => {
            symbologyStack.value = [];
            // Wait for symbology to load
            if (!(props.legendItem as LayerItem).layer) {
                // This should never happen because the layer is loaded before the legend item component is mounted
                console.warn(
                    'Attempted to mount legend item component with undefined layer'
                );
                return;
            }
            Promise.all(
                toRaw(
                    (props.legendItem as LayerItem).symbologyStack.map(
                        (item: LegendSymbology) => item.drawPromise
                    )
                )
            ).then(() => {
                symbologyStack.value = toRaw(
                    (props.legendItem as LayerItem).symbologyStack
                );
            });
        });
    }
});

/**
 * Get the type of layer
 */
const layerType = computed((): string | undefined => {
    return props.legendItem instanceof LayerItem
        ? toRaw(props.legendItem!.layer)?.layerType
        : '';
});

/**
 * Get animation enabled status
 */
const isAnimationEnabled = computed((): boolean => {
    return iApi.animate;
});

/**
 * Get if this item is a group (has at least one child)
 */
const isGroup = computed((): boolean => {
    return props.legendItem.children.length > 0;
});

/**
 * Designate between layer controls and legend controls
 */
const controlAvailable = (
    control: LegendControl | LayerControl
): boolean | undefined => {
    if (
        control === LegendControl.Expand ||
        control === LegendControl.Visibility
    )
        return props.legendItem.controlAvailable(control as LegendControl);
    else
        return (props.legendItem as LayerItem).layerControlAvailable(
            control as LayerControl
        );
};

const markdownToHtml = (md: string) => {
    return marked(md);
};

const toggleExpand = () => {
    if (
        props.legendItem.children.length === 0 ||
        !controlAvailable(LegendControl.Expand)
    ) {
        return;
    }
    props.legendItem.toggleExpanded();
    nextTick(() =>
        el.value.querySelector('.legend-group')?.scrollIntoView(false)
    );
    iApi.updateAlert(
        t(
            `legend.alert.group${
                props.legendItem.expanded ? 'Expanded' : 'Collapsed'
            }`
        )
    );
};
/**
 * Display symbology stack for the layer.
 */
const toggleSymbology = (): void => {
    if (controlAvailable(LayerControl.Symbology)) {
        const expanded = (props.legendItem as LayerItem).toggleSymbology();
        nextTick(() =>
            el.value.querySelector('.symbology-stack')?.scrollIntoView(false)
        );
        iApi.updateAlert(
            t(`legend.alert.symbology${expanded ? 'Expanded' : 'Collapsed'}`)
        );
    }
};

/**
 * Toggles data table panel to open/close for the LegendItem.
 */
const toggleGrid = (): void => {
    if (controlAvailable(LayerControl.Datatable) && getDatagridExists()) {
        iApi.event.emit(
            GlobalEvents.GRID_TOGGLE,
            (props.legendItem as LayerItem).layer
        );
    }
};

/**
 * Returns a span containing the resized legend graphic.
 */
const getLegendGraphic = (item: any): string | undefined => {
    const span = document.createElement('span');
    span.innerHTML = item.svgcode;
    const svg = span.firstElementChild;
    // The legend graphic will display either in its original size, or resized to fit the width of the legend item.
    svg?.classList.add('max-w-full');
    svg?.classList.add('h-full');
    svg?.setAttribute('height', item.imgHeight);
    svg?.setAttribute('width', item.imgWidth);
    return span.outerHTML;
};

/**
 * Indicates if the data grid fixture has been added
 */
const getDatagridExists = (): boolean => {
    try {
        return !!iApi.fixture.get('grid');
    } catch (e) {
        return false;
    }
};

/**
 * Reloads layer if its "ready" to be reloaded.
 * If a layer has not been cancelled, it is ready to be reloaded.
 * If it has been cancelled by the user, then we wait for any currently in progress load to finish.
 */
const reloadIfReady = () => {
    // reload legend item state back to placeholder state
    props.legendItem.reload();
    if ((props.legendItem as LayerItem)._loadCancelled) {
        const readyWatcher = setInterval(() => {
            if ((props.legendItem as LayerItem).layer) {
                Promise.allSettled([
                    (props.legendItem as LayerItem).layer.loadPromise
                ]).then(() => {
                    clearInterval(readyWatcher);
                    reloadLayer();
                });
            }
        }, 250);
    } else {
        reloadLayer();
    }
};
/**
 * Reloads a layer on the map.
 */
const reloadLayer = () => {
    // want the animation to play for half a second because a reload can fail "instantly", making it look like nothing happened to the user
    setTimeout(() => {
        (props.legendItem as LayerItem)._loadCancelled = false;
        // call reload on layer if it exists
        if ((props.legendItem as LayerItem).layer !== undefined) {
            toRaw((props.legendItem as LayerItem).layer!)
                .reload()
                .then(() =>
                    layerStore.removeErrorLayer(
                        (props.legendItem as LayerItem).layer
                    )
                )
                .catch(() =>
                    layerStore.addErrorLayer(
                        (props.legendItem as LayerItem).layer
                    )
                );
        } else {
            // otherwise attempt to re-create layer with layer config
            const layerConfig =
                (props.legendItem as LayerItem).layerIdx === undefined ||
                (props.legendItem as LayerItem).layerIdx === -1
                    ? layerConfigs.value.find(
                          (lc: RampLayerConfig) =>
                              lc.id === (props.legendItem as LayerItem).layerId
                      )
                    : layerConfigs.value.find(
                          (lc: RampLayerConfig) =>
                              lc.id ===
                              (props.legendItem as LayerItem).parentLayerId
                      );
            if (layerConfig !== undefined) {
                recreateLayer(layerConfig);
            }
        }
        // catch error if reload fails
        props.legendItem.loadPromise.catch(() => {
            console.error('Failed to reload layer -', props.legendItem.name);
        });
    }, 500);
};
/**
 * Attempt to recreate and instantiate layer from config.
 */
const recreateLayer = async (layerConfig: RampLayerConfig) => {
    try {
        // try to re-create new layer based on layerConfig
        // same code to how layers are initialized when layer config array changes, expose this as layer API method?
        const layer = iApi.geo.layer.createLayer(layerConfig);
        layerStore.removeErrorLayer(layer);
        // check if the layer error'd while already in the map
        const checkLayer = iApi.geo.layer.getLayer(layer.id);
        if (checkLayer) {
            const [reloadErr] = await to(toRaw(checkLayer).reload());
            if (reloadErr) {
                layerStore.addErrorLayer(layer);
                throw new Error();
            }
        } else {
            iApi.geo.map.addLayer(layer!).catch(() => {
                throw new Error();
            });
        }
        return layer!;
    } catch {
        return;
    }
};

/**
 * Moves loading layer into error state. Removes error'd layer from legend and map.
 */
const cancelLayer = () => {
    const layerItem: LayerItem = toRaw(props.legendItem as LayerItem); // so that typescript doesn't yell in the whole method
    if (layerItem.type === LegendType.Error) {
        props.legendItem.toggleHidden(true); // temporarily hide item until we can remove it
        // layer in error state, remove layer
        // layer could appear in store later, so we need to keep checking if its there
        let everythingRemoved: boolean = false;
        const removalWatcher = setInterval(() => {
            // layer is gone from everywhere, so we are done
            if (everythingRemoved) {
                clearInterval(removalWatcher);
            } else if (layerItem.layer && layerItem.layer.layerExists) {
                // layer is now there, time to remove!
                iApi.geo.map.removeLayer(layerItem.layer);
                // remove layer and layer config from store
                layerStore.removeErrorLayer(layerItem.layerId);
                layerStore.removeLayerConfig(layerItem.layerId);
                // remove layer item from legend
                iApi.fixture
                    .get<LegendAPI>('legend')
                    ?.removeLayerItem(layerItem.layerId);
                everythingRemoved = true;
            }
        }, 250);
    } else {
        // layer in loading state, cancel layer
        props.legendItem.error();
        (props.legendItem as LayerItem)._loadCancelled = true;
        // if a sublayer or parent layer was cancelled, cancel the parent layer and all other sublayers.
        // need to keep polling for the parent layer since some sublayers may not be in the config (stuff that came from a group)
        const cancelWatcher = setInterval(() => {
            const parentLayer =
                iApi.geo.layer
                    .allLayers()
                    .find(
                        l =>
                            l.id === layerItem.parentLayerId ||
                            l.id === layerItem.layerId
                    ) ??
                iApi.geo.layer
                    .allErrorLayers()
                    .find(
                        l =>
                            l.id === layerItem.parentLayerId ||
                            l.id === layerItem.layerId
                    );
            if (parentLayer) {
                clearInterval(cancelWatcher);
                const layerItemToCancel = iApi.fixture
                    .get<LegendAPI>('legend')
                    ?.getLayerItem(parentLayer);
                if (layerItemToCancel) {
                    layerItemToCancel.error();
                    layerItemToCancel._loadCancelled = true;
                }
                parentLayer.sublayers?.forEach(sl => {
                    const sublayerItemToCancel = iApi.fixture
                        .get<LegendAPI>('legend')
                        ?.getLayerItem(sl);
                    if (sublayerItemToCancel) {
                        sublayerItemToCancel.error();
                        sublayerItemToCancel._loadCancelled = true;
                    }
                });
            }
        }, 250);
    }
};

/**
 * Helper function needed to delay tooltips using the _tippy?.show() workaround
 */
const hover = (t: EventTarget) => {
    hovered.value = true;
    setTimeout(() => {
        //@ts-ignore
        if (hovered.value) mobileMode.value ? null : t._tippy?.show();
    }, 300);
};
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
