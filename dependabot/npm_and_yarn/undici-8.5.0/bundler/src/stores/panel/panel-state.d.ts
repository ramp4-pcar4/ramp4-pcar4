import { Component, ComponentOptions, ComponentPublicInstance } from '../../../vue/dist/vue.esm-bundler.js';
import { PanelInstance } from '../../api';
import { DefPromise } from '../../geo/api';
export interface PanelState {
    /**
     * A list of all open (visible and hidden) panels.
     *
     * @type {{ [name: string]: PanelInstance }}
     * @memberof PanelState
     */
    items: {
        [name: string]: PanelInstance;
    };
    /**
     * A list of registration promises for all panels.
     * @type {{ [name: string]: DefPromise }}
     * @memberof PanelState
     */
    regPromises: {
        [name: string]: DefPromise<PanelInstance>;
    };
    /**
     * A list of all panels in the arrangement they would be put on screen.
     * The last item will be the first on screen (rightmost, therefore rightmost in array).
     * Note: The `visible` array is used for whats actually on screen, this is used for calculating `visible`.
     *
     * @type {PanelInstance[]}
     * @memberof PanelState
     */
    orderedItems: PanelInstance[];
    /**
     * Indicates a pinned panel.
     *
     * @type {(PanelInstance | null)}
     * @memberof PanelState
     */
    pinned: PanelInstance | null;
    /**
     * Indicates the most recently opened panel has priority
     * This is given the value of that recent panel in order to check on removal
     *
     * @type {(PanelInstance | null)}
     * @memberof PanelState
     */
    priority: PanelInstance | null;
    /**
     * The panels that are displayed on the screen
     *
     * @type {PanelInstance[]}
     * @memberof PanelState
     */
    visible: PanelInstance[];
    /**
     * The screen width that the visible panels are allowed to use.
     *
     * @type {number}
     * @memberof PanelState
     */
    stackWidth: number;
    /**
     * The remaining screen width that non-opened panels are allowed to take up.
     *
     * @type {number}
     * @memberof PanelState
     */
    remainingWidth: number;
    /**
     * True if the app contains the `xs` class, indicating that panels have no extra margin.
     *
     * @type {boolean}
     * @memberof PanelState
     */
    mobileView: boolean;
    /**
     * True if panels have the move left/right controls enabled.
     *
     * @type {boolean}
     * @memberof PanelState
     */
    reorderable: boolean;
}
export type AsyncComponentEh = typeof import('*.vue') | Component;
export type AsyncComponentFunctionEh = () => Promise<AsyncComponentEh>;
export type AsyncComponentFactoryEh = () => {
    component: Promise<Component>;
    loading?: Component;
    error?: Component;
    delay?: number;
    timeout?: number;
};
/**
 * - `string`: a language
 * - `HTMLElement`: the content for a specific language
 */
export type HTMLScreen = {
    [key: string]: HTMLElement;
};
export type HTMLPanelInstance = {
    /**
     * Keyed language object containing HTML content for each language, represented as an HTMLElement
     * object or a string.
     *
     * @type { HTMLScreen | { [key: string]: string }}
     * @memberof HTMLPanelInstance
     */
    content: HTMLScreen | {
        [key: string]: string;
    };
    /**
     * id of the panel
     *
     * @type {string}
     * @memberof HTMLPanelInstance
     */
    id: string;
    /**
     * Translation key (or string) to use in panel screen reader alerts
     *
     * @type {string}
     * @memberof HTMLPanelInstance
     */
    alertName: string;
    /**
     * A set of language keys to be utilized by the panel
     *
     * @type { [lang: string]: { [key: string]: string } }
     * @memberof HTMLPanelInstance
     */
    i18nMap?: {
        [lang: string]: {
            [key: string]: string;
        };
    };
    /**
     * The style object to apply to the panel. If none provided, the default panel styling will be used.
     *
     * @type {PanelConfigStyle}
     * @memberof HTMLPanelInstance
     */
    style?: PanelConfigStyle;
};
/**
 * - `string`: a path to the screen component relative to the fixtures home folder
 * - `VueConstructor`: a regular Vue constructor function
 * - `AsyncComponentFunction`: a function returning a promise which resolves into a Vue component
 */
export type PanelConfigScreens = {
    [key: string]: string | AsyncComponentFunctionEh | ComponentOptions<any> | ComponentPublicInstance<any> | HTMLScreen;
};
export type PanelConfigRoute = {
    screen: string;
    props?: object;
};
export type PanelConfigStyle = {
    [key: string]: string;
};
export type PanelConfigControls = {
    expand?: boolean;
};
export type PanelAppbarButton = {
    icon: string;
    tooltip: string;
};
/**
 * All directions a panel may be moved.
 */
export type PanelDirection = 'left' | 'right';
export interface PanelConfig {
    /**
     * A collection of panel screens to be displayed inside the panel.
     *
     * @type {{[name: string]: PanelConfigScreen}}
     * @memberof PanelConfig
     */
    screens: PanelConfigScreens;
    /**
     * Translation key (or string) to use in panel screen reader alerts.
     *
     * @type {string}
     * @memberof PanelConfig
     */
    alertName: string;
    controls?: PanelConfigControls;
    /**
     * Button layout to be used in appbar.
     *
     * @type {PanelAppbarButton}
     * @memberof PanelConfig
     */
    button?: PanelAppbarButton;
    /**
     * The style object to apply to the panel.
     *
     * @type {PanelConfigStyle}
     * @memberof PanelConfig
     */
    style?: PanelConfigStyle;
    /**
     * Whether the panel should start expanded. Expanded panels fill empty space.
     *
     * @type {boolean}
     * @memberof PanelConfig
     */
    expanded?: boolean;
}
