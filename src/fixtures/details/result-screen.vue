<template>
    <panel-screen :panel="panel">
        <template #header>{{ $t('details.items.title') }}</template>
        <template #controls>
            <minimize @click="panel.minimize()"></minimize>
            <back
                v-if="previousItemIndex !== -1"
                @click="this.openResult(this.previousItemIndex)"
            ></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div v-if="result.items.length > 0">
                <span class="flex font-bold p-8 w-full" v-truncate>{{
                    layerName
                }}</span>
                <button
                    class="w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer"
                    v-for="(item, idx) in result.items"
                    :key="idx"
                    @click="item.loaded && openResult(idx)"
                    :disabled="!item.loaded"
                    v-focus-item
                    v-truncate
                >
                    <!-- ifs on each span as wrapper breaks aligment. smart person might improve things -->
                    <span
                        v-if="item.loaded"
                        v-html="itemIcon(item.data, idx)"
                        class="flex-none symbologyIcon"
                    ></span>
                    <span
                        class="flex-initial py-5 px-10"
                        v-truncate
                        v-if="item.loaded"
                    >
                        {{
                            item.data[nameField] ||
                            $t('details.result.default.name', [idx + 1])
                        }}
                    </span>
                    <span
                        v-if="!item.loaded"
                        class="animate-spin spinner h-20 w-20 px-5"
                    ></span>
                </button>
            </div>
            <div v-else>{{ $t('details.layers.results.empty') }}</div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { get } from '@/store/pathify-helper';
import { DetailsStore } from './store';

import type { LayerInstance, PanelInstance } from '@/api';
import type { IdentifyResult } from '@/geo/api';

export default defineComponent({
    name: 'DetailsResultScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        },
        result: {
            type: Object as PropType<IdentifyResult>,
            required: true
        },
        // the index of the item that was selected before coming to this screen (optional)
        previousItemIndex: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            payload: get(DetailsStore.payload),
            getLayerByUid: get('layer/getLayerByUid'),
            icon: [] as string[]
        };
    },
    computed: {
        /**
         * Returns the name field for the layer specified by resultIndex.
         */
        nameField(): string | undefined {
            const layer: LayerInstance | undefined = this.getLayerByUid(
                this.result.uid
            );
            return layer?.nameField;
        },

        /**
         * Returns the layer name of the result
         */
        layerName(): string {
            const layer: LayerInstance | undefined = this.getLayerByUid(
                this.result.uid
            );
            return layer?.name ?? '';
        }
    },
    mounted() {
        this.$iApi.updateAlert(
            this.$iApi.$vApp.$t('details.item.alert.show.list', {
                layerName: this.layerName
            })
        );
    },
    methods: {
        /**
         * Switches the panel screen to display the data for a given result. Provides the currently selected layer index and the currently selected feature index as props.
         */
        openResult(itemIndex: number) {
            this.panel.show({
                screen: 'item-screen',
                props: { result: this.result, itemIndex: itemIndex }
            });
        },

        /**
         * Updates the value of icon[idx] with the svg string of the item.
         *
         * @param {any} data data of item in identifyResult.items
         * @param {number} idx index of item in identifyResult.items
         */
        itemIcon(data: any, idx: number) {
            const layer: LayerInstance | undefined = this.getLayerByUid(
                this.result.uid
            );
            if (layer === undefined) {
                console.warn(
                    `could not find layer for uid ${this.result.uid} during icon lookup`
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
