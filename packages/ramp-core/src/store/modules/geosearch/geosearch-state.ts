import { GeoSearchUI } from './geosearch.feature';

export class GeosearchState {
    queryParams: QueryParams;
    GSservice: GeoSearchUI;
    searchVal: string;
    lastSearchVal: string;
    searchResults: Array<any>;
    savedResults: Array<any>;
    isResultsVisible: Boolean;

    constructor() {
        // initialize geosearch feature service that contains all key geosearch functionality - running queries, fetch initial filters, update filters, etc.
        let language = 'en';
        this.GSservice = new GeoSearchUI({ language });
        // query params contains filter types
        let queryParams: QueryParams = {
            type: '',
            province: '',
            extent: '',
            resultsVisible: false
        };
        this.queryParams = queryParams;
        this.searchVal = '';
        this.lastSearchVal = '';
        const tempResults = [
            // hardcoded search results until geosearch feature query function is implemented
            {
                name: 'Jasper National Park of Canada',
                province: 'AB',
                type: 'Conservation Area'
            },
            {
                name: 'Jaspers Pond',
                province: 'NL',
                type: 'Lake'
            },
            {
                name: 'Duncan Woods Creek',
                province: 'ON',
                type: 'River'
            },
            {
                name: 'German Mills Creek',
                province: 'ON',
                type: 'River'
            },
            {
                name: 'Westmount',
                province: 'ON',
                type: 'Unincorporated place'
            },
            {
                name: 'Rainbow Lake',
                province: 'AB',
                type: 'Town'
            },
            {
                name: 'Cold Lake',
                province: 'SK',
                type: 'City'
            },
            {
                name: 'Good Friday Gulf',
                province: 'NU',
                type: 'Bay'
            }
        ];
        this.searchResults = tempResults;
        this.savedResults = tempResults;
        this.isResultsVisible = false;
    }
}

interface QueryParams {
    type: string;
    province: string;
    extent: string;
    resultsVisible: boolean;
}
