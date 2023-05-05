// Style for RAMP Point Graphic

import { BaseStyle, Colour, LineStyle, PointStyleType } from '@/geo/api';
import type { PointIconStyleOptions, PointMarkerStyleOptions } from '@/geo/api';
import {
    EsriColour,
    EsriPictureMarkerSymbol,
    EsriSimpleMarkerSymbol,
    EsriSymbolFromJson
} from '@/geo/esri';

export class PointStyle extends BaseStyle {
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

    constructor(opts?: PointIconStyleOptions | PointMarkerStyleOptions) {
        opts = opts || { style: PointStyleType.CIRCLE }; // If opts is undefined set it to circle

        super();

        // extra failsafe for external callers who forget to add style (raw javascript, no type checks)
        this._style = opts.style || PointStyleType.CIRCLE;

        if (opts.style === PointStyleType.ICON) {
            const iopts = <PointIconStyleOptions>opts;
            this._icon = iopts.icon || ''; //  a bit weird but lets allow a blank incase there is a usecase for invisible points

            // TODO add negative checks?
            this._height = BaseStyle.convToPoints(iopts.height) || 16.5;
            this._width = BaseStyle.convToPoints(iopts.width) || 16.5;

            // defaults to chill
            this._size = 0;
            this._colour = new Colour();
            this._outline = new LineStyle();
            this._path = '';
        } else {
            const mopts = <PointMarkerStyleOptions>opts;
            this._size = BaseStyle.convToPoints(mopts.size) || 12;
            this._colour = new Colour(mopts.colour ?? '#ffffff40');
            this._outline = new LineStyle(mopts.outline);
            this._path =
                this._style === PointStyleType.PATH ? mopts.path || '' : '';

            // defaults to chill
            this._height = 0;
            this._width = 0;
            this._icon = '';
        }

        this._xOffset = BaseStyle.convToPoints(opts.xOffset) || 0;
        this._yOffset = BaseStyle.convToPoints(opts.yOffset) || 0;
        this._angle = opts.angle || 0;
    }

    /** Returns the specified colour */
    get colour(): Colour {
        this.propGrouse(false);
        return this._colour;
    }

    /** Returns the specified style type */
    get styleType(): PointStyleType {
        return this._style;
    }

    /** Returns the specified width */
    get width(): number {
        this.propGrouse(true);
        return this._width;
    }

    /** Returns the specified height */
    get height(): number {
        this.propGrouse(true);
        return this._height;
    }

    /** Returns the specified size, in points units (not pixels) */
    get size(): number {
        this.propGrouse(false);
        return this._size;
    }

    /** Returns the specified x offset */
    get xOffset(): number {
        return this._xOffset;
    }

    /** Returns the specified y offset */
    get yOffset(): number {
        return this._yOffset;
    }

    /** Returns the specified angle, in degrees */
    get angle(): number {
        return this._angle;
    }

    /** Returns the specified icon. Can be image url, svg image */
    get icon(): string {
        this.propGrouse(true);
        return this._icon;
    }

    /** Returns the outline style */
    get outline(): LineStyle {
        this.propGrouse(false);
        return this._outline;
    }

    /** Returns the SVG path */
    get path(): string {
        this.propGrouse(false);
        return this._path;
    }

    protected propGrouse(forIcon: boolean): void {
        if (!((this._style === PointStyleType.ICON) === forIcon)) {
            // mismatch, make a grouse
            console.warn(
                `Accessed a point style property that is invalid for the style type ${this._style}`
            );
        }
    }

    toOptions(): PointIconStyleOptions | PointMarkerStyleOptions {
        const common = {
            style: this.styleType,
            yOffset: this.yOffset,
            xOffset: this.xOffset,
            angle: this.angle
        };
        if (this._style === PointStyleType.ICON) {
            return {
                ...common,
                icon: this.icon,
                width: this.width,
                height: this.height
            };
        } else {
            return {
                ...common,
                size: this.size,
                colour: this.colour.hex,
                path: this.path
            };
        }
    }

    toESRI(): EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol {
        let symbol: EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol;

        if (this.styleType === PointStyleType.ICON) {
            if (PointStyle.isImageUrl(this.icon)) {
                // TODO: discuss how to handle the width / height issue when passing in an icon
                symbol = new EsriPictureMarkerSymbol();
                symbol.url = this.icon;
                symbol.width = this.width;
                symbol.height = this.height;
                symbol.xoffset = this.xOffset;
                symbol.yoffset = this.yOffset;
                symbol.angle = this.angle;
            } else {
                // re-examine this else block. Just a failsafe for garbage image path?
                symbol = new EsriSimpleMarkerSymbol();

                symbol.color = new EsriColour(this.colour.rgba);
                symbol.size = this.width;
                symbol.xoffset = this.xOffset;
                symbol.yoffset = this.yOffset;
                symbol.angle = this.angle;
            }
        } else {
            symbol = new EsriSimpleMarkerSymbol();
            symbol.color = new EsriColour(this.colour.rgba);
            symbol.size = this.size;
            symbol.xoffset = this.xOffset;
            symbol.yoffset = this.yOffset;
            symbol.angle = this.angle;
            symbol.path = this.path;
            symbol.style = this.styleType;
            symbol.outline = this.outline.toESRI();
        }

        return symbol;
    }

    static fromESRI(
        e: EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol
    ): PointStyle {
        const opts: any = {
            xOffset: e.xoffset,
            yOffset: e.yoffset,
            angle: e.angle
        };
        if (e.type === 'simple-marker') {
            const mopts: PointMarkerStyleOptions = opts;
            mopts.style = <PointStyleType>e.style;
            mopts.colour = e.color.toRgba();
            mopts.size = e.size;
            mopts.path = e.path;
            mopts.outline = LineStyle.fromESRI(e.outline).toOptions();
        } else {
            // 'picture-marker'
            const popts: PointIconStyleOptions = opts;
            popts.style = PointStyleType.ICON;
            popts.width = e.width;
            popts.height = e.height;
            popts.icon = e.url;
        }
        return new PointStyle(opts);
    }

    static fromArcServer(json: any): PointStyle {
        return PointStyle.fromESRI(
            <EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol>(
                EsriSymbolFromJson(json)
            )
        );
    }

    /**
     * Check to see if text provided is a valid image / data URL based on extension type or format.
     *
     * @function isImageUrl
     * @param {String} text                      string to be matched against valid image types / data url format
     * @returns {Boolean}                        true if valid image extension
     */
    static isImageUrl(text: string): boolean {
        return (
            !!text.match(/\.(jpeg|jpg|gif|png|swf|svg)$/) ||
            !!text.match(
                /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i //eslint-disable-line
            )
        );
    }
}
