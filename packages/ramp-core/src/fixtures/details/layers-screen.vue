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
                        numResults: getPayloadResults(),
                        numLayers: payload.length
                    })
                }}
            </div>
            <div
                class="px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer"
                v-for="(item, idx) in payload"
                :key="`${idx}-${item.items.length}`"
                @click="openResult(idx)"
            >
                <div v-truncate>
                    {{ layerInfo(idx) || $t('details.layers.loading') }}
                </div>
                <div class="flex-auto"></div>
                <!-- Vue doesn't seem to be rerendering when item.items changes -->
                <div class="px-5">{{ item.items.length }}</div>
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
            payload: get(DetailsStore.payload),
            getLayerByUid: get('layer/getLayerByUid'),
            layers: get('layer/layers')
        };
    },
    methods: {
        /**
         * Switches the panel screen to display the data for a given result.
         */
        openResult(index: number) {
            if (this.getLayerByUid(this.payload[index].uid)!.layerType === 'ogcWms') {
                // skip results screen for wms layers
                this.panel!.show({
                    screen: 'details-screen-item',
                    props: { resultIndex: index, layerType: 'ogcWms', itemIndex: 0 }
                });
            } else {
                this.panel!.show({
                    screen: 'details-screen-result',
                    props: { resultIndex: index }
                });
            }
        },

        layerInfo(idx: number) {
            const layerInfo = this.payload[idx];
            // Check to see if there is a custom template defined for the selected layer.
            let item: LayerInstance | undefined = this.layers
                .map((layer: any) => {
                    let layerNode = layer.getLayerTree();

                    if (!layerNode) return;

                    // Determine if the selected UID is a child of this layer.
                    if (layerNode.findChildByUid(layerInfo.uid) !== undefined) {
                        return layer;
                    }
                })
                .filter((node: any) => node !== undefined)[0];

            if (!item) return;

            return item.getName(layerInfo.uid);
        },
        // later, this should probably go into computed. leaving it here until we get the reactivity issues figured out.
        getPayloadResults(): any {
            return this.payload
                .map((r: IdentifyResult) => r.items.length)
                .reduce((a: number, b: number) => a + b, 0);
        }
    }
});
</script>

<style lang="scss"></style>
