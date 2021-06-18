import { Attribution, Point, ScaleBarProperties } from '@/geo/api';

export class MapCaptionState {
    attribution: Attribution;
    scale: ScaleBarProperties;
    cursorPoint: Point | undefined;

    constructor(
        attrib: Attribution,
        scale: ScaleBarProperties,
        cursorPoint: Point | undefined
    ) {
        this.attribution = attrib;
        this.scale = scale;
        this.scale = scale;
        this.cursorPoint = cursorPoint;
    }
}
