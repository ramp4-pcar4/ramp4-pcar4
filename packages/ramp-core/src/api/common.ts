import Vue, { ComponentOptions, VueConstructor } from 'vue';
import { InstanceAPI } from './internal';

/**
 * A base class for anything requiring access to the InstanceApi and instance of Vue app controlled by it.
 *
 * @export
 * @class APIScope
 */
export class APIScope {
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
    get $vApp(): Vue {
        return this.$iApi.$vApp;
    }

    /**
     * Creates an instance of APIScope.
     *
     * @param {InstanceAPI} iApi
     * @memberof APIScope
     */
    constructor(iApi: InstanceAPI) {
        this.$iApi = iApi;
    }
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
export function isVueConstructor(value: VueConstructor | any): value is VueConstructor {
    // check if the value itself is a function (it's not possible to tell if it's a constructor function or not)
    // check if value's prototype is an instance of Vue--this is the important check
    return typeof value === 'function' && value.prototype instanceof Vue;
}

/**
 * Checks if the provided value is Vue `ComponentsOptions` object.
 *
 * @param {(ComponentOptions<Vue> | any)} value
 * @returns {value is ComponentOptions<Vue>}
 */
export function isComponentOptions(value: ComponentOptions<Vue> | any): value is ComponentOptions<Vue> {
    // `ComponentOptions` is just an object with all optional properties
    // check for the most common ones to see if any are present
    // functional component are ignored since a panel screen shouldn't not be a functional component
    const names = ['data', 'props', 'propsData', 'computed', 'methods', 'watch', 'template', 'render', 'components', 'model'];

    return typeof value === 'object' && !value.functional && names.some(name => value[name] !== undefined);
}

/**
 * Checks if the provided value is a dynamically imported `*.vue` file.
 *
 * @param {(typeof import('*.vue') | any)} value
 * @returns {value is typeof import('*.vue')}
 */
export function isTypeofImportVue(value: typeof import('*.vue') | any): value is typeof import('*.vue') {
    return typeof value === 'object' && value.default !== undefined;
}
