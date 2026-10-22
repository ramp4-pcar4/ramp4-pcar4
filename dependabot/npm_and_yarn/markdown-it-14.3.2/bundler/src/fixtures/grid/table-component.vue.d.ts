import { PanelInstance } from '../../api/internal';
import { Attributes } from '../../geo/api';
import { default as TableStateManager } from './store/table-state-manager';
export interface FilterParams {
    comparator?: (filterDate: any, entryDate: any) => void;
    inRangeInclusive?: boolean;
    textMatcher?: (params: any) => void;
    textFormatter?: (s: string) => void;
}
/**
 * column definition for typical columns of layer-sourced data
 */
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
        stateManager: TableStateManager;
        clearFilters?: () => void;
        rowData?: Attributes[];
    };
    filterParams: FilterParams;
    cellRenderer: (cell: any) => any;
    cellRendererParams?: any;
    sortable: boolean;
    hide: boolean;
    lockPosition: boolean;
    suppressFloatingFilterButton?: boolean;
    suppressHeaderKeyboardEvent: (params: any) => boolean;
    autoHeight?: boolean;
}
/**
 * column definition for specialized columns (index, symbols, action buttons)
 */
export interface SpecialColumnDefinition {
    field?: string;
    headerName?: string;
    sortable: boolean;
    filter: boolean;
    lockPosition: boolean;
    valueGetter?: string;
    suppressMovable?: boolean;
    suppressFloatingFilterButton?: boolean;
    suppressHeaderMenuButton?: boolean;
    suppressHeaderContextMenu?: boolean;
    floatingFilter?: any;
    floatingFilterComponent?: string;
    floatingFilterComponentParams?: {
        stateManager: TableStateManager;
        clearFilters?: () => void;
    };
    pinned?: 'left' | 'right' | boolean | null;
    maxWidth?: number;
    headerComponent?: string;
    headerComponentParams?: any;
    cellDataType?: boolean;
    cellStyle?: () => any;
    cellRenderer?: any;
    cellRendererParams?: any;
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
