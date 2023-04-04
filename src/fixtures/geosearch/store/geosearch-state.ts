import type { Extent } from '@/geo/api';

export interface QueryParams {
    type: string;
    province: string;
    extent: Extent | undefined;
}

export interface MapExtent {
    extent: Extent;
    visible: boolean;
}
