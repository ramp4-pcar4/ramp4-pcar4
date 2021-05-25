import { APIScope, PanelInstance } from './internal';
import {
    PanelConfig,
    PanelConfigRoute,
    PanelMutation,
    PanelAction
} from '@/store/modules/panel';

import { I18nComponentOptions } from '@/lang';

export class PanelAPI extends APIScope {
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
            const $i18n = this.$vApp.$i18n;

            // merge `messages`, `dateTimeFormats` and  `numberFormats` into the global locale
            // ignore `sharedMessages` prop as it makes no sense to use it here
            Object.entries(i18n.messages || {}).forEach(value =>
                $i18n.mergeLocaleMessage(...value)
            );
            Object.entries(i18n.dateTimeFormats || {}).forEach(value =>
                $i18n.mergeDateTimeFormat(...value)
            );
            Object.entries(i18n.numberFormats || {}).forEach(value =>
                $i18n.mergeNumberFormat(...value)
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
        panels.forEach(panel =>
            this.$vApp.$store.set(`panel/${PanelMutation.REGISTER_PANEL}!`, {
                panel
            })
        );

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
     * Finds and returns a panel with the id specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    // TODO: implement overload to get a list of panels, similar to `feature.get([...])`
    get(value: string | PanelInstance): PanelInstance {
        const id = typeof value === 'string' ? value : value.id;
        const panel = this.$vApp.$store.get<PanelInstance>(`panel/items@${id}`);

        if (!panel) {
            throw new Error("panel doesn't exist");
        }

        return panel;
    }

    /**
     * Opens a registered panel in the panel stack.
     *
     *  - `RAMP.panel.open('panel-id')` -- opens the 'panel-id' panel on the first screen in the set
     *  - `RAMP.panel.open(<PanelInstance>)` -- opens the provided `PanelInstance` object on the first screen in the set
     *  - `RAMP.panel.open({ id: 'panel-id', screen: 'screen-id' })` -- opens the 'panel-id' panel on the 'screen-id' screen
     *  - `RAMP.panel.open({ id: 'panel-id', screen: 'screen-id', props: {... } })` -- opens the 'panel-id' panel on the 'screen-id' screen passing supplied `props` to it
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

        // if the screen route is not defined, the default is the first screen component
        if (!screen) {
            screen = Object.keys(panel.screens).pop()!;
        }

        this.show(panel, { screen, props });

        this.$vApp.$store.set(`panel/${PanelAction.openPanel}!`, { panel });

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
        return this.$vApp.$store.get<PanelInstance[]>('panel/orderedItems')!;
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

        this.$vApp.$store.set(`panel/${PanelAction.closePanel}!`, { panel });

        return panel;
    }

    /**
     * Toggle panel.
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle
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
        toggle = typeof toggle !== 'undefined' ? toggle : !panel.isOpen;
        if (toggle !== panel.isOpen) {
            toggle ? this.open(value) : this.close(panel);
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
        this.$vApp.$store.set('panel/pinned', pin ? panel : null);

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
        return this.$vApp.$store.get<PanelInstance>('panel/pinned') || null;
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
    ): PanelInstance {
        const panel = this.get(value);

        // register all the panel screen components globally
        // only register if it hasn't been registered before
        if (!(route.screen in this.$vApp.$options.components!)) {
            panel.registerScreen(route.screen);
        }

        this.$vApp.$store.set(`panel/items@${panel.id}.route`, route);

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

        this.$vApp.$store.set(
            `panel/items@${panel.id}.style`,
            replace ? style : { ...panel.style, ...style }
        );

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
