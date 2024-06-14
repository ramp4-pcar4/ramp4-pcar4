import type { RampLayerConfig } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

interface LayerStore {
    layers: Ref<[]>;
    layerConfigs: Ref<RampLayerConfig[]>;
    mapOrder: Ref<string[]>;
    getLayerByUid: (uid: string) => LayerInstance | undefined;
    getLayerById: (id: string) => LayerInstance | undefined;
    getLayerByAny: (idOrUid: string) => LayerInstance | undefined;
    addLayerConfig: (value: RampLayerConfig) => void;
    addLayer: (value: LayerInstance, index: number | undefined) => void;
    reorderLayer: (layer: LayerInstance, index: number) => void;
    removeLayer: (value: LayerInstance) => void;
    removeLayerConfig: (layerId: string) => void;
}

// searches layers and sublayers using BFS and returns the first layer to satisfy the given predicate.
// Our initial array is just layers, this lets us crawl into sublayers before moving to the next layer.
const bfs = (
    layers: Array<LayerInstance>,
    predicate: (layer: LayerInstance | undefined) => boolean
) => {
    const queue = [...layers];
    while (queue.length > 0) {
        const layer = queue.shift();
        if (predicate(layer)) {
            return layer;
        }
        if (layer) {
            queue.push(...layer.sublayers);
        }
    }
};

export const useLayerStore = defineStore('layer', () => {
    const layers = ref<LayerInstance[]>([]);

    // configs for layers
    const layerConfigs = ref<RampLayerConfig[]>([]);

    // tracks the relative order of registered map layers, regardless of which
    // state array they are in. Values are LayerIDs
    const mapOrder = ref<string[]>([]);

    // TODO for these three layer search methods, revisit and see if
    //      the undefined param option is still required. Would hope
    //      our store doesn't have lurking undefineds??

    function getLayerByUid(uid: string): LayerInstance | undefined {
        return bfs(
            layers.value as any,
            (layer: LayerInstance | undefined) => layer?.uid === uid
        );
    }

    function getLayerById(id: string): LayerInstance | undefined {
        return bfs(
            layers.value as any,
            (layer: LayerInstance | undefined) => layer?.id === id
        );
    }

    function getLayerByAny(idOrUid: string): LayerInstance | undefined {
        return bfs(
            layers.value as any,
            (layer: LayerInstance | undefined) =>
                layer !== undefined &&
                (layer.id === idOrUid || layer.uid === idOrUid)
        );
    }

    function addLayerConfig(value: RampLayerConfig) {
        layerConfigs.value = [...layerConfigs.value, value];
    }

    /**
     * Adds a layer to the store. Also records the map position if map layer
     *
     * @param value the layer to be added to the store
     * @param index map position. required for map layers. not provided for data layers.
     */
    function addLayer(
        value: LayerInstance,
        index: number | undefined = undefined
    ) {
        layers.value = [...(layers.value as any), value];

        if (value.mapLayer) {
            if (index === undefined || index < 0) {
                // alert devs. then add to top to prevent ramp from bricking.
                console.error('Map layer added to store with invalid index!');
                index = mapOrder.value.length;
            }

            // insert into map order array.
            mapOrder.value.splice(index, 0, value.id);
            // copy to new array to trigger reactivity
            mapOrder.value = [...mapOrder.value];
        }
    }

    /**
     * Updates the internal order array. Does not update the map.
     *
     * @param layer the layer being reordered
     * @param index new position in the map order. this is absolte position, not condensed "non-cosmetic" position
     */
    function reorderLayer(layer: LayerInstance, index: number) {
        if (!layer.mapLayer) {
            console.error('Data layer passed to layer store reorder');
            return;
        }

        if (index < 0) {
            console.error('Negative index passed to layer store reorder');
            return;
        }

        if (index >= mapOrder.value.length) {
            // overshot valid  max index.
            // TODO console warn? Exit method without doing anything?
            index = mapOrder.value.length - 1;
        }

        // find current position of layer id
        const layerIdx = mapOrder.value.findIndex(
            layerId => layerId === layer.id
        );
        if (layerIdx !== -1 && layerIdx !== index) {
            // remove from current position. re-insert at new position
            mapOrder.value.splice(layerIdx, 1);
            mapOrder.value.splice(index, 0, layer.id);
            // copy to new array to trigger reactivity
            mapOrder.value = [...mapOrder.value];
        }
    }

    function removeLayer(value: LayerInstance) {
        // note we do not remove the config from layer config store in this method,
        // since we may need it. We let the caller decide what is correct.

        // copy to new array so watchers will have a reference to the old value
        // can probably just assign target var the correct array, but the Ref<>s are giving me grief so
        // duplicating code blocks for now. Smart person can refactor.

        const filteredLayers = layers.value.filter(layer => {
            return layer.id !== value.id || layer.uid !== value.uid;
        });
        layers.value = filteredLayers;

        // also remove from order array.
        if (value.mapLayer) {
            const filteredOrder = mapOrder.value.filter(
                layerId => layerId !== value.id
            );
            mapOrder.value = filteredOrder;
        }
    }

    function removeLayerConfig(layerId: string) {
        // copy to new array so watchers will have a reference to the old value
        const filteredLayerConfigs = layerConfigs.value.filter(layerConfig => {
            return layerConfig.id !== layerId;
        });
        layerConfigs.value = filteredLayerConfigs;
    }

    return {
        /**
         * All layers registered with the instance (aka the "map")
         */
        layers,

        /**
         * Layer ids of map layers (regardless of layer state), in order of map stack.
         */
        mapOrder,
        layerConfigs,
        getLayerByUid,
        getLayerById,
        getLayerByAny,
        addLayerConfig,
        addLayer,

        reorderLayer,
        removeLayer,

        removeLayerConfig
    } as LayerStore;
});
