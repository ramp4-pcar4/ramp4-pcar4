<template>
    <div
        class="detailsContent relative flex flex-col flex-grow pl-5"
        :style="results.length > 1 ? { 'margin-left': '42px' } : ''"
        v-if="isDataLoaded && activeGreedy === 0"
    >
        <!-- layer name -->
        <h1
            class="layerName w-full flex-grow p-5 pb-8 font-bold truncate"
            v-if="layerExists"
        >
            {{ layerName }}
        </h1>

        <!-- highlight toggle -->
        <div
            class="p-8 mb-8 bg-gray-100 flex justify-between"
            v-if="details.hasHilighter() && supportsFeatures && isMapLayer"
        >
            <label for="toggle">{{ t('details.togglehilight.title') }}</label>
            <Toggle
                :config="{
                    value: hilightToggle,
                    disabled: false
                }"
                @toggled="onHilightToggle"
            ></Toggle>
        </div>

        <!-- paginator and list button for multiple features -->
        <div
            class="flex flex-col justify-between p-8 mb-8 bg-gray-100"
            v-if="layerExists && getLayerResults().length > 1 && !showList"
        >
            <div class="flex justify-between">
                <button
                    type="button"
                    class="px-8 font-bold hover:bg-gray-200 focus:bg-gray-200"
                    :aria-label="t('details.item.see.list')"
                    @click="clickShowList()"
                >
                    {{ t('details.item.see.list') }}
                </button>
                <div class="flex bg-gray-200 py-8 items-center">
                    <button
                        type="button"
                        :content="t('details.item.previous.item')"
                        v-tippy="{ placement: 'top' }"
                        @click="advanceItemIndex(-1)"
                        class="mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                        :aria-label="t('details.item.previous.item')"
                        :disabled="currentIdx === 0"
                    >
                        <svg height="24" width="24" viewBox="0 0 23 23">
                            <g>
                                <path
                                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                                />
                            </g>
                        </svg>
                    </button>
                    <span class="px-8">
                        {{
                            t('details.item.count', [
                                currentIdx + 1,
                                getLayerResults().length
                            ])
                        }}
                    </span>
                    <button
                        type="button"
                        :content="t('details.item.next.item')"
                        v-tippy="{ placement: 'top' }"
                        @click="advanceItemIndex(1)"
                        class="mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                        :aria-label="t('details.item.next.item')"
                        :disabled="currentIdx === getLayerResults().length - 1"
                    >
                        <svg height="24" width="24" viewBox="0 0 23 23">
                            <g>
                                <path
                                    d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- details result, or result list -->
        <div v-if="layerExists">
            <div v-if="getLayerResults().length > 0">
                <div v-if="showList" class="flex flex-col" v-focus-list>
                    <button
                        class="flex flex-grow truncate default-focus-style hover:bg-gray-200"
                        v-for="(item, idx) in getLayerResults()"
                        :key="idx"
                        @click="clickListItem(idx)"
                        v-focus-item
                    >
                        <ResultItem
                            :data="item"
                            :uid="uid"
                            :open="false"
                        ></ResultItem>
                    </button>
                </div>
                <ResultItem
                    :data="identifyItem"
                    :uid="uid"
                    :open="true"
                    v-else
                ></ResultItem>
            </div>
            <div class="ml-42 text-center" v-else>
                {{ t('details.layers.results.empty') }}
            </div>
        </div>
        <!-- layer does not exist anymore, show no data text -->
        <div v-else class="p-5">
            {{ t('details.item.no.data') }}
        </div>
    </div>

    <!-- identified item is loading -->
    <div
        v-else
        class="flex justify-center py-10 items-center"
        :class="results.length > 1 ? 'ml-42' : ''"
    >
        <span class="animate-spin spinner h-20 w-20 px-5 mr-8"></span>
        {{ t('details.item.loading') }}
    </div>
</template>

<script setup lang="ts">
import { useLayerStore } from '@/stores/layer';
import { useDetailsStore } from '../store';
import { useI18n } from 'vue-i18n';
import { GlobalEvents } from '@/api';

import {
    computed,
    ref,
    inject,
    onMounted,
    onBeforeMount,
    onBeforeUnmount,
    watch
} from 'vue';

import type { InstanceAPI } from '@/api';
import type { IdentifyResult, IdentifyItem } from '@/geo/api';
import type { PropType } from 'vue';
import type { LayerInstance, PanelInstance } from '@/api';
import type { DetailsAPI } from '../api/details';
import type { DetailsItemInstance } from '../store';

import ResultItem from './result-item.vue';
import Toggle from '../../../components/controls/toggle-switch-control.vue';

const iApi = inject<InstanceAPI>('iApi')!;

const detailsStore = useDetailsStore();
const layerStore = useLayerStore();
const props = defineProps({
    uid: { type: String, required: true },
    results: { type: Object as PropType<Array<IdentifyResult>>, required: true }
});
const { t } = useI18n();

const layerExists = ref<Boolean>(false);
const details = ref<DetailsAPI>(iApi.fixture.get('details'));
const hilightToggle = ref<boolean>(true);
const showList = ref<boolean>(false);
const currentIdx = ref<number>(0);

const handlers = ref<Array<string>>([]);
const watchers = ref<Array<Function>>([]);

const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);
/**
 * Return the LayerInstance that cooresponds with the UID provided in props.
 */
const getLayerInfo = () => {
    let layer: LayerInstance | undefined = layerStore.getLayerByUid(props.uid);
    return layer;
};

/**
 * Computed property that returns true if the layer is loaded.
 */
const isDataLoaded = computed<Boolean>(() => {
    const results = props.results.find((layer: IdentifyResult) => {
        return layer.uid === props.uid;
    });
    return results?.loaded ?? false;
});

/**
 * Computed property that returns true if the layer supports features.
 */
const supportsFeatures = computed<Boolean>(() => {
    const layer: LayerInstance | undefined = getLayerInfo();
    return layer?.supportsFeatures ?? false;
});

const itemRequestTime = computed<Number | undefined>(() => {
    const results = props.results.find((layer: IdentifyResult) => {
        return layer.uid === props.uid;
    });
    return results?.requestTime;
});

const layerName = computed<string>(() => {
    const layer: LayerInstance | undefined = getLayerInfo();

    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].name
    ) {
        return detailProperties.value[layer.id].name;
    }
    return layer?.name ?? '';
});

/**
 * Retrieves the points that are returned by identify. If there are no results, returns an empty array.
 */
const getLayerResults = () => {
    const results = props.results.find((layer: IdentifyResult) => {
        return layer.uid === props.uid;
    });
    return results ? results.items : [];
};

/**
 * Computed property that returns a specific data point.
 */
const identifyItem = computed<IdentifyItem>(() => {
    return getLayerResults()[currentIdx.value];
});

/**
 * Computed property that returns true if the layer is a map layer.
 */
const isMapLayer = computed<Boolean>(() => {
    const layer: LayerInstance | undefined = getLayerInfo();
    return layer?.mapLayer ?? false;
});

/**
 * Event handler for the UI highlight toggle. Toggles highlight on data points.
 * @param value the value to assign the highlight
 */
const onHilightToggle = (value: boolean) => {
    hilightToggle.value = value;
    details.value.onHilightToggle(
        value,
        !showList.value
            ? getLayerResults()[currentIdx.value]
            : getLayerResults(),
        props.uid
    );
};

/**
 * Initialize the details screen
 */
const initDetails = () => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(props.uid);

    currentIdx.value = currentIdx.value ?? 0;
    hilightToggle.value = detailsStore.hilightToggle ?? hilightToggle.value;
    showList.value = false;

    // could not find this layer, so mark this result as invalid
    // this handles the case where user minimized item screen -> deletes layer -> opens item screen again
    layerExists.value = !!layer;

    updateHighlight();
};

/**
 * Advance the item index by direction
 */
const advanceItemIndex = (direction: number) => {
    currentIdx.value += direction;
};

/**
 * Updates the highlighter when something changes (panel minimized, opened, change in selected point, etc.)
 */
const updateHighlight = () => {
    if (!identifyItem.value) {
        return;
    }

    if (isDataLoaded.value && identifyItem.value.loaded) {
        if (hilightToggle.value && supportsFeatures.value && isMapLayer.value) {
            details.value.hilightDetailsItems(
                !showList.value
                    ? getLayerResults()[currentIdx.value]
                    : getLayerResults(),
                props.uid
            );
        } else if (!supportsFeatures.value || !isMapLayer.value) {
            details.value.removeDetailsHilight();
        }
    } else {
        // wait for load.
        const localCurrentIndex = currentIdx.value;
        identifyItem.value.loading.then(() => {
            // see if the screen is still on the item we were waiting for
            // TODO do we also need to check if the screen itself changed to the list
            //      view or closed? Would this vue component be unmounted and dead at
            //      that point? Don't want stale updateAlerts pinging off after the fact.
            //      Could implement another flag, set it on seeList() and panel close.
            if (localCurrentIndex === currentIdx.value) {
                // re-call, knowing the item is now loaded.
                updateHighlight();
            }
        });

        // TODO do we need some type of updateAlert that says the screen is now
        //      in a loading state?
    }
};

/**
 * Called when the `Show List` button is pressed. Enables list view and sets highlight to show
 * all items in the list.
 */
const clickShowList = () => {
    showList.value = true;
    updateHighlight();
};

/**
 * Clean up for when the details screen is closed.
 */
const detailsClosed = () => {
    details.value.removeDetailsHilight();
    detailsStore.hilightToggle = true;
};

/**
 * Clean up for when the details screen is minimized.
 */
const detailsMinimized = () => {
    details.value.removeDetailsHilight();
};

/**
 * Called when an item in the list is clicked. Disables list view and updates highlight.
 * @param idx the index of the point that was clicked.
 */
const clickListItem = (idx: number) => {
    currentIdx.value = idx;
    showList.value = false;
};

onMounted(() => {
    // close this panel if layer is removed
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (removedLayer: LayerInstance) => {
                const detailsPanel = iApi.panel.get('details-panel');
                if (props.uid === removedLayer.uid && !!detailsPanel) {
                    detailsPanel.close();
                }
            }
        )
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_CLOSED, (panel: PanelInstance) => {
            if (panel.id == 'details-panel') {
                detailsClosed();
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_MINIMIZED, (panel: PanelInstance) => {
            if (panel.id == 'details-panel') {
                detailsMinimized();
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, () => {
            if (hilightToggle.value) {
                details.value.reloadDetailsHilight(
                    !showList.value
                        ? getLayerResults()[currentIdx.value]
                        : getLayerResults(),
                    props.uid
                );
            }
        })
    );
});

onBeforeMount(() => {
    // Keep an eye to see if the currently selected identify item has been changed.
    watchers.value.push(
        watch(
            identifyItem,
            () => {
                // Re-initialize the details panel if the layer has changed.
                initDetails();

                // If the identifyItem is undefined, clear any hilights.

                if (identifyItem.value === undefined) {
                    details.value.removeDetailsHilight();
                }
            },
            {
                deep: false,
                immediate: true
            }
        )
    );

    // If a new request is made, reset the index.
    watchers.value.push(
        watch(itemRequestTime, () => {
            currentIdx.value = 0;
        })
    );

    // Similarily to above, if a new layer is selected, reset the index.
    watchers.value.push(
        watch(
            () => props.uid,
            () => {
                currentIdx.value = 0;
            }
        )
    );
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());
    handlers.value.forEach(handler => iApi.event.off(handler));
});
</script>

<style lang="scss" scoped>
.layerName {
    border-bottom: 1px solid #eee;
}
</style>
