<template>
    <div>
        <div v-if="layersModel.length === 0" class="flex-1 ms-10" v-truncate>
            <span class="p-5">{{ $t('layer-reorder.nolayers') }}</span>
        </div>
        <draggable
            v-else
            class="p-3"
            v-model="layersModel"
            item-key="uid"
            :animation="isAnimationEnabled ? 200 : 0"
            @change="onMoveLayerDragEnd"
            @start="onMoveLayerDragStart"
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
                        default-focus-style
                    `"
                    v-tippy="{
                        placement: 'top-start',
                        aria: 'describedby'
                    }"
                    :aria-label="element.name"
                    :content="element.name"
                    v-focus-container
                >
                    <div
                        class="flex items-center p-5 ms-5 h-44 cursor-pointer hover:bg-gray-200"
                    >
                        <!-- dropdown toggle  -->
                        <button
                            v-if="element.supportsSublayers"
                            @click="toggleExpand(element)"
                            class="text-gray-500 hover:text-black p-5"
                            :content="
                                $t(
                                    `layer-reorder.${
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
                                    `layer-reorder.${
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
                            :disabled="_isBoundary(element.orderIdx + 1)"
                            direction="up"
                            class="px-7"
                            @click="onMoveLayerButton(element, 1)"
                        />
                        <reorder-button
                            :disabled="_isBoundary(element.orderIdx - 1)"
                            direction="down"
                            class="px-7"
                            @click="onMoveLayerButton(element, -1)"
                        />
                    </div>

                    <!-- display children of the parent layer -->
                    <div
                        class="items-center bg-gray-200 p-5 pl-30 default-focus-style cursor-pointer"
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
                            v-focus-container
                        >
                            {{ sublayer.name }}
                        </div>
                    </div>
                </div>
                <!-- else show loading spinner -->
                <div
                    v-else
                    class="flex items-center p-5 mx-8 h-44 default-focus-style"
                    :content="$t('layer-reorder.loading')"
                    v-tippy="{
                        placement: 'top-start',
                        aria: 'describedby'
                    }"
                    :aria-label="$t('layer-reorder.loading')"
                    v-focus-container
                    truncate-trigger
                >
                    <div class="animate-spin spinner h-20 w-20 px-5"></div>
                    <div class="flex-1 mx-10">
                        <span>{{ $t('layer-reorder.loading') }} </span>
                    </div>
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
import type { LayerModel } from '../definitions';
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
            layersModel: [] as Array<LayerModel>,
            oldOrder: [] as Array<number>, // keeps track of layer order when dragging starts
            minIdx: -Infinity, // lowest allowed index
            maxIdx: Infinity, // highest allowed index,
            handlers: [] as Array<string>,
            watchers: [] as Array<Function>
        };
    },
    computed: {
        /**
         * Get animation enabled status
         */
        isAnimationEnabled(): boolean {
            return this.$iApi.animate;
        }
    },

    created() {
        this.watchers.push(
            this.$watch('layers', () => {
                // want to reload layers in case layers were added/removed, or existing layers have changed
                this.loadLayers();
            })
        );
    },

    mounted() {
        this.loadLayers();

        // watch for layer remove events (this is mainly used to react to sublayer removals)
        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.LAYER_REMOVE, () => {
                this.loadLayers();
            })
        );
    },
    beforeUnmount() {
        // unmount handlers and watchers
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
        this.watchers.forEach(unwatch => unwatch());
    },
    methods: {
        /**
         * Convert the layers from the store into a simple LayerModel interface that draggable can use
         * Additionally set up layer load promise listeners to automatically update model when the layer loads
         */
        loadLayers(): void {
            // remember which layers were expanded
            let layerExpandedState: { [id: string]: boolean } = {};
            this.layersModel.forEach((layer: LayerModel) => {
                layerExpandedState[layer.id] = layer.isExpanded;
            });

            // reset models
            this.layersModel = [];

            this.layersModel = [...toRaw(this.layers)]
                .filter((layer: LayerInstance) => !layer.isCosmetic) // filter out cosmetic layers
                .reverse() // needs to be reverse because map-stack is in reverse order of layer list
                .map((layer: LayerInstance) => {
                    // get the true index of this layer in the layers list
                    const trueIdx: number = this.layers.indexOf(layer);
                    // map layer instance to simpler layer model object
                    let model: LayerModel = {
                        id: layer.id,
                        uid: layer.uid,
                        name: '',
                        orderIdx: trueIdx,
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

            // calculate the min and max boundary indices
            // algorithm explanation:
            //      loop through the list of layers from both directions and store the index of the first cosmetic layer hit
            //      if we only see cosmetic layers after that index, then the index will not change and hence we found the boundary
            //      if we see a non-cosmetic layer, then we reset the index because that was not the boundary
            this.layers.forEach((layer: LayerInstance, idx: number) => {
                // check if we hit a cosmetic layer and if we did, keep track of the index
                if (this.maxIdx === Infinity && layer.isCosmetic) {
                    this.maxIdx = idx;
                }
                if (
                    this.minIdx === -Infinity &&
                    this.layers[this._reverseIndex(idx)].isCosmetic
                ) {
                    this.minIdx = this._reverseIndex(idx);
                }

                // check if it's a non-cosmetic layer, and if it is, reset the boundaries
                if (!layer.isCosmetic) {
                    this.maxIdx = Infinity;
                }
                if (!this.layers[this._reverseIndex(idx)].isCosmetic) {
                    this.minIdx = -Infinity;
                }
            });
        },

        /**
         * Update the layer model associated with this layer
         * @param {LayerInstance} layer the layer that has loaded
         */
        loadLayerData(layer: LayerInstance): void {
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
        toggleExpand(layerModel: LayerModel): void {
            if (!layerModel.supportsSublayers) {
                return;
            }
            layerModel.isExpanded = !layerModel.isExpanded;
            this.$iApi.updateAlert(
                this.$t(
                    layerModel.isExpanded
                        ? 'layer-reorder.expanded'
                        : 'layer-reorder.collapsed',
                    {
                        name: layerModel.name
                    }
                )
            );
        },

        /**
         * User started moving the layer, keep track of the old order
         */
        onMoveLayerDragStart(): void {
            this.oldOrder = this.layersModel.map(
                (layerModel: LayerModel) => layerModel.orderIdx
            );
        },

        /**
         * Move a layer's order index
         * Called by draggable after the user stops dragging the layer
         * @param {CustomEvent} evt draggable event that contains the data on the moved object
         */
        onMoveLayerDragEnd(evt: any): void {
            if (!evt.moved) {
                // not a move event, ignore the change
                return;
            }

            const layerModel: LayerModel = evt.moved.element;
            const oldRelativeIdx: number = evt.moved.oldIndex;
            const newRelativeIdx: number = evt.moved.newIndex;

            if (oldRelativeIdx === newRelativeIdx) {
                // the layer was not moved
                return;
            }

            const layer: LayerInstance = this.layers.find(
                (l: LayerInstance) => l.uid === layerModel.uid
            );

            // apply changes
            const newIdx: number = this.oldOrder[newRelativeIdx];
            this.$iApi.geo.map.reorder(layer, newIdx, true);

            this.$iApi.updateAlert(
                this.$t('layer-reorder.layermoved', {
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
        onMoveLayerButton(layerModel: LayerModel, direction: number): void {
            let layer: LayerInstance = this.layers.find(
                (l: LayerInstance) => l.uid === layerModel.uid
            );

            const currRelativeIdx: number =
                this.layersModel.indexOf(layerModel);

            // just in case
            if (layer === undefined || currRelativeIdx === -1) {
                return;
            }

            // calculate new layer order index
            const newRelativeIdx: number = currRelativeIdx - direction;
            const newIdx: number = this.layersModel[newRelativeIdx].orderIdx;

            // apply changes
            this.$iApi.geo.map.reorder(layer, newIdx, true);

            this.$iApi.updateAlert(
                this.$t('layer-reorder.layermoved', {
                    name: layerModel.name,
                    index: newIdx
                })
            );
        },

        /** ==================================== Helpers ==================================== **/

        /**
         * Helper function - reverse a given index relative to the layer stack
         * @returns {number} the reversed index
         */
        _reverseIndex(idx: number): number {
            return this.layers.length - 1 - idx;
        },

        /**
         * Checks if the given index is at the boundary of the layers list
         * Also accounts for cosmetic layers in the boundary
         *
         * @param {number} idx the index to be checked
         * @returns {boolean} returns true if the index is at the boundary
         */
        _isBoundary(idx: number): boolean {
            if (idx < 0 || idx > this.layers.length - 1) {
                return true;
            }
            if (idx >= this.maxIdx || idx <= this.minIdx) {
                return true;
            }
            return false;
        }
    }
});
</script>

<style lang="scss" scoped></style>
