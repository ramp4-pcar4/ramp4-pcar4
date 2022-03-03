import { RampBasemapConfig } from '@/geo/api';

export class OverviewmapState {
    mapConfig: any = undefined;
    basemaps: { [key: string]: RampBasemapConfig } = {};
    startMinimized: boolean = true;
    expandFactor: number = 1.5;
}

export interface OverviewmapConfig {
    basemaps: { [key: string]: RampBasemapConfig };
    startMinimized: boolean;
    expandFactor: number;
}
