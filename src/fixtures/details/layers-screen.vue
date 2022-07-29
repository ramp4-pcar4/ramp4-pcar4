<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('details.layers.title') }}
        </template>
        <template #content>
            <div v-if="activeGreedy === 0">
                <!-- grond total -->
                <div class="p-5">
                    {{
                        $t('details.layers.found', {
                            numResults: totalResultCount,
                            numLayers: payload.length
                        })
                    }}
                </div>
                <!-- clicker for each layer -->
                <button
                    class="w-full px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer disabled:cursor-default"
                    v-for="(item, idx) in layerResults"
                    :key="item.uid"
                    @click="item.loaded && openResult(idx)"
                    :disabled="!(item.loaded && item.items.length > 0)"
                >
                    <div v-truncate>
                        {{ layerName(idx) || $t('details.layers.loading') }}
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
                {{ $t('details.item.loading') }}
            </div>
            <!-- clear panel when new identify request came in -->
            <div v-else></div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
// This screen is the view of all layers that were interrogated in the identify (the identify panel)

import { defineComponent } from 'vue';
import { DetailsStore } from './store';
import { GlobalEvents, LayerInstance, PanelInstance } from '@/api';
import type { IdentifyResult } from '@/geo/api';

export default defineComponent({
    name: 'DetailsLayersScreenV',
    props: {
        panel: PanelInstance
    },
    data() {
        return {
            layerResults: [] as Array<IdentifyResult>,
            lastLayerUid: '' as string,
            activeGreedy: this.get(DetailsStore.activeGreedy), // 0 = turn greedy mode off, some timestamp = greedy mode running with last request timestamp
            slowLoadingFlag: this.get(DetailsStore.slowLoadingFlag),
            payload: this.get(DetailsStore.payload),
            detailProperties: this.get(DetailsStore.properties),
            getLayerByUid: this.get('layer/getLayerByUid'),
            layers: this.get('layer/layers'),
            mobileMode: this.get('panel/mobileView'),
            remainingWidth: this.get('panel/getRemainingWidth'),
            handlers: [] as Array<string>,
            watchers: [] as Array<Function>
        };
    },
    computed: {
        totalResultCount(): number {
            return this.layerResults
                .map(r => r.items.length)
                .reduce((a: number, b: number) => a + b, 0);
        }
    },
    created() {
        // keep track of this watcher because it needs to be removed when this component is unmounted
        this.watchers.push(
            this.$watch(
                'payload',
                (newPayload: Array<IdentifyResult>) => {
                    // Reload items
                    this.loadPayloadItems(newPayload);
                },
                {
                    deep: false, // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
                    immediate: true
                }
            )
        );
    },
    mounted() {
        // if details item screen is closed while greedy open is running, turn abort flag on
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.PANEL_CLOSED,
                (panel: PanelInstance) => {
                    if (
                        panel.id === 'details-items' ||
                        panel.id === 'details-layers'
                    ) {
                        this.$iApi.$vApp.$store.set(
                            DetailsStore.activeGreedy,
                            0
                        );
                    }
                }
            )
        );

        this.watchers.push(
            this.$watch('activeGreedy', (newGreedy: Number) => {
                // watch to turn off greedy loading flag if greedy mode is turned off
                if (newGreedy === 0) {
                    this.$iApi.$vApp.$store.set(
                        DetailsStore.slowLoadingFlag,
                        false
                    );
                }
            })
        );
    },
    beforeUnmount() {
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
        this.watchers.forEach(unwatch => unwatch());
    },
    methods: {
        /**
         * Load identify result items after all item's load promise has resolved
         */
        loadPayloadItems(newPayload: Array<IdentifyResult>): void {
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
            const detailsPanel = this.$iApi.panel.get('details-items');
            const detailsWidth = detailsPanel.width || 350;

            const greedyMode =
                this.mobileMode ||
                (this.remainingWidth < detailsWidth && !detailsPanel.isOpen) ||
                newPayload.length === 0
                    ? 0
                    : newPayload[0].requestTime;
            this.$iApi.$vApp.$store.set(DetailsStore.activeGreedy, greedyMode);
            this.$iApi.$vApp.$store.set(DetailsStore.slowLoadingFlag, false);

            this.layerResults = newPayload;

            // wait for everything to finish so we can display a grand total
            this.calculateGrandTotal(newPayload);

            // procedure to auto open the individual item panel whenever possible
            this.autoOpen(newPayload);
        },

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
        autoOpen(newPayload: Array<IdentifyResult>): void {
            const itemsPanel = this.$iApi.panel.get('details-items');
            // if the item panel is already open for a layer, wait on that layer to resolve first
            if (this.lastLayerUid && itemsPanel.isOpen) {
                const lastIdx = this.layerResults.findIndex(
                    (item: IdentifyResult) => item.uid === this.lastLayerUid
                );

                if (lastIdx !== -1) {
                    const lastIdentify = this.layerResults[lastIdx];
                    // wait on last opened layer to see if it resolves with new results
                    lastIdentify.loading.then(() => {
                        // new identify request came in while loading old results, exit greedy algo
                        if (lastIdentify.requestTime !== this.activeGreedy) {
                            return;
                        }

                        // update items screen with new results for that layer and turn off greedy loading and abort flags
                        if (lastIdentify.items.length > 0) {
                            this.$iApi.$vApp.$store.set(
                                DetailsStore.activeGreedy,
                                0
                            );
                            this.openResult(lastIdx);
                        } else {
                            // otherwise proceed as normal in case 1
                            this.autoOpenAny(newPayload);
                        }
                    });
                } else {
                    // if last opened layer no longer exists close items panel and proceed with case 1
                    this.closeResult();
                    this.autoOpenAny(newPayload);
                }
            } else {
                // if no identify item panel was open or no last layer is tracked, proceed with case 1
                this.autoOpenAny(newPayload);
            }

            // after a set time period, if greedy mode is still running for current identify request turn on loading flag
            setTimeout(() => {
                if (
                    this.activeGreedy !== 0 &&
                    newPayload[0].requestTime === this.activeGreedy
                ) {
                    this.$iApi.$vApp.$store.set(
                        DetailsStore.slowLoadingFlag,
                        true
                    );
                }
            }, 500);
        },

        /**
         * Helper function for greedy auto-open function, implementation for case 1.
         */
        autoOpenAny(newPayload: Array<IdentifyResult>): void {
            const loadingResults = newPayload.map((item: IdentifyResult) =>
                item.loading.then(() =>
                    item.items.length > 0
                        ? Promise.resolve(item)
                        : Promise.reject()
                )
            );
            const lastTime =
                newPayload.length === 0 ? 0 : newPayload[0].requestTime;

            // wait on any layer promise to resolve first with new identify results
            // @ts-ignore
            Promise.any(loadingResults)
                .then((res: IdentifyResult) => {
                    // new identify request came in while loading old results, exit greedy algo
                    if (res.requestTime !== this.activeGreedy) {
                        return;
                    }

                    // open results item screen and turn off greedy loading and abort flags
                    const idx = this.layerResults.findIndex(
                        (item: IdentifyResult) => item.uid === res.uid
                    );
                    this.$iApi.$vApp.$store.set(DetailsStore.activeGreedy, 0);
                    if (idx !== -1) {
                        this.openResult(idx);
                    }
                })
                .catch(() => {
                    // new identify request came in while loading old results, exit greedy algo
                    if (lastTime !== this.activeGreedy) {
                        return;
                    }

                    // no promise resolved, clicked on empty map point with no identify results
                    // then clear the last tracked layer and close the items panel
                    this.lastLayerUid = '';
                    this.$iApi.$vApp.$store.set(DetailsStore.activeGreedy, 0);
                    this.closeResult();
                });
        },

        /**
         * Wait for all layers to finish loading to alert total number of results to be displayed in identify summary.
         */
        calculateGrandTotal(newPayload: Array<IdentifyResult>): void {
            Promise.all(
                newPayload.map((item: IdentifyResult) => item.loading)
            ).then(() => {
                // alert the user about the number of results found
                this.$iApi.updateAlert(
                    this.$iApi.$vApp.$t('details.layers.found', {
                        numResults: this.totalResultCount,
                        numLayers: newPayload.length
                    })
                );
            });
        },

        /**
         * Closes details item panel.
         */
        closeResult(): void {
            const itemsPanel = this.$iApi.panel.get('details-items');
            if (itemsPanel.isOpen) {
                itemsPanel.close();
            }
        },

        /**
         * Switches the panel screen to display the data for a given result.
         */
        openResult(index: number) {
            if (this.payload[index].items.length > 0) {
                // set greedy mode off for any existing running requests (for case where user manually clicks an item)
                this.$iApi.$vApp.$store.set(DetailsStore.activeGreedy, 0);

                // skip results screen for wms layers
                let itemsPanel = this.$iApi.panel.get('details-items');
                let props = {
                    result: this.payload[index]
                };
                // track last open layer ID every time item panel is opened
                this.lastLayerUid = this.payload[index].uid;

                if (!itemsPanel.isOpen) {
                    // open the items panel
                    this.$iApi.panel!.open({
                        id: 'details-items',
                        screen: 'item-screen',
                        props: props
                    });
                } else {
                    // update the items screen
                    itemsPanel!.show({
                        screen: 'item-screen',
                        props: props
                    });
                }
            }
        },

        /**
         * Get the layer name given layer's payload index
         */
        layerName(idx: number) {
            const layerInfo = this.payload[idx];
            let layer: LayerInstance | undefined = this.getLayerByUid(
                layerInfo.uid
            );
            if (
                layer &&
                this.detailProperties[layer.id] &&
                this.detailProperties[layer.id].name
            ) {
                return this.detailProperties[layer.id].name;
            }
            return layer?.name ?? '';
        }
    }
});
</script>

<style lang="scss"></style>
