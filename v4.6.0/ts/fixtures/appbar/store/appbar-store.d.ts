import type { AppbarItemInstance, AppbarItemSet } from './appbar-state';
export declare const useAppbarStore: import("pinia").StoreDefinition<"appbar", import("pinia")._UnwrapAll<Pick<{
    items: import("vue").Ref<AppbarItemSet>;
    order: import("vue").Ref<string[][]>;
    temporary: import("vue").Ref<string[]>;
    visible: import("vue").ComputedRef<(string | AppbarItemInstance)[][]>;
    addTempButton: (value: string) => void;
    removeButton: (value: string) => void;
}, "items" | "order" | "temporary">>, Pick<{
    items: import("vue").Ref<AppbarItemSet>;
    order: import("vue").Ref<string[][]>;
    temporary: import("vue").Ref<string[]>;
    visible: import("vue").ComputedRef<(string | AppbarItemInstance)[][]>;
    addTempButton: (value: string) => void;
    removeButton: (value: string) => void;
}, "visible">, Pick<{
    items: import("vue").Ref<AppbarItemSet>;
    order: import("vue").Ref<string[][]>;
    temporary: import("vue").Ref<string[]>;
    visible: import("vue").ComputedRef<(string | AppbarItemInstance)[][]>;
    addTempButton: (value: string) => void;
    removeButton: (value: string) => void;
}, "addTempButton" | "removeButton">>;
