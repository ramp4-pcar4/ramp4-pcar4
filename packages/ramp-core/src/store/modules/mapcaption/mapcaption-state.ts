import { Attribution } from '@/geo/api';

export class MapCaptionState {
    attribution: Attribution;
    scale: { label: string; width: string; isImperialScale: boolean };

    constructor(attrib: Attribution, scale: any) {
        this.attribution = attrib;
        this.scale = scale;
    }
}
