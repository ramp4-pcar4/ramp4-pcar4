<template>
    <div class="w-full bg-white">
        <div class="flex items-center">
            <span class="truncate w-full text-sm mb-0">{{ filterStatus }}</span>
            <div class="flex-grow"></div>

            <!-- show/hide columns -->
            <column-dropdown :columnApi="columnApi" :columnDefs="columnDefs"></column-dropdown>

            <!-- toggle column filters -->
            <div>
                <button class="w-64" @click="toggleShowFilters()">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        height="16px"
                        width="16px"
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
                    Filters
                </button>
            </div>
        </div>

        <!-- main grid component -->
        <ag-grid-vue
            class="ag-theme-material"
            style="height: 580px;"
            :gridOptions="gridOptions"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :frameworkComponents="frameworkComponents"
            @grid-ready="onGridReady"
        >
        </ag-grid-vue>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LayerStore, layer } from '@/store/modules/layer';
import FeatureLayer from 'ramp-geoapi/dist/layer/FeatureLayer';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridVue } from 'ag-grid-vue';
import ColumnDropdown from '../column-dropdown.vue';
import { GridStore, GridConfig, GridState } from '../store';
import TableStateManager from '../store/table-state-manager';

// custom filter templates
import CustomNumberFilter from './CustomNumberFilter.vue';
import CustomTextFilter from './CustomTextFilter.vue';
import CustomSelectorFilter from './CustomSelectorFilter.vue';
import CustomDateFilter from './CustomDateFilter.vue';
import CustomHeader from './CustomHeader.vue';

const NUM_TYPES: string[] = ['oid', 'double', 'integer'];
const DATE_TYPE: string = 'date';
const TEXT_TYPE: string = 'string';

@Component({
    components: {
        'column-dropdown': ColumnDropdown,
        AgGridVue,
        CustomNumberFilter,
        CustomSelectorFilter,
        CustomDateFilter,
        CustomTextFilter,
        CustomHeader
    }
})
export default class TableComponent extends Vue {
    @Prop() layerUid!: string;
    @Get(LayerStore.layers) layers!: FeatureLayer[];
    @Sync(`grid/grids`) grids!: { [uid: string]: GridConfig };

    columnApi: any = null;
    columnDefs: any = [];
    rowData: any = [];

    quicksearch = '';
    filterInfo = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
    };
    filterStatus = '';

    beforeMount() {
        // load the grid config for this layer
        this.config = this.grids[this.layerUid];

        // imported separate components
        this.frameworkComponents = {
            agColumnHeader: CustomHeader,
            numberFloatingFilter: CustomNumberFilter,
            textFloatingFilter: CustomTextFilter,
            selectorFloatingFilter: CustomSelectorFilter,
            dateFloatingFilter: CustomDateFilter
        };

        // set up grid options
        this.gridOptions = {
            floatingFilter: this.config.state.colFilter,
            suppressRowTransform: true,
            onFilterChanged: this.updateFilterInfo,
            onBodyScroll: this.updateFilterInfo,
            rowBuffer: 0
        };

        const fancyLayer: FeatureLayer | undefined = this.layers.find((l: any) => l.uid === this.layerUid);
        if (fancyLayer === undefined) {
            // this really shouldn't happen unless the wrong API call is made, but maybe we should
            // do something else here anyway.
            console.error(`Could not find layer with uid ${this.layerUid}.`);
            return;
        }

        fancyLayer.isLayerLoaded().then(() => {
            const tableAttributePromise = fancyLayer.getTabularAttributes();

            tableAttributePromise.then((tableAttributes: any) => {
                ['rvSymbol', 'rvInteractive', ...tableAttributes.columns].forEach((column: any) => {
                    let col: ColumnDefinition = {
                        headerName: column.title || '',
                        field: column.data || column,
                        isSelector: false,
                        sortable: true,
                        lockPosition: true,
                        filterParams: {},
                        hide: false,
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
                        } else if (fieldInfo.type === TEXT_TYPE) {
                            if (col.isSelector) {
                                this.setUpSelectorFilter(col, tableAttributes.rows, this.config.state);
                            } else {
                                this.setUpTextFilter(col, this.config.state);
                            }

                            col.filter = 'agTextColumnFilter';
                        }

                        this.columnDefs.push(col);
                    }
                });

                // load layer rows
                this.rowData = tableAttributes.rows;
                this.updateFilterInfo();
            });
        });
    }

    onGridReady(params: any) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        // initialize filter info + status
        this.updateFilterInfo();
    }

    updateQuickSearch() {
        this.gridApi.setQuickFilter(this.quicksearch);
    }

    toggleShowFilters() {
        this.gridOptions.floatingFilter = !this.gridOptions.floatingFilter;
        this.config.state.colFilter = this.gridOptions.floatingFilter;
        this.gridOptions.api.refreshHeader();
    }

    updateFilterInfo() {
        // update filter info
        if (this.gridApi) {
            this.filterInfo.firstRow = this.gridApi.getFirstDisplayedRow() + 1;
            this.filterInfo.lastRow = this.gridApi.getLastDisplayedRow() + 1;
            this.filterInfo.visibleRows = this.gridApi.getDisplayedRowCount();
            this.updateFilterStatus();
        }
    }

    updateFilterStatus() {
        this.filterStatus = `${this.filterInfo.firstRow} - ${this.filterInfo.lastRow} of ${this.filterInfo.visibleRows} entries shown`;

        if (this.filterInfo.visibleRows !== this.rowData.length) {
            this.filterStatus += ` (filtered from ${this.rowData.length} records)`;
        }
    }

    setUpDateFilter(colDef: any, state: TableStateManager) {
        let minVal = state.getColumnFilter(colDef.field + ' min') !== undefined ? state.getColumnFilter(colDef.field + ' min') : '';
        let maxVal = state.getColumnFilter(colDef.field + ' max') !== undefined ? state.getColumnFilter(colDef.field + ' max') : '';

        colDef.floatingFilterComponent = 'dateFloatingFilter';
        colDef.filterParams.comparator = function(filterDate: any, entryDate: any) {
            let entry = new Date(entryDate);
            if (entry > filterDate) {
                return 1;
            } else if (entry < filterDate) {
                return -1;
            } else {
                return 0;
            }
        };
        colDef.filterParams.inRangeInclusive = true;
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state,
            minValDefault: minVal,
            maxValDefault: maxVal
        };
    }

    setUpSelectorFilter(colDef: any, rowData: any, state: TableStateManager) {
        let value = state.getColumnFilter(colDef.field) !== undefined ? state.getColumnFilter(colDef.field) : '';

        colDef.floatingFilterComponent = 'selectorFloatingFilter';
        colDef.filterParams.inRangeInclusive = true;
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state,
            defaultValue: value,
            rowData: rowData
        };
    }

    setUpNumberFilter(colDef: any, state: TableStateManager) {
        let minVal = state.getColumnFilter(colDef.field + ' min') !== undefined ? state.getColumnFilter(colDef.field + ' min') : '';
        let maxVal = state.getColumnFilter(colDef.field + ' max') !== undefined ? state.getColumnFilter(colDef.field + ' max') : '';

        colDef.floatingFilterComponent = 'numberFloatingFilter';
        colDef.filterParams.inRangeInclusive = true;
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state,
            minValDefault: minVal,
            maxValDefault: maxVal
        };
    }

    setUpTextFilter(colDef: any, state: TableStateManager) {
        let value = state.getColumnFilter(colDef.field) !== undefined ? state.getColumnFilter(colDef.field) : '';

        colDef.floatingFilterComponent = 'textFloatingFilter';
        colDef.floatingFilterComponentParams = {
            suppressFilterButton: true,
            stateManager: state,
            defaultValue: value
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
        if (col.field === 'rvInteractive') {
            let zoomDef = {
                sortable: false,
                filter: false,
                lockPosition: true,
                isStatic: true,
                width: 40,
                cellRenderer: (cell: any) => {
                    return '<button><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></button>';
                },
                cellStyle: (cell: any) => {
                    return {
                        padding: '0px',
                        paddingTop: '3px',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    };
                }
            };
            colDef.push(zoomDef);

            let detailsDef = {
                sortable: false,
                filter: false,
                lockPosition: true,
                isStatic: true,
                width: 40,
                cellRenderer: (cell: any) => {
                    return '<button class="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg></button>';
                },
                cellStyle: (cell: any) => {
                    return {
                        padding: '0px',
                        paddingTop: '3px',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    };
                }
            };
            colDef.push(detailsDef);
        }

        if (col.field === 'rvSymbol') {
            let iconDef = {
                sortable: false,
                filter: false,
                lockPosition: true,
                isStatic: true,
                width: 82,
                cellRenderer: (cell: any) => {
                    return '<svg id="SvgjsSvg1175" width="32" height="32" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 32 32"><defs id="SvgjsDefs1176"></defs><image id="SvgjsImage1177" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA+BJREFUSIm1lVlslFUUx39n9k5n2k73KbO0BYEimC4uIfJAlGCCSICkqYmJjyY8+GCixu2RRDQQozG+GHnQB0hMiEsMhhg1EUgIVEjaaCsUmC5QmK6zfrN9xwdi7TfTSsV43u69/3t+93/u/b7j4H8Ox1pEqmoDuoEwUA/MADFgSET0gQGq2qaqbwH9+WyquWCkKBXy2F1uXFV+nG7vlGmaJ0TkPRGZ+VcAVX3ZNEtH5idHvHM3L2Okpis03rrwuob23ldrgxteUtVXROT4mgCmaX5ipBcPjQ9+Qy51Z1WHmYUJMlcmmI1FayK9z35mmuZmm832+j8CVPXNbGL20I0LJykVsqsmt4DmY4ydO0Hn9oHXVHVSRD5aEaCq3cVc9nDs0leW5CJ2In0HqappRFVJxmPcGj5tgRSMeWKD37J+e/8xVT0jIiMrOThy5+oFW8GYt0x6AxEQG6M/f4rd4SH62EEcLj/FfNKiMxJTzI4PO5o6ut8FDlgAqhouGOln5sYHlzY4PQHatu7C7vLgcHmJ9B64N+/2Ee7ZSzGXYeLK1xZI/Oo5GqLb9qlqs4jcXe7gueTMBPD3s7Y73NQ0R5fGbq9/GdxLqZCjPErFLOn5aZu/Yd1e4PhyB1uMRNwiNkt5jPQiNpudgpGyrHl8ATKJFZ8+ueQsvvq2LkuJRKSlmMtYhIFoD/nUAkZ6jrsjP1Ib6qaYS5GKX6X98efJpReoC/WwMHnZsq+YzwK0WgCqaojdeucNkYdZuHUNgJaup3G6/biq/Yjtnq6UN6gNPlQBEJsdIGsBALecHr9FqKZJdnEaV3UAp6eGZPw63mIQd3UAgMT0KFV1zRUlcrqrAW6Xl+h8dX0by28hn0nQtP5RFqfHuDP6C8GunRQLBnOxS/gaI4S795CanawAeANBRORcuYMzvvpgyuGu9RVziwCMnf+culAPbl89+Uyc2OCXlkQ3L56i/Jupqg3h8dUtAD+VO8iapvlhy8Ydb08NfVdxqrVGy6YdAEdFpFDuABF5PxDa/GJyJhZO3B7G4w8S2vYUAE0d3RXJNux4gd9/+Hhp3Nj5JP7G0BjwwV9z5YCEqu4PP7Lr7HipWJW8O8Lw6WNrOnkg3EfrxieSwD4RWXrvFX9TEflVVXdH+/acil9va4pfO4tZyq+a2O700rJpJw2RLVPAfhH5bfn6iv1ARM6qal9TZ8/RQKirf/H2NUnFb5BLz1EqpHG4fLh9TfibO6ht7TRtDtcXwBsiUtGVVu1oIjIBDKjq4Ybo1oHG9m27gQgQAGaBm8D3wEkR+WO1PPdt+iIyBAwB79xP+0CA/xp/AqtDiSR2zJWEAAAAAElFTkSuQmCC" width="24" height="24" x="4" y="4" transform="matrix(1,0,0,1,0,0)"></image></svg>';
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

    clearColumnFilters() {
        this.gridApi.setQuickFilter(null);
        this.quicksearch = '';

        this.gridOptions.api.setFilterModel({});
        this.gridApi.refreshHeader();
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
