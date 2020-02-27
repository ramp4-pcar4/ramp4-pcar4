import * as defs from './definitions';

export function make(config: defs.MainConfig, query: string): Query {
    // name based search
    const q = new Query(config, query);
    q.onComplete = q.search().then(results => {
        q.results = results;
        return q;
    });
    return q;
}

// TODO: only keyword search currently, need support for lat/long, FSA, NTS search
export class Query {
    config: defs.MainConfig;
    query: string | undefined;
    results: defs.NameResultList = [];
    onComplete: any;

    constructor(config: defs.MainConfig, query?: string) {
        this.query = query;
        this.config = config;
    }

    search(): Promise<defs.NameResultList> {
        return (<Promise<defs.RawNameResult>>this.jsonRequest(this.getUrl())).then(r => this.normalizeNameItems(r.items));
    }

    private getUrl(): string {
        let url = `${this.config.geoNameUrl}?q=${this.query}&num=${this.config.maxResults}`;
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
}
