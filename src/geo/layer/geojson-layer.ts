// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server
import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements an ESRI Feature Layer with data from a GeoJSON source.
 */
export class GeoJsonLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.GEOJSON;
    }

    protected async onInitiate(): Promise<void> {
        // get geojson from appropriate source and set to special property.
        // then initiate the FileLayer

        let gj: any;
        const startTime = Date.now();

        if (this.origRampConfig.rawData) {
            gj = this.$iApi.geo.layer.files.rawDataJsonParser(
                this.origRampConfig.rawData,
                this.origRampConfig.caching
            );
        } else if (this.origRampConfig.url) {
            gj = await this.$iApi.geo.layer.files.fetchFileData(
                this.origRampConfig.url,
                this.layerType
            );
        } else {
            throw new Error('GeoJson layer config contains no raw data or url');
        }

        if (startTime > this.lastCancel) {
            this.sourceGeoJson = gj;
            await super.onInitiate();
        }
    }
}
