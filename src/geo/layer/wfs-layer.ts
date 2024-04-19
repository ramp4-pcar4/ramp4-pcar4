// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server

import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, UrlWrapper } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements an ESRI Feature Layer with data from a WFS 3 / OGC API Features source.
 */
export class WfsLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.WFS;
    }

    protected async onInitiate(): Promise<void> {
        const wrapper = new UrlWrapper(this.config.url);

        // get start index and limit set on the url
        const { offset, limit } = wrapper.queryMap;

        this.sourceGeoJson = await this.$iApi.geo.layer.ogc.loadWfsData(
            this.config.url,
            -1,
            parseInt(offset) || 0,
            parseInt(limit) || 1000,
            undefined,
            this.config.xyInAttribs
        );

        // TODO error handling? set layer state to error if above call fails?
        await super.onInitiate();
    }
}
