import { Attribution, ScaleBar, MouseCoords } from '@/geo/api';

export class MapCaptionState {
    attribution: Attribution;
    scale: ScaleBar;
    cursorCoords: MouseCoords;

    constructor(attrib: Attribution, scale: ScaleBar, cursorCoords: MouseCoords) {
        this.attribution = attrib;
        this.scale = scale;
        this.cursorCoords = cursorCoords;
    }
}
