import type { GridConfig } from './grid-state';
import type { PanelConfig } from '@/stores/panel';
export declare const useGridStore: import("pinia").StoreDefinition<"grid", import("pinia")._UnwrapAll<Pick<{
    grids: import("vue").Ref<{
        [id: string]: GridConfig;
    }>;
    panel: import("vue").Ref<PanelConfig | undefined>;
    currentId: import("vue").Ref<string | undefined>;
    addGrid: (value: GridConfig) => void;
    removeGrid: (id: string) => void;
    getGridId: (id: string) => string | undefined;
    removeLayer: (gridId: string, layerId: string) => void;
}, "panel" | "grids" | "currentId">>, Pick<{
    grids: import("vue").Ref<{
        [id: string]: GridConfig;
    }>;
    panel: import("vue").Ref<PanelConfig | undefined>;
    currentId: import("vue").Ref<string | undefined>;
    addGrid: (value: GridConfig) => void;
    removeGrid: (id: string) => void;
    getGridId: (id: string) => string | undefined;
    removeLayer: (gridId: string, layerId: string) => void;
}, never>, Pick<{
    grids: import("vue").Ref<{
        [id: string]: GridConfig;
    }>;
    panel: import("vue").Ref<PanelConfig | undefined>;
    currentId: import("vue").Ref<string | undefined>;
    addGrid: (value: GridConfig) => void;
    removeGrid: (id: string) => void;
    getGridId: (id: string) => string | undefined;
    removeLayer: (gridId: string, layerId: string) => void;
}, "removeLayer" | "addGrid" | "removeGrid" | "getGridId">>;
