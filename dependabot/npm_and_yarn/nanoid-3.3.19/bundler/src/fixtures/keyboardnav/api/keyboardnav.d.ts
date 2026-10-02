import { FixtureInstance } from '../../../api';
import { NamespaceRegistration } from '../store/keyboardnav-store';
import { KeyboardnavChainAction } from '../types';
/**
 * @internal
 */
export declare class KeyboardnavAPI extends FixtureInstance {
    private keyboardnavStore;
    private _isInput;
    /**
     * Register a namespace letter and its keyboard options.
     *
     * @param namespace requested namespace letter.
     * @param options registration object describing keys and handlers.
     * @returns final namespace letter used for registration.
     */
    register(namespace: string, options: NamespaceRegistration): string;
    /**
     * Removes a namespace registration and associated handlers.
     */
    unregister(namespace: string): void;
    /**
     * Returns the navigation chain to the active namespace so another action can be
     * selected without restarting the shortcut sequence.
     */
    reset(): KeyboardnavChainAction;
    /**
     * Clears the active navigation chain and returns the system to the idle state.
     */
    clear(event?: KeyboardEvent): KeyboardnavChainAction;
    /** @internal */
    added(): void;
    /** @internal */
    removed(): void;
    private _handleKeyDown;
    private _handleBlur;
}
