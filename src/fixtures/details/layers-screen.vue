<template>
    <panel-screen>
        <template #header>
            {{ $t('details.layers.title') }}
        </template>
        <template #controls>
            <minimize @click="panel?.minimize()"></minimize>
            <close @click="panel?.close()"></close>
        </template>
        <template #content>
            <!-- Grond total -->
            <div class="p-5">
                {{
                    $t('details.layers.found', {
                        numResults: totalResultCount,
                        numLayers: payload.length
                    })
                }}
            </div>
            <!-- Clicker for each layer -->
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
                <!-- Display the count if item exists, else display the loading spinner -->
                <div v-if="item.loaded" class="px-5">
                    {{ item.items.length }}
                </div>
                <div v-else class="animate-spin spinner h-20 w-20 px-5"></div>
            </button>
        </template>
    </panel-screen>
</template>

<script lang="ts">
// This screen is the view of all layers that were interrogated in the identify

import { defineComponent } from 'vue';
import { get } from '@/store/pathify-helper';
import { DetailsStore } from './store';

import { LayerInstance, PanelInstance } from '@/api';
import type { IdentifyResult } from '@/geo/api';

export default defineComponent({
    name: 'DetailsLayersScreenV',
    props: {
        panel: PanelInstance
    },
    data() {
        return {
            layerResults: [] as Array<IdentifyResult>,
            lastLayerId: '' as string,
            payload: get(DetailsStore.payload),
            getLayerByUid: get('layer/getLayerByUid'),
            layers: get('layer/layers'),
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

    beforeUnmount() {
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

            this.layerResults = newPayload;

            // procedure to auto open the individual item panel whenever possible
            this.autoOpen(newPayload);

            // also wait for everything to finish so we can display a grand total
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
            // if the item panel is already open for a layer, wait on that layer to resolve first
            const itemsPanel = this.$iApi.panel.get('details-items-panel');
            if (this.lastLayerId && itemsPanel.isOpen) {
                const lastIdx = this.layerResults.findIndex(
                    (item: IdentifyResult) => (item.uid = this.lastLayerId)
                );

                if (lastIdx !== -1) {
                    const lastIdentify = this.layerResults[lastIdx];
                    // wait on last opened layer to see if it resolves with new results
                    lastIdentify.loading.then(() => {
                        // otherwise proceed as normal in case 1 by opening item panel for any layer that resolves
                        lastIdentify.items.length > 0
                            ? this.openResult(lastIdx)
                            : this.autoOpenAny(newPayload);
                    });
                } else {
                    // if last opened layer no longer exists throw an error
                    console.error(
                        'Last opened layer ID for details cannot be found.'
                    );
                }
            } else {
                // if no identify item panel was open or no last layer is tracked, proceed with case 1
                this.autoOpenAny(newPayload);
            }
        },

        /**
         * Helper function for greedy auto-open function, implementation for case 1.
         */
        autoOpenAny(newPayload: Array<IdentifyResult>): void {
            const loadingResults = newPayload.map((item: IdentifyResult) => {
                return item.loading.then(() =>
                    item.items.length > 0
                        ? Promise.resolve(item.uid)
                        : Promise.reject()
                );
            });

            // wait on any layer promise to resolve first with new identify results
            Promise.any(loadingResults)
                .then((res: any) => {
                    const idx = this.layerResults.findIndex(
                        (item: IdentifyResult) => item.uid === res
                    );
                    if (idx !== -1) {
                        this.openResult(idx);
                    }
                })
                .catch(() => {
                    // no promise resolved, clicked on empty map point with no identify results
                    // then clear the last tracked layer and close the items panel
                    this.lastLayerId = '';
                    const itemsPanel = this.$iApi.panel.get(
                        'details-items-panel'
                    );
                    if (itemsPanel.isOpen) {
                        itemsPanel.close();
                    }
                });
        },

        /**
         * Switches the panel screen to display the data for a given result.
         */
        openResult(index: number) {
            if (this.payload[index].items.length > 0) {
                // skip results screen for wms layers
                let itemsPanel = this.$iApi.panel.get('details-items-panel');
                let props: any = {
                    result: this.payload[index]
                };
                // track last open layer ID every time item panel is opened
                this.lastLayerId = this.payload[index].uid;

                if (!itemsPanel.isOpen) {
                    // open the items panel
                    this.$iApi.panel!.open({
                        id: 'details-items-panel',
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
            let item: LayerInstance | undefined = this.getLayerByUid(
                layerInfo.uid
            );
            if (!item) return '';

            return item.name;
        }
    }
});
</script>

<style lang="scss"></style>
