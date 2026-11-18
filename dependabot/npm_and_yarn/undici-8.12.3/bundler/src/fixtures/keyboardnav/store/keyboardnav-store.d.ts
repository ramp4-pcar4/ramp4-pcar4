import { KeyboardnavChainAction } from '../types';
export interface KeyItem {
    key: string;
    description: Record<string, string>;
    handler?: (store: KeyboardnavStore, e: KeyboardEvent) => KeyboardnavChainAction | void;
}
export interface NamespaceRegistration {
    name: Record<string, string>;
    keys: KeyItem[];
    handler?: (store: KeyboardnavStore, e: KeyboardEvent, key: string) => KeyboardnavChainAction | void;
    activeHandler?: (store: KeyboardnavStore, e?: KeyboardEvent) => void;
    deactiveHandler?: (store: KeyboardnavStore, e?: KeyboardEvent) => void;
}
export type ChainState = 'idle' | 'awaitNamespace' | 'awaitAction' | 'complete';
export interface KeyboardnavStore {
    activeNamespace: string | undefined;
    namespaces: Record<string, NamespaceRegistration>;
    helpVisible: boolean;
    keyChain: string[];
    lastAction: {
        namespace: string;
        key: string;
    } | undefined;
    chainState: ChainState;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e?: KeyboardEvent, options?: {
        suppressHandler?: boolean;
    }) => void;
    deactivate: (e?: KeyboardEvent, options?: {
        suppressHandler?: boolean;
    }) => void;
    trigger: (key: string, e: KeyboardEvent) => {
        namespace: string;
        key: string;
        chainAction?: KeyboardnavChainAction;
    } | undefined;
    setHelpVisible: (val: boolean) => void;
    resetChain: (options?: {
        event?: KeyboardEvent;
        suppressHandler?: boolean;
        preserveLastAction?: boolean;
        preserveChain?: boolean;
    }) => void;
    setChain: (keys: string[]) => void;
    appendKey: (key: string) => void;
    popChain: () => string | undefined;
    setLastAction: (action: {
        namespace: string;
        key: string;
    } | undefined) => void;
    setChainState: (state: ChainState) => void;
    finalizeChain: (options?: {
        event?: KeyboardEvent;
    }) => void;
}
export declare const useKeyboardnavStore: import('pinia').StoreDefinition<"keyboardnav", Pick<KeyboardnavStore, "activeNamespace" | "namespaces" | "helpVisible" | "keyChain" | "lastAction" | "chainState">, Pick<KeyboardnavStore, never>, Pick<KeyboardnavStore, "register" | "unregister" | "trigger" | "activate" | "deactivate" | "setHelpVisible" | "resetChain" | "setChain" | "appendKey" | "popChain" | "setLastAction" | "setChainState" | "finalizeChain">>;
