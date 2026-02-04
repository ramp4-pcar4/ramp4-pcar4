import type { RampLayerConfig } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';
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
export declare const useLayerStore: import("pinia").StoreDefinition<"layer", import("pinia")._UnwrapAll<Pick<LayerStore, "layers" | "layerConfigs" | "mapOrder">>, Pick<LayerStore, never>, Pick<LayerStore, "removeLayer" | "getLayerByUid" | "getLayerById" | "getLayerByAny" | "addLayerConfig" | "addLayer" | "reorderLayer" | "removeLayerConfig">>;
export {};
