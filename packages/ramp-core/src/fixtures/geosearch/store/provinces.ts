import * as jsonprovs from './data/provinces.json';
import * as defs from './definitions';

const provinceObj: { [key: string]: Provinces } = {};
const fsaToProv = <any>{
    A: 10,
    B: 12,
    C: 11,
    E: 13,
    G: 24,
    H: 24,
    J: 24,
    K: 35,
    L: 35,
    M: 35,
    N: 35,
    P: 35,
    R: 46,
    S: 47,
    T: 48,
    V: 59,
    X: [62, 61],
    Y: 60
};
const provs: defs.GenericObjectType = (<any>jsonprovs).default;

class Provinces {
    list: defs.GenericObjectType = {};

    constructor(language: string) {
        Object.keys(provs[language]).forEach(provKey => {
            this.list[provKey] = (<any>provs[language])[provKey];
        });
    }

    // return list of province codes based on FSA search input query
    fsaToProvinces(fsa: string): defs.GenericObjectType {
        const genericObj: defs.GenericObjectType = {};
        // either a provincial code, or an array of them
        let provCodes = <number[] | number>fsaToProv[fsa.substring(0, 1).toUpperCase()];
        if (typeof provCodes === 'number') {
            provCodes = [provCodes];
        }
        provCodes.forEach(n => {
            genericObj[n] = this.list[n];
        });
        return genericObj;
    }
}

export default function(language: string): defs.Provinces {
    return (provinceObj[language] = provinceObj[language]
        ? provinceObj[language]
        : new Provinces(language));
}
