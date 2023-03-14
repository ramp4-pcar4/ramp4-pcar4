// this will collate:

// geometry
// attributes
// style
// hover

// makes a bit more sense, also helps make the geometry more memory-friendly (i.e. not having space allocated for null pointers to styles and hovers in big point chains)

import type { Attributes, BaseGeometry, BaseStyle, Hover } from '@/geo/api';
import { geo } from '@/main';

export class Graphic {
    attributes: Attributes;
    geometry: BaseGeometry;
    style: BaseStyle | undefined;
    id: string;

    constructor(geom: BaseGeometry, id?: string, attribs?: Attributes) {
        this.geometry = geom;
        if (id) {
            this.id = id;
        } else {
            this.id = geo.sharedUtils.generateUUID();
        }
        if (attribs) {
            this.attributes = attribs;
        } else {
            this.attributes = {};
        }
    }

    private _hover: Hover | undefined;

    // TODO event system to be decided
    // _hoverRemoved: Subject<string> = new Subject();

    /** Returns the hovertip for the graphic, if any. */
    get hover(): Hover | undefined {
        return this._hover;
    }

    /** Adds a hovertip to the graphic. If one already exists, replace it. */
    set hover(hover: Hover | undefined) {
        if (hover && this._hover && this._hover.id !== hover.id) {
            this.removeHover();
        }

        this._hover = hover;
    }

    /** Removes the hovertip from the graphic if it exists. */
    removeHover() {
        if (this._hover) {
            // TODO re-add event call once events are figured out
            // this._hoverRemoved.next(this._id);
            this._hover = undefined;
        }
    }
}
