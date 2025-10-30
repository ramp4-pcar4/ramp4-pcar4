import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ROOT_KEY } from '../constants';
import type { KeyboardnavChainAction } from '../types';

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
    lastAction: { namespace: string; key: string } | undefined;
    chainState: ChainState;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e?: KeyboardEvent, options?: { suppressHandler?: boolean }) => void;
    deactivate: (e?: KeyboardEvent, options?: { suppressHandler?: boolean }) => void;
    trigger: (
        key: string,
        e: KeyboardEvent
    ) => { namespace: string; key: string; chainAction?: KeyboardnavChainAction } | undefined;
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
    setLastAction: (action: { namespace: string; key: string } | undefined) => void;
    setChainState: (state: ChainState) => void;
    finalizeChain: (options?: { event?: KeyboardEvent }) => void;
}

export const useKeyboardnavStore = defineStore('keyboardnav', () => {
    const activeNamespace = ref<string | undefined>();
    const namespaces = ref<Record<string, NamespaceRegistration>>({});
    const helpVisible = ref<boolean>(false);
    const keyChain = ref<string[]>([]);
    const lastAction = ref<{ namespace: string; key: string } | undefined>();
    const chainState = ref<ChainState>('idle');

    const RESERVED = ['H', '?'];

    function findFreeLetter(): string | undefined {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (const ch of alphabet) {
            if (!namespaces.value[ch] && !RESERVED.includes(ch)) return ch;
        }
        return undefined;
    }

    function register(namespace: string, options: NamespaceRegistration): string {
        let ns = namespace.toUpperCase();
        if (RESERVED.includes(ns) || namespaces.value[ns]) {
            const free = findFreeLetter();
            if (free) {
                ns = free;
            } else {
                console.error('No available keyboard namespace letters');
            }
        }

        if (!options.handler) {
            for (const k of options.keys) {
                if (!k.handler) {
                    console.error(
                        `Keyboardnav registration for ${ns} requires handlers for all keys or a parent handler`
                    );
                }
            }
        }

        namespaces.value[ns] = options;
        return ns;
    }

    function setHelpVisible(val: boolean): void {
        if (helpVisible.value === val) return;
        helpVisible.value = val;
    }

    function unregister(namespace: string): void {
        if (activeNamespace.value === namespace) {
            activeNamespace.value = undefined;
        }
        delete namespaces.value[namespace];
    }

    function applyChainAction(action: KeyboardnavChainAction | void, e?: KeyboardEvent, namespaceKey?: string): void {
        if (!action) return;
        if (action === 'clear') {
            resetChain({ event: e, suppressHandler: true });
            return;
        }
        if (action === 'reset') {
            const nsKey = namespaceKey ?? store.activeNamespace ?? store.keyChain[1];
            if (!nsKey) {
                resetChain({ suppressHandler: true });
                return;
            }
            setChain([ROOT_KEY, nsKey]);
            setLastAction(undefined);
            setChainState('awaitAction');
            store.activeNamespace = nsKey;
        }
    }

    function activate(namespace: string, e?: KeyboardEvent, options?: { suppressHandler?: boolean }): void {
        activeNamespace.value = namespace;
        if (options?.suppressHandler) return;
        namespaces.value[namespace]?.activeHandler?.(store, e);
    }

    function deactivate(e?: KeyboardEvent, options?: { suppressHandler?: boolean }): void {
        if (activeNamespace.value && !options?.suppressHandler) {
            namespaces.value[activeNamespace.value]?.deactiveHandler?.(store, e);
        }
        activeNamespace.value = undefined;
    }

    function trigger(
        key: string,
        e: KeyboardEvent
    ): { namespace: string; key: string; chainAction?: KeyboardnavChainAction } | undefined {
        const ns = activeNamespace.value;
        if (!ns) return undefined;
        const options = namespaces.value[ns];
        if (!options) return undefined;

        if (options.handler) {
            const action = options.handler(store, e, key);
            applyChainAction(action, e, ns);
            return { namespace: ns, key, chainAction: action ?? undefined };
        }

        const item = options.keys.find(k => k.key === key);
        if (!item) {
            return undefined;
        }

        const action = item.handler?.(store, e);
        applyChainAction(action, e, ns);
        return { namespace: ns, key: item.key, chainAction: action ?? undefined };
    }

    function resetChain(options?: {
        event?: KeyboardEvent;
        suppressHandler?: boolean;
        preserveLastAction?: boolean;
        preserveChain?: boolean;
    }): void {
        deactivate(options?.event, { suppressHandler: options?.suppressHandler });
        if (!options?.preserveChain) keyChain.value = [];
        if (!options?.preserveLastAction) lastAction.value = undefined;
        chainState.value = 'idle';
    }

    function setChain(keys: string[]): void {
        keyChain.value = [...keys];
    }

    function appendKey(key: string): void {
        keyChain.value = [...keyChain.value, key];
    }

    function popChain(): string | undefined {
        if (!keyChain.value.length) return undefined;
        const keys = [...keyChain.value];
        const popped = keys.pop();
        keyChain.value = keys;
        return popped;
    }

    function setLastAction(action: { namespace: string; key: string } | undefined): void {
        lastAction.value = action;
    }

    function setChainState(state: ChainState): void {
        chainState.value = state;
    }

    function finalizeChain(options?: { event?: KeyboardEvent }): void {
        deactivate(options?.event, { suppressHandler: true });
        chainState.value = 'complete';
    }

    const api = {
        activeNamespace,
        namespaces,
        helpVisible,
        keyChain,
        lastAction,
        chainState,
        register,
        unregister,
        activate,
        deactivate,
        trigger,
        setHelpVisible,
        resetChain,
        setChain,
        appendKey,
        popChain,
        setLastAction,
        setChainState,
        finalizeChain
    };

    const store = api as unknown as KeyboardnavStore;

    return api as unknown as KeyboardnavStore;
});
