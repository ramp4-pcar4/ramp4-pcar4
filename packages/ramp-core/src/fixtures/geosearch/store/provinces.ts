import * as jsonprovs from './data/provinces.json';
import * as defs from './definitions';

const provinceObj: { [key: string]: Provinces } = {};
const provs: defs.GenericObjectType = (<any>jsonprovs).default;

class Provinces {
    list: defs.GenericObjectType = {};

    constructor(language: string) {
        Object.keys(provs[language]).forEach(provKey => {
            this.list[provKey] = (<any>provs[language])[provKey];
        });
    }
}

export default function(language: string): defs.Provinces {
    return (provinceObj[language] = provinceObj[language] ? provinceObj[language] : new Provinces(language));
}
