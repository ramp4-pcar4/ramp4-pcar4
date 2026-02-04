import type { EsriSymbol } from '@/geo/esri';
export declare class BaseStyle {
    toOptions(): any;
    toESRI(): EsriSymbol;
    static convToPoints(input: number | string | undefined): number | undefined;
}
