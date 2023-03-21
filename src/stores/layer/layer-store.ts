import type { RampLayerConfig } from '@/geo/api';
import { LayerInstance } from '@/api/internal';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// NOTE
// on the wonkyness of new changes here.
// in old version, layer store would take layer configs, generate layers from layer blueprints, and store the layers.
// the layer blueprints were sort of stand alone hardcoded classes lurking inside the layer state folder.
// now that layer definitions are loaded like fixtures, we can't do this.
// also it appears we cant (or shouldn't) reference the $iApi from inside the state.
// the new approach (which might be wrong but is working for now) is the layer state
// handles both the layer configs and the layers.
// the esri-map module watches the layer configs, when it sees a new config, it then instantiates the layer
// (using $iApi), and stores the layer back into the store as well.
// possible changes by smarter people:
// - have the layer config store relocated to the config store
// - have a way for the layer store to access and run the layer definitions from the iApi
// - restructure the layer definitions manager on the iApi so that the definitions are inside the store.
//   might be tricky, as this part also needs to know to load new definitions on demand

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
