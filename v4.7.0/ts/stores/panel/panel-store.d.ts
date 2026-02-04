import type { PanelInstance } from '@/api';
import { DefPromise } from '@/geo/api';
import type { PanelDirection } from './panel-state';
import type { PanelConfig } from '@/stores/panel';
import type { ComputedRef, Ref } from 'vue';
export interface PanelStore {
    pinned: Ref<PanelInstance | undefined>;
    priority: Ref<PanelInstance | undefined>;
    stackWidth: Ref<number>;
    remWidth: Ref<number>;
    mobileView: Ref<boolean>;
    reorderable: Ref<boolean>;
    items: Ref<{
        [name: string]: PanelInstance;
    }>;
    regPromises: Ref<{
        [name: string]: DefPromise;
    }>;
    orderedItems: Ref<[]>;
    teleported: Ref<[]>;
    visible: Ref<[]>;
    getRemainingWidth: ComputedRef<number>;
    getVisible: (screenSize: string) => PanelConfig[];
    getRegPromises: (panelIds: string[]) => Promise<void>[];
    openPanel: (panel: PanelInstance) => void;
    closePanel: (panel: PanelInstance) => void;
    movePanel: (panel: PanelInstance, direction: PanelDirection) => void;
    removePanel: (panel: PanelInstance) => void;
    setStackWidth: (value: number) => void;
    setMobileView: (value: boolean) => void;
    updateVisible: () => void;
    registerPanel: (panel: PanelInstance) => void;
    open: (panel: PanelInstance) => void;
    close: (panel: PanelInstance) => void;
    move: (panel: PanelInstance, direction: PanelDirection) => void;
    remove: (panel: PanelInstance) => void;
    addRegPromise: (panelId: string) => void;
}
export declare const usePanelStore: import("pinia").StoreDefinition<"panel", import("pinia")._UnwrapAll<Pick<PanelStore, "items" | "visible" | "reorderable" | "pinned" | "priority" | "stackWidth" | "remWidth" | "mobileView" | "regPromises" | "orderedItems" | "teleported">>, Pick<PanelStore, "getRemainingWidth">, Pick<PanelStore, "open" | "close" | "move" | "remove" | "getVisible" | "getRegPromises" | "openPanel" | "closePanel" | "movePanel" | "removePanel" | "setStackWidth" | "setMobileView" | "updateVisible" | "registerPanel" | "addRegPromise">>;
