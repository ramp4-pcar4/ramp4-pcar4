import type { RampLayerConfig } from '@/geo/api';
import { LayerInstance } from '@/api/internal';
import { defineStore } from 'pinia';
import { ref } from 'vue';

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
    // the map layers that were initiated successfully and are currently in the map stack.
    const layers = ref<LayerInstance[]>([]);

    // the data layers that were initiated successfully.
    const dataLayers = ref<LayerInstance[]>([]);

    // the layers in an error state due to not initiating. Generally considered not usable, if map based will not be in the map stack.
    const penaltyBox = ref<LayerInstance[]>([]);

    // layers currently initiating
    const initiatingLayers = ref<LayerInstance[]>([]);

    // configs for layers
    const layerConfigs = ref<RampLayerConfig[]>([]);

    function getLayerByUid(uid: string): LayerInstance | undefined {
        return bfs(
            layers.value.concat(
                penaltyBox.value,
                initiatingLayers.value,
                dataLayers.value
            ) as any,
            (layer: LayerInstance | undefined) => layer?.uid === uid
        );
    }

    function getLayerById(id: string): LayerInstance | undefined {
        return bfs(
            layers.value.concat(
                penaltyBox.value,
                initiatingLayers.value,
                dataLayers.value
            ) as any,
            (layer: LayerInstance | undefined) => layer?.id === id
        );
    }

    function addLayerConfig(value: RampLayerConfig) {
        layerConfigs.value = [...layerConfigs.value, value];
    }

    function addLayer(value: LayerInstance) {
        layers.value = [...(layers.value as any), value];
    }

    function addDataLayer(value: LayerInstance) {
        dataLayers.value = [...(dataLayers.value as any), value];
    }

    function addErrorLayer(value: LayerInstance) {
        penaltyBox.value = [...(penaltyBox.value as any), value];
    }

    function addInitiatingLayer(value: LayerInstance) {
        initiatingLayers.value = [...(initiatingLayers.value as any), value];
    }

    function reorderLayer(
        layer: LayerInstance,
        index: number = layers.value.length
    ) {
        // find and swap layer with target index
        const layerIdx = layers.value.findIndex(l => l.uid === layer.uid);
        if (layerIdx !== -1 && layerIdx !== index) {
            layers.value.splice(layerIdx, 1);
            layers.value.splice(index, 0, layer as any);
            // copy to new array to trigger reactivity
            layers.value = [...layers.value];
        }
    }

    function removeLayer(value: LayerInstance) {
        // copy to new array so watchers will have a reference to the old value
        // can probably just assign target var the correct array, but the Ref<>s are giving me grief so
        // duplicating code blocks for now. Smart person can refactor.
        if (value.mapLayer) {
            const filteredLayers = layers.value.filter(layer => {
                return layer.id !== value.id || layer.uid !== value.uid;
            });
            layers.value = filteredLayers;
        } else {
            const filteredLayers = dataLayers.value.filter(layer => {
                return layer.id !== value.id || layer.uid !== value.uid;
            });
            dataLayers.value = filteredLayers;
        }
    }

    function removeErrorLayer(value: LayerInstance | string) {
        const layerId = value instanceof LayerInstance ? value.id : value;
        const layerUid = value instanceof LayerInstance ? value.uid : value;
        // copy to new array so watchers will have a reference to the old value
        const filteredLayers = penaltyBox.value.filter(layer => {
            return layer.id !== layerId && layer.uid !== layerUid;
        });
        penaltyBox.value = filteredLayers;
    }

    function removeInitiatingLayer(value: LayerInstance | string) {
        const layerId = value instanceof LayerInstance ? value.id : value;
        const layerUid = value instanceof LayerInstance ? value.uid : value;
        // copy to new array so watchers will have a reference to the old value
        const filteredLayers = initiatingLayers.value.filter(layer => {
            return layer.id !== layerId && layer.uid !== layerUid;
        });
        initiatingLayers.value = filteredLayers;
    }

    function removeLayerConfig(layerId: string) {
        // copy to new array so watchers will have a reference to the old value
        const filteredLayerConfigs = layerConfigs.value.filter(layerConfig => {
            return layerConfig.id !== layerId;
        });
        layerConfigs.value = filteredLayerConfigs;
    }

    return {
        layers,
        dataLayers,
        penaltyBox,
        initiatingLayers,
        layerConfigs,
        getLayerByUid,
        getLayerById,
        addLayerConfig,
        addLayer,
        addDataLayer,
        addErrorLayer,
        addInitiatingLayer,
        reorderLayer,
        removeLayer,
        removeErrorLayer,
        removeInitiatingLayer,
        removeLayerConfig
    };
});
