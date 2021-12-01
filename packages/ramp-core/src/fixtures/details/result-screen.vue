<template>
    <panel-screen :panel="panel">
        <template #header>{{ $t('details.title') }}</template>
        <template #controls>
            <minimize @click="panel.minimize()"></minimize>
            <back @click="panel.show('details-screen-layers')"></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div v-if="identifyResult.items.length > 0">
                <div
                    class="
                        flex
                        px-10
                        py-10
                        text-md
                        hover:bg-gray-200
                        cursor-pointer
                    "
                    v-for="(item, idx) in identifyResult.items"
                    :key="idx"
                    @click="openResult(idx)"
                    v-focus-item
                    v-truncate
                >
                    <!-- TODO: test if itemIcon() call works as intended -->
                    <span
                        v-html="itemIcon(item.data, idx)"
                        class="flex-none symbologyIcon"
                    ></span>
                    <span class="flex-initial py-5 px-10" v-truncate>
                        {{
                            item.data[nameField] ||
                            'Identify Result ' + (idx + 1)
                        }}
                    </span>
                </div>
            </div>
            <div v-else>{{ $t('details.results.empty') }}</div>
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
    name: 'DetailsResultScreenV',
    props: {
        panel: PanelInstance,
        resultIndex: Number
    },
    data() {
        return {
            payload: get(DetailsStore.payload),
            getLayerByUid: get('layer/getLayerByUid'),
            icon: [] as String[]
        };
    },
    computed: {
        /**
         * Returns the identify information for the layer specified by resultIndex.
         */
        identifyResult(): IdentifyResult {
            return this.payload[this.resultIndex!];
        },

        /**
         * Returns the name field for the layer specified by resultIndex.
         */
        nameField(): string | undefined {
            const layerInfo = this.payload[this.resultIndex!];
            const uid = layerInfo?.uid;
            const layer: LayerInstance | undefined = this.getLayerByUid(uid);
            return layer?.nameField;
        }
    },
    methods: {
        /**
         * Switches the panel screen to display the data for a given result. Provides the currently selected layer index and the currently selected feature index as props.
         */
        openResult(itemIndex: number) {
            this.panel!.show({
                screen: 'details-screen-item',
                props: { resultIndex: this.resultIndex, itemIndex: itemIndex }
            });
        },

        /**
         * Updates the value of icon[idx] with the svg string of the item.
         *
         * @param {any} data data of item in identifyResult.items
         * @param {number} idx index of item in identifyResult.items
         */
        itemIcon(data: any, idx: number) {
            const uid = this.identifyResult.uid;
            const layer: LayerInstance | undefined = this.getLayerByUid(uid);
            if (layer === undefined) {
                console.warn(
                    `could not find layer for uid ${uid} during icon lookup`
                );
                return;
            }

            const oidField = layer.oidField;
            layer.getIcon(data[oidField]).then(value => {
                if (this.icon[idx] !== value) {
                    this.icon[idx] = value;
                }
            });

            return this.icon[idx];
        }
    }
});
</script>

<style lang="scss"></style>
