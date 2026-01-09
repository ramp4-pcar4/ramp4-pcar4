<template>
    <panel-screen :panel="panel">
        <template #header>
            {{
                // Show different titles based on what requested the panel
                detailsStore.origin === 'toggleEvent'
                    ? t('details.layers.title.gridOrigin')
                    : t('details.layers.title.identifyOrigin')
            }}
        </template>

        <template #content>
            <div class="relative h-full">
                <!-- Layer Picker, symbology stacks -->
                <SymbologyList
                    :results="layerResults"
                    :detailsProperties="detailProperties"
                    :selected="selectedLayer"
                    @selection-changed="changeLayerSelection"
                    v-if="layerResults.length > 1"
                ></SymbologyList>

                <!-- Main Details Panel -->
                <div class="detailsContentSection overflow-y-auto h-full" ref="detailsPanel">
                    <ResultList
                        :uid="selectedLayer"
                        :results="layerResults"
                        v-if="!noResults"
                        @item-selected="detailsPanel?.scrollTo({ top: 0 })"
                    ></ResultList>
                    <div :class="['text-center', { 'ml-42': layerResults.length > 1 }]" v-else>
                        {{
                            layerResults.length >= 1
                                ? t('details.layers.results.empty')
                                : t('details.layers.results.empty.noLayers')
                        }}
                    </div>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';

import SymbologyList from './components/symbology-list.vue';
import ResultList from './components/result-list.vue';

import type { PropType } from 'vue';
import type { IdentifyResult, InstanceAPI, PanelInstance } from '@/api';
import type { DetailsItemInstance } from './store';

import { useI18n } from 'vue-i18n';
import { useDetailsStore } from './store';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const detailsStore = useDetailsStore();

const handlers = ref<Array<string>>([]);
const watchers = ref<Array<() => void>>([]);
const layerResults = ref<Array<IdentifyResult>>([]);
const noResults = ref<boolean>(false);
const detailsPanel = ref<HTMLElement | null>(null);

/**
 * UID of the layer "selected" into the detail/list section. Empty string when panel is freshly opened.
 */
const selectedLayer = ref<string>('');

/**
 * Contains the timestamp of the most recent payload. 0 if we are not watching for a greedy open
 */
const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const payload = computed<IdentifyResult[]>(() => detailsStore.payload);
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(() => detailsStore.properties);

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>
    }
});

/**
 * Handles user picking a new layer from the "symbol stack" list
 */
const changeLayerSelection = (uid: string) => {
    selectedLayer.value = uid;
};

/**
 * Finds the result object for a layer uid, or undefined if no result exists
 * @param uid logical layer uid
 */
const findLayerResult = (uid: string): IdentifyResult | undefined => layerResults.value.find(item => item.uid === uid);

/**
 * Intake a new identify result set, initiate auto-open logic.
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

    // track last identify request timestamp and add to payload items. If no new results,
    // disable the greedy identify.
    detailsStore.activeGreedy = newPayload.length === 0 ? 0 : newPayload[0].requestTime;

    layerResults.value = newPayload;

    autoOpen(newPayload);
};

/**
 * Auto-selects which layer to show in the detail section when a new payload of identify results arrive.
 *
 * 1. If a layer is already the active layer in the details view, we wait for it to report its findings.
 *    If it has a result, it remains the active layer.
 * 2. If no active layer (freshly opened panel or old active layer was deleted), or the active layer had
 *    no results in 1., we then watch identify results for all candidate layers. First layer to report
 *    a hit becomes the active layer.
 */
const autoOpen = (newPayload: Array<IdentifyResult>): void => {
    // if the detail panel is already showing details of a specific layer,
    // wait on that layer to resolve first
    if (selectedLayer.value) {
        const selectedResult = findLayerResult(selectedLayer.value);

        if (selectedResult) {
            // wait on the currently selected layer to see if it resolves with new results
            selectedResult.loading.then(() => {
                // new identify request came in while loading old results, exit greedy algo
                if (selectedResult.requestTime !== activeGreedy.value) {
                    return;
                }

                if (selectedResult.items.length > 0) {
                    // got a hit. update items screen with new results and turn off greedy loading
                    openDoneThanks(false);
                } else {
                    // current layer has no hits, fall back to examining all.
                    autoOpenAny(newPayload);
                }
            });
        } else {
            // last opened layer no longer exists, proceed examine all layers
            autoOpenAny(newPayload);
        }
    } else {
        // panel was freshly opened. show first layer with results
        autoOpenAny(newPayload);
    }
};

/**
 * Will watch all the result items. First layer to resolve with a valid result will become
 * the active layer in the details view.
 *
 * @param newPayload the identify result payload we're watching
 * @param priorityStack helper param for priority recursion. Is omitted on initial call
 */
const autoOpenAny = (newPayload: Array<IdentifyResult>, priorityStack?: Array<[number, Array<string>]>): void => {
    /**
     * Array of [priority, [layerIds]], sorted by highest to lowest priority value (low number goes first)
     */
    let priStack: Array<[number, Array<string>]>;
    if (priorityStack) {
        // recursive call, use previously generated stack
        priStack = priorityStack;
    } else {
        const layerDetailsConfigs = detailsStore.properties;

        // list of [priority, layerId]
        const layerPriorities = newPayload.map((idRes): [number, string] => [
            (layerDetailsConfigs[idRes.layerId]?.priority as number) ?? 50,
            idRes.layerId
        ]);
        // create set of distinct priority values
        const setMagic = new Set(layerPriorities.map(lp => lp[0]));
        priStack = [];
        // group layer ids by priority value
        setMagic.forEach(uniquePriority => {
            const matchingLayerIds = layerPriorities.filter(lp => lp[0] === uniquePriority).map(lp => lp[1]);
            priStack.push([uniquePriority, matchingLayerIds]);
        });
        // sort by priority value in descending order
        priStack.sort((a, b) => b[0] - a[0]);
    }

    if (priStack.length === 0) {
        // handles case of no identifiable layers (either from initial conditions, or all priorities have been popped).
        // Stop & exit.

        if (payload.value.length) {
            openDoneThanks(true);
        } else {
            // shenanigans to fix issue #2765
            // when there is no valid things in the payload to inspect, we flip our noResults flag
            // before ever getting into the async inspection stuff below.
            // this is apparently too fast. The noResults=true causes the ResultList component to unmount.
            // that component has watchers that update the highlight when stuff changes. Without a little
            // delay, the unmount occurs before the watcher can watch.

            nextTick().then(() => {
                openDoneThanks(true);
            });
        }

        return;
    }

    // watch the priority layers
    const currentPriorites = priStack[priStack.length - 1][1];
    const loadingResults = newPayload
        .filter(payloadIR => currentPriorites.includes(payloadIR.layerId))
        .map(payloadIR =>
            payloadIR.loading.then(() => (payloadIR.items.length > 0 ? Promise.resolve(payloadIR) : Promise.reject()))
        );

    const lastTime = newPayload.length === 0 ? 0 : newPayload[0].requestTime;

    // wait on any layer promise to resolve first with new identify results
    Promise.any(loadingResults)
        .then(winningResult => {
            // new identify request came in while loading old results, exit greedy algo
            if (winningResult.requestTime !== activeGreedy.value) {
                return;
            }

            // open results item screen and turn off greedy loading

            selectedLayer.value = winningResult.uid;
            openDoneThanks(false);
        })
        .catch(() => {
            if (lastTime === activeGreedy.value) {
                // this process is still the active greedy result.
                // try next priority bucket. recursive call will also handle the no-result empty array case
                priStack.pop();
                autoOpenAny(newPayload, priStack);
            }
        });
};

/**
 * Common flag setting when we've concluded our opening process
 */
const openDoneThanks = (nothingFound: boolean) => {
    detailsStore.activeGreedy = 0;
    noResults.value = nothingFound;
};

/* Vue Lifecycle Functions */

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

onBeforeUnmount(() => {
    handlers.value.forEach(handler => iApi.event.off(handler));
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped>
.detailsContentSection {
    padding-right: 8px;
    margin-right: -8px;
}
</style>
