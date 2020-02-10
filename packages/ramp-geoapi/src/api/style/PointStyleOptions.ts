// TODO add proper documentation

import StyleOptions from './StyleOptions';
import { PointStyle, PointStyleParams } from '../apiDefs';

export default class PointStyleOptions extends StyleOptions {

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
        }

        /** Returns the specified icon */ // TODO figure out format, document format
        get icon(): string {
            return this._icon;
        }
}