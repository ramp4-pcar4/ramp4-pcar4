import { App, ComponentOptions, ComponentPublicInstance } from '../../vue/dist/vue.esm-bundler.js';
import { HTMLScreen } from '../stores/panel';
import { InstanceAPI } from './internal';
/**
 * A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.
 *
 * @export
 * @class APIScope
 */
export declare class APIScope {
    /**
     * The instance of RampMap API scoped to a single Vue R4MP application.
     *
     * @type {InstanceAPI}
     * @memberof APIScope
     */
    readonly $iApi: InstanceAPI;
    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     * This is just a shorthand for `this.$iApi.$vApp`.
     *
     * @readonly
     * @type {Vue}
     * @memberof APIScope
     */
    get $vApp(): ComponentPublicInstance;
    get $element(): App<Element>;
    /**
     * Creates an instance of APIScope.
     *
     * @param {InstanceAPI} iApi
     * @memberof APIScope
     */
    constructor(iApi: InstanceAPI);
}
/**
 * An object containing versioning information.
 *
 * @export
 * @interface AppVersion
 */
export interface AppVersion {
    hash: string;
    major: number;
    minor: number;
    patch: number;
    timestamp: string;
}
/**
 * Checks if the provided value is a `VueConstructor`.
 *
 * @param {(VueConstructor | any)} value
 * @returns {value is VueConstructor}
 */
export declare function isVueConstructor(value: any): any;
/**
 * Checks if the provided value is Vue `ComponentsOptions` object.
 *
 * @param {(ComponentOptions<Vue> | any)} value
 * @returns {value is ComponentOptions<Vue>}
 */
export declare function isComponentOptions(value: any): value is ComponentOptions;
/**
 * Checks if the provided value is of type `HTMLScreen` (see `panel-state.ts`)
 *
 * @param {(HTMLScreen | any)} value
 * @returns {value is HTMLScreen}
 */
export declare function isHTMLScreen(value: any): value is HTMLScreen;
/**
 * Checks if the provided value is a dynamically imported `*.vue` file.
 *
 * @param {(typeof import('*.vue') | any)} value
 * @returns {value is typeof import('*.vue')}
 */
export declare function isTypeofImportVue(value: typeof import('*.vue') | any): value is typeof import('*.vue');
