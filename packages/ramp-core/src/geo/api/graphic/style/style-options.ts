// Baseclass for RAMP Graphic styles

import { StyleParams, ColourParams } from '@/geo/api';

export class StyleOptions {
    protected _width: number;
    protected _colour: Array<number>;
    protected _style: string;

    constructor(opts?: StyleParams) {
        opts = opts || {}; // If opts is undefined set it to an empty obj

        // if an attribute is not defined set it to a default
        this._style = opts.style || '';
        this._colour = StyleOptions.parseColour(opts.colour);
        this._width = opts.width || 0;
    }

    /** Returns the specified width */
    get width(): number {
        return this._width;
    }

    /** Returns the specified colour */
    get colour(): Array<number> {
        return this._colour;
    }

    /** Returns the specified colour as a hex string */
    get colourHex(): string {
        return StyleOptions.colourToHex(this._colour);
    }

    /** Returns the specified style */
    get style(): string {
        return this._style;
    }

    /**
     * Parse and convert various colour formats to RGBA values. Formats include RGB array, hexstring,
     * or RAMP ColourParameter object
     *
     * @param c a colour defined in a supported format
     * @returns {Array<number>} an array of RGBA integer values
     */
    static parseColour(
        c: Array<number> | Array<string> | string | ColourParams | undefined
    ): Array<number> {
        if (!c) {
            return [0, 0, 0, 255];
        }

        let arr: Array<number>;
        if (Array.isArray(c)) {
            arr = (<Array<any>>c).map(n => parseInt(n));
            if (arr.length === 3) {
                arr.push(255); // no opacity given. make opaque
            }
        } else if (typeof c === 'string') {
            // trim # if its there
            let s: string = c.substr(0, 1) === '#' ? c.substr(1) : c;
            arr = [0, 2, 4, 6].map(i => {
                const hex = s.substr(i, 2);
                return hex.length === 0 ? 255 : parseInt(hex, 16);
            });
        } else {
            arr = [c.r, c.g, c.b, typeof c.a === 'undefined' ? 255 : c.a];
        }

        return arr;
    }

    /** Converts RGBA integer array to #rrggbbaa hex string */
    protected static colourToHex(colourArray: Array<number>): string {
        const toHex = (i: number) => {
            let s: string = i.toString(16);
            return s.length === 1 ? `0${s}` : s;
        };

        return `#${colourArray.map(i => toHex(i)).join('')}`;
    }
}
