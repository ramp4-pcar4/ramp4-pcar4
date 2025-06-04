import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

export interface KeyItem {
    key: string;
    description: Record<string, string>;
    handler?: (e: KeyboardEvent) => void;
}

export interface NamespaceRegistration {
    name: Record<string, string>;
    keys: KeyItem[];
    handler?: (key: string, e: KeyboardEvent) => void;
    activeHandler?: (e: KeyboardEvent) => void;
    deactiveHandler?: (e: KeyboardEvent) => void;
}

export interface KeyboardnavStore {
    activeNamespace: Ref<string | null>;
    namespaces: Ref<Record<string, NamespaceRegistration>>;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e: KeyboardEvent) => void;
    deactivate: (e?: KeyboardEvent) => void;
    trigger: (key: string, e: KeyboardEvent) => void;
}

export const useKeyboardnavStore = defineStore('keyboardnav', () => {
    const activeNamespace = ref<string | null>(null);
    const namespaces = ref<Record<string, NamespaceRegistration>>({});

    function findFreeLetter(): string | null {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (const ch of alphabet) {
            if (!namespaces.value[ch]) return ch;
        }
        return null;
    }

    function register(namespace: string, options: NamespaceRegistration): string {
        let ns = namespace.toUpperCase();
        if (namespaces.value[ns]) {
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

    function unregister(namespace: string): void {
        if (activeNamespace.value === namespace) {
            activeNamespace.value = null;
        }
        delete namespaces.value[namespace];
    }

    function activate(namespace: string, e: KeyboardEvent): void {
        activeNamespace.value = namespace;
        namespaces.value[namespace]?.activeHandler?.(e);
    }

    function deactivate(e?: KeyboardEvent): void {
        if (activeNamespace.value) {
            namespaces.value[activeNamespace.value]?.deactiveHandler?.(e!);
        }
        activeNamespace.value = null;
    }

    function trigger(key: string, e: KeyboardEvent): void {
        const ns = activeNamespace.value;
        if (!ns) return;
        const options = namespaces.value[ns];
        if (!options) return;
        if (options.handler) {
            options.handler(key, e);
        } else {
            const item = options.keys.find(k => k.key === key);
            item?.handler?.(e);
        }
    }

    return {
        activeNamespace,
        namespaces,
        register,
        unregister,
        activate,
        deactivate,
        trigger
    } as KeyboardnavStore;
});
