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
        const startTime = Date.now();
        let gj: any;

        // get json from appropriate source and set to special property.
        // then initiate the DataLayer to complete setup
        if (this.origRampConfig.rawData) {
            // json has been passed in as static string or JSON object

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
            throw new Error(
                'Json Data layer config contains no raw data or url'
            );
        }

        if (startTime > this.lastCancel) {
            this.sourceJson = gj;
            await super.onInitiate();
        }
    }
}
