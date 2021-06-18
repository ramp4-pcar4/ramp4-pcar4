import { Attribution, ScaleBarProperties } from '@/geo/api';

export class MapCaptionState {
    attribution: Attribution;
    scale: ScaleBarProperties;
    cursorCoords: string;

    constructor(
        attrib: Attribution,
        scale: ScaleBarProperties,
        cursorCoords: string
    ) {
        this.attribution = attrib;
        this.scale = scale;
        this.cursorCoords = cursorCoords;
    }
}
