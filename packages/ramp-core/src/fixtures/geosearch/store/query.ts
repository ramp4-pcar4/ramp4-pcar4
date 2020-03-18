import * as defs from './definitions';

export function make(config: defs.MainConfig, query: string): Query {
    const latLngRegDD = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/;
    // const latLngRegDMS = /^[-+]?([0-8]?\d|90)\s*([0-5]?\d)\s*([0-5]?\d)\s*[,|;\s]\s*[-+]?(\d{2}|1[0-7]\d|180)\s*([0-5]?\d)\s*([0-5]?\d)[*]$/;
    const queryStr = query.slice(0, -1);
    if (/^[A-Za-z]/.test(query)) {
        // name based search
        const q = new Query(config, query);
        q.onComplete = q.search().then(results => {
            q.results = results;
            return q;
        });
        return q;
    } else if (latLngRegDD.test(query)) {
        // Lat/Long search in decimal degrees format
        return new LatLongQuery(config, queryStr, 'dd');
    }
}

// TODO: need support for FSA, NTS search
export class Query {
    config: defs.MainConfig;
    query: string | undefined;
    results: defs.NameResultList = [];
    onComplete: any;
    latLongResult: any;

    constructor(config: defs.MainConfig, query?: string) {
        this.query = query;
        this.config = config;
    }

    search(): Promise<defs.NameResultList> {
        return (<Promise<defs.RawNameResult>>this.jsonRequest(this.getUrl())).then(r => this.normalizeNameItems(r.items));
    }

    private getUrl(lat?: number, lon?: number): string {
        let url =
            lat && lon
                ? `${this.config.geoNameUrl}?lat=${lat}&lon=${lon}&num=${this.config.maxResults}`
                : `${this.config.geoNameUrl}?q=${this.query}&num=${this.config.maxResults}`;

        // add custom filtering params
        if (this.config.categories.length > 0) {
            url += `&concise=${this.config.categories.join(',')}`;
        }
        if (this.config.officialOnly) {
            url += '&category=O';
        }
        return url;
    }

    normalizeNameItems(items: defs.NameResponse[]): defs.NameResultList {
        return items
            .filter(i => this.config.types.validTypes[i.concise.code])
            .map(i => {
                return {
                    name: i.name,
                    location: i.location,
                    province: this.config.provinces.list[i.province.code],
                    type: this.config.types.allTypes[i.concise.code],
                    LatLon: { lat: i.latitude, lon: i.longitude },
                    bbox: i.bbox
                };
            });
    }

    jsonRequest(url: string) {
        return new Promise((resolve, reject) => {
            const xobj = new XMLHttpRequest();
            xobj.open('GET', url, true);
            xobj.responseType = 'json';
            xobj.onload = () => {
                if (xobj.status === 200) {
                    const rawResponse = typeof xobj.response === 'string' ? JSON.parse(xobj.response) : xobj.response;
                    // TODO: sort query results?
                    resolve(rawResponse);
                } else {
                    reject('Could not load results from remote service.');
                }
            };
            xobj.send();
        });
    }

    nameByLatLon(lat: number, lon: number): any {
        return (<Promise<defs.RawNameResult>>this.jsonRequest(this.getUrl(lat, lon))).then(r => {
            return this.normalizeNameItems(r.items);
        });
    }
}

export class LatLongQuery extends Query {
    constructor(config: defs.MainConfig, query: string, type: string) {
        super(config, query);
        let coords: number[];

        // remove extra spaces and delimiters (the filter). convert string numbers to floaty numbers
        const filteredQuery = query
            .split(/[\s|,|;|]/)
            .filter(n => !isNaN(n as any) && n !== '')
            .map(n => parseFloat(n));
        coords = filteredQuery;
        // TODO: check and convert DMS format

        // apply buffer to create bbox from point coordinates
        const buff = 0.015;
        const boundingBox = [coords[1] - buff, coords[0] - buff, coords[1] + buff, coords[0] + buff];

        // prep the lat/long result that needs to be generated along with name based results
        this.latLongResult = {
            name: `${coords[0]},${coords[1]}`,
            location: {
                latitude: coords[0],
                longitude: coords[1]
            },
            type: { name: 'Latitude/Longitude', code: 'COORD' },
            position: [coords[0], coords[1]],
            bbox: boundingBox
        };

        this.onComplete = new Promise((resolve, reject) => {
            //this.getLatLonResults(query, coords[0], coords[1]).then((r: any) => {
            this.nameByLatLon(coords[0], coords[1]).then((r: any) => {
                this.results = r;
                resolve(this);
            });
        });
    }
}