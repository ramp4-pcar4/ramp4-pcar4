# Keyboard Navigation Fixture

The keyboard navigation fixture provides a command palette style workflow for people who rely on a keyboard or screen reader. It exposes a global shortcut (`S`) that opens a chain of keys you can use to focus panels, launch feature namespaces, and run fixture-specific actions without touching the mouse.

While RAMP ships with a help overlay that lists every registered shortcut, each fixture is responsible for registering its own namespace and actions. This page explains how to enable the fixture, how the navigation flow works, and how to wire up custom shortcuts from your fixture code.

## Enabling the Fixture

1. Add `keyboardnav` to the list of fixtures that load at startup.  
2. (Optional) Provide an empty `keyboardnav` configuration object if you prefer to keep all fixtures explicitly listed in the config.

```jsonc
{
  "startingFixtures": ["legend", "appbar", "keyboardnav"],
  "fixtures": {
    "keyboardnav": {}
  }
}
```

Once the fixture is active you can press `S` anywhere inside RAMP to start a keyboard navigation chain.

## Default Controls

| Keys | Behaviour |
|------|-----------|
| `S` | Start the keyboard navigation chain (root command). |
| `S` + `<namespace>` | Activate a fixture namespace (for example `D` for Draw tools). |
| `S H` | Toggle the built-in help overlay that lists every namespace and action. |
| `1`-`5` | Focus the corresponding open panel while the chain is idle. |
| `Backspace` | Step back one key in the current chain. |
| `Escape` | Cancel the current chain, or close the focused panel when idle. |

Once a namespace is active the fixture decides which action keys are available. Every action is described in the help overlay so that users can explore with `S H` at any time.

## Registering Shortcuts in a Fixture

Use the `keyboardNav` API on `$iApi` to register namespaces and manage the navigation chain. The main entry points are:

- `register(namespace: string, options: NamespaceRegistration): string` - registers a namespace and returns the letter that ultimately gets assigned.
- `reset(): KeyboardnavChainAction` - rewinds the chain to the active namespace without closing it, matching the `'reset'` chain action.
- `clear(event?: KeyboardEvent): KeyboardnavChainAction` - exits the chain entirely (and optionally forwards the original keyboard event), matching the `'clear'` chain action.

The example below shows how to request the `D` namespace for draw tools and wire up two shortcut keys.

```ts
// Inside a fixture
onMounted(() => {
    const keyboardNav = iApi.keyboardNav;
    if (!keyboardNav) {
        console.warn('Keyboard navigation fixture is not available; skipping shortcut registration.');
        return;
    }

    const namespace = keyboardNav.register('D', {
        name: {
            en: 'Draw tools',
            fr: 'Outils de dessin'
        },
        activeHandler: () => {
            // Do something when namespace is active
        },
        deactiveHandler: () => {
            // Do something when namespace is no longer active
        },
        keys: [
            {
                key: 'L',
                description: {
                    en: 'Draw a line',
                    fr: 'Tracer une ligne'
                },
                handler: (_store, event) => {
                    drawStore.setActiveTool('polyline');

                    // We don't want to keep drawing lines, so reset keyboard navigation back to all draw tools.
                    keyboardNav.reset();
                }
            },
            {
                key: 'C',
                description: {
                    en: 'Clear graphics',
                    fr: 'Effacer les graphiques'
                },
                handler: (_store, event) => {
                    drawStore.clearGraphics();

                    // Exit the keyboard navigation chain entirely.
                    return keyboardNav.clear(event);
                }
            }
        ]
    });

    console.debug(`Keyboard navigation namespace registered: ${namespace}`);
});
```

If the letter you request is already taken or reserved (currently `H`), the fixture automatically assigns the next available letter and returns it.

## Registration Options Reference

The `register` method accepts a `NamespaceRegistration` object. Each field is optional unless stated otherwise.

- **name** (`Record<string, string>`, required): Localized label for the namespace. Keys should match available locale codes (for example `en`, `fr`).  
- **keys** (`KeyItem[]`, required): List of actions exposed once the namespace is active.  
- **handler** (`(store: KeyboardnavStore, event: KeyboardEvent, key: string) => KeyboardnavChainAction | void`, optional): Parent handler that can respond to any key in the namespace. Use this when every key shares the same logic. The third argument is the uppercase key that was pressed.  
- **activeHandler** (`(store: KeyboardnavStore, event?: KeyboardEvent) => void`, optional): Invoked when the namespace becomes active (after `S` plus the namespace letter). Handy for priming state or caching the returned namespace.  
- **deactiveHandler** (`(store: KeyboardnavStore, event?: KeyboardEvent) => void`, optional): Invoked when the namespace is dismissed without suppression. Use it to clean up focus or reset state.

Each `KeyItem` entry supports the following properties:

- **key** (`string`, required): The single character (A-Z, 0-9, etc.) that triggers the action. It is stored in uppercase.  
- **description** (`Record<string, string>`, required): Localized description shown in the help overlay.  
- **handler** (`(store: KeyboardnavStore, event: KeyboardEvent) => KeyboardnavChainAction | void`, optional): Called when the user completes the chain with this key. Return a chain action (see below) to control how the sequence proceeds. If you omit the handler you must supply a namespace-level `handler` instead.

The first parameter passed to every callback is the `KeyboardnavStore` instance for convenience, so you can query existing namespaces or state without importing the store directly.

## Chain Actions

Handlers can influence how the navigation chain behaves by returning a `KeyboardnavChainAction` value:

- `keyboardNav.reset()` (or returning `'reset'`) removes the most recent key from the chain and keeps the namespace active so another action can be chosen immediately.  
- `keyboardNav.clear(event?)` (or returning `'clear'`) clears the entire chain, optionally forwarding the triggering `KeyboardEvent`, and puts the navigation system back into its idle state.

Both helpers update the store consistently, so handlers rarely need to mutate the store directly.

## Best Practices

- Call `keyboardNav.reset()` after actions that keep the namespace available (for example switching draw tools).  
- Call `keyboardNav.clear()` after destructive or one-off actions (closing panels, clearing data) so that accessibility focus returns to the idle state.  
- Provide descriptions for every key so the help overlay remains useful.  
- Consider storing the returned namespace letter if your fixture can be configured with custom keys - this makes it easy to surface the active shortcut in your UI.  
- If your fixture renders focusable elements while a namespace is active, use the `activeHandler`/`deactiveHandler` hooks to move focus in a screen-reader friendly way.

