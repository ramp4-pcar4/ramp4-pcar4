import type { PanelWidthObject } from '@/api';

export class ExportState {
    componentSelectedState: any = {
        title: true,
        map: true,
        mapElements: true,
        legend: true,
        footnote: true,
        timestamp: true
    };
    fileName: string = '';
}

interface ExportComponentConfig {
    selected?: boolean;
    selectable?: boolean;
    value?: string;
}

interface LegendExportConfig extends ExportComponentConfig {
    columnWidth: number;
}

export interface ExportConfig {
    components: Array<string>;
    title?: ExportComponentConfig;
    map?: ExportComponentConfig;
    mapElements?: ExportComponentConfig;
    legend?: LegendExportConfig;
    footnote?: ExportComponentConfig;
    timestamp?: ExportComponentConfig;
    fileName?: string;
    panelWidth: PanelWidthObject | number;
}
