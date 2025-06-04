import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface KeyboardnavStore {
    activeNamespace: string | null;
    handlers: Record<string, (key?: string) => void>;
    register: (namespace: string, callback: (key?: string) => void) => void;
    unregister: (namespace: string) => void;
    activate: (namespace: string) => void;
    deactivate: () => void;
    trigger: (key: string) => void;
}

export const useKeyboardnavStore = defineStore('keyboardnav', () => {
    const activeNamespace = ref<string | null>(null);
    const handlers = ref<Record<string, (key?: string) => void>>({});

    function register(namespace: string, callback: (key?: string) => void): void {
        handlers.value[namespace] = callback;
    }

    function unregister(namespace: string): void {
        if (activeNamespace.value === namespace) {
            activeNamespace.value = null;
        }
        delete handlers.value[namespace];
    }

    function activate(namespace: string): void {
        activeNamespace.value = namespace;
        handlers.value[namespace]?.('ACTIVE');
    }

    function deactivate(): void {
        handlers.value[activeNamespace.value!]?.('DEACTIVE');
        activeNamespace.value = null;
    }

    function trigger(key: string): void {
        handlers.value[activeNamespace.value ?? '']?.(key);
    }

    return {
        activeNamespace,
        handlers,
        register,
        unregister,
        activate,
        deactivate,
        trigger
    };
});
