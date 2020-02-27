import Provinces from './provinces';
import Types from './types';
import * as Q from './query';

const GEO_LOCATE_URL = 'https://geogratis.gc.ca/services/geolocation/@{language}/locate';
const GEO_NAMES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json';

export class GeoSearchObj {
    config: any;

    constructor(uConfig?: any) {
        uConfig = uConfig ? uConfig : {};
        const language = uConfig.language ? uConfig.language : 'en';
        // set default URLS if none provided and search/replace language in string (if exists)
        let geoLocateUrl = uConfig.geoLocateUrl ? uConfig.geoLocateUrl : GEO_LOCATE_URL;
        let geoNameUrl = uConfig.geoNameUrl ? uConfig.geoNameUrl : GEO_NAMES_URL;
        geoLocateUrl = geoLocateUrl.replace('@{language}', language);
        geoNameUrl = geoNameUrl.replace('@{language}', language);

        // set default values to be used in query.ts if needed
        const categories = uConfig.settings ? uConfig.settings.categories : [];
        const sortOrder = uConfig.settings ? uConfig.settings.sortOrder : [];
        const maxResults = uConfig.settings ? uConfig.settings.maxResults : 100;
        const officialOnly = uConfig.settings ? uConfig.settings.officialOnly : false;

        this.config = {
            language,
            types: Types(language), // list of type filter options
            provinces: Provinces(language), // list of province filter options
            categories,
            sortOrder,
            maxResults,
            officialOnly,
            geoNameUrl,
            geoLocateUrl
        };
    }

    query(query: string): Q.Query {
        return Q.make(this.config, query);
    }
}

export { Provinces, Types };
