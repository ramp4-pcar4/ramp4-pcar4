import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

export class CsvLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.CSV;
    }

    protected async onInitiate(): Promise<void> {
        if (!this.origRampConfig.latField || !this.origRampConfig.longField) {
            throw new Error('csv file config missing lat or long field names');
        }

        let csvData: string; // contents of the file, encoded in UTF8

        if (
            this.origRampConfig.rawData &&
            typeof this.origRampConfig.rawData === 'string'
        ) {
            // csv data has been passed in as static string
            csvData = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            csvData = await this.$iApi.geo.layer.files.fetchFileData(
                this.origRampConfig.url,
                this.layerType
            );
        } else {
            throw new Error('Csv file config contains no raw data or url');
        }

        // convert csv to geojson, store in property for FileLayer to consume.
        this.sourceGeoJson = await this.$iApi.geo.layer.files.csvToGeoJson(
            csvData,
            {
                latfield: this.origRampConfig.latField,
                lonfield: this.origRampConfig.longField
            }
        );

        await super.onInitiate();
    }
}
