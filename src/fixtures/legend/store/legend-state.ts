import type { PanelWidthObject } from '@/api';

export interface LegendConfig {
    isOpen: boolean;
    isPinned: boolean;
    root: { name: string; children: Array<any>; multilineItems?: boolean };
    headerControls: Array<string>;
    panelWidth: PanelWidthObject | number;
}
