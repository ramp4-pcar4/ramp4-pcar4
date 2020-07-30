import { LegendItem } from './legend-defs';

export class LegendState {
    legendConfig: LegendConfig | undefined = undefined;
    children: Array<LegendItem> = [];
}

export interface LegendConfig {
    isOpen: boolean;
    reorderable: boolean;
    root: { name: string; children: Array<any> };
}
