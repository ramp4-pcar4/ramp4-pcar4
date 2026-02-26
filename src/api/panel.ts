import { APIScope, GlobalEvents, isHTMLScreen, PanelInstance } from './internal';
import type { HTMLScreen, PanelConfigStyle, PanelDirection } from '@/stores/panel';
import { usePanelStore } from '@/stores/panel';
import type { HTMLPanelInstance } from '@/stores/panel';
import type { PanelConfig, PanelConfigRoute } from '@/stores/panel';

import type { I18nComponentOptions } from '@/lang';

export class PanelAPI extends APIScope {
    panelStore = usePanelStore(this.$vApp.$pinia);

    /** Updates the content of a specific HTML-based screen of a panel, using HTML content
     *
     * @param {PanelInstance | string} panel The `PanelInstance` object, or its respective id, that corresponds to
     * the panel whose content is to be updated.
     * @param {{ [key: string]: string | HTMLElement }} html keyed language object containing HTML content for each
     * language, represented as an HTMLElement object or a string.
     * @param {string} [screenId] id of the screen to be updated. If not provided, it will update the first screen in the panel
     * @memberof PanelAPI
     */
    updateHTML(panel: PanelInstance | string, html: HTMLScreen | { [key: string]: string }, screenId?: string): void {
        // An html-based panel should have only one screen
        const panelInstance = this.get(panel);

        const screen = screenId ? panelInstance.screens[screenId] : Object.values(panelInstance.screens)[0];

        if (isHTMLScreen(screen)) {
            for (const lang in html) {
                screen[lang].innerHTML = html[lang] instanceof HTMLElement ? html[lang].outerHTML : html[lang];
            }
        } else {
            console.error('Screen must be an HTML object');
        }
    }

    /**
     * Helper for `registerHTML()`. Creates and returns the `PanelConfigSet` required to register the HTML panel
     *
     * @param {HTMLPanelInstance} htmlPanel a `HTMLPanelInstance` object, excluding its `i18nMap` (if it exists),
     * corresponding to the new html panel
     * @returns {PanelConfigSet} The `PanelConfigSet` corresponding to the panel that is to be created
     * @memberof PanelAPI
     */
    private registerHTMLConfig(htmlPanel: Omit<HTMLPanelInstance, 'i18nMap'>): PanelConfigSet {
        for (const lang in htmlPanel.content) {
            // After this, htmlPanel.content will be of type HTMLScreen
            if (typeof htmlPanel.content[lang] === 'string') {
                const newHtml = document.createElement('div');
                newHtml.innerHTML = htmlPanel.content[lang];
                htmlPanel.content[lang] = newHtml;
            }
        }

        const panelConfig: PanelConfigSet = {};
        panelConfig[htmlPanel.id] = {
            screens: {},
            style: htmlPanel.style ?? {
                width: '350px'
            },
            alertName: htmlPanel.alertName
        };
        panelConfig[htmlPanel.id].screens[htmlPanel.id] = htmlPanel.content;

        return panelConfig;
    }

    /** Registers a new panel containing a screen of HTML content and returns the PanelInstance
     *
     * @param {HTMLPanelInstance} htmlPanel a HTMLPanelInstance object corresponding to the new html panel
     * @memberof PanelAPI
     */
    registerHTML(htmlPanel: HTMLPanelInstance): PanelInstance {
        const existingPanel = this.get(htmlPanel.id);
        if (existingPanel) {
            console.error('Panel already exist');
            return existingPanel;
        }
        const panelConfig = this.registerHTMLConfig(htmlPanel);
        const panelOptions = {
            i18n: {
                messages: htmlPanel.i18nMap
            }
        } as PanelRegistrationOptions;

        const panel: PanelInstance = this.register(panelConfig, panelOptions) as unknown as PanelInstance;

        return panel;
    }
    /**
     * Registers a provided panel object and returns the resulting `PanelInstance` objects.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {PanelConfigPair} value a PanelConfig/id pair in the form of `{ id: string, config: PanelConfig }`
     * @param {PanelRegistrationOptions} [options]
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    register(value: PanelConfigPair, options?: PanelRegistrationOptions): PanelInstance;
    /**
     * Registers a set of provided panel objects and returns the resulting `PanelInstance` object set.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {PanelConfigSet} value a set of PanelConfig objects in the form of `{ [name: string]: PanelConfig }` where keys assumed to be ids
     * @param {PanelRegistrationOptions} [options] a set of options that will apply to all the panel in the set
     * @returns {PanelInstanceSet}
     * @memberof PanelAPI
     */
    register(value: PanelConfigSet, options?: PanelRegistrationOptions): PanelInstanceSet;
    register(
        value: PanelConfigPair | PanelConfigSet,
        options?: PanelRegistrationOptions
    ): PanelInstance | PanelInstanceSet {
        const panelConfigs = isPanelConfigPair(value) ? { [value.id]: value.config } : value;
        if (options) {
            const i18n = options.i18n || {};
            const $i18n = this.$iApi.$i18n;

            // merge `messages`, `dateTimeFormats` and  `numberFormats` into the global locale
            // ignore `sharedMessages` prop as it makes no sense to use it here
            Object.entries(i18n.messages || {}).forEach(value => (<any>$i18n).mergeLocaleMessage(...value));
            Object.entries(i18n.dateTimeFormats || {}).forEach(value => (<any>$i18n).mergeDateTimeFormat(...value));
            Object.entries(i18n.numberFormats || {}).forEach(value => (<any>$i18n).mergeNumberFormat(...value));
        }

        // TODO: check if the panel with the same id already exist and don't create a new one
        // create panel instances
        const panels: PanelInstance[] = Object.entries(panelConfigs).reduce<PanelInstance[]>((map, [id, config]) => {
            map.push(new PanelInstance(this.$iApi, id, config));
            return map;
        }, []);

        // register all the panels with the store
        panels.forEach(panel => this.panelStore.registerPanel(panel));

        // return either a single panel or a set of panels, depending on the function input
        if (panels.length === 1) {
            return panels[0] as PanelInstance;
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
    async isRegistered<T extends string | string[]>(
        panelId: T
    ): Promise<T extends string ? PanelInstance : PanelInstance[]> {
        // We first need to create a registration promise for all panels that currently don't have one
        const idsToCheck: Array<string> = Array.isArray(panelId) ? panelId : [panelId];
        idsToCheck.forEach((id: string) => {
            if (this.panelStore.regPromises[id] === undefined) {
                this.panelStore.addRegPromise(id);
            }
        });

        // Wait for all promises
        const proms = this.panelStore.getRegPromises(idsToCheck);
        // @ts-expect-error I give up, TS is hopeless
        return Array.isArray(panelId) ? Promise.all(proms) : proms[0];
    }

    /**
     * Returns the panel ids of all currently registered panels
     *
     * @returns {Array<string>}
     * @memberof PanelAPI
     */
    allRegistered(): Array<string> {
        return Object.keys(this.panelStore.items);
    }

    /**
     * Removes a panel instance
     *
     * @param {(string | PanelInstance)} value
     * @memberof PanelAPI
     */
    remove(value: string | PanelInstance): void {
        const panel: PanelInstance = this.get(value);

        // attempting to remove non-existent panel, do nothing
        if (!panel) {
            return;
        }

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
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    open(value: string | PanelInstance | PanelInstancePath): PanelInstance | undefined {
        let panel: PanelInstance, screen: string | undefined, props: object | undefined;

        // figure out what is passed to the function and retrieve the panel object
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
            ({ screen, props } = value);
        }

        // attempting to open a non-existing panel, do nothing
        if (!panel) {
            return panel;
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
                    name: panel.alertName ? this.$iApi.$i18n.t(panel.alertName) : panel.id
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
        return this.panelStore.orderedItems.concat(this.panelStore.teleported);
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
        return this.panelStore.visible.concat(this.panelStore.teleported);
    }

    /**
     * Closes the panel specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    close(value: string | PanelInstance): PanelInstance | undefined {
        const panel = this.get(value);

        // attempting to close a non-existing panel, do nothing
        if (!panel) {
            return panel;
        }

        const visiblePanels = this.visible.slice();
        const idx = visiblePanels.indexOf(panel);
        const fallback = this.$vApp.$el.querySelector('[focus-container]') as HTMLElement | null;

        // unpin the panel before removing if it was pinned
        if (panel.isPinned) {
            panel.pin(false);
        }

        this.panelStore.closePanel(panel);
        this.$iApi.updateAlert(
            this.$iApi.$i18n.t(`panels.alert.close`, {
                name: panel.alertName ? this.$iApi.$i18n.t(panel.alertName) : panel.id
            })
        );
        this.$iApi.event.emit(GlobalEvents.PANEL_CLOSED, panel);

        this.$vApp.$nextTick(() => {
            const leftPanel = idx > 0 ? this.visible[idx - 1] : this.visible[0];
            if (leftPanel) {
                this.focus(leftPanel);
            } else {
                fallback?.focus();
            }
        });

        return panel;
    }

    /**
     * Minimizes the panel specified, mechanically the same as closing however it does not emit the close event so that temporary appbar buttons stay.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    minimize(value: string | PanelInstance): PanelInstance | undefined {
        const panel = this.get(value);

        // attempting to minimize non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        if (panel.isPinned) {
            panel.pin(false);
        }

        this.panelStore.closePanel(panel);
        this.$iApi.updateAlert(
            this.$iApi.$i18n.t(`panels.alert.minimize`, {
                name: panel.alertName ? this.$iApi.$i18n.t(panel.alertName) : panel.id
            })
        );

        this.$iApi.event.emit(GlobalEvents.PANEL_MINIMIZED, panel);

        return panel;
    }

    /**
     * Moves the specifed visible panel to the left or right.
     *
     * @param {(string | PanelInstance)} value
     * @param {PanelDirection} direction the direction of movement, either "left" or "right".
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    move(value: string | PanelInstance, direction: PanelDirection): PanelInstance | undefined {
        const panel = this.get(value);

        // attempting to move non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        this.panelStore.movePanel(panel, direction);
        return panel;
    }

    /**
     * Toggle panel.
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to close.
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    toggle(value: string | PanelInstance | PanelInstancePath, toggle?: boolean): PanelInstance | undefined {
        let panel: PanelInstance;

        // figure out what is passed to the function, retrieve the panel object and make call to open or close function
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
        }

        // attempting to toggle non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        // use specified toggle value if provided + check if toggle value is possible
        toggle = typeof toggle !== 'undefined' ? toggle : !panel.isVisible;
        if (toggle !== panel.isVisible) {
            return toggle ? this.open(value) : this.close(panel);
        }

        return panel;
    }

    /**
     * Toggle panel's minimized state
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to minimize.
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    toggleMinimize(value: string | PanelInstance | PanelInstancePath, toggle?: boolean): PanelInstance | undefined {
        let panel: PanelInstance;

        // figure out what is passed to the function, retrieve the panel object and make call to open or close function
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
        }

        // attempting to toggle non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        // use specified toggle value if provided + check if toggle value is possible
        toggle = typeof toggle !== 'undefined' ? toggle : !panel.isVisible;
        if (toggle !== panel.isVisible) {
            return toggle ? this.open(panel) : this.minimize(panel);
        }

        return panel;
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} [pin]
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    pin(value: string | PanelInstance, pin?: boolean): PanelInstance | undefined {
        const panel = this.get(value);

        // attempting to pin/unpin non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        // use the provided value or negate the existing `isPinned` status of this panel
        pin = typeof pin !== 'undefined' ? pin : !panel.isPinned;

        // if the panel is not currently pinned, and the `value` is not `true`, don't do anything,
        // as this might unintentionally unpin a different panel;
        // say `panelA` is pinned and if the following is called `$iApi.panel.pin(panelB, false)`, it should do nothing
        if (!panel.isPinned && !pin) {
            return panel;
        }

        // NOTE: we store `pinned` in the store as a reference to a panel instance object

        this.panelStore.pinned = pin ? panel : undefined;

        return panel;
    }

    /**
     * Returns the currently pinned panel instance, if exists.
     *
     * @readonly
     * @type {(PanelInstance | undefined)}
     * @memberof PanelAPI
     */
    get pinned(): PanelInstance | undefined {
        return this.panelStore.pinned || undefined;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     *
     * @param {(string | PanelInstance)} value
     * @param {PanelConfigRoute} route
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered and the specified screen exists, undefined otherwise.
     * @memberof PanelAPI
     */
    // TODO: implement panel route history
    show(value: string | PanelInstance, route: PanelConfigRoute): PanelInstance | undefined {
        const panel = this.get(value);
        // attempting to show screen on non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        // check if the requested screen exists, or bad things can happen on startup
        if (!panel.screens[route.screen]) {
            return undefined;
        }

        // check if required props are there, or bad things can happen on startup
        // need this here until we figure out how to pass in props, after layer use is normalized
        if (panel.screens[route.screen]?.props) {
            const propsToCheck = Object.keys(panel.screens[route.screen]?.props).filter((pr: string) => pr !== 'panel');
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

        // if this panel is going to be teleported elsewhere, turn off the header by setting the header prop,
        // unless someone already forced the header to true.
        if (panel.teleport) {
            route.props = {
                header: !!panel.teleport?.showHeader,
                ...route.props
            };
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
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    setStyle(value: string | PanelInstance, style: object, replace: boolean = false): PanelInstance | undefined {
        const panel = this.get(value);

        // attempting to style non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        this.panelStore.items[panel.id].style = replace ? (style as PanelConfigStyle) : { ...panel.style, ...style };

        return panel;
    }

    /**
     * Expands/collapses the expand state of the panel. Toggles whether the panel expands if no expand value is given.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} expand Optional. Whether the panel should expand, toggles the value if not set
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    expand(value: string | PanelInstance, expand?: boolean): PanelInstance | undefined {
        const panel = this.get(value);

        // attempting to expand/collapse non-existent panel, do nothing
        if (!panel) {
            return panel;
        }

        this.panelStore.items[panel.id].expanded = expand !== undefined ? expand! : !panel.expanded;

        return panel;
    }

    /**
     * Sets keyboard focus to the specified panel if it is currently visible.
     *
     * @param {(string | PanelInstance)} panelOrId
     */
    focus(panelOrId: string | PanelInstance): PanelInstance | undefined {
        const panel = this.get(panelOrId);
        if (!panel) return;

        const el = this.$vApp.$el.querySelector(
            `.panel-container [data-cy="${panel.id}"] [focus-container], .panel-container [data-cy="${panel.id}"] [focus-list]`
        ) as HTMLElement | null;
        el?.focus();
    }
}

/**
 * Checks if the provided value is of `PanelConfigPair` type.
 *
 * @param {(PanelConfigPair | PanelConfigSet)} value
 * @returns {value is PanelConfigPair}
 */
function isPanelConfigPair(value: PanelConfigPair | PanelConfigSet): value is PanelConfigPair {
    return value.id !== undefined && typeof value.id === 'string' && value.config !== undefined;
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

export type PanelTeleportConfig = PanelTeleportObject | { [id: string]: PanelTeleportObject };

export interface PanelTeleportObject {
    /**
     * The element to teleport the panel to. Can be the actual element or a query selector string.
     *
     * @type string | Element
     * @memberof PanelTeleportObject
     */
    target?: string | Element;

    /**
     * Whether or not to show the panel header.
     *
     * @type boolean
     * @memberof PanelTeleportObject
     */
    showHeader?: boolean;

    /**
     * Whether or not opening/closing the panel will show/hide an appbar button for it.
     * Will only apply to temporary appbar buttons.
     *
     * @type boolean
     * @memberof PanelTeleportObject
     */
    showAppbarButton?: boolean;

    /**
     * Custom class breakpoints for the teleported panel.
     *
     * @type object
     * @memberof PanelTeleportObject
     */
    breakpoints?: { [key: string]: number };
}
