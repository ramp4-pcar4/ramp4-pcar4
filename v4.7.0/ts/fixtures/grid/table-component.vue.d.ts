import { PanelInstance } from '@/api/internal';
import type { Attributes } from '@/geo/api';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import type { GridConfig } from './store';
import TableStateManager from './store/table-state-manager';
export interface FilterParams {
    comparator?: Function;
    inRangeInclusive?: boolean;
    textMatcher?: Function;
    textFormatter?: Function;
}
export interface TableComponent {
    config: GridConfig;
    agGridOptions: any;
    agGridApi: any;
    columnApi: any;
    columnDefs: any;
    rowData: any;
    frameworkComponents: any;
    quicksearch: string;
    filterInfo: {
        firstRow: number;
        lastRow: number;
        visibleRows: number;
    };
    filterStatus: string;
    filterByExtent: boolean;
}
export interface ColumnDefinition {
    field: string;
    headerName: string;
    headerComponent: string;
    headerComponentParams: any;
    headerTooltip?: string;
    alias?: string;
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    filter?: string;
    floatingFilter?: boolean;
    floatingFilterComponent?: string;
    floatingFilterComponentParams?: {
        suppressFilterButton: boolean;
        stateManager: TableStateManager;
        clearFilters?: Function;
        rowData?: Attributes[];
    };
    filterParams: FilterParams;
    cellRenderer: Function;
    cellRendererParams?: any;
    sortable: boolean;
    hide: boolean;
    isSelector: boolean;
    lockPosition: boolean;
    suppressHeaderKeyboardEvent: Function;
    autoHeight?: boolean;
}
export interface SpecialColumnDefinition {
    sortable: boolean;
    filter: boolean;
    lockPosition: boolean;
    isStatic?: boolean;
    valueGetter?: string;
    suppressMovable?: boolean;
    suppressMenu?: boolean;
    floatingFilter?: any;
    floatingFilterComponent?: string;
    floatingFilterComponentParams?: {
        suppressFilterButton: boolean;
        stateManager: TableStateManager;
        clearFilters?: Function;
    };
    pinned?: string;
    maxWidth?: number;
    cellStyle: Function;
    cellRenderer?: Function;
    cellRendererParams?: any;
    preventExport: boolean;
}
declare const _default: import("vue").DefineComponent<{
    panel: {
        type: typeof PanelInstance;
        required: true;
    };
    gridId: {
        type: StringConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    panel: {
        type: typeof PanelInstance;
        required: true;
    };
    gridId: {
        type: StringConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _default;
