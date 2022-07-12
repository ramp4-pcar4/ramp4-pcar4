import type { Attribution, ScaleBar, MapCoords } from '@/geo/api';

export class MapCaptionState {
    attribution: Attribution;
    scale: ScaleBar;
    coords: MapCoords;

    constructor(attrib: Attribution, scale: ScaleBar, coords: MapCoords) {
        this.attribution = attrib;
        this.scale = scale;
        this.coords = coords;
    }
}
