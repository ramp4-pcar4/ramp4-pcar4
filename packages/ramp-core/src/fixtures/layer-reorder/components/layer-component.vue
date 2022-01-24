<template>
    <div>
        <div v-if="layersModel.length === 0" class="flex-1 ms-10" v-truncate>
            <span>{{ $t('layerreorder.nolayers') }}</span>
        </div>
        <draggable
            v-else
            class="p-3"
            v-model="layersModel"
            item-key="uid"
            :animation="isAnimationEnabled ? 200 : 0"
            @change="onMoveLayerDrag"
        >
            <template #item="{ element }">
                <div
                    v-if="element.isLoaded"
                    :class="`
                        mt-4
                        relative
                        ${element.isExpanded ? 'bg-gray-200' : ''}
                        border-2
                        border-gray-300
                    `"
                >
                    <div
                        class="
                            flex
                            items-center
                            p-5
                            ms-5
                            h-44
                            default-focus-style
                            cursor-pointer
                            hover:bg-gray-200
                        "
                        v-focus-container
                        :content="element.name"
                        v-tippy="{
                            placement: 'top-start',
                            aria: 'describedby'
                        }"
                        :aria-label="element.name"
                    >
                        <!-- dropdown toggle  -->
                        <button
                            v-if="element.supportsSublayers"
                            @click="toggleExpand(element)"
                            class="text-gray-500 hover:text-black p-5"
                            :content="
                                $t(
                                    `layerreorder.${
                                        !element.isExpanded
                                            ? 'expand'
                                            : 'collapse'
                                    }`
                                )
                            "
                            v-focus-item
                            v-tippy="{
                                placement: 'right',
                                aria: 'describedby'
                            }"
                            :aria-label="
                                $t(
                                    `layerreorder.${
                                        !element.isExpanded
                                            ? 'expand'
                                            : 'collapse'
                                    }`
                                )
                            "
                        >
                            <svg
                                v-if="element.isExpanded"
                                class="fill-current w-20 h-20 mx-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13H5v-2h14v2z" />
                            </svg>
                            <svg
                                v-else
                                class="fill-current w-20 h-20 mx-4"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                                ></path>
                            </svg>
                        </button>

                        <!-- name -->
                        <div class="flex-1 mx-10" v-truncate>
                            <span>{{ element.name }} </span>
                        </div>

                        <!-- controls -->
                        <reorder-button
                            :disabled="element.orderIdx === layers.length - 1"
                            direction="up"
                            class="px-7"
                            @click="onMoveLayerButton(element, 1)"
                        />
                        <reorder-button
                            :disabled="element.orderIdx === 0"
                            direction="down"
                            class="px-7"
                            @click="onMoveLayerButton(element, -1)"
                        />
                    </div>

                    <!-- display children of the parent layer -->
                    <div
                        class="
                            items-center
                            bg-gray-200
                            p-5
                            pl-30
                            default-focus-style
                            cursor-pointer
                        "
                        v-if="
                            element.isExpanded && element.sublayers.length > 0
                        "
                        v-focus-list
                    >
                        <div
                            v-for="sublayer in element.sublayers"
                            :key="sublayer.id"
                            class="m-15 default-focus-style"
                            v-truncate
                            v-tippy="{
                                placement: 'bottom-start',
                                aria: 'describedby'
                            }"
                            :content="sublayer.name"
                            :aria-label="sublayer.name"
                            v-focus-item="'show-truncate'"
                        >
                            {{ sublayer.name }}
                        </div>
                    </div>
                </div>
                <!-- else show loading spinner -->
                <div
                    v-else
                    class="flex items-center p-5 mx-8 h-44 default-focus-style"
                    v-focus-item="'show-truncate'"
                    :content="$t('layerreorder.loading')"
                    v-tippy="{
                        placement: 'top-start',
                        aria: 'describedby'
                    }"
                    :aria-label="$t('layerreorder.loading')"
                    truncate-trigger
                >
                    <div class="animate-spin spinner h-20 w-20 px-5"></div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue';
import { get } from '@/store/pathify-helper';
import { LayerStore } from '@/store/modules/layer';
import { GlobalEvents, LayerInstance } from '@/api';
import { LayerModel } from '../definitions';
import LayerReorderButtonV from './reorder-button.vue';
import draggable from 'vuedraggable';

export default defineComponent({
    name: 'LayerReorderComponentV',
    components: {
        draggable,
        'reorder-button': LayerReorderButtonV
    },
    data() {
        return {
            layers: get(LayerStore.layers),
            layersModel: [] as Array<LayerModel>
        };
    },
    computed: {
        /**
         * Get animation enabled status
         */
        isAnimationEnabled(): Boolean {
            return this.$iApi.animate === 'on';
        }
    },
    watch: {
        layers() {
            // want to reload layers in case layers were added/removed, or existing layers have changed
            this.loadLayers();
        }
    },
    mounted() {
        this.loadLayers();

        // watch for layer remove events (this is mainly used to react to sublayer removals)
        this.$iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (layer: LayerInstance) => {
                this.loadLayers();
            },
            'layer-reorder-remove'
        );
    },
    beforeUnmount() {
        // unmount handler
        this.$iApi.event.off('layer-reorder-remove');
    },
    methods: {
        /**
         * Convert the layers from the store into a simple LayerModel interface that draggable can use
         * Additionally set up layer load promise listeners to automatically update model when the layer loads
         */
        loadLayers() {
            // remember which layers were expanded
            let layerExpandedState: { [id: string]: boolean } = {};
            this.layersModel.forEach((layer: LayerModel) => {
                layerExpandedState[layer.id] = layer.isExpanded;
            });

            // reset models
            this.layersModel = [];

            // needs to be reverse because map-stack is in reverse order of layer list
            this.layersModel = [...toRaw(this.layers)]
                .reverse()
                .map((layer: LayerInstance, idx: number) => {
                    // load the model from the cache if available
                    let model: LayerModel = {
                        id: layer.id,
                        uid: layer.uid,
                        name: '',
                        orderIdx: this._reverseIndex(idx),
                        isExpanded: layerExpandedState[layer.id] || false,
                        isLoaded: false,
                        supportsSublayers: layer.supportsSublayers,
                        sublayers: []
                    };
                    return model;
                });

            // add load promise listeners to update models
            this.layers.forEach((layer: LayerInstance) => {
                layer.isLayerLoaded().then(() => {
                    this.loadLayerData(layer);
                });
            });
        },

        /**
         * Update the layer model associated with this layer
         * @param {LayerInstance} layer the layer that has loaded
         */
        loadLayerData(layer: LayerInstance) {
            let model: LayerModel | undefined = this.layersModel.find(
                (layerModel: LayerModel) => layerModel.id === layer.id
            );

            if (!model) {
                return;
            }

            // load data from layer
            model.name = layer.name;
            model.sublayers = layer.sublayers
                .filter(
                    (sublayer: LayerInstance) =>
                        sublayer !== undefined && !sublayer.isRemoved
                )
                .map((sublayer: LayerInstance) => {
                    return {
                        id: sublayer.id,
                        name: sublayer.name
                    };
                });
            model.isLoaded = true;
        },

        /**
         * Toggle expand on a layer model
         * @param {LayerModel} layerModel the layer model to update
         */
        toggleExpand(layerModel: LayerModel) {
            if (!layerModel.supportsSublayers) {
                return;
            }
            layerModel.isExpanded = !layerModel.isExpanded;
            this.$iApi.updateAlert(
                this.$t(
                    layerModel.isExpanded
                        ? 'layerreorder.expanded'
                        : 'layerreorder.collapsed',
                    {
                        name: layerModel.name
                    }
                )
            );
        },

        /**
         * Move a layer's order index
         * Called by draggable after the user stops dragging the layer
         * @param {CustomEvent} evt draggable event that contains the data of the moved object
         */
        onMoveLayerDrag(evt: any) {
            if (!evt.moved) {
                // not a move event, ignore the change
                return;
            }

            const layerModel: LayerModel = evt.moved.element;
            const oldOrderIdx: number = evt.moved.oldIndex;
            const newOrderIdx: number = evt.moved.newIndex;

            if (oldOrderIdx === newOrderIdx) {
                // the layer was not moved
                return;
            }

            const layer: LayerInstance = this.layers.find(
                (l: LayerInstance) => l.uid === layerModel.uid
            );

            // apply changes
            const newIdx: number = this._reverseIndex(newOrderIdx);
            this.$iApi.geo.map.reorder(layer, newIdx);
            layerModel.orderIdx = newIdx;

            this.$iApi.updateAlert(
                this.$t('layerreorder.layermoved', {
                    name: layerModel.name,
                    index: newIdx
                })
            );
        },

        /**
         * Increment/Decrement a layer's order index
         * Called by the reorder buttons
         * @param {LayerModel} layerModel layer that is being moved
         * @param {number} direction direction to move the layer (+1 is up and -1 is down)
         */
        onMoveLayerButton(layerModel: LayerModel, direction: number) {
            let layer: LayerInstance | undefined;
            let currIdx: number = -1;

            this.layers.some((l: LayerInstance, idx: number) => {
                if (l.uid === layerModel.uid) {
                    currIdx = idx;
                    layer = l;
                }
                return l.uid === layerModel.uid;
            });

            if (currIdx === -1 || layer === undefined) {
                // just in case
                return;
            }

            // if this layer is already at the edge, return
            if (
                (direction === -1 && currIdx === 0) ||
                (direction === 1 && currIdx === this.layersModel.length - 1)
            ) {
                return;
            }

            // apply changes
            const newIdx: number = currIdx + direction;
            this.$iApi.geo.map.reorder(layer, newIdx);
            layerModel.orderIdx = newIdx;

            this.$iApi.updateAlert(
                this.$t('layerreorder.layermoved', {
                    name: layerModel.name,
                    index: newIdx
                })
            );
        },

        /**
         * Helper function - reverse a given index relative to the layer stack
         */
        _reverseIndex(idx: number) {
            return this.layers.length - 1 - idx;
        }
    }
});
</script>

<style lang="scss" scoped></style>
