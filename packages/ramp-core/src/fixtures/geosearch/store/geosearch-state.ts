import { GeoSearchUI } from './geosearch.feature';

export class GeosearchState {
    queryParams: QueryParams;
    GSservice: GeoSearchUI;
    searchVal: string;
    lastSearchVal: string;
    searchResults: Array<any>;
    savedResults: Array<any>;
    resultsVisible: boolean;
    loadingResults: boolean;

    constructor() {
        // initialize geosearch feature service that contains all key geosearch functionality - running queries, fetch initial filters, update filters, etc.
        let language = 'en';
        this.GSservice = new GeoSearchUI({ language });
        // query params contains filter types
        let queryParams: QueryParams = {
            type: '',
            province: '',
            extent: ''
        };
        this.queryParams = queryParams;
        this.resultsVisible = false;
        this.searchVal = '';
        this.lastSearchVal = '';
        this.searchResults = [];
        this.savedResults = [];
        this.loadingResults = false;
    }
}

interface QueryParams {
    type: string;
    province: string;
    extent: string;
}
