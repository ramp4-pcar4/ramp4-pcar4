// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server

import { FileLayer } from '@/api/internal';

class ShapefileLayer extends FileLayer {
    async initiate(): Promise<void> {
        // TODO check if .sourceGeoJson is already populated?
        //      if this initiate is a reload, do we want to re-use it, or re-download? decide.

        // get shapefile from appropriate source
        // parse and convert to geojson
        // set geojson to special property.
        // then initiate the FileLayer

        if (!this.origRampConfig.latField || !this.origRampConfig.longField) {
            throw new Error('shapefile file config missing lat or long field names');
        }

        let shapefileData: any; // i believe this needs to be an ArrayBuffer

        if (this.origRampConfig.rawData) {
            // shapefile data has been passed in as static data.
            // since shapefile is binary, you cannot drop this in a layer config file.
            // I think what can happen is a wizard could read the file (via file picker)
            // or some random api code could do pre-processing, and then drop it on the rawData
            // parameter which allows this routine to consume it.
            // TODO add check that errors if typeof is string?
            shapefileData = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            // make web call to download shapefile file

            // not implemented yet
            // steps will be
            //   1. await web response of this.origRampConfig.url
            //   2. any parsing required to get web result into array buffer format
            //   3. store parsed result in local var shapefileData

            // might make sense to put those steps in geo.layers.files module for re-use

            // temp line to warn people
            shapefileData = 'error remote file shapefile loader not yet implemented';
        } else {
            throw new Error('shapefile file config contains no raw data or url');
        }

        // convert shapefile to geojson, store in property for FileLayer to consume.
        this.sourceGeoJson = await this.$iApi.geo.layer.files.shapefileToGeoJson(shapefileData);

        await super.initiate();
    }
}

export default ShapefileLayer;
