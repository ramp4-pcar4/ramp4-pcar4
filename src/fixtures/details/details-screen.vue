<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('details.layers.title') }}
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
                    <ResultList
                        :uid="selectedLayer"
                        :results="layerResults"
                        v-if="!noResults"
                    ></ResultList>
                    <div class="ml-42 text-center" v-else>
                        {{ t('details.layers.results.empty') }}
                    </div>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    onBeforeMount,
    onBeforeUnmount,
    ref,
    inject,
    watch
} from 'vue';

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
const selectedLayer = ref<string>('');
const userSelectedLayer = ref<boolean>(false);

const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const payload = computed<IdentifyResult[]>(() => detailsStore.payload);
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>
    }
});

const changeLayerSelection = (uid: string) => {
    selectedLayer.value = uid;
    userSelectedLayer.value = true;
};

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

    // track last identify request timestamp and add to payload items. If details items panel does not exist, no new results,
    // app is in mobile mode, or if there is not enough space available to open the detail items panel,
    // then disable the greedy identify.
    const greedyMode = newPayload.length === 0 ? 0 : newPayload[0].requestTime;
    detailsStore.activeGreedy = greedyMode;
    detailsStore.slowLoadingFlag = false;

    layerResults.value = newPayload;

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
    // if the item panel is already open for a layer, wait on that layer to resolve first
    if (userSelectedLayer.value) {
        const lastIdx = layerResults.value.findIndex(
            (item: IdentifyResult) => item.uid === selectedLayer.value
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
                    userSelectedLayer.value = false;
                    noResults.value = false;
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
            const idx = layerResults.value.find(
                (item: IdentifyResult) => item.uid === res.uid
            );
            detailsStore.activeGreedy = 0;
            if (idx !== undefined) {
                selectedLayer.value = idx.uid;
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

<style lang="scss" scoped>
.detailsContentSection {
    padding-right: 8px;
    margin-right: -8px;
}
</style>
