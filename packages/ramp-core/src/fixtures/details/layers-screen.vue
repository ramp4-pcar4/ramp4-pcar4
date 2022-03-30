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
            <div class="p-5">
                {{
                    $t('details.layers.found', {
                        numResults: totalResultCount,
                        numLayers: payload.length
                    })
                }}
            </div>
            <button
                class="
                    w-full
                    px-20
                    py-10
                    text-md
                    flex
                    hover:bg-gray-200
                    cursor-pointer
                    disabled:cursor-default
                "
                v-for="(item, idx) in layerResults"
                :key="`${item.uid}-${item.loaded}-${idx}`"
                @click="item.loaded && openResult(idx)"
                :disabled="!(item.loaded && item.items.length > 0)"
            >
                <div v-truncate>
                    {{ item.loaded }}
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
import { IdentifyResult } from '@/geo/api';

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
            deep: true,
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
            // set the results, which are currently loading
            this.layerResults = newPayload; // if we notice funny behavior, try making a clone/copy

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

            console.log('array reactive check', this.layerResults);

            const enhance = () => {
                console.log(
                    'loaded status ' +
                        this.layerResults.map(lr => lr.loaded).join()
                );
            };
            setInterval(() => {
                enhance();
            }, 10000);
            enhance();
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
