import { DataLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements a Data Layer with data from a Custom JSON source.
 */
export class JsonDataLayer extends DataLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.DATAJSON;
    }

    protected async onInitiate(): Promise<void> {
        // get geojson from appropriate source and set to special property.
        // then initiate the DataLayer to complete setup
        if (
            this.origRampConfig.rawData &&
            (typeof this.origRampConfig.rawData === 'string' ||
                this.origRampConfig.rawData instanceof Object)
        ) {
            // geojson has been passed in as static string or GeoJSON object
            this.sourceJson = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            this.sourceJson = await this.$iApi.geo.layer.files.fetchFileData(
                this.origRampConfig.url,
                this.layerType
            );
        } else {
            throw new Error(
                'Json Data layer config contains no raw data or url'
            );
        }

        await super.onInitiate();
    }
}
