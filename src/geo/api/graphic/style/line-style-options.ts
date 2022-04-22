// Style for RAMP Line Graphic

import { LineStyle, StyleOptions } from '@/geo/api';
import type { LineStyleParams } from '@/geo/api';
import { EsriSimpleLineSymbol, EsriSymbolFromJson } from '@/geo/esri';

export class LineStyleOptions extends StyleOptions {
    protected declare _style: LineStyle;

    constructor(opts?: LineStyleParams) {
        opts = opts || {}; // If opts is undefined set it to an empty obj
        super(opts);

        // defaulting
        if (!opts.style) {
            this._style = LineStyle.SOLID;
        }

        if (!opts.width || opts.width < 0) {
            this._width = 2;
        }
    }

    /** Returns the specified style (e.g. solid, dashed, dotted) */
    get style(): LineStyle {
        return this._style;
    }

    toESRI(): EsriSimpleLineSymbol {
        const symbol = {
            width: this.width,
            type: 'esriSLS',
            color: this.colour,
            style: this.style,
            outline: {
                color: [0, 0, 0],
                width: 1,
                type: 'esriSLS',
                style: 'esriSLSSolid'
            }
        };
        return EsriSymbolFromJson(symbol) as EsriSimpleLineSymbol;
    }
}
