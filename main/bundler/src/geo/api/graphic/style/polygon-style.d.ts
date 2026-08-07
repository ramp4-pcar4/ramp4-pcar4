import { PolygonStyleOptions, BaseStyle, Colour, FillStyleType, LineStyle } from '../..';
import { EsriSimpleFillSymbol } from '../../../esri';
export declare class PolygonStyle extends BaseStyle {
    protected _outlineStyle: LineStyle;
    protected _fillColour: Colour;
    protected _fillStyle: FillStyleType;
    constructor(opts?: PolygonStyleOptions);
    /** Returns the specified colour */
    get fillColour(): Colour;
    /** Returns the fill style type (solid, transparent, hatching, etc) */
    get fillStyleType(): FillStyleType;
    /** Returns the outline style */
    get outline(): LineStyle;
    toOptions(): PolygonStyleOptions;
    toESRI(): EsriSimpleFillSymbol;
    static fromESRI(e: EsriSimpleFillSymbol): PolygonStyle;
    static fromArcServer(json: any): PolygonStyle;
}
