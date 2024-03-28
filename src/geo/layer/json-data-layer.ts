import { DataLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements a Data Layer with data from a Compact JSON source.
 */
export class JsonDataLayer extends DataLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.DATAJSON;
    }

    protected async onInitiate(): Promise<void> {
        // get json from appropriate source and set to special property.
        // then initiate the DataLayer to complete setup
        if (this.origRampConfig.rawData) {
            // json has been passed in as static string or JSON object

            this.sourceJson = this.$iApi.geo.layer.files.rawDataJsonParser(
                this.origRampConfig.rawData,
                this.origRampConfig.caching
            );
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
