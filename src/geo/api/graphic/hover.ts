// This is sketchy for now. not sure what kind of hover magic we will support
//      only on SimpleLayer type things?
//      should Hover be a part of Graphic instead of Geometry?
// for the time being, we are just using RAMP2 object for placeholder.
// This class is likely not used in v4.0.0

interface HovertipOptions {
    keepOpen: boolean;
    position: string;
    xOffset: number;
    yOffset: number;
    followCursor: boolean;
}

export class Hover {
    /** @ignore */
    _id: string;
    /** @ignore */
    _text: string;
    /** @ignore */
    _keepOpen = false;
    /** @ignore */
    _position = 'top';
    /** @ignore */
    _xOffset = 0;
    /** @ignore */
    _yOffset = 0;
    /** @ignore */
    _followCursor = false;

    /**
     * Set the id and hovertip text. Also set any of the optional hovertip options if provided.
     *
     * The different options and values available are the following:
     * <ul>
     *     <li>keepOpen:        true or false. default is false.
     *     <li>position:        'top', 'bottom', 'left' or 'right'. default is 'top'. (if followCursor is true, position value will be ignored.)
     *     <li>xOffset:         any number. default is 0.
     *     <li>yOffset:         any number. default is 0.
     *     <li>followCursor:    true or false. default is false. (if keepOpen is true, followCursor value will be ignored.)
     * </ul>
     *
     * TODO: add option for position 'center' specifically used for polygons.
     */
    constructor(id: string | number, text: string, opts?: HovertipOptions) {
        this._id = id.toString();
        this._text = text;
        if (opts) {
            if (opts.keepOpen !== undefined) {
                this._keepOpen = opts.keepOpen;
            }
            if (opts.position !== undefined) {
                this._position = opts.position;
            }
            if (opts.xOffset !== undefined) {
                this._xOffset = opts.xOffset;
            }
            if (opts.yOffset !== undefined) {
                this._yOffset = opts.yOffset;
            }
            if (opts.followCursor !== undefined) {
                this._followCursor = opts.followCursor;
            }
        }
    }

    /** Returns the hovertip id. */
    get id(): string {
        return this._id;
    }

    /** Returns the contents of the hovertip. */
    get text(): string {
        return this._text;
    }

    /** Returns true if the hovertip is meant to remain open. */
    get keepOpen(): boolean {
        return this._keepOpen;
    }

    /** Returns the default position of the hovertip. */
    get position(): string {
        return this._position;
    }

    /** Returns the pixel offset on x of the hovertip. */
    get xOffset(): number {
        return this._xOffset;
    }

    /** Returns the pixel offset on y of the hovertip. */
    get yOffset(): number {
        return this._yOffset;
    }

    /** Returns true if the hovertip is meant to follow the cursor movement. */
    get followCursor(): boolean {
        return this._followCursor;
    }

    /** Returns the string 'Hover'. */
    get type(): string {
        return 'Hover';
    }
}
