import type { ColourParams } from '@/geo/api';
import { EsriColour } from '@/geo/esri';

export class Colour {
    protected c: Array<number>; // 4 numbers. R,G,B (0-255), A (0-1). This is ESRI and SVG standard

    constructor(
        colour?: Array<number | string> | string | ColourParams | undefined
    ) {
        if (!colour) {
            this.c = [0, 0, 0, 1];
            return;
        }

        if (Array.isArray(colour)) {
            const l = colour.length;
            if (l < 3 || l > 4) {
                console.error(
                    'Invalid colour value array passed to Colour class'
                );
                this.c = [0, 0, 0, 1];
                return;
            }
            this.c = (<Array<any>>colour).map((n, i) =>
                i === 3 ? n : parseInt(n)
            );
            if (l === 3) {
                this.c.push(1); // no opacity given. make opaque
            }
        } else if (typeof colour === 'string') {
            // trim # if its there
            const s: string =
                colour.substring(0, 1) === '#' ? colour.substring(1) : colour;
            this.c = [0, 2, 4, 6].map(i => {
                const hex = s.substring(i, i + 2);
                return Colour.hexToInt(hex);
            });
        } else {
            this.c = [colour.r, colour.g, colour.b, colour.a ?? 1];
        }

        // final cleanup
        this.c.forEach((n, i) => {
            if (n < 0) {
                console.error('Negative value passed to colour');
                this.c[i] = 0;
            }
            if (n > 255) {
                console.error('Rotund value passed to colour');
                this.c[i] = 255;
            }
        });
        if (this.c[3] > 1) {
            // the alpha was provided in 0-255 range. convert to 0-1 range.
            // there is a blind spot here, in that if someone wanted 1/255th opacity, they will get full opacity.
            // but what sort of madlad would want that? Pure recklessness and they deserve more opacity.
            this.c[3] = this.c[3] / 255;
        }
    }

    get rgba(): Array<number> {
        return this.c.slice();
    }

    get hex(): string {
        const temp = this.rgba;
        temp[3] = temp[3] * 255; // convert alpha back to 0-255
        return `#${temp.map(i => Colour.intToHex(i)).join('')}`;
    }

    get r(): number {
        return this.c[0];
    }

    get g(): number {
        return this.c[1];
    }

    get b(): number {
        return this.c[2];
    }

    get a(): number {
        return this.c[3];
    }

    toESRI(): EsriColour {
        return new EsriColour(this.rgba);
    }

    toArcServer(): Array<number> {
        // map (0-1) alpha to (0-255) alpha
        return [this.c[0], this.c[1], this.c[2], 255 * this.c[3]];
    }

    static hexToInt(twoCharHex: string): number {
        return twoCharHex.length === 0 ? 255 : parseInt(twoCharHex, 16);
    }

    static intToHex(num: number): string {
        const s: string = num.toString(16);
        return s.length === 1 ? `0${s}` : s;
    }
}
