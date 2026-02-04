import type { LegendConfig } from './legend-state';
import type { LegendItem } from './legend-item';
import type { Ref } from 'vue';
interface LegendStore {
    legendConfig: Ref<LegendConfig>;
    children: Ref<[]>;
    headerControls: Ref<string[]>;
    addItem: (value: {
        item: LegendItem;
        parent: LegendItem | undefined;
    }) => void;
    removeItem: (item: LegendItem) => void;
    replaceItem: (value: {
        oldItem: LegendItem;
        newItem: LegendItem;
    }) => void;
}
export declare const useLegendStore: import("pinia").StoreDefinition<"legend", import("pinia")._UnwrapAll<Pick<LegendStore, "children" | "legendConfig" | "headerControls">>, Pick<LegendStore, never>, Pick<LegendStore, "addItem" | "removeItem" | "replaceItem">>;
export {};
