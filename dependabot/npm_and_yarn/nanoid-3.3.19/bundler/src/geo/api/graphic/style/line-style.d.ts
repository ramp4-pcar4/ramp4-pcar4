import { BaseStyle, Colour, LineCapType, LineJoinType, LineStyleType, LineStyleOptions } from '../..';
import { EsriSimpleLineSymbol } from '../../../esri';
export declare class LineStyle extends BaseStyle {
    protected _style: LineStyleType;
    protected _width: number;
    protected _miter: number;
    protected _cap: LineCapType;
    protected _join: LineJoinType;
    protected _colour: Colour;
    constructor(opts?: LineStyleOptions);
    /** Returns the specified style type (e.g. solid, dashed, dotted) */
    get styleType(): LineStyleType;
    /** Returns the specified width */
    get width(): number;
    /** Returns the specified colour */
    get colour(): Colour;
    /** Returns the specified miter limit */
    get miter(): number;
    /** Returns the specified line cap style */
    get cap(): LineCapType;
    /** Returns the specified line join style */
    get join(): LineJoinType;
    toOptions(): LineStyleOptions;
    toESRI(): EsriSimpleLineSymbol;
    static fromESRI(e: EsriSimpleLineSymbol): LineStyle;
    static fromArcServer(json: any): LineStyle;
}
