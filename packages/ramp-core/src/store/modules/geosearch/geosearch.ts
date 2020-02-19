import Provinces from './provinces';
import Types from './types';

const GEO_LOCATE_URL = 'https://geogratis.gc.ca/services/geolocation/@{language}/locate';
const GEO_NAMES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json';

export class GeoSearch {
    config: any;

    constructor(uConfig?: any) {
        uConfig = uConfig ? uConfig : {};
        const language = uConfig.language ? uConfig.language : 'en';
        // set default URLS if none provided and search/replace language in string (if exists)
        let geoLocateUrl = uConfig.geoLocateUrl ? uConfig.geoLocateUrl : GEO_LOCATE_URL;
        let geoNameUrl = uConfig.geoNameUrl ? uConfig.geoNameUrl : GEO_NAMES_URL;
        geoLocateUrl = geoLocateUrl.replace('@{language}', language);
        geoNameUrl = geoNameUrl.replace('@{language}', language);

        this.config = {
            language,
            types: Types(language),
            provinces: Provinces(language),
            geoNameUrl,
            geoLocateUrl
        };
    }

    query(query: string): void {
        // TODO: implementation
    }
}

export { Provinces, Types };
