// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server

import { FileLayer } from '@/api/internal';
import { UrlWrapper } from '@/geo/api';

class WFSLayer extends FileLayer {
    async initiate(): Promise<void> {
        const wrapper = new UrlWrapper(this.config.url);

        // get start index and limit set on the url
        const { startindex, limit } = wrapper.queryMap;

        this.sourceGeoJson = await this.$iApi.geo.layer.ogc.loadWfsData(
            this.config.url,
            -1,
            parseInt(startindex) || 0,
            parseInt(limit) || 1000,
            undefined,
            this.config.xyInAttribs
        );

        // TODO error handling? set layer state to error if above call fails?

        await super.initiate();
    }
}

export default WFSLayer;
