import { Attributes, BaseGeometry, BaseStyle, Hover } from '..';
export declare class Graphic {
    attributes: Attributes;
    geometry: BaseGeometry;
    style: BaseStyle | undefined;
    id: string;
    constructor(geom: BaseGeometry, id?: string, attribs?: Attributes);
    private _hover;
    /** Returns the hovertip for the graphic, if any. */
    get hover(): Hover | undefined;
    /** Adds a hovertip to the graphic. If one already exists, replace it. */
    set hover(hover: Hover | undefined);
    /** Removes the hovertip from the graphic if it exists. */
    removeHover(): void;
}
