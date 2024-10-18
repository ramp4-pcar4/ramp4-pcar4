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
                <div class="detailsContentSection overflow-y-auto h-full">
                    <ResultList :uid="selectedLayer" :results="layerResults" v-if="!noResults"></ResultList>
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
import { computed, onBeforeMount, onBeforeUnmount, ref, inject, watch } from 'vue';

import SymbologyList from './components/symbology-list.vue';
import ResultList from './components/result-list.vue';

import type { PropType } from 'vue';
import type { IdentifyResult, InstanceAPI, PanelInstance } from '@/api';
import type { DetailsItemInstance } from './store';

import { useI18n } from 'vue-i18n';
import { useDetailsStore } from './store';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const detailsStore = useDetailsStore();

const handlers = ref<Array<string>>([]);
const watchers = ref<Array<Function>>([]);
const layerResults = ref<Array<IdentifyResult>>([]);
const noResults = ref<boolean>(false);

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
                    detailsStore.activeGreedy = 0;
                    noResults.value = false;
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
 */
const autoOpenAny = (newPayload: Array<IdentifyResult>): void => {
    const loadingResults = newPayload.map(item =>
        item.loading.then(() => (item.items.length > 0 ? Promise.resolve(item) : Promise.reject()))
    );
    const lastTime = newPayload.length === 0 ? 0 : newPayload[0].requestTime;

    // wait on any layer promise to resolve first with new identify results
    Promise.any(loadingResults)
        .then(res => {
            // new identify request came in while loading old results, exit greedy algo
            if (res.requestTime !== activeGreedy.value) {
                return;
            }

            // open results item screen and turn off greedy loading and abort flags
            const winningResult = findLayerResult(res.uid);
            detailsStore.activeGreedy = 0;
            if (winningResult) {
                selectedLayer.value = winningResult.uid;
                noResults.value = false;
            }
        })
        .catch(() => {
            // new identify request came in while loading old results, exit greedy algo
            if (lastTime !== activeGreedy.value) {
                return;
            }

            // no promise resolved, clicked on empty map point with no identify results.
            detailsStore.activeGreedy = 0;
            noResults.value = true;
        });
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
