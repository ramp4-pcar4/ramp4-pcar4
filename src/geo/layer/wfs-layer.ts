// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server

import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig, UrlWrapper } from '@/geo/api';

export class WfsLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.WFS;
    }

    protected async onInitiate(): Promise<void> {
        const wrapper = new UrlWrapper(this.config.url);

        // get start index and limit set on the url
        const { startindex, limit } = wrapper.queryMap;

        // fetch data from server only if it has not been cached
        if (!this.sourceGeoJson) {
            this.sourceGeoJson = await this.$iApi.geo.layer.ogc.loadWfsData(
                this.config.url,
                -1,
                parseInt(startindex) || 0,
                parseInt(limit) || 1000,
                undefined,
                this.config.xyInAttribs
            );
        }

        // TODO error handling? set layer state to error if above call fails?
        await super.onInitiate();
    }
}
