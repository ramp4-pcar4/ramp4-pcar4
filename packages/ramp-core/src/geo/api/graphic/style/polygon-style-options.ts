// TODO add proper documentation

import {
    FillStyle,
    LineStyleOptions,
    LineStyleParams,
    PolygonStyleParams,
    StyleOptions
} from '@/geo/api';

export class PolygonStyleOptions extends StyleOptions {
    protected _outlineStyle: LineStyleOptions;
    protected _fillColor: Array<number>;
    protected _fillStyle: string;

    constructor(opts?: PolygonStyleParams) {
        opts = opts || {}; // If opts is undefined set it to an empty obj
        super(opts);

        // dee-faults

        // THE FILL
        if (opts.fillColor) {
            this._fillColor = StyleOptions.parseColour(opts.fillColor);
        } else {
            // if someone provided a colour on the base param, use it. if both were empty, this will already be defaulted due to super()
            this._fillColor = this._colour;
        }

        if (!(opts.fillOpacity === undefined)) {
            // possible we have 0-1 decimals coming in, need to translate to 0-255
            if (opts.fillOpacity <= 0) {
                this._fillColor[3] = 0;
            } else if (opts.fillOpacity <= 1) {
                // we take a risk if someone sets value of 1 being 1 of 255 opacity. WHO PICKS 1/255th OPACITY???
                this._fillColor[3] = Math.floor(opts.fillOpacity * 255.0);
            } else {
                this._fillColor[3] = Math.min((Math.floor(opts.fillOpacity), 255));
            }
        }

        this._fillStyle = opts.fillStyle || opts.style || FillStyle.SOLID;

        // THE OUTLINE
        let paramooo: LineStyleParams;
        if (opts.outlineParams) {
            paramooo = opts.outlineParams;
        } else {
            paramooo = {};
            paramooo.colour = opts.outlineColor;
            paramooo.style = opts.outlineStyle;
            paramooo.width = opts.outlineWidth;
        }
        this._outlineStyle = new LineStyleOptions(paramooo);
    }
}
