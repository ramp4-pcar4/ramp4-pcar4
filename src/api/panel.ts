import { APIScope, GlobalEvents, PanelInstance } from './internal';
import { usePanelStore, type PanelConfigStyle } from '@/stores/panel';
import type { PanelConfig, PanelConfigRoute } from '@/stores/panel';

import type { I18nComponentOptions } from '@/lang';

export class PanelAPI extends APIScope {
    panelStore = usePanelStore(this.$vApp.$pinia);

    /**
     * Registers a provided panel object and returns the resulting `PanelInstance` objects.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {PanelConfigPair} value a PanelConfig/id pair in the form of `{ id: string, config: PanelConfig }`
     * @param {PanelRegistrationOptions} [options]
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    register(
        value: PanelConfigPair,
        options?: PanelRegistrationOptions
    ): PanelInstance;
    /**
     * Registers a set of provided panel objects and returns the resulting `PanelInstance` object set.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {PanelConfigSet} value a set of PanelConfig objects in the form of `{ [name: string]: PanelConfig }` where keys assumed to be ids
     * @param {PanelRegistrationOptions} [options] a set of options that will apply to all the panel in the set
     * @returns {PanelInstanceSet}
     * @memberof PanelAPI
     */
    register(
        value: PanelConfigSet,
        options?: PanelRegistrationOptions
    ): PanelInstanceSet;
    register(
        value: PanelConfigPair | PanelConfigSet,
        options?: PanelRegistrationOptions
    ): PanelInstance | PanelInstanceSet {
        const panelConfigs = isPanelConfigPair(value)
            ? { [value.id]: value.config }
            : value;

        if (options) {
            const i18n = options.i18n || {};
            const $i18n = this.$iApi.$i18n;

            // merge `messages`, `dateTimeFormats` and  `numberFormats` into the global locale
            // ignore `sharedMessages` prop as it makes no sense to use it here
            Object.entries(i18n.messages || {}).forEach(value =>
                (<any>$i18n).mergeLocaleMessage(...value)
            );
            Object.entries(i18n.dateTimeFormats || {}).forEach(value =>
                (<any>$i18n).mergeDateTimeFormat(...value)
            );
            Object.entries(i18n.numberFormats || {}).forEach(value =>
                (<any>$i18n).mergeNumberFormat(...value)
            );
        }

        // TODO: check if the panel with the same id already exist and don't create a new one
        // create panel instances
        const panels: PanelInstance[] = Object.entries(panelConfigs).reduce<
            PanelInstance[]
        >((map, [id, config]) => {
            map.push(new PanelInstance(this.$iApi, id, config));
            return map;
        }, []);

        // register all the panels with the store
        panels.forEach(panel => this.panelStore.registerPanel(panel));

        // return either a single panel or a set of panels, depending on the function input
        if (panels.length === 1) {
            return panels[0];
        } else {
            return panels.reduce<PanelInstanceSet>((map, panel) => {
                map[panel.id] = panel;
                return map;
            }, {});
        }
    }

    /**
     * Provides a promise that resolves when the panel(s) have finished registration.
     *
     * @param {(string | string[])} panelId the panel ID(s) for which the promise is requested
     * @memberof PanelAPI
     */
    isRegistered(panelId: string | string[]): Promise<any> {
        // We first need to create a registration promise for all panels that currently don't have one
        const idsToCheck = Array.isArray(panelId) ? panelId : [panelId];
        idsToCheck.forEach((id: string) => {
            if (this.panelStore.regPromises[id] === undefined) {
                this.panelStore.addRegPromise(id);
            }
        });
        // Now, get all the promises and return
        return Promise.all(
            this.panelStore.getRegPromises(idsToCheck) // not sure how to get typescript to stop yelling
        );
    }

    /**
     * Removes a panel instance
     *
     * @param {(string | PanelInstance)} value
     * @memberof PanelAPI
     */
    remove(value: string | PanelInstance): void {
        const panel: PanelInstance = this.get(value);

        // close the panel if it is open
        if (panel.isOpen) {
            this.close(panel);
        }

        this.panelStore.removePanel(panel);
    }

    /**
     * Finds and returns a panel with the id specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    // TODO: implement overload to get a list of panels, similar to `feature.get([...])`
    get(value: string | PanelInstance): PanelInstance {
        const id = typeof value === 'string' ? value : value.id;
        return this.panelStore.items[id];
    }

    /**
     * Opens a registered panel in the panel stack.
     *
     *  - `rInstance.panel.open('panel-id')` -- opens the 'panel-id' panel on the first screen in the set
     *  - `rInstance.panel.open(<PanelInstance>)` -- opens the provided `PanelInstance` object on the first screen in the set
     *  - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id' })` -- opens the 'panel-id' panel on the 'screen-id' screen
     *  - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id', props: {... } })` -- opens the 'panel-id' panel on the 'screen-id' screen passing supplied `props` to it
     *
     * @param {(string | PanelInstance | PanelInstancePath)} value a panel id, a `PanelInstance` object or an object of the form `{ id: <panel-id>, screen: <id>, props: <object> }`.
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    open(value: string | PanelInstance | PanelInstancePath): PanelInstance {
        let panel: PanelInstance,
            screen: string | undefined,
            props: object | undefined;

        // figure out what is passed to the function and retrieve the panel object
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
            ({ screen, props } = value);
        }

        // if panel is hidden off screen minimize it first so it is able to reopen
        if (panel.isOpen && !panel.isVisible) {
            panel.minimize();
        } else if (panel.isOpen) {
            // if panel is already open and is not hidden, don't do anything
            return panel;
        }

        // Panel opening requires a screen, check if last opened or default makes more sense
        if (!screen) {
            if (panel.route && !props) {
                // Use the last route if there is one and there are no props given
                // props imply an opening of the panel with new info
                ({ screen, props } = panel.route);
            } else {
                // Either first time opening panel or there are props, use default
                screen = Object.keys(panel.screens).pop()!;
            }
        }
        if (this.show(panel, { screen, props })) {
            this.panelStore.openPanel(panel);
            this.$iApi.updateAlert(
                this.$iApi.$i18n.t(`panels.alert.open`, {
                    name: panel.alertName
                        ? this.$iApi.$i18n.t(panel.alertName)
                        : panel.id
                })
            );
            this.$iApi.event.emit(GlobalEvents.PANEL_OPENED, panel);
        } else {
            console.error(`Failed to open ${panel.id} panel.`);
        }
        return panel;
    }

    /**
     * Returns an array of open `PanelInstance` objects.
     *
     * @readonly
     * @type {PanelInstance[]}
     * @memberof PanelAPI
     */
    get opened(): PanelInstance[] {
        //@ts-ignore
        return this.panelStore.orderedItems;
    }

    /**
     * Returns an array of visible `PanelInstance` object.
     * This is not every *open* panel, only the ones currently visible to the user.
     *
     * @readonly
     * @type {PanelInstance[]}
     * @memberof PanelAPI
     */
    get visible(): PanelInstance[] {
        //@ts-ignore
        return this.panelStore.visible;
    }

    /**
     * Closes the panel specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    close(value: string | PanelInstance): PanelInstance {
        const panel = this.get(value);

        // unpin the panel before removing if it was pinned
        if (panel.isPinned) {
            panel.pin(false);
        }

        this.panelStore.closePanel(panel);
        this.$iApi.updateAlert(
            this.$iApi.$i18n.t(`panels.alert.close`, {
                name: panel.alertName
                    ? this.$iApi.$i18n.t(panel.alertName)
                    : panel.id
            })
        );
        this.$iApi.event.emit(GlobalEvents.PANEL_CLOSED, panel);

        return panel;
    }

    /**
     * Minimizes the panel specified, mechanically the same as closing however it does not emit the close event so that temporary appbar buttons stay.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    minimize(value: string | PanelInstance): PanelInstance {
        const panel = this.get(value);

        if (panel.isPinned) {
            panel.pin(false);
        }

        this.panelStore.closePanel(panel);
        this.$iApi.updateAlert(
            this.$iApi.$i18n.t(`panels.alert.minimize`, {
                name: panel.alertName
                    ? this.$iApi.$i18n.t(panel.alertName)
                    : panel.id
            })
        );

        this.$iApi.event.emit(GlobalEvents.PANEL_MINIMIZED, panel);

        return panel;
    }

    /**
     * Moves the specifed visible panel to the left or right.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    move(value: string | PanelInstance, direction: string): PanelInstance {
        const panel = this.get(value);
        this.panelStore.movePanel(panel, direction);
        return panel;
    }

    /**
     * Toggle panel.
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to close.
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    toggle(
        value: string | PanelInstance | PanelInstancePath,
        toggle?: boolean
    ): PanelInstance {
        let panel: PanelInstance;

        // figure out what is passed to the function, retrieve the panel object and make call to open or close function
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
        }

        // use specified toggle value if provided + check if toggle value is possible
        toggle = typeof toggle !== 'undefined' ? toggle : !panel.isVisible;
        if (toggle !== panel.isVisible) {
            toggle ? this.open(value) : this.close(panel);
        }

        return panel;
    }

    /**
     * Toggle panel's minimized state
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to minimize.
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    toggleMinimize(
        value: string | PanelInstance | PanelInstancePath,
        toggle?: boolean
    ): PanelInstance {
        let panel: PanelInstance;

        // figure out what is passed to the function, retrieve the panel object and make call to open or close function
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
        }

        // use specified toggle value if provided + check if toggle value is possible
        toggle = typeof toggle !== 'undefined' ? toggle : !panel.isVisible;
        if (toggle !== panel.isVisible) {
            toggle ? this.open(panel) : this.minimize(panel);
        }

        return panel;
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} [pin]
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    pin(value: string | PanelInstance, pin?: boolean): PanelInstance {
        const panel = this.get(value);

        // use the provided value or negate the existing `isPinned` status of this panel
        pin = typeof pin !== 'undefined' ? pin : !panel.isPinned;

        // if the panel is not currently pinned, and the `value` is not `true`, don't do anything,
        // as this might unintentionally unpin a different panel;
        // say `panelA` is pinned and if the following is called `$iApi.panel.pin(panelB, false)`, it should do nothing
        if (!panel.isPinned && !pin) {
            return panel;
        }

        // NOTE: we store `pinned` in the store as a reference to a panel instance object
        //@ts-ignore
        this.panelStore.pinned = pin ? panel : null;

        return panel;
    }

    /**
     * Returns the currently pinned panel instance, if exists.
     *
     * @readonly
     * @type {(PanelInstance | null)}
     * @memberof PanelAPI
     */
    get pinned(): PanelInstance | null {
        //@ts-ignore
        return this.panelStore.pinned || null;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     *
     * @param {(string | PanelInstance)} value
     * @param {PanelConfigRoute} route
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    // TODO: implement panel route history
    show(
        value: string | PanelInstance,
        route: PanelConfigRoute
    ): PanelInstance | undefined {
        const panel = this.get(value);

        // check if the requested screen exists, or bad things can happen on startup
        if (!panel.screens[route.screen]) {
            return undefined;
        }

        // check if required props are there, or bad things can happen on startup
        // need this here until we figure out how to pass in props, after layer use is normalized
        if (panel.screens[route.screen]?.props) {
            const propsToCheck = Object.keys(
                panel.screens[route.screen]?.props
            ).filter((pr: String) => pr !== 'panel');
            const propsPassed = route.props ? Object.keys(route.props) : [];
            for (let i = 0; i < propsToCheck.length; i++) {
                if (
                    !propsPassed.includes(propsToCheck[i]) &&
                    panel.screens[route.screen].props[propsToCheck[i]].required
                ) {
                    return undefined;
                }
            }
        }

        // register all the panel screen components globally
        // only register if it hasn't been registered before
        if (!(route.screen in this.$element._context.components!)) {
            panel.registerScreen(route.screen);
        }

        this.panelStore.items[panel.id].route = route;

        return panel;
    }

    /**
     * Sets the styles of the specified panel by using a provided CSS styles object.
     *
     * @param {(string | PanelInstance)} value
     * @param {object} style
     * @param {boolean} [replace=false] merge with existing styles if `false`; replace if `true`
     * @returns {(PanelInstance | null)}
     * @memberof PanelAPI
     */
    setStyle(
        value: string | PanelInstance,
        style: object,
        replace: boolean = false
    ): PanelInstance | null {
        const panel = this.get(value);

        this.panelStore.items[panel.id].style = replace
            ? (style as PanelConfigStyle)
            : { ...panel.style, ...style };

        return panel;
    }

    /**
     * Expands/collapses the expand state of the panel. Toggles whether the panel expands if no expand value is given.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} expand Optional. Whether the panel should expand, toggles the value if not set
     * @returns {(PanelInstance | null)}
     * @memberof PanelAPI
     */
    expand(
        value: string | PanelInstance,
        expand?: boolean
    ): PanelInstance | null {
        const panel = this.get(value);

        this.panelStore.items[panel.id].expanded =
            expand !== undefined ? expand! : !panel.expanded;

        return panel;
    }
}

/**
 * Checks if the provided value is of `PanelConfigPair` type.
 *
 * @param {(PanelConfigPair | PanelConfigSet)} value
 * @returns {value is PanelConfigPair}
 */
function isPanelConfigPair(
    value: PanelConfigPair | PanelConfigSet
): value is PanelConfigPair {
    return (
        value.id !== undefined &&
        typeof value.id === 'string' &&
        value.config !== undefined
    );
}

/**
 * A set of key-value pairs with `PanelConfig` objects and their ids.
 */
export type PanelConfigSet = { [name: string]: PanelConfig };

/**
 * A single pair of `PanelConfig`/id values.
 */
export type PanelConfigPair = { id: string; config: PanelConfig };

/**
 * A set of key-value pairs with `PanelInstance` objects and their ids.
 */
export type PanelInstanceSet = { [name: string]: PanelInstance };

/**
 * A path specifying panel id, screen id, and any props for that panel screen. Used when opening a panel through `$iApi.panel.open(...)`.
 */
export type PanelInstancePath = { id: string; screen?: string; props?: object };

/**
 * A set of common registration options to apply to panels being registered.
 */
export type PanelRegistrationOptions = {
    /**
     * Locale messages in the form of either i18n options object or un-parsed CSV rows.
     * These messages will be passed to any screen opened inside this panel.
     *
     * @type {(I18nComponentOptions)}
     */
    i18n?: I18nComponentOptions;
};

export interface PanelWidthObject {
    /**
     * The default panel width for this fixtures panels.
     *
     * @type number
     * @memberof PanelWidthObject
     */
    default?: number;

    /**
     * Used for setting a specific panel width.
     *
     * @type number
     * @memberof PanelWidthObject
     */
    [panel: string]: number | any;
}
