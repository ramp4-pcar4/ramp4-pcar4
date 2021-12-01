<template>
    <panel-screen>
        <template #header>
            {{ $t('details.title') }}
        </template>
        <template #controls>
            <minimize @click="panel.minimize()"></minimize>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div class="p-5">
                {{
                    $t('details.layers.found', {
                        numResults: getPayloadTotalCount,
                        numLayers: payload.length
                    })
                }}
            </div>
            <div
                class="
                    px-20
                    py-10
                    text-md
                    flex
                    hover:bg-gray-200
                    cursor-pointer
                "
                v-for="(item, idx) in layerResults"
                :key="`${item ? item.uid : 'loading'}-${idx}`"
                @click="item && openResult(idx)"
            >
                <div v-truncate>
                    {{ layerInfo(idx) || $t('details.layers.loading') }}
                </div>
                <div class="flex-auto"></div>
                <!-- Display the count if item exists, else display the loading spinner -->
                <div v-if="item" class="px-5">{{ item.items.length }}</div>
                <div v-else class="animate-spin spinner h-20 w-20 px-5"></div>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
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
            layerResults: [] as Array<IdentifyResult | undefined>,
            payload: get(DetailsStore.payload),
            getLayerByUid: get('layer/getLayerByUid'),
            layers: get('layer/layers')
        };
    },
    computed: {
        getPayloadTotalCount(): any {
            return this.layerResults
                .map((r: IdentifyResult | undefined) =>
                    r ? r.items.length : 0
                )
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
            this.layerResults = new Array(newPayload.length).fill(undefined);
            newPayload.forEach((item: IdentifyResult, idx: number) =>
                item.loadPromise.then(() => {
                    this.layerResults[idx] = item;
                })
            );
        },

        /**
         * Switches the panel screen to display the data for a given result.
         */
        openResult(index: number) {
            if (
                this.getLayerByUid(this.payload[index].uid)!.layerType ===
                'ogcWms'
            ) {
                // skip results screen for wms layers
                this.panel!.show({
                    screen: 'details-screen-item',
                    props: {
                        resultIndex: index,
                        layerType: 'ogcWms',
                        itemIndex: 0
                    }
                });
            } else {
                this.panel!.show({
                    screen: 'details-screen-result',
                    props: { resultIndex: index }
                });
            }
        },

        /**
         * Get the layer name given layer's payload index
         */
        layerInfo(idx: number) {
            const layerInfo = this.payload[idx];
            // Check to see if there is a custom template defined for the selected layer.
            let item: LayerInstance | undefined = this.getLayerByUid(
                layerInfo.uid
            );
            if (!item) return;

            return item.name;
        }
    }
});
</script>

<style lang="scss"></style>
