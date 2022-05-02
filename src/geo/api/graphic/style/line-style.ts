// Style for RAMP Line Graphic

import {
    BaseStyle,
    Colour,
    LineCapType,
    LineJoinType,
    LineStyleType
} from '@/geo/api';
import type { LineStyleOptions } from '@/geo/api';
import { EsriSimpleLineSymbol, EsriSymbolFromJson } from '@/geo/esri';

export class LineStyle extends BaseStyle {
    protected _style: LineStyleType;
    protected _width: number;
    protected _miter: number;
    protected _cap: LineCapType;
    protected _join: LineJoinType;
    protected _colour: Colour;

    constructor(opts?: LineStyleOptions) {
        opts = opts || {}; // If opts is undefined set it to an empty obj
        super();

        // defaulting. aligns with ESRI symbol defaults
        this._style = opts.style || LineStyleType.SOLID;

        // since width can be 0, fancyness to avoid falsy 0
        const tempW = BaseStyle.convToPoints(opts.width);
        this._width = typeof tempW === 'undefined' || tempW < 0 ? 0.75 : tempW;
        this._colour = new Colour(opts.colour);
        this._miter = opts.miter ?? 2;
        this._cap = opts.cap || LineCapType.ROUND;
        this._join = opts.join || LineJoinType.ROUND;
    }

    /** Returns the specified style type (e.g. solid, dashed, dotted) */
    get styleType(): LineStyleType {
        return this._style;
    }

    /** Returns the specified width */
    get width(): number {
        return this._width;
    }

    /** Returns the specified colour */
    get colour(): Colour {
        return this._colour;
    }

    /** Returns the specified miter limit */
    get miter(): number {
        return this._miter;
    }

    /** Returns the specified line cap style */
    get cap(): LineCapType {
        return this._cap;
    }

    /** Returns the specified line join style */
    get join(): LineJoinType {
        return this._join;
    }

    toOptions(): LineStyleOptions {
        return {
            style: this.styleType,
            width: this.width,
            colour: this.colour.hex,
            miter: this.miter,
            cap: this.cap,
            join: this.join
        };
    }

    toESRI(): EsriSimpleLineSymbol {
        const s = new EsriSimpleLineSymbol();
        s.width = this.width;
        s.color = this.colour.toESRI();
        s.style = this.styleType;
        s.cap = this.cap;
        s.miterLimit = this.miter;
        s.join = this.join;

        return s;
    }

    static fromESRI(e: EsriSimpleLineSymbol): LineStyle {
        const opts: LineStyleOptions = {
            width: e.width,
            colour: e.color.toRgba(),
            style: <LineStyleType>e.style
        };
        return new LineStyle(opts);
    }

    static fromArcServer(json: any): LineStyle {
        return LineStyle.fromESRI(
            <EsriSimpleLineSymbol>EsriSymbolFromJson(json)
        );
    }
}
