import { APIScope } from '@/api/common';
import { InstanceAPI } from '@/api/internal';

export class GeosearchAPI extends APIScope {
    constructor(iApi: InstanceAPI) {
        super(iApi);
        this.$iApi.geosearch = this;
    }
}
