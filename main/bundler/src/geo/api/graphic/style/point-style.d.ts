import { BaseStyle, Colour, LineStyle, PointStyleType, PointIconStyleOptions, PointMarkerStyleOptions } from '../..';
import { EsriPictureMarkerSymbol, EsriSimpleMarkerSymbol } from '../../../esri';
export declare class PointStyle extends BaseStyle {
    protected _height: number;
    protected _xOffset: number;
    protected _yOffset: number;
    protected _icon: string;
    protected _width: number;
    protected _size: number;
    protected _colour: Colour;
    protected _style: PointStyleType;
    protected _outline: LineStyle;
    protected _path: string;
    protected _angle: number;
    constructor(opts?: PointIconStyleOptions | PointMarkerStyleOptions);
    /** Returns the specified colour */
    get colour(): Colour;
    /** Returns the specified style type */
    get styleType(): PointStyleType;
    /** Returns the specified width */
    get width(): number;
    /** Returns the specified height */
    get height(): number;
    /** Returns the specified size, in points units (not pixels) */
    get size(): number;
    /** Returns the specified x offset */
    get xOffset(): number;
    /** Returns the specified y offset */
    get yOffset(): number;
    /** Returns the specified angle, in degrees */
    get angle(): number;
    /** Returns the specified icon. Can be image url, svg image */
    get icon(): string;
    /** Returns the outline style */
    get outline(): LineStyle;
    /** Returns the SVG path */
    get path(): string;
    protected propGrouse(forIcon: boolean): void;
    toOptions(): PointIconStyleOptions | PointMarkerStyleOptions;
    toESRI(): EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol;
    static fromESRI(e: EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol): PointStyle;
    static fromArcServer(json: any): PointStyle;
    /**
     * Check to see if text provided is a valid image / data URL based on extension type or format.
     *
     * @function isImageUrl
     * @param {String} text                      string to be matched against valid image types / data url format
     * @returns {Boolean}                        true if valid image extension
     */
    static isImageUrl(text: string): boolean;
}
