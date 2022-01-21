// Style for RAMP Point Graphic

import { PointStyle, PointStyleParams, StyleOptions } from '@/geo/api';
import {
    EsriColour,
    EsriPictureMarkerSymbol,
    EsriSimpleMarkerSymbol,
    EsriSymbolFromJson
} from '@/geo/esri';

export class PointStyleOptions extends StyleOptions {
    // TODO support outlines? can we even do that, or is that a composite symbol?

    protected _height: number;
    protected _xOffset: number;
    protected _yOffset: number;
    protected _icon: string;

    constructor(opts?: PointStyleParams) {
        opts = opts || {}; // If opts is undefined set it to an empty obj
        super(opts);

        this._icon = opts.icon || '';
        this._style = opts.icon ? 'ICON' : this._style || PointStyle.CIRCLE;

        this._xOffset = opts.xOffset || 0;
        this._yOffset = opts.yOffset || 0;

        // TODO add negative checks?
        this._height = opts.height || 16.5;
        this._width = opts.width || 16.5;
    }

    /** Returns the specified height */
    get height(): number {
        return this._height;
    }

    /** Returns the specified x offset */
    get xOffset(): number {
        return this._xOffset;
    }

    /** Returns the specified y offset */
    get yOffset(): number {
        return this._yOffset;
    } // TODO figure out format, document format

    /** Returns the specified icon. Can be image url, svg image */
    get icon(): string {
        return this._icon;
    }

    toESRI(): EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol {
        let symbol: EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol;

        if (this.style === 'ICON') {
            if (PointStyleOptions.isImageUrl(this.icon)) {
                // TODO: discuss how to handle the width / height issue when passing in an icon
                symbol = new EsriPictureMarkerSymbol();
                symbol.url = this.icon;
                symbol.width = this.width;
                symbol.height = this.height;
                symbol.xoffset = this.xOffset;
                symbol.yoffset = this.yOffset;
            } else {
                symbol = new EsriSimpleMarkerSymbol();

                // TODO decide if we want to add PATH style support
                // symbol.path= this.icon;

                symbol.color = new EsriColour(this.colour);
                symbol.size = this.width;
                symbol.xoffset = this.xOffset;
                symbol.yoffset = this.yOffset;
            }
        } else {
            const options = {
                color: this.colour,
                size: this.width,
                xoffset: this.xOffset,
                yoffset: this.yOffset,
                type: 'esriSMS',
                style: this.style as PointStyle,
                outline: {
                    color: [0, 0, 0],
                    width: 1,
                    type: 'esriSLS',
                    style: 'esriSLSSolid'
                }
            };
            symbol = EsriSymbolFromJson(options) as EsriSimpleMarkerSymbol;
        }

        return symbol;
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
                /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
            )
        );
    }
}
