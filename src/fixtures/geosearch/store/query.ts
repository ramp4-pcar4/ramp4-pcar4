import type {
    ICustomSource,
    IGeosearchConfig,
    INameResponse,
    IRawNameResult,
    ISearchResult,
    LocationResponseList,
    SearchResultList
} from '../definitions';
import to from 'await-to-js';
import axios from 'redaxios';

/**
 * Houses all the data for an active geosearch query
 */
export class QueryPayload {
    /**
     * Collection of goodness
     */
    config: IGeosearchConfig;

    /**
     * What the user typed
     */
    query: string;

    /**
     * Error messages
     */
    failedServs: string[] = [];

    /**
     * Results list
     */
    results: SearchResultList = [];

    constructor(config: IGeosearchConfig, query: string = '') {
        this.query = query;
        this.config = config;
    }

    addResult(result: ISearchResult | SearchResultList): void {
        if (Array.isArray(result)) {
            this.results = this.results.concat(result);
        } else {
            this.results.push(result);
        }
    }
}

export async function runQuery(config: IGeosearchConfig, query: string): Promise<QueryPayload> {
    let queryPayload: QueryPayload;
    let cleanedInput: string;

    const latLngRegDD =
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/;
    const ntsReg = /^\d{2,3}[A-P]/;
    const fsaReg = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;

    if (latLngRegDD.test(query) && !config.disabledSearchTypes.includes('LAT/LNG')) {
        // Lat/Long search in decimal degrees format

        // search inputs have a "*" snuck onto them. the slice chops it off
        cleanedInput = query.slice(0, -1);

        queryPayload = new QueryPayload(config, cleanedInput);

        await runLatLongQuery(queryPayload);
    } else if (fsaReg.test(query) && !config.disabledSearchTypes.includes('FSA')) {
        // FSA search (postal area code)

        cleanedInput = query.substring(0, 3).toUpperCase();
        queryPayload = new QueryPayload(config, cleanedInput);
        await runFSAQuery(queryPayload);
    } else if (ntsReg.test(query) && !config.disabledSearchTypes.includes('NTS')) {
        // NTS search

        // NOTE: this padding was in the original code, but written in such a way that it was never used.
        //       it doesn't seem to care? E.g. 064D and 64D both hit the NTS entry.
        //       There was an `.equals()` method for comparing two NTS queries, it may have been utilized there.
        //       The equals method wasn't being used either and got removed.
        //
        // front pad 0 if NTS starts with two digits
        // query = isNaN(parseInt(query[2])) ? '0' + query : query;

        cleanedInput = query.substring(0, 6).toUpperCase();
        queryPayload = new QueryPayload(config, cleanedInput);
        await runNTSQuery(queryPayload);
    } else {
        // just searching on the text input

        cleanedInput = encodeURIComponent(query.trim());
        queryPayload = new QueryPayload(config, cleanedInput);
        await runTextQuery(queryPayload);
    }

    if (config.customSources.length) {
        await runCustomSourceQuery(queryPayload, config.customSources);
    }

    return queryPayload;
}

/**
 * Runs a url that expects a JSON return value. Returns the result when it arrives
 * @param url
 * @returns
 */
export const jsonRequest = async (url: string): Promise<any> => {
    const [rErr, rRes] = await to(axios.get(url));

    if (rErr) {
        console.error('Request error from ' + url);
        console.error(rErr);
        return Promise.reject('Could not load results from remote service.');
    } else {
        return rRes.data;
    }
};

/**
 * Makes a bbox around a point based lon lat
 *
 * @param lon longitude
 * @param lat latitude
 * @param expand factor (in degrees) to push out each side
 * @returns four number bbox array
 */
const fakeBBox = (lon: number, lat: number, expand: number): Array<number> => [
    lon + expand,
    lat - expand,
    lon - expand,
    lat + expand
];

/**
 * Generate a search url.
 * Lat / Lon params are ignored if useLocate is true
 *
 * @param queryPayload the query inputs, used to configure the url
 * @param useLocate if true, uses the GeoLocation service (street addresses, FSA, NTS). Otherwise uses the GeoName service (named locations, default)
 * @param lat if provided, does a search based on co-ords instead of name.
 * @param lon if provided, does a search based on co-ords instead of name.
 * @returns the url
 */
const getUrl = (queryPayload: QueryPayload, useLocate?: boolean, lat?: number, lon?: number): string => {
    let url = '';
    const config = queryPayload.config;
    if (useLocate) {
        // URL for FSA and NFA search
        url = config.geoLocateUrl + '?q=' + queryPayload.query;
    } else {
        if (lat && lon) {
            // lat long URL
            url = `${config.geoNameUrl}?lat=${lat}&lon=${lon}&num=${config.maxResults}`;
        } else {
            // plain name based search
            url = `${config.geoNameUrl}?q=${queryPayload.query}&num=${config.maxResults}`;
        }

        // filter params for geoname service
        if (config.categories.length > 0) {
            url += `&concise=${config.categories.join(',')}`;
        }
        if (config.officialOnly) {
            url += '&category=O';
        }
    }

    return url;
};

/**
 * Converts results from the name service to our standardized format.
 * Will also filter out any concise codes we dont want.
 */
const normalizeNameItems = (config: IGeosearchConfig, items: INameResponse[]): SearchResultList => {
    return items
        .filter(nr => config.types.validTypes[nr.concise.code])
        .map(nr => ({
            name: nr.name,
            flav: 'nme',
            bbox: nr.bbox,
            type: config.types.allTypes[nr.concise.code],
            position: [nr.longitude, nr.latitude],
            location: {
                city: nr.location,
                province: config.provinces.codeToProvince(parseInt(nr.province.code))
            },
            order:
                config.sortOrder.indexOf(nr.concise.code) >= 0
                    ? config.sortOrder.indexOf(nr.concise.code)
                    : config.sortOrder.length
        }));
};

/**
 * Runs the query for custom sources
 */
const runCustomSourceQuery = async (queryPayload: QueryPayload, sources: ICustomSource[]): Promise<void> => {
    const resultsArrays = await Promise.all(sources.map(src => src.onSearch(queryPayload.query)));
    const customResults = resultsArrays.flat();
    queryPayload.addResult(customResults);
};

/**
 * Runs the query parameters against the location service (addresses, FSA, NTS), resolves with results
 */
const runLocationQuery = async (queryPayload: QueryPayload): Promise<LocationResponseList> => {
    const [rErr, rRes] = await to(jsonRequest(getUrl(queryPayload, true)) as Promise<LocationResponseList>);

    if (rErr) {
        console.error('Geolocation service failed');
        queryPayload.failedServs.push('geolocation');
        return [];
    } else {
        return rRes;
    }
};

/**
 * Hits the GeoName service using the search text and stores the results
 */
const runGeoNameTextQuery = async (queryPayload: QueryPayload): Promise<void> => {
    const [rErr, rRes] = await to(jsonRequest(getUrl(queryPayload, false)) as Promise<IRawNameResult>);

    let payload: Array<INameResponse>;
    if (rErr) {
        console.error('GeoName service targeting Name failed');
        queryPayload.failedServs.push('geoname');
        payload = [];
    } else {
        payload = rRes.items;
    }

    queryPayload.addResult(normalizeNameItems(queryPayload.config, payload));
};

/**
 * Hits the GeoName service at a specific location and stores the results
 */
const runGeoNameLocationQuery = async (queryPayload: QueryPayload, lat: number, lon: number): Promise<void> => {
    const [rErr, rRes] = await to(jsonRequest(getUrl(queryPayload, false, lat, lon)) as Promise<IRawNameResult>);

    let payload: Array<INameResponse>;
    if (rErr) {
        console.error('GeoName service targeting Lat Lon failed');
        queryPayload.failedServs.push('geoname');
        payload = [];
    } else {
        payload = rRes.items;
    }

    queryPayload.addResult(normalizeNameItems(queryPayload.config, payload));
};

/**
 * Runs a search where the input is suspected to be a Latitude Longitude entry
 */
const runLatLongQuery = async (queryPayload: QueryPayload): Promise<void> => {
    // create a result for the Lat/Lon itself
    // run a search at that location against the name service.

    // remove extra spaces and delimiters (the filter). convert string numbers to floaty numbers
    // this will be [Latitude, Longitude], which is [y, x] so be careful!
    const coords = queryPayload.query
        .split(/[\s|,|;|]/)
        .filter(n => !isNaN(n as any) && n !== '')
        .map(n => parseFloat(n));

    const lat = coords[0];
    const lon = coords[1];

    // TODO: check and convert DMS format if applicable
    // NOTE: this todo has been around since R4 was made. There is fancier code lurking in Ramp2
    //       codebase that could be stolen if this ever needs revisiting.
    //       search for  `class LatLongQuery extends Query`

    const fancyResult: ISearchResult = {
        name: `${lat},${lon}`,
        flav: 'llg',
        location: {},
        type: 'Latitude/Longitude',
        position: [lon, lat],
        bbox: fakeBBox(lon, lat, 0.015),
        order: -1
    };

    await runGeoNameLocationQuery(queryPayload, lat, lon);

    queryPayload.addResult(fancyResult);
};

/**
 * Runs a search where the input is suspected to be an FSA
 */
const runFSAQuery = async (queryPayload: QueryPayload): Promise<void> => {
    // run a search against the location service.
    // if we have a result, process it

    const config = queryPayload.config;

    const rawLocationResults = await runLocationQuery(queryPayload);

    if (rawLocationResults.length) {
        const fsaNugget = rawLocationResults[0];
        const coord = fsaNugget.geometry.coordinates;
        const lat = coord[1];
        const lon = coord[0];

        const fancyResult: ISearchResult = {
            name: queryPayload.query,
            flav: 'fsa',
            bbox: fakeBBox(lon, lat, 0.03),
            type: config.types.allTypes.FSA,
            position: [lon, lat],
            location: {
                province: config.provinces.fsaToProvince(queryPayload.query)
            },
            order: -1
        };

        queryPayload.addResult(fancyResult);
    }
};

/**
 * National Topographic System (NTS)
 *
 * The following definitions have the form "name (value constraints) - description"
 *
 * Sheet (two or three digits)      - aka "Map Numbers" are blocks of approximately 4,915,200 hectares.
 * Map Units Subdivision ([A-P])    - each sheet is subdivided further into 16 blocks, approximately 307,200 hectares
 * Map Sheet Unit ([1-16])          - each map unit is subdivided further into 16 blocks, approximately 19,200 hectares
 * Blocks ([A-L])                   - each map sheet unit is subdivided further into 12 blocks, approximately 1600 hectares
 * Units ([1-100]*)                 - each block is finally divided into 100 units, approximately 64 hectares
 *
 * Two subsets of the complete NTS format is supported:
 *     - Sheet and Map Unit Subdivision
 *     - Sheet, Map Unit Subdivision, and Map Sheet Unit
 *
 * Note that "Blocks" and "Units" are currently not supported on geogratis and are ignored on the query.
 */

/**
 * Runs a search where the input is suspected to be an NTS code
 */
const runNTSQuery = async (queryPayload: QueryPayload): Promise<void> => {
    // run a search against the location service.
    // if we have a result, process it

    const config = queryPayload.config;

    const rawLocationResults = await runLocationQuery(queryPayload);

    if (rawLocationResults.length) {
        // NOTE original code had plumbing for mulitple hits, but only the first was ever used.
        //      unsure what changed, or what the previous behavior was (if anything)
        const ntsNugget = rawLocationResults[0];

        const title = ntsNugget.title.split(' ');
        const name = title.shift() || ''; // 064D or 064D06
        const location = title.join(' '); // "NUMABIN BAY"

        const coord = ntsNugget.geometry.coordinates;
        const lat = coord[1];
        const lon = coord[0];

        const fancyResult: ISearchResult = {
            name,
            flav: 'nts',
            bbox: ntsNugget.bbox ?? fakeBBox(lon, lat, 0.03),
            type: config.types.allTypes.NTS, // "National Topographic System"
            position: [lon, lat],
            location: {
                city: location
            },
            order: -1
        };

        queryPayload.addResult(fancyResult);
    }
};

/**
 * This is the default "search some text" algo. Used when a fancy case is not detected (no LatLon, FSA, NTS)
 */
const runTextQuery = async (queryPayload: QueryPayload): Promise<void> => {
    // run a name search against the name service.
    // run an address search against the location service, if enabled

    const config = queryPayload.config;

    await runGeoNameTextQuery(queryPayload);

    if (config.categories.length === 0 || config.categories.includes('ADDR')) {
        // address results are allowed

        const rawAddressResults = await runLocationQuery(queryPayload);

        const addrSortIdx = config.sortOrder.indexOf('ADDR');
        const addrSortOrder = addrSortIdx >= 0 ? addrSortIdx : config.sortOrder.length;

        // convert to universal form
        const finalAddressResults: SearchResultList = rawAddressResults
            .filter(rar => rar.type?.includes('Street'))
            .map(address => {
                const [name, city, province] = address.title.split(', ');

                const coord = address.geometry.coordinates;
                const lat = coord[1];
                const lon = coord[0];

                return {
                    name,
                    flav: 'add',
                    bbox: fakeBBox(lon, lat, 0.002),
                    type: config.types.allTypes.ADDRESS,
                    position: [lon, lat],
                    location: {
                        city: city.split(' Of ').pop(), // prevents redundant label i.e. 'City Of Kingston'
                        province: config.provinces.nameToProvince(province)
                    },
                    order: addrSortOrder
                };
            });

        queryPayload.addResult(finalAddressResults);
    }
};
