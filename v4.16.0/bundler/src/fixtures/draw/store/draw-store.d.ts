import { DrawTypeConfig } from '../api/drawApi';
export type ActiveToolList = 'circle' | 'point' | 'polygon' | 'polyline' | 'rectangle' | 'edit' | '' | null;
export declare const useDrawStore: import('pinia').StoreDefinition<"draw", Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[]>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<ActiveToolList, ActiveToolList>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: ActiveToolList) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
    mapNavEl: import('../../../../vue/dist/vue.esm-bundler.js').Ref<unknown, unknown>;
}, "graphics" | "supportedTypes" | "activeTool" | "selectedGraphicId" | "mapNavEl">, Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[]>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<ActiveToolList, ActiveToolList>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: ActiveToolList) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
    mapNavEl: import('../../../../vue/dist/vue.esm-bundler.js').Ref<unknown, unknown>;
}, never>, Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[]>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<ActiveToolList, ActiveToolList>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: ActiveToolList) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
    mapNavEl: import('../../../../vue/dist/vue.esm-bundler.js').Ref<unknown, unknown>;
}, "setSupportedTypes" | "setActiveTool" | "addGraphic" | "removeGraphic" | "selectGraphic" | "clearSelection" | "getSelectedGraphic" | "updateGraphicGeometry">>;
