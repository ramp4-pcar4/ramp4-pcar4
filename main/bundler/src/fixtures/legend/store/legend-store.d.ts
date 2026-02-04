import { LegendConfig } from './legend-state';
import { LegendItem } from './legend-item';
import { Ref } from '../../../../vue/dist/vue.esm-bundler.js';
interface LegendStore {
    legendConfig: Ref<LegendConfig>;
    children: Ref<[]>;
    headerControls: Ref<string[]>;
    multilineItems: Ref<boolean>;
    maxLines: Ref<number>;
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
export declare const useLegendStore: import('pinia').StoreDefinition<"legend", import('pinia')._UnwrapAll<Pick<LegendStore, "children" | "legendConfig" | "headerControls" | "multilineItems" | "maxLines">>, Pick<LegendStore, never>, Pick<LegendStore, "addItem" | "removeItem" | "replaceItem">>;
export {};
