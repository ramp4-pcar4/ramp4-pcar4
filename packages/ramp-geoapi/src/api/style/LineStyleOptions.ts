// TODO add proper documentation

import StyleOptions from './StyleOptions';
import { LineStyle, LineStyleParams } from '../apiDefs';

export default class LineStyleOptions extends StyleOptions {

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
}