import { InstanceAPI } from './internal';

export class APIScope {
    /**
     * The instance of RampMap API scoped to a single Vue R4MP application.
     *
     * @protected
     * @type {InstanceAPI}
     * @memberof APIScope
     */
    protected readonly iApi: InstanceAPI;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @readonly
     * @protected
     * @type {Vue}
     * @memberof APIScope
     */
    protected get vApp(): Vue {
        return this.iApi.vApp;
    }

    constructor(iApi: InstanceAPI) {
        this.iApi = iApi;
    }
}
