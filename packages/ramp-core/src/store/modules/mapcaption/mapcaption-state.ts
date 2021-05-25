import { Attribution } from '@/geo/api';

export class MapCaptionState {
    // TODO: Make attribution into a defined type and update all instances (including config)
    attribution: Attribution;

    constructor(attrib: Attribution) {
        this.attribution = attrib;
    }
}
