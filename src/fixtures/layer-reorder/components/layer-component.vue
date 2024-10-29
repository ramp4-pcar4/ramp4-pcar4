<template>
    <div>
        <div v-if="layersModel.length === 0" class="flex-1 ms-10" v-truncate>
            <span class="p-5">{{ t('layer-reorder.nolayers') }}</span>
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
                        ${element.isExpanded ? 'hover:bg-gray-200' : ''}
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
                    <!-- TODO: fix this hack that prevents duplicate UI bug on prod (to reproduce: remove this, run prod build and open -> close -> re-open reorder panel) -->
                    <div class="display-none"></div>

                    <div class="flex items-center p-5 h-44 cursor-pointer hover:bg-gray-200">
                        <!-- dropdown toggle  -->
                        <button
                            type="button"
                            v-if="element.supportsSublayers"
                            @click="toggleExpand(element)"
                            class="text-gray-500 hover:text-black p-5"
                            :content="t(`layer-reorder.${!element.isExpanded ? 'expand' : 'collapse'}`)"
                            v-focus-item
                            v-tippy="{
                                placement: 'right',
                                aria: 'describedby'
                            }"
                            :aria-label="t(`layer-reorder.${!element.isExpanded ? 'expand' : 'collapse'}`)"
                        >
                            <svg v-if="element.isExpanded" class="fill-current w-20 h-20 mx-4" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13H5v-2h14v2z" />
                            </svg>
                            <svg v-else class="fill-current w-20 h-20 mx-4" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                        </button>

                        <!-- name -->
                        <div class="flex-1 mx-10" v-truncate>
                            <span>{{ element.name }} </span>
                        </div>

                        <!-- controls -->
                        <reorder-button
                            :disabled="_isBoundary(element.componentIdx - 1)"
                            direction="up"
                            class="px-7"
                            @click="onMoveLayerButton(element, 1)"
                        />
                        <reorder-button
                            :disabled="_isBoundary(element.componentIdx + 1)"
                            direction="down"
                            class="px-7"
                            @click="onMoveLayerButton(element, -1)"
                        />
                    </div>

                    <!-- display children of the parent layer. -->
                    <div
                        class="items-center p-5 pl-30 default-focus-style cursor-pointer"
                        v-if="element.isExpanded && element.sublayers.length > 0"
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
                    :content="t('layer-reorder.loading')"
                    v-tippy="{
                        placement: 'top-start',
                        aria: 'describedby'
                    }"
                    :aria-label="t('layer-reorder.loading')"
                    v-focus-container
                    truncate-trigger
                >
                    <div class="animate-spin spinner h-20 w-20 px-5"></div>
                    <div class="flex-1 mx-10">
                        <span>{{ t('layer-reorder.loading') }} </span>
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, toRaw } from 'vue';

import { GlobalEvents, LayerInstance } from '@/api';
import type { InstanceAPI } from '@/api';
import type { LayerModel } from '../definitions';
import ReorderButton from './reorder-button.vue';
import draggable from 'vuedraggable';
import { LayerState } from '@/geo/api';
import { useI18n } from 'vue-i18n';

const iApi = inject<InstanceAPI>('iApi')!;
const { t } = useI18n();

const layersModel = ref<Array<LayerModel>>([]);

/**
 * Snapshots positions when dragging starts. The array has same order as the layersModel.
 * The values are the model orderIdx, which is the position the layer sits in the store
 * order array. aka "RAMP order index"
 */
const oldOrder = ref<Array<number>>([]);
const handlers = ref<Array<string>>([]);
const watchers = ref<Array<Function>>([]);
const isAnimationEnabled = computed<boolean>(() => iApi.animate);

/*
General commentary on how this works. 
We only show stuff actually on the map, and not cosmetic. It's then ordered in the UI list top to bottom.
The UI is build from a data model, layerModel.
This model is reactive and gets recreated whenever
- Layers get added, removed, change status
- Reorders happen
So a lot of the "updates" is just the core model getting rebuilt from scratch.
The model also maps where the layer is indexed in the global layer order array.
When this fixture "executes" a reorder, either via arrow buttons or a drag, all it does
is figure out which other layer was occupying the destination in the model/listview. Then
it grabs that layers global order index, and invokes the ramp API reorder, telling it to
reorder the "moving" layer to that index. The API handles the rest.
The trick is to remember a reorder is just a shuffle, not an insert or delete. The layer
count stays the same.
*/

/**
 * Convert the layers from the store into a simple LayerModel interface that draggable can use
 * Additionally set up layer load promise listeners to automatically update model when the layer loads
 */
const loadLayers = (): void => {
    // remember which layers were expanded
    let layerExpandedState: { [id: string]: boolean } = {};
    layersModel.value.forEach((layer: LayerModel) => {
        layerExpandedState[layer.id] = layer.isExpanded;
    });

    // reset models
    layersModel.value = [];

    const layerOrderIds = iApi.geo.layer.layerOrderIds();

    // TODO investigate if we still need the ...toRaw now that this comes from the layer API instead of directly from the store.
    //      performance hit if we don't, and this gets spammed every time a layer status changes.
    const mainLayerList = [...toRaw(iApi.geo.layer.allLayersOnMap(true))].filter(
        (layer: LayerInstance) => !layer.isCosmetic && layer.layerState !== LayerState.ERROR
    ); // filter out cosmetic layers and error'd layers. This source doesn't lave loading or dead layers.

    layersModel.value = mainLayerList
        .reverse() // needs to be reverse because map-stack is low to high, and visually the fixture is high to low
        .map((layer: LayerInstance, index: number) => {
            // get the true index of this layer in the global order
            const trueIdx: number = layerOrderIds.indexOf(layer.id);

            // map layer instance to simpler layer model object
            let model: LayerModel = {
                id: layer.id,
                uid: layer.uid,
                name: '',
                orderIdx: trueIdx,
                componentIdx: index,
                isExpanded: layerExpandedState[layer.id] || false,
                isLoaded: false,
                supportsSublayers: layer.supportsSublayers,
                sublayers: []
            };
            return model;
        });

    // add load promise listeners to update models
    mainLayerList.forEach(layer => {
        layer
            .loadPromise()
            .then(() => {
                loadLayerData(layer);
            })
            .catch(() => 1); // make the console stop complaining
    });
};

/**
 * Update the layer model associated with this layer. Typically things that
 * were not available until the layer loads.
 *
 * @param {LayerInstance} layer the layer that has loaded
 */
const loadLayerData = (layer: LayerInstance): void => {
    let model: LayerModel | undefined = layersModel.value.find((layerModel: LayerModel) => layerModel.id === layer.id);

    if (!model) {
        return;
    }

    // load data from layer
    model.name = layer.name;
    model.sublayers = layer.sublayers
        .filter((sublayer: LayerInstance) => sublayer !== undefined && !sublayer.isRemoved)
        .map((sublayer: LayerInstance) => {
            return {
                id: sublayer.id,
                name: sublayer.name
            };
        });
    model.isLoaded = true;
};

/**
 * Toggle expand on a layer model
 *
 * @param {LayerModel} layerModel the layer model to update
 */
const toggleExpand = (layerModel: LayerModel): void => {
    if (!layerModel.supportsSublayers) {
        return;
    }
    layerModel.isExpanded = !layerModel.isExpanded;
    iApi.updateAlert(
        t(layerModel.isExpanded ? 'layer-reorder.expanded' : 'layer-reorder.collapsed', {
            name: layerModel.name
        })!
    );
};

/**
 * User started moving the layer, keep track of the old order
 */
const onMoveLayerDragStart = (): void => {
    oldOrder.value = layersModel.value.map((layerModel: LayerModel) => layerModel.orderIdx);
};

/**
 * Move a layer's order index
 * Called by draggable after the user stops dragging the layer
 *
 * @param {CustomEvent} evt draggable event that contains the data on the moved object
 */
const onMoveLayerDragEnd = (evt: any): void => {
    if (!evt.moved) {
        // not a move event, ignore the change
        return;
    }

    // relative indexes are the positions in the fixtures visual list.
    const layerModel: LayerModel = evt.moved.element;
    const oldRelativeIdx: number = evt.moved.oldIndex;
    const newRelativeIdx: number = evt.moved.newIndex;

    if (oldRelativeIdx === newRelativeIdx) {
        // the layer was not moved
        return;
    }

    const layer: LayerInstance = iApi.geo.layer.getLayer(layerModel.uid)!;

    // apply changes
    // we dragged the layer to a location in our ui list. that location used to be occupied by another layer ("other layer").
    // so we do a REAL reorder, sending the dragged layer to occupy the global index that the "other layer" was in before
    // the drag.

    const newGlobalIdx = oldOrder.value[newRelativeIdx];
    iApi.geo.map.reorder(layer, newGlobalIdx);

    iApi.updateAlert(
        t('layer-reorder.layermoved', {
            name: layerModel.name,
            index: newGlobalIdx
        })!
    );
};

/**
 * Increment/Decrement a layer's order index
 * Called by the reorder buttons
 * @param {LayerModel} layerModel layer that is being moved
 * @param {number} direction direction to move the layer (+1 is up and -1 is down)
 */
const onMoveLayerButton = (layerModel: LayerModel, direction: number): void => {
    const layer = iApi.geo.layer.getLayer(layerModel.id);

    const currRelativeIdx = layersModel.value.indexOf(layerModel);

    // just in case
    if (layer === undefined || currRelativeIdx === -1) {
        return;
    }

    // visually the layer we buttoned just switched spots with another layer.
    // we want to do a "real" reorder to the global position that other layer
    // was occupying in the ramp map / layer store.
    const newRelativeIdx = currRelativeIdx - direction; // index of the "other" layer in fixture layersModel
    const newGlobalIdx = layersModel.value[newRelativeIdx].orderIdx;

    // apply changes
    iApi.geo.map.reorder(layer, newGlobalIdx);

    iApi.updateAlert(
        t('layer-reorder.layermoved', {
            name: layerModel.name,
            index: newGlobalIdx
        })!
    );
};

/** ==================================== Helpers ==================================== **/

/**
 * Checks if the given index is at the boundary of the layers list
 * Also accounts for cosmetic layers in the boundary
 *
 * @param {number} idx the index to be checked
 * @returns {boolean} returns true if the index is at the boundary
 */
const _isBoundary = (index: number): boolean => {
    return index < 0 || index > layersModel.value.length - 1;
};

onMounted(() => {
    loadLayers();

    // watch for layer remove events (this is mainly used to react to sublayer removals)
    handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_REMOVE, () => {
            loadLayers();
        })
    );

    // watch for layer state changes.
    // this will also notice new layers getting added as they go from loading to loaded.
    handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_LAYERSTATECHANGE, () => {
            loadLayers();
        })
    );

    // watch for layer order changes. will catch reorders from other locations.
    // mildly inefficient, since when we reorder here it recalcs for fun.
    // but this fixutre is not a primary ui. Smart people can refactor.
    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_REORDER, () => {
            loadLayers();
        })
    );
});

onBeforeUnmount(() => {
    // unmount handlers and watchers
    handlers.value.forEach(handler => iApi.event.off(handler));
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped></style>
