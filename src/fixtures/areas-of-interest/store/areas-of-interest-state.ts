import type { RampExtentConfig } from '@/geo/api';

export class AreasOfInterestState {
    areas: Array<AreaOfInterest> = [];
}

export interface AreasOfInterestConfig {
    areas: Array<AreaOfInterest>;
}

export interface AreaOfInterest {
    title: string;
    thumbnail?: string;
    altText?: string;
    description?: string;
    extent: RampExtentConfig;
}
