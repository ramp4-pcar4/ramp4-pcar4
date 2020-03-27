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
