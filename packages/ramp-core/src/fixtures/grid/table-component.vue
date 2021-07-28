<template>
    <div class="flex flex-col w-full h-full bg-white">
        <div class="flex items-center">
            <span class="w-full text-sm mb-0" v-truncate>
                {{
                    $t('grid.filters.label.info', {
                        range: `${this.filterInfo.firstRow} - ${this.filterInfo.lastRow}`,
                        total: this.filterInfo.visibleRows
                    })
                }}

                <span v-if="this.filterInfo.visibleRows !== this.rowData.length">{{
                    $t('grid.filters.label.filtered', {
                        max: this.rowData.length
                    })
                }}</span>
            </span>
            <div class="flex-grow"></div>

            <button
                class="p-8 disabled:opacity-30 disabled:cursor-default"
                @click="applyFiltersToMap"
                :content="$t('grid.label.filters.apply')"
                v-tippy="{ placement: 'bottom', hideOnClick: false }"
                :disabled="filterSync"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fit=""
                    height="24px"
                    width="24px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    focusable="false"
                >
                    <g id="map-refresh">
                        <path
                            d="m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z"
                        ></path>
                    </g>
                </svg>
            </button>

            <!-- show/hide columns -->
            <column-dropdown :columnApi="columnApi" :columnDefs="columnDefs"></column-dropdown>

            <!-- toggle column filters -->
            <button
                class="p-8"
                @click="toggleShowFilters()"
                :content="
                    gridOptions.floatingFilter
                        ? $t('grid.label.filters.hide')
                        : $t('grid.label.filters.show')
                "
                v-tippy="{ placement: 'bottom', hideOnClick: false }"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fit=""
                    height="24px"
                    width="24px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    focusable="false"
                    class="inline"
                >
                    <g id="filter_cache958">
                        <path
                            d="M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z "
                        ></path>
                    </g>
                </svg>
            </button>
        </div>

        <!-- main grid component -->
        <ag-grid-vue
            class="ag-theme-material flex-grow"
            enableCellTextSelection="true"
            :gridOptions="gridOptions"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :frameworkComponents="frameworkComponents"
            @grid-ready="onGridReady"
            @keydown.native="stopArrowKeyProp"
            @firstDataRendered="gridRendered"
            :doesExternalFilterPass="doesExternalFilterPass"
            :isExternalFilterPresent="isExternalFilterPresent"
        >
        </ag-grid-vue>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';
import { Get, Sync } from 'vuex-pathify';
import { LayerInstance, GlobalEvents } from '@/api/internal';
import { LayerStore } from '@/store/modules/layer';
import { CoreFilter } from '@/geo/api';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridVue } from 'ag-grid-vue3';
import GridColumnDropdownV from './column-dropdown.vue';
import { GridConfig, GridStore } from './store';
import TableStateManager from './store/table-state-manager';
import GridAccessibilityManager from './accessibility';

// custom filter templates
import GridCustomNumberFilterV from './templates/custom-number-filter.vue';
import GridCustomTextFilterV from './templates/custom-text-filter.vue';
import GridCustomSelectorFilterV from './templates/custom-selector-filter.vue';
import GridCustomDateFilterV from './templates/custom-date-filter.vue';
import GridCustomHeaderV from './templates/custom-header.vue';

// grid button templates
import DetailsButtonRendererV from './templates/details-button-renderer.vue';
import ZoomButtonRendererV from './templates/zoom-button-renderer.vue';
import { LayerType } from '@/geo/api';

import { debounce } from 'throttle-debounce';

// these should match up with the `type` value returned by the attribute promise.
const NUM_TYPES: string[] = ['oid', 'double', 'integer'];
const DATE_TYPE: string = 'date';
const TEXT_TYPE: string = 'string';

@Options({
    components: {
        'column-dropdown': GridColumnDropdownV,
        AgGridVue,
        GridCustomNumberFilterV,
        GridCustomSelectorFilterV,
        GridCustomDateFilterV,
        GridCustomTextFilterV,
        GridCustomHeaderV
    }
})
export default class GridTableComponentV extends Vue {
    @Prop() layerUid!: string;
    @Get(LayerStore.getLayerByUid) getLayerByUid!: (
        uid: string
    ) => LayerInstance | undefined;
    @Sync(GridStore.grids) grids!: { [uid: string]: GridConfig };

    handlers: Array<string> = [];

    columnApi: any = null;
    columnDefs: any = [];
    rowData: any = [];
    oidField: string = 'OBJECTID';

    gridAccessibilityManager: GridAccessibilityManager | undefined;

    quicksearch = '';
    filterInfo = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
    };

    filterSync: boolean = true;
    filteredOids: number[] | undefined;

    beforeMount() {
        // load the grid config for this layer
        this.config = this.grids[this.layerUid];

        // imported separate components
        this.frameworkComponents = {
            agColumnHeader: GridCustomHeaderV,
            numberFloatingFilter: GridCustomNumberFilterV,
            textFloatingFilter: GridCustomTextFilterV,
            selectorFloatingFilter: GridCustomSelectorFilterV,
            dateFloatingFilter: GridCustomDateFilterV
        };

        // set up grid options
        this.gridOptions = {
            // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
            ensureDomOrder: true,
            floatingFilter: this.config.state.colFilter,
            suppressRowTransform: true,
            onFilterChanged: () => {
                this.filterSync = this.gridFiltersApplied();
                this.updateFilterInfo();
            },
            onBodyScroll: this.updateFilterInfo,
            rowBuffer: 0,
            suppressColumnVirtualisation: true,
            // remove tab navigation between cells
            tabToNextCell: () => {
                return null;
            },
            onModelUpdated: debounce(300, () =>
                this.columnApi.autoSizeAllColumns()
            )
        };

        const fancyLayer: LayerInstance | undefined = this.getLayerByUid(this.layerUid);
        if (fancyLayer === undefined) {
            // this really shouldn't happen unless the wrong API call is made, but maybe we should
            // do something else here anyway.
            console.error(`Could not find layer with uid ${this.layerUid}.`);
            return;
        }

        if (!fancyLayer.supportsFeatures(this.layerUid)) {
            // This layer does not support features, hence no support for data table
            return;
        }

        fancyLayer.isLayerLoaded().then(() => {
            const tableAttributePromise = fancyLayer.getTabularAttributes(this.layerUid);

            tableAttributePromise.then((tableAttributes: any) => {
                // Iterate through table columns and set up column definitions and column filter stuff.
                // Also adds the `rvSymbol` and `rvInteractive` columns to the table.
                ['rvSymbol', 'rvInteractive', ...tableAttributes.columns].forEach((column: any) => {
                    let col: ColumnDefinition = {
                        headerName: column.title || '',
                        field: column.data || column,
                        isSelector: false,
                        sortable: true,
                        lockPosition: true,
                        filterParams: {},
                        hide: false,
                        maxWidth: 400,
                        cellRenderer: (cell: any) => {
                            return cell.value;
                        }
                    };

                    // retrieve the field info for the column
                    let fieldInfo = tableAttributes.fields.find((field: any) => field.name === col.field);

                    if (column === 'rvSymbol' || column === 'rvInteractive') {
                        this.setUpSymbolsAndInteractive(col, this.columnDefs);
                    } else {
                        // set up column filters according to their respective types
                        if (NUM_TYPES.indexOf(fieldInfo.type) > -1) {
                            this.setUpNumberFilter(col, this.config.state);
                            col.filter = 'agNumberColumnFilter';
                        } else if (fieldInfo.type === DATE_TYPE) {
                            this.setUpDateFilter(col, this.config.state);
                            col.filter = 'agDateColumnFilter';
                            col.minWidth = 400;
                            col.cellRenderer = (cell: any) => {
                                // get YYYY-MM-DD from date
                                return new Date(cell.value).toISOString().slice(0, 10);
                            };
                        } else if (fieldInfo.type === TEXT_TYPE) {
                            if (col.isSelector) {
                                // set up a selector filter instead of a text filter if the `isSelector` flag is true.
                                this.setUpSelectorFilter(col, tableAttributes.rows, this.config.state);
                            } else {
                                this.setUpTextFilter(col, this.config.state);
                            }

                            col.filter = 'agTextColumnFilter';
                        }

                        this.columnDefs.push(col);
                    }
                });

                // load layer data into the table.
                this.rowData = tableAttributes.rows;
                this.updateFilterInfo();

                // save field that contains oid for this layer
                this.oidField = tableAttributes.oidField;
            });
        });
    }

    beforeDestroy() {
        // Remove all event handlers for this component
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
        this.gridAccessibilityManager?.removeAccessibilityListeners();
    }

    onGridReady(params: any) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        // initialize filter info + status
        this.updateFilterInfo();

        // don't need to wait for data to render if rowData available
        if (this.rowData.length > 0) {
            this.columnApi.autoSizeAllColumns();
        }

        // listen for layer filter and visibility events and update grid appropriately
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.FILTER_CHANGE,
                ({ uid, filterKey }: { uid: string; filterKey: string }) => {
                    if (
                        filterKey !== CoreFilter.GRID &&
                        uid &&
                        (uid === this.layerUid ||
                            this.getLayerByUid(uid)!.uid == this.layerUid)
                    ) {
                        this.applyLayerFilters();
                    }
                }
            )
        );
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_VISIBILITYCHANGE,
                ({ visibility, uid }: { visibility: boolean; uid: string }) => {
                    if (
                        uid &&
                        (uid === this.layerUid ||
                            uid === this.getLayerByUid(this.layerUid)!.uid)
                    ) {
                        this.applyLayerFilters();
                    }
                }
            )
        );
        this.applyLayerFilters();
    }

    gridRendered() {
        // size grid columns
        this.columnApi.autoSizeAllColumns();

        this.gridAccessibilityManager = new GridAccessibilityManager(
            this.$el as HTMLElement,
            this.gridApi,
            this.columnApi
        );
    }

    // Updates the global search value.
    updateQuickSearch() {
        this.gridApi.setQuickFilter(this.quicksearch);
    }

    // Toggles the floating (column) filters on and off.
    toggleShowFilters() {
        this.gridOptions.floatingFilter = !this.gridOptions.floatingFilter;
        this.config.state.colFilter = this.gridOptions.floatingFilter;
        this.gridOptions.api.refreshHeader();
    }

    // Updates the current status of the filter.
    updateFilterInfo() {
        if (this.gridApi) {
            this.filterInfo.firstRow = this.gridApi.getFirstDisplayedRow() + 1;
            this.filterInfo.lastRow = this.gridApi.getLastDisplayedRow() + 1;
            this.filterInfo.visibleRows = this.gridApi.getDisplayedRowCount();
        }
    }

    // Clear all table filters.
    // TODO: In the old version of RAMP we had "static filters". If we re-implement these at some point, this function
    // needs to be modified to not wipe them.
    clearFilters() {
        // Replace the filter model with an empty model.
        this.gridApi.setFilterModel({});

        // Clear any saved filter state in the table state manager.
        this.config.state.clearFilters();

        // Refresh the column filters to reset inputs.
        this.gridApi.refreshHeader();
    }

    setUpDateFilter(colDef: any, state: TableStateManager) {
        // Retrieve stored filter values from the state manager if it exists.
        let minVal =
            state.getColumnFilter(colDef.field + ' min') !== undefined
                ? state.getColumnFilter(colDef.field + ' min')
                : '';
        let maxVal =
            state.getColumnFilter(colDef.field + ' max') !== undefined
                ? state.getColumnFilter(colDef.field + ' max')
                : '';

        colDef.floatingFilterComponent = 'dateFloatingFilter';
        colDef.filterParams.comparator = function(filterDate: any, entryDate: any) {
            let entry = new Date(entryDate);

            // We need to specifically compare the UTC year, month, and date because
            // directly comparing the dates returns the wrong value due to timezone differences
            // Thus both dates need to be converted to UTC before comparing

            // Check year
            if (entry.getUTCFullYear() > filterDate.getUTCFullYear()) {
                return 1;
            } else if (entry.getUTCFullYear() < filterDate.getUTCFullYear()) {
                return -1;
            }

            // At this point year is the same
            // Check month
            if (entry.getUTCMonth() > filterDate.getUTCMonth()) {
                return 1;
            } else if (entry.getUTCMonth() < filterDate.getUTCMonth()) {
                return -1;
            }

            // At this point month is the same
            // Now return the sign based on the date difference
            return entry.getUTCDate() - filterDate.getUTCDate();
        };
        colDef.filterParams.inRangeInclusive = true;
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state
        };
    }

    setUpSelectorFilter(colDef: any, rowData: any, state: TableStateManager) {
        // Retrieve stored filter value from the state manager if it exists.
        let value = state.getColumnFilter(colDef.field) !== undefined ? state.getColumnFilter(colDef.field) : '';

        colDef.floatingFilterComponent = 'selectorFloatingFilter';
        colDef.filterParams.inRangeInclusive = true;
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state,
            rowData: rowData
        };
    }

    setUpNumberFilter(colDef: any, state: TableStateManager) {
        // Retrieve stored filter values from the state manager if it exists.
        let minVal =
            state.getColumnFilter(colDef.field + ' min') !== undefined
                ? state.getColumnFilter(colDef.field + ' min')
                : '';
        let maxVal =
            state.getColumnFilter(colDef.field + ' max') !== undefined
                ? state.getColumnFilter(colDef.field + ' max')
                : '';

        colDef.floatingFilterComponent = 'numberFloatingFilter';
        colDef.filterParams.inRangeInclusive = true;
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state
        };
    }

    setUpTextFilter(colDef: any, state: TableStateManager) {
        // Retrieve stored filter value from the state manager if it exists.
        let value = state.getColumnFilter(colDef.field) !== undefined ? state.getColumnFilter(colDef.field) : '';

        colDef.floatingFilterComponent = 'textFloatingFilter';
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state
        };

        // If we want to add different search methods in the future, consider using some sort of generic search function.
        // see: https://github.com/ramp4-pcar4/ramp4-pcar4/pull/57#pullrequestreview-377999397

        // default to regex filtering for text columns
        colDef.filterParams.textCustomComparator = function(filter: any, gridValue: any, filterText: any) {
            // treat * as a regular special character
            const newFilterText = filterText.replace(/\*/, '\\*');
            // surround filter text with .* to match anything before and after
            const re = new RegExp(`^.*${newFilterText}.*`);
            return re.test(gridValue);
        };

        // modified from: https://www.ag-grid.com/javascript-grid-filter-text/#text-formatter
        let disregardAccents = function(s: any) {
            if (isNaN(s)) {
                // check if s is a number before trying to convert it to lowercase (otherwise throws error)
                let r = s.toLowerCase();
                r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
                r = r.replace(new RegExp('æ', 'g'), 'ae');
                r = r.replace(new RegExp('ç', 'g'), 'c');
                r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
                r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
                r = r.replace(new RegExp('ñ', 'g'), 'n');
                r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
                r = r.replace(new RegExp('œ', 'g'), 'oe');
                r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
                r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
                return r;
            }
            return s;
        };

        // for individual columns
        colDef.filterParams.textFormatter = function(s: any) {
            return disregardAccents(s);
        };
    }

    setUpSymbolsAndInteractive(col: any, colDef: any) {
        // Set up the interactive column that contains the zoom and details button.
        // TODO: add details functionality.
        if (col.field === 'rvInteractive') {
            let detailsDef = {
                sortable: false,
                filter: false,
                lockPosition: true,
                isStatic: true,
                maxWidth: 40,
                cellStyle: () => {
                    return {
                        padding: '0px'
                    };
                },
                cellRendererFramework: DetailsButtonRendererV,
                cellRendererParams: {
                    uid: this.layerUid,
                    $iApi: this.$iApi
                }
            };
            colDef.push(detailsDef);

            let zoomDef = {
                sortable: false,
                filter: false,
                lockPosition: true,
                isStatic: true,
                maxWidth: 40,
                cellStyle: () => {
                    return {
                        padding: '0px'
                    };
                },
                cellRendererFramework: ZoomButtonRendererV,
                cellRendererParams: {
                    uid: this.layerUid,
                    $iApi: this.$iApi,
                    oidField: this.oidField
                }
            };
            colDef.push(zoomDef);
        }

        // Set up the symbol column.
        if (col.field === 'rvSymbol') {
            let iconDef = {
                sortable: false,
                filter: false,
                lockPosition: true,
                isStatic: true,
                maxWidth: 82,
                cellRenderer: (cell: any) => {
                    const layer: LayerInstance | undefined = this.getLayerByUid(this.layerUid);
                    if (layer === undefined) return;
                    const iconContainer = document.createElement('span');
                    const oid = cell.data[this.oidField];
                    layer.getIcon(oid, this.layerUid).then(i => {
                        iconContainer.innerHTML = i;
                    });
                    return iconContainer;
                },
                cellStyle: (cell: any) => {
                    return {
                        paddingTop: '7px',
                        textAlign: 'center'
                    };
                }
            };

            colDef.push(iconDef);
        }
    }

    // checks if any external (layer) filters are applied
    isExternalFilterPresent() {
        return this.filteredOids !== undefined;
    }

    // filters row based on layer filter
    doesExternalFilterPass(node: any) {
        return this.filteredOids!.includes(node.data[this.oidField]);
    }

    // updates external grid filter based on layer filter and rerenders grid
    async applyLayerFilters() {
        const layer = this.getLayerByUid(this.layerUid)!;
        if (!layer.getVisibility(this.layerUid)) {
            this.filteredOids = [];
        } else {
            this.filteredOids = await layer.getFilterOIDs(
                [CoreFilter.GRID],
                undefined,
                this.layerUid
            );
        }
        this.gridApi.onFilterChanged();
    }

    applyFiltersToMap() {
        const mapFilterQuery = this.getFiltersQuery();
        const layer = this.getLayerByUid(this.layerUid);
        layer!.setSqlFilter(CoreFilter.GRID, mapFilterQuery, this.layerUid);
        this.filterSync = true;
    }

    // get filter SQL query string
    getFiltersQuery() {
        const filterModel = this.gridApi.getFilterModel();
        let colStrs: any = [];
        Object.keys(filterModel).forEach(col => {
            colStrs.push(this.filterToSql(col, filterModel[col]));
        });
        if (this.quicksearch && this.quicksearch.length > 0) {
            const globalSearchVal = this.globalSearchToSql() || '1=2';
            if (globalSearchVal.length > 0) {
                // do not push an empty global search
                colStrs.push(`(${globalSearchVal})`);
            }
        }
        return colStrs.join(' AND ');
    }

    // converts columns filter to SQL
    filterToSql(col: string, colFilter: any): any {
        const column = this.columnApi.getColumn(col).colDef;
        switch (colFilter.filterType) {
            case 'number':
                switch (colFilter.type) {
                    case 'greaterThanOrEqual':
                        return `${col} >= ${colFilter.filter}`;
                    case 'lessThanOrEqual':
                        return `${col} <= ${colFilter.filter}`;
                    case 'inRange':
                        return `${col} >= ${colFilter.filter} AND ${col} <= ${colFilter.filterTo}`;
                    default:
                        break;
                }
                break;
            case 'text':
                if (column.isSelector) {
                    return `UPPER(${col}) IN (${colFilter.filter.toUpperCase()})`;
                } else {
                    let val = colFilter.filter.replace(/'/g, /''/);
                    if (val !== '') {
                        // following code is to UNESCAPE all special chars for ESRI and geoApi SQL to parse properly (remove the backslash)
                        const escRegex = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
                        // remVal stores the remaining string text after the last special char (or the entire string, if there are no special chars at all)
                        let remVal = val;
                        let newVal = '';
                        let escMatch = escRegex.exec(val);
                        // lastIdx stores the last found index of the start of an escaped special char
                        let lastIdx = 0;
                        while (escMatch) {
                            // update all variables after finding an escaped special char, preserving all text except the backslash
                            newVal =
                                newVal +
                                val.substr(lastIdx, escMatch.index - lastIdx) +
                                escMatch[0].slice(-1);
                            lastIdx = escMatch.index + 2;
                            remVal = val.substr(escMatch.index + 2);
                            escMatch = escRegex.exec(val);
                        }
                        newVal = newVal + remVal;

                        // add ௌ before % and/or _ to act as the escape character
                        // can change to MOST other characters and should still work (ideally want an escape char no one will search for) - just replace all instances of ௌ
                        newVal = newVal.replace(/%/g, 'ௌ%');
                        newVal = newVal.replace(/_/g, 'ௌ_');
                        const filterVal = `*${newVal}`;
                        newVal = filterVal.split(' ').join('*');
                        // if val contains a % or _, add ESCAPE 'ௌ' at the end of the query
                        let sqlWhere = `UPPER(${col}) LIKE \'${newVal
                            .replace(/\*/g, '%')
                            .toUpperCase()}%\'`;
                        return sqlWhere.includes('ௌ%') ||
                            sqlWhere.includes('ௌ_')
                            ? `${sqlWhere} ESCAPE \'ௌ\'`
                            : sqlWhere;
                    }
                }
                break;
            case 'date': {
                const dateFrom = new Date(colFilter.dateFrom);
                const dateTo = new Date(colFilter.dateTo);
                const from = dateFrom
                    ? `${dateFrom.getMonth() +
                          1}/${dateFrom.getDate()}/${dateFrom.getFullYear()}`
                    : undefined;
                const to = dateTo
                    ? `${dateTo.getMonth() +
                          1}/${dateTo.getDate()}/${dateTo.getFullYear()}`
                    : undefined;
                switch (colFilter.type) {
                    case 'greaterThanOrEqual':
                        return `${col} >= DATE '${from}'`;
                    case 'lessThanOrEqual':
                        return `${col} <= DATE '${from}'`; // ag-grid uses from for a single upper limit as well
                    case 'inRange':
                        return `${col} >= DATE '${from}' AND ${col} <= DATE '${to}'`;
                    default:
                        break;
                }
            }
        }
    }

    // convert global search to SQL string filter of columns excluding unfiltered columns
    globalSearchToSql(): string {
        // TODO: support for global search on dates
        let val = this.quicksearch.replace(/'/g, "''");
        // to implement quick filters, first need to split the search text on white space
        const searchVals = val.split(' ');

        const sortedRows = this.gridApi.rowModel.rowsToDisplay;
        this.columnApi;
        const columns = this.columnApi
            .getAllDisplayedColumns()
            .filter(
                (column: any) =>
                    column.colDef.filter === 'agTextColumnFilter' ||
                    column.colDef.filter === 'agNumberColumnFilter'
            );

        let filteredColumns: any = [];

        sortedRows.forEach((row: any) => {
            let rowMatch = true;
            let rowSql = '';
            // each row must contain all of the split search values
            for (let searchVal of searchVals) {
                const re = new RegExp(
                    `.*${searchVal
                        .split(' ')
                        .join('.*')
                        .toUpperCase()}`
                );
                const filterVal = `%${searchVal
                    .replace(/\*/g, '%')
                    .split(' ')
                    .join('%')
                    .toUpperCase()}`;
                // if any column data matches the search val in regex form, set foundVal to true and proceed to next search term
                let foundVal = false;
                for (let column of columns) {
                    // process global search sql independently for text and number columnns
                    if (column.colDef.filter === 'agTextColumnFilter') {
                        const cellData =
                            row.data[column.colId] === null
                                ? null
                                : row.data[column.colId].toString();
                        if (
                            cellData !== null &&
                            re.test(cellData.toUpperCase())
                        ) {
                            rowSql
                                ? (rowSql = rowSql.concat(
                                      ' AND ',
                                      `(UPPER(${column.colId}) LIKE \'${filterVal}%\')`
                                  ))
                                : (rowSql = rowSql.concat(
                                      '(',
                                      `(UPPER(${column.colId}) LIKE \'${filterVal}%\')`
                                  ));
                            // if we have already stored the current sql break from loop
                            filteredColumns.includes(rowSql + ')')
                                ? (foundVal = false)
                                : (foundVal = true);
                            break;
                        }
                    } else if (
                        column.colDef.filter === 'agNumberColumnFilter'
                    ) {
                        const cellData =
                            row.data[column.colId] === null
                                ? null
                                : row.data[column.colId];
                        if (cellData !== null && re.test(cellData)) {
                            rowSql
                                ? (rowSql = rowSql.concat(
                                      ' AND ',
                                      `(${column.colId} = ${cellData})`
                                  ))
                                : (rowSql = rowSql.concat(
                                      '(',
                                      `(${column.colId} = ${cellData})`
                                  ));
                            filteredColumns.includes(rowSql + ')')
                                ? (foundVal = false)
                                : (foundVal = true);
                            break;
                        }
                    }
                }
                // otherwise if any split search value is not found, set rowMatch to false and break because it has failed to meet criteria for quick search filters
                if (!foundVal) {
                    rowMatch = false;
                    break;
                }
            }
            // sql is added to array iff all split search values have been found somewhere in the current row data
            if (rowMatch) {
                filteredColumns.push(rowSql + ')');
            }
        });
        return filteredColumns.join(' OR ');
    }

    // checks if current grid filters are applied to map
    gridFiltersApplied() {
        const gridQuery = this.getFiltersQuery();
        const layer = this.getLayerByUid(this.layerUid);
        const layerQuery = layer!.getSqlFilter(CoreFilter.GRID, this.layerUid);
        return gridQuery === layerQuery;
    }

    stopArrowKeyProp(event: KeyboardEvent) {
        const arrowKeys = ['ArrowDown', 'Down', 'ArrowLeft', 'Left', 'ArrowUp', 'Up', 'ArrowRight', 'Right'];
        if (arrowKeys.includes(event.key)) {
            event.stopPropagation();
        }
    }
}

export default interface TableComponent {
    config: GridConfig;
    gridOptions: any;
    gridApi: any;
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
    filterByExtent: any;
}

interface ColumnDefinition {
    field: String;
    headerName: String;
    headerTooltip?: String;
    alias?: String;
    width?: Number;
    maxWidth?: Number;
    minWidth?: Number;
    filter?: String;
    filterParams: {
        comparator?: Function;
    };
    cellRenderer: Function;
    sortable: Boolean;
    hide: Boolean;
    isSelector: Boolean;
    lockPosition: Boolean;
}
</script>

<style scoped>
::v-deep .ag-header-cell-sortable {
    cursor: default;
}

::v-deep .ag-header-cell {
    background: none;
    border: none;
}
</style>
