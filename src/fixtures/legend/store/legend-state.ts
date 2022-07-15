import type { PanelWidthObject } from '@/api';
import type { LegendItem } from './legend-defs';

export class LegendState {
    legendConfig: LegendConfig | undefined = undefined;
    children: Array<LegendItem> = [];
    headerControls: Array<string> = [];
}

export interface LegendConfig {
    isOpen: boolean;
    isPinned: boolean;
    root: { name: string; children: Array<any> };
    headerControls: Array<string>;
    panelWidth: PanelWidthObject | number;
}
