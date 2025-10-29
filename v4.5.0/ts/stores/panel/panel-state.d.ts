import type { Component, ComponentOptions, ComponentPublicInstance } from 'vue';
import type { PanelInstance } from '@/api';
import type { DefPromise } from '@/geo/api';
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
        [name: string]: DefPromise;
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
export declare type AsyncComponentEh = typeof import('*.vue') | Component;
export declare type AsyncComponentFunctionEh = () => Promise<AsyncComponentEh>;
export declare type AsyncComponentFactoryEh = () => {
    component: Promise<Component>;
    loading?: Component;
    error?: Component;
    delay?: number;
    timeout?: number;
};
/**
 * - `string`: a path to the screen component relative to the fixtures home folder
 * - `VueConstructor`: a regular Vue constructor function
 * - `AsyncComponentFunction`: a function returning a promise which resolves into a Vue component
 */
export declare type PanelConfigScreens = {
    [key: string]: string | AsyncComponentFunctionEh | ComponentOptions<any> | ComponentPublicInstance<any>;
};
export declare type PanelConfigRoute = {
    screen: string;
    props?: object;
};
export declare type PanelConfigStyle = {
    [key: string]: string;
};
export declare type PanelConfigControls = {
    expand?: boolean;
};
export declare type PanelAppbarButton = {
    icon: string;
    tooltip: string;
};
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
