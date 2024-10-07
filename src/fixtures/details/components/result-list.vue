<template>
    <div
        class="detailsContent relative flex flex-col flex-grow pl-5"
        :style="results.length > 1 ? { 'margin-left': '42px' } : ''"
        v-if="isLayerResultLoaded && activeGreedy === 0"
    >
        <!-- layer name -->
        <h1
            class="layerName w-full flex-grow p-5 pb-8 font-bold truncate"
            v-if="layerExists"
            v-truncate="{ options: { placement: 'top-start' } }"
            tabIndex="0"
        >
            {{ layerName }}
        </h1>

        <!-- highlight toggle -->
        <div
            class="p-8 mb-8 bg-gray-100 flex justify-between"
            v-if="canHighlight"
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
            v-if="showPaginator"
        >
            <div class="flex">
                <button
                    v-if="!showList"
                    type="button"
                    class="px-8 font-bold hover:bg-gray-200 focus:bg-gray-200"
                    :aria-label="t('details.item.see.list')"
                    @click="clickShowList()"
                >
                    {{ t('details.item.see.list') }}
                </button>
                <div
                    class="flex ml-auto bg-gray-200 py-8 items-center"
                    :class="{ 'w-full': showList }"
                >
                    <button
                        type="button"
                        :content="
                            t(
                                showList
                                    ? 'details.items.previous'
                                    : 'details.item.previous.item'
                            )
                        "
                        v-tippy="{ placement: 'top' }"
                        @click="advanceItemIndex(-1)"
                        class="mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                        :aria-label="
                            t(
                                showList
                                    ? 'details.items.previous'
                                    : 'details.item.previous.item'
                            )
                        "
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
                    <span class="px-3 text-center flex-grow">
                        {{
                            showList
                                ? t('details.items.range', [
                                      currentIdx + 1,
                                      Math.min(
                                          endIdx,
                                          getLayerIdentifyItems().length
                                      ),
                                      getLayerIdentifyItems().length
                                  ])
                                : t('details.item.count', [
                                      currentIdx + 1,
                                      getLayerIdentifyItems().length
                                  ])
                        }}
                    </span>
                    <button
                        type="button"
                        :content="
                            t(
                                showList
                                    ? 'details.items.next'
                                    : 'details.item.next.item'
                            )
                        "
                        v-tippy="{ placement: 'top' }"
                        @click="advanceItemIndex(1)"
                        class="mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                        :aria-label="
                            t(
                                showList
                                    ? 'details.items.next'
                                    : 'details.item.next.item'
                            )
                        "
                        :disabled="
                            (!showList &&
                                currentIdx ===
                                    getLayerIdentifyItems().length - 1) ||
                            (showList &&
                                endIdx >= getLayerIdentifyItems().length)
                        "
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
            <div v-if="getLayerIdentifyItems().length > 0">
                <div
                    v-if="showList"
                    class="flex flex-col"
                    v-focus-list
                    :content="t('details.layers.results.list.tooltip')"
                    v-tippy="{
                        trigger: 'manual',
                        placement: 'top-start'
                    }"
                    ref="el"
                >
                    <button
                        class="flex flex-grow truncate default-focus-style hover:bg-gray-200"
                        v-for="(item, idx) in getLayerIdentifyItems().slice(
                            currentIdx,
                            endIdx
                        )"
                        :key="idx"
                        @click="clickListItem(currentIdx + idx)"
                        v-focus-item="'show-truncate'"
                    >
                        <ResultItem
                            :data="item"
                            :uid="uid"
                            :open="false"
                            :in-list="true"
                        ></ResultItem>
                    </button>
                </div>
                <ResultItem
                    :data="currentIdentifyItem"
                    :uid="uid"
                    :open="true"
                    :in-list="false"
                    v-else
                ></ResultItem>
            </div>
            <div class="text-center" v-else>
                {{ t('details.layers.results.empty.currentLayer') }}
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
// acts as the result container for a single layer's result set. Includes header controls,
// and will render the list view if we're in that mode. If in single detail mode, it just
// inserts a result-item under the header.

import { useLayerStore } from '@/stores/layer';
import { useI18n } from 'vue-i18n';
import type { DetailsAPI } from '../api/details';
import ResultItem from './result-item.vue';
import Toggle from '../../../components/controls/toggle-switch-control.vue';

import { GlobalEvents } from '@/api';
import type {
    IdentifyItem,
    IdentifyResult,
    InstanceAPI,
    LayerInstance,
    PanelInstance
} from '@/api';

import type { BasemapChange } from '@/geo/api';

import {
    computed,
    inject,
    onMounted,
    onBeforeMount,
    onBeforeUnmount,
    ref,
    watch
} from 'vue';
import type { PropType } from 'vue';

import { useDetailsStore } from '../store';
import type { DetailsItemInstance } from '../store';

const el = ref<Element>();
const blurEvent = () => {
    (el.value as any)._tippy.hide();
};
const keyupEvent = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && el.value?.matches(':focus')) {
        (el.value as any)._tippy.show();
    }
};

const iApi = inject<InstanceAPI>('iApi')!;

const detailsStore = useDetailsStore();
const layerStore = useLayerStore();
const props = defineProps({
    uid: { type: String, required: true },
    results: { type: Object as PropType<Array<IdentifyResult>>, required: true }
});
const { t } = useI18n();

/**
 * If we could find the bound layer in our instance
 */
const layerExists = ref<Boolean>(false);

/**
 * Details fixture
 */
const detailsFixture = ref<DetailsAPI>(iApi.fixture.get('details'));

/**
 * Value of the onscreen highlighter toggle control
 */
const hilightToggle = ref<boolean>(true);

/**
 * If we are displaying list view or single item view
 */
const showList = ref<boolean>(false);

/**
 * Index of the item we are displaying within the result's item array
 * Persists in list view
 */
const currentIdx = ref<number>(0);

/**
 * Number of items to display at once in list view
 */
const itemsPerPage = ref<number>(20);

const handlers = ref<Array<string>>([]);
const watchers = ref<Array<Function>>([]);

const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);
const endIdx = computed<number>(() => currentIdx.value + itemsPerPage.value);

/**
 * Return the LayerInstance that cooresponds with the UID provided in props.
 */
const getBoundLayer = () => {
    return layerStore.getLayerByUid(props.uid);
};

/**
 * Find the layer result object for the bound layer, if exists
 */
const getBoundLayerResult = (): IdentifyResult | undefined => {
    return props.results.find(layerIR => {
        return layerIR.uid === props.uid;
    });
};

/**
 * Computed property that returns true if the layer's overall identify result has loaded.
 */
const isLayerResultLoaded = computed<Boolean>(() => {
    const results = getBoundLayerResult();
    return results?.loaded ?? false;
});

const itemRequestTime = computed<Number | undefined>(() => {
    const results = getBoundLayerResult();
    return results?.requestTime;
});

const showPaginator = computed<boolean>(
    () =>
        layerExists.value &&
        ((!showList.value && getLayerIdentifyItems().length > 1) ||
            (showList.value &&
                getLayerIdentifyItems().length > itemsPerPage.value))
);

const layerName = computed<string>(() => {
    const layer = getBoundLayer();

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
 * Lets us watch() the uid
 */
const uidCompute = computed<string>(() => {
    return props.uid;
});

/**
 * Retrieves the identify items that belong to the layer currently bound to this list.
 * If there are no results, returns an empty array.
 */
const getLayerIdentifyItems = () => {
    const results = getBoundLayerResult();

    return results ? results.items : [];
};

/**
 * Computed property that returns the identify item currently being viewed.
 * In list mode, this returns last item viewed in detail view (defaults to first).
 * If no results, returns undefined
 */
const currentIdentifyItem = computed<IdentifyItem>(() => {
    return getLayerIdentifyItems()[currentIdx.value];
});

/**
 * Computed property that indicates if highlighting is a possibility
 */
const canHighlight = computed<Boolean>(() => {
    if (detailsFixture.value.hasHilighter()) {
        const layer = getBoundLayer();
        if (layer) {
            return layer.mapLayer && layer.supportsFeatures;
        }
    }
    return false;
});

/**
 * Event handler for the UI highlight toggle. Toggles highlight on data points.
 * @param value the value to assign the highlight
 */
const onHilightToggle = (value: boolean) => {
    // change control state, remember in store, update any highlighting

    hilightToggle.value = value;
    detailsStore.hilightToggle = value;
    updateHighlight();
};

/**
 * Initialize the details screen
 */
const initDetails = () => {
    const layer = getBoundLayer();

    currentIdx.value = currentIdx.value ?? 0;
    hilightToggle.value = detailsStore.hilightToggle ?? hilightToggle.value;
    showList.value = false;

    // could not find this layer, so mark this result as invalid
    // this handles the case where user minimized item screen -> deletes layer -> opens item screen again
    layerExists.value = !!layer;

    updateHighlight();
};

/**
 * Advance the item index by direction (an integer). Singular in detail mode, by a page in list mode
 */
const advanceItemIndex = (direction: number) => {
    if (showList.value) {
        currentIdx.value += direction * itemsPerPage.value;
        updateHighlight();
    } else {
        currentIdx.value += direction;
    }
};

/**
 * Updates the highlighter when something changes (panel minimized, opened, change in selected result, etc.)
 */
const updateHighlight = () => {
    /*
    Dev notes for paths that hit this method, since its a bit spicey.
    currentIdentifyItem watcher -> initDetails : handles changes in the details view of an item.
        includes initial load, layer change, item pagination. Anything that isn't in list mode.
    uidCompute watcher : handles a new layer being selected and we are in list mode.
    advanceItemIndex : handles pagination change when in list mode
    onHilightToggle : handles user mashing the toggler button
    clickShowList : handles user going from detail view to list view on same layer
    clickListItem : handles weird scenario where user clicks first (top) item in list view to switch to its detail view
    BASEMAP_CHANGE event : handles re-applying hilight if schema changed
    */

    const resultItems = getLayerIdentifyItems();

    if (
        hilightToggle.value &&
        isLayerResultLoaded.value &&
        resultItems.length > 0 &&
        canHighlight.value
    ) {
        // we are highlighting, and there is something that could be hilighted.
        // the hilightDetailsItems will handle the waiting for items to finish loading, as well as ensuring
        // that any stale loads will not be drawn / removed when users spam their highlights real fast.

        if (showList.value) {
            // highlight what is on current page of the list.
            detailsFixture.value.hilightDetailsItems(
                resultItems.slice(currentIdx.value, endIdx.value),
                props.uid
            );
        } else {
            // highlight current item being displayed.
            // being extra careful just incase our index went beyond the array bounds
            const currItem = resultItems[currentIdx.value];
            if (currItem) {
                detailsFixture.value.hilightDetailsItems([currItem], props.uid);
            }
        }
    } else {
        // nothing to hilight. This ensures any old details highlights get wiped
        detailsFixture.value.removeDetailsHilight();
    }
};

/**
 * Called when the `Show List` button is pressed. Enables list view and sets highlight to show
 * all items in the list.
 */
const clickShowList = () => {
    showList.value = true;

    currentIdx.value =
        Math.floor(currentIdx.value / itemsPerPage.value) * itemsPerPage.value;
    updateHighlight();
};

/**
 * Clean up for when the details screen is closed.
 */
const detailsClosed = () => {
    detailsFixture.value.removeDetailsHilight();

    // (JR) commenting this out. if user turns off toggle, it shouldnt reset back to on when screen closes.
    // detailsStore.hilightToggle = true;
};

/**
 * Clean up for when the details screen is minimized.
 */
const detailsMinimized = () => {
    detailsFixture.value.removeDetailsHilight();
};

/**
 * Called when an item in the list is clicked. Disables list view and updates highlight.
 * @param idx the index of the point that was clicked.
 */
const clickListItem = (idx: number) => {
    const secretIdx = currentIdx.value;
    currentIdx.value = idx;
    showList.value = false;
    if (secretIdx === idx) {
        // we clicked on the row that currentIdx was secretly tracking.
        // as such, the watcher on the current item won't trigger, so
        // need to update the highlight
        updateHighlight();
    }
};

onMounted(() => {
    // close this panel if layer is removed
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (removedLayer: LayerInstance) => {
                const detailsPanel = iApi.panel.get('details');
                if (props.uid === removedLayer.uid && !!detailsPanel) {
                    detailsPanel.close();
                }
            }
        )
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_CLOSED, (panel: PanelInstance) => {
            if (panel.id === 'details') {
                detailsClosed();
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_MINIMIZED, (panel: PanelInstance) => {
            if (panel.id === 'details') {
                detailsMinimized();
            }
        })
    );

    handlers.value.push(
        iApi.event.on(
            GlobalEvents.MAP_BASEMAPCHANGE,
            (payload: BasemapChange) => {
                if (hilightToggle.value && payload.schemaChanged) {
                    // will just wipe and re-apply the highlight
                    updateHighlight();
                }
            }
        )
    );

    el.value?.addEventListener('blur', blurEvent);
    el.value?.addEventListener('keyup', keyupEvent);
});

onBeforeMount(() => {
    // Keep an eye to see if the currently selected identify item has been changed.
    // Use a watcher to account for the async nature of results appearing in the
    // IdentifyItems object
    watchers.value.push(
        watch(
            currentIdentifyItem,
            () => {
                // ignore stuff in list mode. we manually work the highlights in that mode.
                if (!showList.value) {
                    // Re-initialize the details panel if the content has changed.
                    initDetails();

                    // If the identifyItem is undefined, clear any hilights.
                    // this occurs when the bound layer has no results.
                    if (currentIdentifyItem.value === undefined) {
                        detailsFixture.value.removeDetailsHilight();
                    }
                }
            },
            {
                deep: false,
                immediate: true
            }
        )
    );

    // handle the case where the layer changes and we are in list mode.
    // that change comes from `details-screen.vue` updating the props of this component,
    // to there is no "manual update" of the highlight from local button event handlers.
    watchers.value.push(
        watch(
            uidCompute,
            () => {
                const localUid = props.uid;

                if (showList.value && localUid) {
                    // we're in list mode, and a valid layer is linked

                    // find layer result, wait for outer request to finish (need items to pass to hilighter)
                    const layerIR = getBoundLayerResult();
                    if (layerIR) {
                        layerIR.loading.then(() => {
                            if (props.uid === localUid && showList.value) {
                                // Still on the same layer. User didn't pick diff layer during the loading wait.
                                // Still in list mode. User didn't pick diff layer, change to detail mode, then come back.
                                //
                                // If user switches to a different layer, stays in list mode, and comes back to this prior to either layer being loaded,
                                // will probably get a double hilight request on this layer (first visit & second vist resolve at same time),
                                // but will just spam warnings on the console. Requires slow layers and fidgity user.
                                // If we really don't like that, need to think of some wilder solution to track async stuff across components.

                                updateHighlight();
                            }
                        });
                    }
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
    // clean up hooks into various events.
    watchers.value.forEach(unwatch => unwatch());
    handlers.value.forEach(handler => iApi.event.off(handler));

    el.value?.removeEventListener('blur', blurEvent);
    el.value?.removeEventListener('keyup', keyupEvent);
});
</script>

<style lang="scss" scoped>
.layerName {
    border-bottom: 1px solid #eee;
}
</style>
