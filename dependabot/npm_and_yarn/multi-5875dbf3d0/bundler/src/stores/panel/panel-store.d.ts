import { PanelInstance } from '../../api';
import { DefPromise } from '../../geo/api';
import { PanelDirection } from './panel-state';
import { PanelConfig } from '.';
import { ComputedRef, Ref } from '../../../vue/dist/vue.esm-bundler.js';
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
        [name: string]: DefPromise<PanelInstance>;
    }>;
    orderedItems: Ref<[]>;
    teleported: Ref<[]>;
    visible: Ref<[]>;
    opacity: Ref<number>;
    getRemainingWidth: ComputedRef<number>;
    getVisible: (screenSize: string) => PanelConfig[];
    getRegPromises: (panelIds: string[]) => Promise<PanelInstance>[];
    openPanel: (panel: PanelInstance) => void;
    closePanel: (panel: PanelInstance) => void;
    movePanel: (panel: PanelInstance, direction: PanelDirection) => void;
    removePanel: (panel: PanelInstance) => void;
    setOpacity: (value: number) => void;
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
export declare const usePanelStore: import('pinia').StoreDefinition<"panel", Pick<PanelStore, "opacity" | "pinned" | "priority" | "stackWidth" | "remWidth" | "mobileView" | "reorderable" | "items" | "regPromises" | "orderedItems" | "teleported" | "visible">, Pick<PanelStore, "getRemainingWidth">, Pick<PanelStore, "remove" | "close" | "open" | "move" | "getVisible" | "getRegPromises" | "openPanel" | "closePanel" | "movePanel" | "removePanel" | "setOpacity" | "setStackWidth" | "setMobileView" | "updateVisible" | "registerPanel" | "addRegPromise">>;
