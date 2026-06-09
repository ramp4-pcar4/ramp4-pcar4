interface HovertipOptions {
    keepOpen: boolean;
    position: string;
    xOffset: number;
    yOffset: number;
    followCursor: boolean;
}
export declare class Hover {
    /** @ignore */
    _id: string;
    /** @ignore */
    _text: string;
    /** @ignore */
    _keepOpen: boolean;
    /** @ignore */
    _position: string;
    /** @ignore */
    _xOffset: number;
    /** @ignore */
    _yOffset: number;
    /** @ignore */
    _followCursor: boolean;
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
    constructor(id: string | number, text: string, opts?: HovertipOptions);
    /** Returns the hovertip id. */
    get id(): string;
    /** Returns the contents of the hovertip. */
    get text(): string;
    /** Returns true if the hovertip is meant to remain open. */
    get keepOpen(): boolean;
    /** Returns the default position of the hovertip. */
    get position(): string;
    /** Returns the pixel offset on x of the hovertip. */
    get xOffset(): number;
    /** Returns the pixel offset on y of the hovertip. */
    get yOffset(): number;
    /** Returns true if the hovertip is meant to follow the cursor movement. */
    get followCursor(): boolean;
    /** Returns the string 'Hover'. */
    get type(): string;
}
export {};
