import { GridConfig } from './grid-state';
import { PanelConfig } from '../../../stores/panel';
export declare const useGridStore: import('pinia').StoreDefinition<"grid", import('pinia')._UnwrapAll<Pick<{
    grids: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [id: string]: GridConfig;
    }, {
        [id: string]: GridConfig;
    }>;
    panel: import('../../../../vue/dist/vue.esm-bundler.js').Ref<PanelConfig | undefined, PanelConfig | undefined>;
    currentId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | undefined, string | undefined>;
    addGrid: (value: GridConfig) => void;
    removeGrid: (id: string) => void;
    getGridId: (id: string) => string | undefined;
    removeLayer: (gridId: string, layerId: string) => void;
}, "panel" | "grids" | "currentId">>, Pick<{
    grids: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [id: string]: GridConfig;
    }, {
        [id: string]: GridConfig;
    }>;
    panel: import('../../../../vue/dist/vue.esm-bundler.js').Ref<PanelConfig | undefined, PanelConfig | undefined>;
    currentId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | undefined, string | undefined>;
    addGrid: (value: GridConfig) => void;
    removeGrid: (id: string) => void;
    getGridId: (id: string) => string | undefined;
    removeLayer: (gridId: string, layerId: string) => void;
}, never>, Pick<{
    grids: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [id: string]: GridConfig;
    }, {
        [id: string]: GridConfig;
    }>;
    panel: import('../../../../vue/dist/vue.esm-bundler.js').Ref<PanelConfig | undefined, PanelConfig | undefined>;
    currentId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | undefined, string | undefined>;
    addGrid: (value: GridConfig) => void;
    removeGrid: (id: string) => void;
    getGridId: (id: string) => string | undefined;
    removeLayer: (gridId: string, layerId: string) => void;
}, "removeLayer" | "addGrid" | "removeGrid" | "getGridId">>;
