import { Component, VueConstructor, ComponentOptions } from 'vue';

import { PanelInstance } from '@/api';

export class PanelState {
    /**
     * A list of all open (visible and hidden) panels.
     *
     * @type {{ [name: string]: PanelInstance }}
     * @memberof PanelState
     */
    items: { [name: string]: PanelInstance } = {};

    /**
     * A list of all panels in the arrangement they would be put on screen.
     * The last item will be the first on screen (rightmost, therefore rightmost in array).
     * Note: The `visible` array is used for whats actually on screen, this is used for calculating `visible`.
     *
     * @type {PanelInstance[]}
     * @memberof PanelState
     */
    orderedItems: PanelInstance[] = [];

    /**
     * Indicates a pinned panel.
     *
     * @type {(PanelInstance | null)}
     * @memberof PanelState
     */
    pinned: PanelInstance | null = null;

    /**
     * Indicates the most recently opened panel has priority
     * This is given the value of that recent panel in order to check on removal
     *
     * @type {(PanelInstance | null)}
     * @memberof PanelState
     */
    priority: PanelInstance | null = null;

    /**
     * The panels that are displayed on the screen
     *
     * @type {PanelInstance[]}
     * @memberof PanelState
     */
    visible: PanelInstance[] = [];

    /**
     * The screen width that the visible panels are allowed to use.
     *
     * @type {number}
     * @memberof PanelState
     */
    stackWidth: number = 0;
}

// this should have been `AsyncComponentPromise` type, but something is off there
// there seems to be a bug in the TS definitions for `AsyncComponent`
// according to the definitions, `component` should be a function returning a Promise returning a Component object
// while the official documentation (https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State) states that `component` property should be a Promise, not a function
// hence the need to `EnHanced` types
export type AsyncComponentEh = typeof import('*.vue') | VueConstructor;

export type AsyncComponentFunctionEh = () => Promise<AsyncComponentEh>;

export type AsyncComponentFactoryEh = () => {
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
export type PanelConfigScreens = {
    [key: string]:
        | string
        | ComponentOptions<Vue>
        | VueConstructor
        | AsyncComponentFunctionEh;
};
export type PanelConfigRoute = { screen: string; props?: object };
export type PanelConfigStyle = { [key: string]: string };

export interface PanelConfig {
    /**
     * A collection of panel screens to be displayed inside the panel.
     *
     * @type {{[name: string]: PanelConfigScreen}}
     * @memberof PanelConfig
     */
    screens: PanelConfigScreens;

    /**
     * The style object to apply to the panel.
     *
     * @type {PanelConfigStyle}
     * @memberof PanelConfig
     */
    style?: PanelConfigStyle;
}
