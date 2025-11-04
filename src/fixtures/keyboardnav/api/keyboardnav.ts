import { FixtureInstance } from '@/api';
import { useKeyboardnavStore } from '../store/keyboardnav-store';
import type { NamespaceRegistration } from '../store/keyboardnav-store';
import type { KeyboardnavChainAction } from '../types';
import { ROOT_KEY, HELP_NAMESPACE } from '../constants';

/**
 * @internal
 */
export class KeyboardnavAPI extends FixtureInstance {
    private keyboardnavStore = useKeyboardnavStore(this.$vApp.$pinia);
    private _isInput(target: EventTarget | null): boolean {
        if (!target || !(target instanceof HTMLElement)) return false;
        return !!target.closest('input, textarea, [contenteditable="true"]');
    }

    /**
     * Register a namespace letter and its keyboard options.
     *
     * @param namespace requested namespace letter.
     * @param options registration object describing keys and handlers.
     * @returns final namespace letter used for registration.
     */
    register(namespace: string, options: NamespaceRegistration): string {
        const ns = namespace.toUpperCase();
        const finalNs = this.keyboardnavStore.register(ns, options);
        const key = `keyboardnav.ns.${finalNs}`;
        Object.entries(options.name).forEach(([lang, val]) => {
            (<any>this.$iApi.$i18n).mergeLocaleMessage(lang, { [key]: val });
        });
        options.keys.forEach(k => {
            const kKey = `keyboardnav.key.${finalNs}.${k.key}`;
            Object.entries(k.description).forEach(([lang, val]) => {
                (<any>this.$iApi.$i18n).mergeLocaleMessage(lang, { [kKey]: val });
            });
        });
        return finalNs;
    }

    /**
     * Removes a namespace registration and associated handlers.
     */
    unregister(namespace: string): void {
        this.keyboardnavStore.unregister(namespace.toUpperCase());
    }

    /**
     * Returns the navigation chain to the active namespace so another action can be
     * selected without restarting the shortcut sequence.
     */
    reset(): KeyboardnavChainAction {
        const store = this.keyboardnavStore;
        const nsKey = store.activeNamespace ?? store.keyChain[1];
        if (!nsKey) {
            store.resetChain({ suppressHandler: true });
            return 'reset';
        }
        store.setChain([ROOT_KEY, nsKey]);
        store.setLastAction(undefined);
        store.setChainState('awaitAction');
        store.activeNamespace = nsKey;
        return 'reset';
    }

    /**
     * Clears the active navigation chain and returns the system to the idle state.
     */
    clear(event?: KeyboardEvent): KeyboardnavChainAction {
        this.keyboardnavStore.resetChain({ event, suppressHandler: true });
        return 'clear';
    }

    /** @internal */
    added(): void {
        const root = this.$iApi.$rootEl as HTMLElement | null;
        root?.addEventListener('keydown', this._handleKeyDown);
        root?.addEventListener('blur', this._handleBlur);
    }

    /** @internal */
    removed(): void {
        const root = this.$iApi.$rootEl as HTMLElement | null;
        root?.removeEventListener('keydown', this._handleKeyDown);
        root?.removeEventListener('blur', this._handleBlur);
    }

    private _handleKeyDown = (event: Event): void => {
        if (!(event instanceof KeyboardEvent)) return;
        const e = event;
        if (this._isInput(e.target)) return;

        const store = this.keyboardnavStore;
        const chain = store.keyChain;
        const hasModifier = e.altKey || e.ctrlKey || e.metaKey;

        if (!e.shiftKey && !hasModifier) {
            if (!chain.length && /^[1-5]$/.test(e.key)) {
                const idx = parseInt(e.key, 10) - 1;
                const panel = this.$iApi.panel.visible[idx];
                if (panel) {
                    e.preventDefault();
                    this.$iApi.panel.focus(panel);
                }
                return;
            }
        }

        const rawKey = e.key;
        const key = rawKey.length === 1 ? rawKey.toUpperCase() : rawKey;

        if (!hasModifier && key === 'Escape' && store.helpVisible) {
            e.preventDefault();
            store.setHelpVisible(false);
            store.resetChain({ suppressHandler: true });
            return;
        }

        if (!e.shiftKey && !hasModifier && key === ROOT_KEY) {
            e.preventDefault();
            const suppressHandler = store.chainState === 'complete';
            store.resetChain({ suppressHandler });
            store.setChain([ROOT_KEY]);
            store.setLastAction(undefined);
            store.setChainState('awaitNamespace');
            return;
        }

        if (store.chainState === 'idle') {
            if (key === 'Escape' && !e.shiftKey && !hasModifier) {
                const target = e.target as HTMLElement;
                const container = target.closest('[data-cy]') as HTMLElement | null;
                if (container && this.$iApi.$rootEl?.querySelector('.panel-container')?.contains(container)) {
                    e.preventDefault();
                    const id = container.getAttribute('data-cy');
                    if (id) {
                        this.$iApi.panel.close(id);
                    }
                }
            }
            return;
        }

        if (key === 'Escape') {
            e.preventDefault();
            store.resetChain({ event: e });
            return;
        }

        if (key === 'Backspace') {
            if (!chain.length) return;
            e.preventDefault();
            const previousState = store.chainState;
            store.setLastAction(undefined);
            store.popChain();

            if (!store.keyChain.length) {
                store.resetChain({ suppressHandler: true });
                return;
            }

            if (store.keyChain.length === 1) {
                store.setChainState('awaitNamespace');
                store.deactivate(e);
                return;
            }

            if (store.keyChain.length === 2) {
                store.setChainState('awaitAction');
                const namespaceKey = store.keyChain[1];
                if (previousState === 'complete' && namespaceKey) {
                    store.activate(namespaceKey, e, { suppressHandler: false });
                }
                return;
            }

            return;
        }

        if (e.shiftKey || hasModifier) {
            return;
        }

        if (store.chainState === 'awaitNamespace') {
            const namespaces = Object.keys(store.namespaces);

            if (key === 'H') {
                e.preventDefault();
                store.appendKey('H');
                store.setLastAction({ namespace: HELP_NAMESPACE, key: 'H' });
                store.finalizeChain({ event: e });
                store.setHelpVisible(!store.helpVisible);
                return;
            }

            if (namespaces.includes(key)) {
                e.preventDefault();
                store.appendKey(key);
                store.setLastAction(undefined);
                store.activate(key, e);
                store.setChainState('awaitAction');
                return;
            }

            return;
        }

        if (store.chainState === 'awaitAction') {
            const namespaceKey = store.activeNamespace ?? (chain[1] || '');
            const namespace = store.namespaces[namespaceKey];
            if (!namespace) {
                store.resetChain({ suppressHandler: true });
                return;
            }

            const validKeys = namespace.keys.map(item => item.key.toUpperCase());
            if (!validKeys.includes(key)) {
                return;
            }

            e.preventDefault();
            store.appendKey(key);
            const action = store.trigger(key, e);
            if (action?.chainAction) {
                return;
            }
            if (action) {
                store.setLastAction(action);
            }
            store.finalizeChain({ event: e });
            return;
        }
    };

    private _handleBlur = (): void => {
        this.keyboardnavStore.resetChain();
        this.keyboardnavStore.setHelpVisible(false);
    };
}
