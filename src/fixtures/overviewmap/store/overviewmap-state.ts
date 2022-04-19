import type { RampBasemapConfig } from '@/geo/api';

export class OverviewmapState {
    mapConfig: any = undefined;
    basemaps: { [key: string]: RampBasemapConfig } = {};
    startMinimized = true;
    expandFactor = 1.5;
}

export interface OverviewmapConfig {
    basemaps: { [key: string]: RampBasemapConfig };
    startMinimized: boolean;
    expandFactor: number;
}
