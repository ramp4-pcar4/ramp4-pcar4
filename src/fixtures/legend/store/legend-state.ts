import type { PanelWidthObject } from '@/api';

export interface LegendConfig {
    isOpen: boolean;
    isPinned: boolean;
    root: { name: string; children: Array<any> };
    headerControls: Array<string>;
    searchFilter: string;
    panelWidth: PanelWidthObject | number;
}
