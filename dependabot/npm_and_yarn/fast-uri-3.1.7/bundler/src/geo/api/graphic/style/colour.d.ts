import { ColourParams } from '../..';
import { EsriColour } from '../../../esri';
export declare class Colour {
    protected c: Array<number>;
    constructor(colour?: Array<number | string> | string | ColourParams | undefined);
    get rgba(): Array<number>;
    get hex(): string;
    get r(): number;
    get g(): number;
    get b(): number;
    get a(): number;
    toESRI(): EsriColour;
    toArcServer(): Array<number>;
    static hexToInt(twoCharHex: string): number;
    static intToHex(num: number): string;
}
