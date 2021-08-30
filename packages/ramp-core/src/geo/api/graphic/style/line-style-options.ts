// TODO add proper documentation

import { LineStyle, LineStyleParams, StyleOptions } from '@/geo/api';

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

    /** Returns the specified style */
    get style(): LineStyle {
        return this._style;
    }
}
