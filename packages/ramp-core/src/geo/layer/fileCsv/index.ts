// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server

import { FileLayer } from '@/api/internal';

// NOTE this is currently 100% untested

class CsvLayer extends FileLayer {
    async initiate(): Promise<void> {
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
            // make web call to download csv file

            // not implemented yet
            // steps will be
            //   1. await web response of this.origRampConfig.url
            //   2. any parsing required to get web result into string format
            //   3. store parsed result in local var csvData

            // temp line to warn people
            csvData = 'error remote file csv loader not yet implemented';
        } else {
            throw new Error('Csv file config contains no raw data or url');
        }

        // convert csv to geojson, store in property for FileLayer to consume.
        this.sourceGeoJson = await this.$iApi.geo.layer.files.csvToGeoJson(csvData, {
            latfield: this.origRampConfig.latField,
            lonfield: this.origRampConfig.longField
        });

        await super.initiate();
    }
}

export default CsvLayer;
