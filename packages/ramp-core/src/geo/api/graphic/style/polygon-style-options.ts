// Style for RAMP Polygon Graphic

import {
    FillStyle,
    LineStyleOptions,
    LineStyleParams,
    PolygonStyleParams,
    StyleOptions
} from '@/geo/api';

export class PolygonStyleOptions extends StyleOptions {
    protected _outlineStyle: LineStyleOptions;
    protected _fillColour: Array<number>;
    protected _fillStyle: FillStyle;

    constructor(opts?: PolygonStyleParams) {
        opts = opts || {}; // If opts is undefined set it to an empty obj
        super(opts);

        // dee-faults

        // THE FILL
        if (opts.fillColour) {
            this._fillColour = StyleOptions.parseColour(opts.fillColour);
        } else {
            // if someone provided a colour on the base param, use it. if both were empty, this will already be defaulted due to super()
            this._fillColour = this._colour;
        }

        if (!(opts.fillOpacity === undefined)) {
            // possible we have 0-1 decimals coming in, need to translate to 0-255
            if (opts.fillOpacity <= 0) {
                this._fillColour[3] = 0;
            } else if (opts.fillOpacity <= 1) {
                // we take a risk if someone sets value of 1 being 1 of 255 opacity. WHO PICKS 1/255th OPACITY???
                this._fillColour[3] = Math.floor(opts.fillOpacity * 255.0);
            } else {
                this._fillColour[3] = Math.min(
                    (Math.floor(opts.fillOpacity), 255)
                );
            }
        }

        this._fillStyle =
            opts.fillStyle || (opts.style as FillStyle) || FillStyle.SOLID;

        // THE OUTLINE
        let paramooo: LineStyleParams;
        if (opts.outlineParams) {
            paramooo = opts.outlineParams;
        } else {
            paramooo = {};
            paramooo.colour = opts.outlineColour;
            paramooo.style = opts.outlineStyle;
            paramooo.width = opts.outlineWidth;
        }
        this._outlineStyle = new LineStyleOptions(paramooo);
    }

    /** Returns the specified colour */
    get fillColour(): Array<number> {
        return this._fillColour;
    }

    /** Returns the fill style (solid, transparent, hatching, etc) */
    get fillStyle(): FillStyle {
        return this._fillStyle;
    }

    /** Returns the outline style options */
    get outlineStyleOptions(): LineStyleOptions {
        return this._outlineStyle;
    }
}
