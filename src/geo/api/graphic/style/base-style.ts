// Baseclass for RAMP Graphic styles
// Really only exists to provide a declaration type for vars
// that want to hold any style subclass.

import type { EsriSymbol } from '@/geo/esri';

export class BaseStyle {
    toOptions(): any {
        throw new Error(
            `.toOptions called on BaseStyle. Likely was not implemented on subclass.`
        );
    }

    toESRI(): EsriSymbol {
        throw new Error(
            `.toESRI called on BaseStyle. Likely was not implemented on subclass.`
        );
    }

    // takes any "measurement" type option and converts to points units.
    // numbers === points
    // text number === points
    // text number + 'pt' === points
    // text number + 'px' === pixels, gets converted
    // undefined === undefined
    // empty string === undefined
    static convToPoints(
        input: number | string | undefined
    ): number | undefined {
        if (typeof input === 'undefined') {
            return undefined;
        } else if (typeof input === 'string') {
            let numnum: number;
            const len = input.length;
            if (len === 0) {
                return undefined;
            }
            const suffix = input.substring(len - 2);
            if (suffix === 'px') {
                numnum = parseFloat(input.substring(0, len - 2)) * 1.333333;
            } else if (suffix === 'pt') {
                numnum = parseFloat(input.substring(0, len - 2));
            } else {
                numnum = parseFloat(input);
            }
            return numnum;
        } else {
            return input;
        }
    }
}
