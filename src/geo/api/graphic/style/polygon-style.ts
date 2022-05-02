// Style for RAMP Polygon Graphic

import type { PolygonStyleOptions } from '@/geo/api';

import { BaseStyle, Colour, FillStyleType, LineStyle } from '@/geo/api';

import {
    EsriColour,
    EsriSimpleFillSymbol,
    EsriSymbolFromJson
} from '@/geo/esri';

export class PolygonStyle extends BaseStyle {
    protected _outlineStyle: LineStyle;
    protected _fillColour: Colour;
    protected _fillStyle: FillStyleType;

    constructor(opts?: PolygonStyleOptions) {
        super();
        opts = opts || {}; // If opts is undefined set it to an empty obj
        if (!opts.fill) {
            opts.fill = {};
        }

        // dee-faults
        this._fillColour = new Colour(opts.fill.colour);
        this._fillStyle = opts.fill.style || FillStyleType.SOLID;
        this._outlineStyle = new LineStyle(opts.outline);
    }

    /** Returns the specified colour */
    get fillColour(): Colour {
        return this._fillColour;
    }

    /** Returns the fill style type (solid, transparent, hatching, etc) */
    get fillStyleType(): FillStyleType {
        return this._fillStyle;
    }

    /** Returns the outline style */
    get outline(): LineStyle {
        return this._outlineStyle;
    }

    toOptions(): PolygonStyleOptions {
        return {
            fill: {
                style: this.fillStyleType,
                colour: this.fillColour.hex
            },
            outline: this.outline.toOptions()
        };
    }

    toESRI(): EsriSimpleFillSymbol {
        const lineSymbol = this.outline.toESRI();
        const fillColour = new EsriColour(this.fillColour.rgba);

        const fillSymbol = new EsriSimpleFillSymbol();
        fillSymbol.style = this.fillStyleType;
        fillSymbol.color = fillColour;
        fillSymbol.outline = lineSymbol;

        return fillSymbol;
    }

    static fromESRI(e: EsriSimpleFillSymbol): PolygonStyle {
        const opts: PolygonStyleOptions = {
            fill: {
                colour: e.color.toRgba(),
                style: <FillStyleType>e.style
            },
            outline: LineStyle.fromESRI(e.outline).toOptions()
        };

        return new PolygonStyle(opts);
    }

    static fromArcServer(json: any): PolygonStyle {
        return PolygonStyle.fromESRI(
            <EsriSimpleFillSymbol>EsriSymbolFromJson(json)
        );
    }
}
