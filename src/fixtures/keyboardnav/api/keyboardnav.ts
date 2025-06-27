import { FixtureInstance } from '@/api';
import { useKeyboardnavStore } from '../store/keyboardnav-store';
import type { NamespaceRegistration } from '../store/keyboardnav-store';

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

    /** @internal */
    added(): void {
        this.$iApi.$rootEl?.addEventListener('keydown', (e: Event) => this._handleKeyDown(e as KeyboardEvent));
        this.$iApi.$rootEl?.addEventListener('keyup', (e: Event) => this._handleKeyUp(e as KeyboardEvent));
        this.$iApi.$rootEl?.addEventListener('blur', this._handleBlur);
    }

    /** @internal */
    removed(): void {
        this.$iApi.$rootEl?.removeEventListener('keydown', (e: Event) => this._handleKeyDown(e as KeyboardEvent));
        this.$iApi.$rootEl?.removeEventListener('keyup', (e: Event) => this._handleKeyUp(e as KeyboardEvent));
        this.$iApi.$rootEl?.removeEventListener('blur', this._handleBlur);
    }

    private _handleKeyDown = (e: KeyboardEvent): void => {
        if (this._isInput(e.target)) return;

        if (!e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (/^[1-5]$/.test(e.key)) {
                const idx = parseInt(e.key) - 1;
                const panel = this.$iApi.panel.visible[idx];
                if (panel) {
                    e.preventDefault();
                    this.$iApi.panel.focus(panel);
                }
                return;
            } else if (e.key === 'Escape') {
                const target = e.target as HTMLElement;
                const container = target.closest('[data-cy]') as HTMLElement | null;
                if (container && this.$iApi.$rootEl?.querySelector('.panel-container')?.contains(container)) {
                    e.preventDefault();
                    const id = container.getAttribute('data-cy');
                    if (id) {
                        this.$iApi.panel.close(id);
                    }
                }
                return;
            }
        }

        const key = e.key.toUpperCase();
        if (e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (key in this.keyboardnavStore.namespaces) {
                e.preventDefault();
                if (this.keyboardnavStore.activeNamespace === key) {
                    this.keyboardnavStore.deactivate(e);
                } else {
                    this.keyboardnavStore.activate(key, e);
                }
            }
        } else if (!e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && key.length === 1) {
            if (this.keyboardnavStore.activeNamespace) {
                e.preventDefault();
                this.keyboardnavStore.trigger(key, e);
            }
        }
    };

    private _handleKeyUp = (e: KeyboardEvent): void => {
        if (this._isInput(e.target)) return;
        if ((e.key.toUpperCase() === 'H' || e.key === '?') && e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            this.keyboardnavStore.setHelpVisible(!this.keyboardnavStore.helpVisible);
        }
    };

    private _handleBlur = (e?: Event): void => {
        this.keyboardnavStore.deactivate(e as KeyboardEvent);
        this.keyboardnavStore.setHelpVisible(false);
    };
}
