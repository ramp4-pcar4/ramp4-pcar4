import { FixtureInstance } from '@/api';
import { useKeyboardnavStore } from '../store/keyboardnav-store';
import type { NamespaceRegistration } from '../store/keyboardnav-store';

/**
 * @internal
 */
export class KeyboardnavAPI extends FixtureInstance {
    private keyboardnavStore = useKeyboardnavStore(this.$vApp.$pinia);

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
        return finalNs;
    }

    /** @internal */
    added(): void {
        this.$iApi.$rootEl?.addEventListener('keydown', (e: Event) => this._handleKeyDown(e as KeyboardEvent));
        this.$iApi.$rootEl?.addEventListener('blur', this._handleBlur);
    }

    /** @internal */
    removed(): void {
        this.$iApi.$rootEl?.removeEventListener('keydown', (e: Event) => this._handleKeyDown(e as KeyboardEvent));
        this.$iApi.$rootEl?.removeEventListener('blur', this._handleBlur);
    }

    private _handleKeyDown = (e: KeyboardEvent): void => {
        const key = e.key.toUpperCase();
        if (e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (key in this.keyboardnavStore.namespaces) {
                e.preventDefault();
                this.keyboardnavStore.activate(key, e);
            }
        } else if (!e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && key.length === 1) {
            if (this.keyboardnavStore.activeNamespace) {
                e.preventDefault();
                this.keyboardnavStore.trigger(key, e);
            }
        }
    };

    private _handleBlur = (e?: Event): void => {
        this.keyboardnavStore.deactivate(e as KeyboardEvent);
    };
}
