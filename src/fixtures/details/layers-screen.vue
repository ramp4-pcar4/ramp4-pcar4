<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('details.layers.title') }}
        </template>
        <template #content>
            <div v-if="activeGreedy === 0">
                <!-- grond total -->
                <div class="p-5">
                    {{
                        t('details.layers.found', {
                            numResults: totalResultCount,
                            numLayers: payload.length
                        })
                    }}
                </div>
                <!-- clicker for each layer -->
                <button
                    type="button"
                    class="w-full px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer disabled:cursor-default"
                    v-for="(item, idx) in layerResults"
                    :key="item.uid"
                    @click="item.loaded && openResult(idx)"
                    :disabled="!(item.loaded && item.items.length > 0)"
                >
                    <div v-truncate>
                        {{ layerName(idx) || t('details.layers.loading') }}
                    </div>
                    <div class="flex-auto"></div>
                    <!-- display the count if item exists, else display the loading spinner -->
                    <div v-if="item.loaded" class="px-5">
                        {{ item.items.length }}
                    </div>
                    <div
                        v-else
                        class="animate-spin spinner h-20 w-20 px-5"
                    ></div>
                </button>
            </div>
            <!-- show loading spinner when waiting for identify results -->
            <div
                v-else-if="slowLoadingFlag"
                class="flex justify-center py-10 items-center"
            >
                <span class="animate-spin spinner h-20 w-20 px-5 mr-8"></span>
                {{ t('details.item.loading') }}
            </div>
            <!-- clear panel when new identify request came in -->
            <div v-else></div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
// This screen is the view of all layers that were interrogated in the identify (the identify panel)

import {
    computed,
    inject,
    onBeforeMount,
    onBeforeUnmount,
    onMounted,
    ref,
    watch
} from 'vue';
import { useDetailsStore } from './store';
import type { DetailsItemInstance } from './store';
import { GlobalEvents, LayerInstance, PanelInstance } from '@/api';
import type { InstanceAPI } from '@/api';
import type { IdentifyResult } from '@/geo/api';
import { usePanelStore } from '@/stores/panel';
import { useI18n } from 'vue-i18n';
import { useLayerStore } from '@/stores/layer';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const layerStore = useLayerStore();
const panelStore = usePanelStore();
const detailsStore = useDetailsStore();

defineProps({
    panel: PanelInstance
});

const layerResults = ref<Array<IdentifyResult>>([]);
const lastLayerUid = ref<string>('');
const handlers = ref<Array<string>>([]);
const watchers = ref<Array<Function>>([]);

const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const slowLoadingFlag = computed<Boolean>(() => detailsStore.slowLoadingFlag);
const payload = computed<IdentifyResult[]>(() => detailsStore.payload);
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);
const mobileMode = computed<Boolean>(() => panelStore.mobileView);
const remainingWidth = computed<number>(() => panelStore.getRemainingWidth);
const totalResultCount = computed<number>(() =>
    layerResults.value
        .map(r => r.items.length)
        .reduce((a: number, b: number) => a + b, 0)
);

/**
 * Load identify result items after all item's load promise has resolved
 */
const loadPayloadItems = (newPayload: Array<IdentifyResult>): void => {
    // NOTE: the incoming payload array needs to be made reactive at the source,
    // i.e. in the layer that ran the identify and created this stuff.
    // Not ideal. Have tried a number of workarounds but vue remains
    // disrespectful in ignoring changes to array elements and updating
    // controls in the template v-for's.
    // I think the reason is because a promise that lives outside of
    // the component is updating values, and the vue reactivity magic
    // is not registering it in the dependency graph thing. Still don't know
    // enough to say for sure.
    // The alternative is to use $forceUpdate, which works but seems less
    // efficient and sort of defeats the purpose of using a framework with
    // "smart" two way binding.
    // Tried making a reactive copy of elements here that would watch
    // the original elements and update itself, would work for the
    // IdentifyResults but the nested IdentifyItems would still break.
    // It was also a big hack.
    // Would like to revist, as this current solution is unintuitive,
    // nobody writing a new layer type is going to have a clue they need
    // to wrap their identify outputs in reactive() due to disrespectful code.

    // if no payload, just return
    if (newPayload === undefined) {
        return;
    }

    // track last identify request timestamp and add to payload items. If no new results, app is in mobile mode, or if
    // there is not enough space available to open the detail items panel, then disable the greedy identify.
    const detailsPanel = iApi.panel.get('details-items');
    const detailsWidth = detailsPanel.width || 350;

    const greedyMode =
        mobileMode.value ||
        (remainingWidth.value < detailsWidth && !detailsPanel.isOpen) ||
        newPayload.length === 0
            ? 0
            : newPayload[0].requestTime;
    detailsStore.activeGreedy = greedyMode;
    detailsStore.slowLoadingFlag = false;

    layerResults.value = newPayload;

    // wait for everything to finish so we can display a grand total
    calculateGrandTotal(newPayload);

    // procedure to auto open the individual item panel whenever possible
    autoOpen(newPayload);
};

/**
 * Multiple greedy approach to auto-open identify item panel explained as follows:
 * A new array of promises (loadingResults) is created that resolves for each item when it is done loading and contains non-empty results count, and is rejected otherwise.
 * Case 1 - if no identify panels are open or only the identify summary panel is open:
 *              wait for any of the promises to resolve and open the item screen for the first that does, track this layer ID (also tracked if item screen opened manually)
 *              if no promises resolve, user clicked on empty map point with no data so reset last layer ID to none and close items screen
 * Case 2 - if item panel is already open for a layer:
 *              this layer takes priority so wait for it to resolve first, if there are new results refresh the panel to update
 *              otherwise if there are no results for this previously open layer, follow the same steps as for case 1
 */
const autoOpen = (newPayload: Array<IdentifyResult>): void => {
    const itemsPanel = iApi.panel.get('details-items');
    // if the item panel is already open for a layer, wait on that layer to resolve first
    if (lastLayerUid.value && itemsPanel.isOpen) {
        const lastIdx = layerResults.value.findIndex(
            (item: IdentifyResult) => item.uid === lastLayerUid.value
        );

        if (lastIdx !== -1) {
            const lastIdentify = layerResults.value[lastIdx];
            // wait on last opened layer to see if it resolves with new results
            lastIdentify.loading.then(() => {
                // new identify request came in while loading old results, exit greedy algo
                if (lastIdentify.requestTime !== activeGreedy.value) {
                    return;
                }

                // update items screen with new results for that layer and turn off greedy loading and abort flags
                if (lastIdentify.items.length > 0) {
                    detailsStore.activeGreedy = 0;
                    openResult(lastIdx);
                } else {
                    // otherwise proceed as normal in case 1
                    autoOpenAny(newPayload);
                }
            });
        } else {
            // if last opened layer no longer exists proceed with case 1
            autoOpenAny(newPayload);
        }
    } else {
        // if no identify item panel was open or no last layer is tracked, proceed with case 1
        autoOpenAny(newPayload);
    }

    // after a set time period, if greedy mode is still running for current identify request turn on loading flag
    setTimeout(() => {
        if (
            activeGreedy.value !== 0 &&
            newPayload[0].requestTime === activeGreedy.value
        ) {
            detailsStore.slowLoadingFlag = true;
        }
    }, 500);
};

/**
 * Helper function for greedy auto-open function, implementation for case 1.
 */
const autoOpenAny = (newPayload: Array<IdentifyResult>): void => {
    const loadingResults = newPayload.map((item: IdentifyResult) =>
        item.loading.then(() =>
            item.items.length > 0 ? Promise.resolve(item) : Promise.reject()
        )
    );
    const lastTime = newPayload.length === 0 ? 0 : newPayload[0].requestTime;

    // wait on any layer promise to resolve first with new identify results
    // @ts-ignore
    Promise.any(loadingResults)
        .then((res: IdentifyResult) => {
            // new identify request came in while loading old results, exit greedy algo
            if (res.requestTime !== activeGreedy.value) {
                return;
            }

            // open results item screen and turn off greedy loading and abort flags
            const idx = layerResults.value.findIndex(
                (item: IdentifyResult) => item.uid === res.uid
            );
            detailsStore.activeGreedy = 0;
            if (idx !== -1) {
                openResult(idx);
            }
        })
        .catch(() => {
            // new identify request came in while loading old results, exit greedy algo
            if (lastTime !== activeGreedy.value) {
                return;
            }

            // no promise resolved, clicked on empty map point with no identify results
            // then clear the last tracked layer and close the items panel
            lastLayerUid.value = '';
            detailsStore.activeGreedy = 0;
            closeResult();
        });
};

/**
 * Wait for all layers to finish loading to alert total number of results to be displayed in identify summary.
 */
const calculateGrandTotal = (newPayload: Array<IdentifyResult>): void => {
    Promise.all(newPayload.map((item: IdentifyResult) => item.loading)).then(
        () => {
            // alert the user about the number of results found
            iApi.updateAlert(
                iApi.$i18n.t('details.layers.found', {
                    numResults: totalResultCount.value,
                    numLayers: newPayload.length
                })
            );
        }
    );
};

/**
 * Closes details item panel.
 */
const closeResult = (): void => {
    const itemsPanel = iApi.panel.get('details-items');
    if (itemsPanel.isOpen) {
        itemsPanel.close();
    }
};

/**
 * Switches the panel screen to display the data for a given result.
 */
const openResult = (index: number) => {
    if (payload.value[index].items.length > 0) {
        // set greedy mode off for any existing running requests (for case where user manually clicks an item)
        detailsStore.activeGreedy = 0;

        // skip results screen for wms layers
        let itemsPanel = iApi.panel.get('details-items');
        let props = {
            result: payload.value[index]
        };
        // track last open layer ID every time item panel is opened
        lastLayerUid.value = payload.value[index].uid;

        if (!itemsPanel.isOpen) {
            // open the items panel
            iApi.panel.open({
                id: 'details-items',
                screen: 'item-screen',
                props: props
            });
        } else {
            // update the items screen
            itemsPanel.show({
                screen: 'item-screen',
                props: props
            });
        }
    }
};

/**
 * Get the layer name given layer's payload index
 */
const layerName = (idx: number) => {
    const layerInfo = payload.value[idx];
    let layer: LayerInstance | undefined = layerStore.getLayerByUid(
        layerInfo.uid
    );
    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].name
    ) {
        return detailProperties.value[layer.id].name;
    }
    return layer?.name ?? '';
};

onBeforeMount(() => {
    // keep track of this watcher because it needs to be removed when this component is unmounted
    watchers.value.push(
        watch(
            payload,
            (newPayload: Array<IdentifyResult>) => {
                // Reload items
                loadPayloadItems(newPayload);
            },
            {
                deep: false, // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
                immediate: true
            }
        )
    );
});

onMounted(() => {
    // if details item screen is closed while greedy open is running, turn abort flag on
    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_CLOSED, (panel: PanelInstance) => {
            if (panel.id === 'details-items' || panel.id === 'details-layers') {
                detailsStore.activeGreedy = 0;
            }
        })
    );

    watchers.value.push(
        watch(activeGreedy, (newGreedy: Number) => {
            // watch to turn off greedy loading flag if greedy mode is turned off
            if (newGreedy === 0) {
                detailsStore.slowLoadingFlag = false;
            }
        })
    );
});

onBeforeUnmount(() => {
    handlers.value.forEach(handler => iApi.event.off(handler));
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss"></style>
