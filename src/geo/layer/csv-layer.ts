import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

export class CsvLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.CSV;
    }

    protected async onInitiate(): Promise<void> {
        // TODO check if .sourceGeoJson is already populated?
        //      if this initiate is a reload, do we want to re-use it, or re-download? decide.

        // get csv from appropriate source
        // parse and convert to geojson
        // set geojson to special property.
        // then initiate the FileLayer

        if (!this.origRampConfig.latField || !this.origRampConfig.longField) {
            throw new Error('csv file config missing lat or long field names');
        }

        let csvData: string;

        if (this.origRampConfig.rawData) {
            // csv data has been passed in as static string
            // TODO validation? check that type is string?
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
