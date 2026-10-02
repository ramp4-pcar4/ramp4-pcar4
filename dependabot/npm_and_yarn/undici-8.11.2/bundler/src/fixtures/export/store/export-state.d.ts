import { PanelWidthObject } from '../../../api';
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
export {};
