<template>
    <panel-screen>
        <template #header>
            {{ $t('details.layers.title') }}
        </template>
        <template #controls>
            <minimize @click="panel.minimize()"></minimize>
            <close @click="panel.close()"></close>
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
            payload: get(DetailsStore.payload),
            getLayerByUid: get('layer/getLayerByUid'),
            layers: get('layer/layers')
        };
    },
    computed: {
        totalResultCount(): number {
            return this.layerResults
                .map(r => r.items.length)
                .reduce((a: number, b: number) => a + b, 0);
        }
    },
    watch: {
        payload: {
            deep: false, // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: true,
            handler(newPayload) {
                // Reload items
                this.loadPayloadItems(newPayload);
            }
        }
    },
    methods: {
        /**
         * Load identify result items after all item's load promise has resolved
         */
        loadPayloadItems(newPayload: Array<IdentifyResult>): void {
            // Note the incoming payload array needs to be made reactive at the source,
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
         * Switches the panel screen to display the data for a given result.
         */
        openResult(index: number) {
            if (this.payload[index].items.length > 0) {
                // skip results screen for wms layers
                let itemsPanel = this.$iApi.panel.get('details-items-panel');
                let props: any = {
                    result: this.payload[index]
                };

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
