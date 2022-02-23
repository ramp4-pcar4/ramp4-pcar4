import { RampBasemapConfig } from '@/geo/api';

export class OverviewmapState {
    mapConfig: any = undefined;
    basemaps: { [key: string]: RampBasemapConfig } = {};
    startMinimized: boolean = true;
}

export interface OverviewmapConfig {
    basemaps: { [key: string]: RampBasemapConfig };
    startMinimized: boolean;
}
