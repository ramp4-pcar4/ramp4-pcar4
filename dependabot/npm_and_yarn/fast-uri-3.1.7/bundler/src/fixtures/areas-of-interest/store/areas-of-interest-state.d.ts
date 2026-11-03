import { RampExtentConfig } from '../../../geo/api';
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
