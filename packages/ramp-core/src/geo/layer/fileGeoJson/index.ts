// handles static geojson (e.g. from a user file or hardcoded in a config) or a geojson file hosted on a web server

import { FileLayer } from '@/api/internal';

class GeoJsonLayer extends FileLayer {
    async initiate(): Promise<void> {
        // TODO check if .sourceGeoJson is already populated?
        //      if this initiate is a reload, do we want to re-use it, or re-download? decide.

        // get geojson from appropriate source and set to special property.
        // then initiate the FileLayer

        if (this.origRampConfig.rawData) {
            // geojson has been passed in as static string
            // TODO validation? check that type is string?
            this.sourceGeoJson = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            // make web call to download geojson file

            // TODO the bulk of this logic (download and parse) might be better put in the
            //      file-utils service class. That way a wizard or random api caller code
            //      could also make use of it.

            // this is RAMP2 code. untested, needs conversion from angular libs to vue libs.
            // steps will be
            //   1. await web response of this.origRampConfig.url
            //   2. any parsing required to get web result into Json string or Json object
            //   3. store parsed result on this.sourceGeoJson

            /*
            const [error, response] = await to<any>($http.get(this.config.url, {
                responseType: 'blob'
            }));

            if (!response) {
                console.error(`File data failed to load for "${this.config.id}"`, error);
                return Promise.reject(error);
            }

            const reader = new FileReader();

            return $q((resolve: any, reject: any) => {
                reader.onerror = error => {
                    console.error(`File data failed to load for "${this.config.id}"`, error);
                    reject({ reason: 'error', message: 'Failed to read file' });
                };
                reader.onload = () =>
                    resolve(reader.result);

                reader.readAsArrayBuffer(response.data);
            });
            */
            // temp line to warn people
            this.sourceGeoJson = 'error remote file geojson loader not yet implemented';
        } else {
            throw new Error('GeoJson layer config contains no raw data or url');
        }

        await super.initiate();
    }
}

export default GeoJsonLayer;
