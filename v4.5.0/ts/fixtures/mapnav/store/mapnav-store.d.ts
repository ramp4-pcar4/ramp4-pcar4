import type { MapnavItemSet } from './mapnav-state';
export declare const useMapnavStore: import("pinia").StoreDefinition<"mapnav", import("pinia")._UnwrapAll<Pick<{
    items: import("vue").Ref<MapnavItemSet>;
    order: import("vue").Ref<string[]>;
    removeItem: (value: string) => void;
}, "items" | "order">>, Pick<{
    items: import("vue").Ref<MapnavItemSet>;
    order: import("vue").Ref<string[]>;
    removeItem: (value: string) => void;
}, never>, Pick<{
    items: import("vue").Ref<MapnavItemSet>;
    order: import("vue").Ref<string[]>;
    removeItem: (value: string) => void;
}, "removeItem">>;
