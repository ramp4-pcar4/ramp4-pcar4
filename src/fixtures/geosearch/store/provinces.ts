import type { IProvinceInfo, IProvinces } from '../definitions';
import axios from 'redaxios';

const fsaToProv: { [key: string]: number } = {
    A: 10, // NL
    B: 12, // NS
    C: 11, // PEI
    E: 13, // NB
    G: 24, // QB
    H: 24, // QB
    J: 24, // QB
    K: 35, // ON
    L: 35, // ON
    M: 35, // ON
    N: 35, // ON
    P: 35, // ON
    R: 46, // MB
    S: 47, // SK (good alignment, well done)
    T: 48, // AB
    V: 59, // BC
    Y: 60 //  YT (another winner)

    //  X: [62, 61], // NWT / NV
    // this split was not working (nothing would actually show on screen)
    // fsaToProvince() is now handling X in a custom manner
};

// translates codes from json file to province abbreviations
const CODE_TO_ABBR = {
    10: 'NL',
    11: 'PE',
    12: 'NS',
    13: 'NB',
    24: 'QC',
    35: 'ON',
    46: 'MB',
    47: 'SK',
    48: 'AB',
    59: 'BC',
    60: 'YU',
    61: 'NT',
    62: 'NU',
    72: 'UF',
    73: 'IW'
};

class Provinces {
    /**
     * List of downloaded province items.
     */
    provinceList: Array<IProvinceInfo> = [];

    /**
     * Indicates if we've finished downloading the prov li
     */
    listFetched: boolean = false;

    constructor(url: string) {
        axios.get(url).then((res: any) => {
            // Update the provinces array.
            this.provinceList = res.data.definitions.map((type: { code: string; description: string }) => {
                // add entry in the list of fancy data
                const codeAsNum = parseInt(type.code);
                return {
                    code: codeAsNum,
                    abbr: (<any>CODE_TO_ABBR)[codeAsNum],
                    name: type.description
                };
            });

            // add a '...' option as a way to clear province filter
            const reset = {
                code: -1,
                abbr: '...',
                name: '...'
            };
            this.provinceList.push(reset);

            this.provinceList.sort((provA, provB) => (provA.name > provB.name ? 1 : -1));

            this.listFetched = true;
        });
    }

    /**
     * Get the province information for a province code
     * @param provCode numeric prov code
     */
    codeToProvince(provCode: number): IProvinceInfo {
        return this.provinceList.find(pvi => pvi.code === provCode)!;
    }

    /**
     * Get the province information for a province name
     * @param provName the name in the active language
     */
    nameToProvince(provName: string): IProvinceInfo {
        return this.provinceList.find(pvi => pvi.name === provName)!;
    }

    /**
     * Get the province information belonging to an FSA
     * @param fsa three-char FSA
     */
    fsaToProvince(fsa: string): IProvinceInfo {
        let provCode: number;

        const fancyFSA = fsa.toUpperCase();
        const firstLetter = fancyFSA.substring(0, 1);
        if (firstLetter === 'X') {
            // NTW & NV share the X. no easy way to derive but there are only 6 so hardcoding.
            if (fancyFSA === 'X0A' || fancyFSA === 'X0B' || fancyFSA === 'X0C') {
                provCode = 62; // NV
            } else {
                provCode = 61; // NWT
            }
        } else {
            provCode = fsaToProv[firstLetter];
        }

        return this.codeToProvince(provCode);
    }
}

export default function (url: string): IProvinces {
    return new Provinces(url);
}
