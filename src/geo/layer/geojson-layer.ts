// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server
import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

export class GeoJsonLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.GEOJSON;
    }

    protected async onInitiate(): Promise<void> {
        // get geojson from appropriate source and set to special property.
        // then initiate the FileLayer
        if (
            this.origRampConfig.rawData &&
            (typeof this.origRampConfig.rawData === 'string' ||
                this.origRampConfig.rawData instanceof Object)
        ) {
            // geojson has been passed in as static string or GeoJSON object
            this.sourceGeoJson = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            this.sourceGeoJson = await this.$iApi.geo.layer.files.fetchFileData(
                this.origRampConfig.url,
                this.layerType
            );
        } else {
            throw new Error('GeoJson layer config contains no raw data or url');
        }

        await super.onInitiate();
    }
}
