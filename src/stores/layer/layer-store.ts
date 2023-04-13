import type { RampLayerConfig } from '@/geo/api';
import { LayerInstance } from '@/api/internal';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// searches layers and sublayers using BFS and returns the first layer to satisfy the given predicate
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
    // the layers that were initiated successfully and are currently in the map stack.
    const layers = ref<LayerInstance[]>([]);

    // the layers in an error state.
    const penaltyBox = ref<LayerInstance[]>([]);

    // configs for layers
    const layerConfigs = ref<RampLayerConfig[]>([]);

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

    function addLayerConfig(value: RampLayerConfig) {
        layerConfigs.value = [...layerConfigs.value, value];
    }

    function addLayer(value: LayerInstance) {
        layers.value = [...(layers.value as any), value];
    }

    function addErrorLayer(value: LayerInstance) {
        penaltyBox.value = [...(penaltyBox.value as any), value];
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
        const filteredLayers = layers.value.filter(layer => {
            return layer.id !== value.id || layer.uid !== value.uid;
        });
        layers.value = filteredLayers;
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

    function removeLayerConfig(layerId: string) {
        // copy to new array so watchers will have a reference to the old value
        const filteredLayerConfigs = layerConfigs.value.filter(layerConfig => {
            return layerConfig.id !== layerId;
        });
        layerConfigs.value = filteredLayerConfigs;
    }

    return {
        layers,
        penaltyBox,
        layerConfigs,
        getLayerByUid,
        getLayerById,
        addLayerConfig,
        addLayer,
        addErrorLayer,
        reorderLayer,
        removeLayer,
        removeErrorLayer,
        removeLayerConfig
    };
});
