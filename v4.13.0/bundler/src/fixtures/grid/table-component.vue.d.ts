import { PanelInstance } from '../../api/internal';
import { Attributes } from '../../geo/api';
import { GridConfig } from './store';
import { default as TableStateManager } from './store/table-state-manager';
export interface FilterParams {
    comparator?: (filterDate: any, entryDate: any) => void;
    inRangeInclusive?: boolean;
    textMatcher?: (params: any) => void;
    textFormatter?: (s: string) => void;
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
        clearFilters?: () => void;
        rowData?: Attributes[];
    };
    filterParams: FilterParams;
    cellRenderer: (cell: any) => void;
    cellRendererParams?: any;
    sortable: boolean;
    hide: boolean;
    isSelector: boolean;
    lockPosition: boolean;
    suppressHeaderKeyboardEvent: (params: any) => void;
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
        clearFilters?: () => void;
    };
    pinned?: string;
    maxWidth?: number;
    cellStyle: () => void;
    cellRenderer?: () => void;
    cellRendererParams?: any;
    preventExport: boolean;
}
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    panel: {
        type: typeof PanelInstance;
        required: true;
    };
    gridId: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    panel: {
        type: typeof PanelInstance;
        required: true;
    };
    gridId: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {
    el: HTMLDivElement;
    gridContainer: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
