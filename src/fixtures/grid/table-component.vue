<template>
    <div class="flex flex-col w-full h-full bg-white" ref="el">
        <div v-show="isErrorGrid">
            <p class="pl-8">{{ t('grid.splash.error') }}</p>
        </div>
        <div
            v-show="isLoadingGrid && !isErrorGrid"
            class="flex flex-col justify-center items-center h-full"
        >
            <!-- show loading animation if loading -->
            <div class="flex flex-row">
                <span class="font-bold text-2xl">{{
                    loadedRecordCount.reduce((sum, count) => sum + count, 0)
                }}</span>
                <svg class="stroke-black stroke-1" height="50" width="25">
                    <line x1="0" y1="50" x2="25" y2="0"></line>
                </svg>
                <span class="mt-20 text-xl">{{ totalRecordCount }}</span>
            </div>
            <div class="my-20">
                <span class="text-sm">{{
                    loadedRecordCount.reduce((sum, count) => sum + count, 0) <
                    totalRecordCount
                        ? t('grid.splash.loading')
                        : t('grid.splash.building')
                }}</span>
            </div>
            <div>
                <button
                    type="button"
                    @click="closeGrid"
                    class="py-8 px-8 sm:px-16 bg-gray-300"
                    :aria-label="t('grid.splash.cancel')"
                >
                    {{ t('grid.splash.cancel') }}
                </button>
            </div>
        </div>

        <!-- render grid if loading is done -->
        <div
            v-show="!isLoadingGrid && !isErrorGrid"
            class="flex flex-wrap gap-y-8 items-center pl-8 pb-8"
        >
            <div class="flex flex-1 flex-col max-w-full mr-8">
                <div
                    v-show="gridTitle !== ''"
                    class="w-full font-bold"
                    v-truncate
                >
                    {{ gridTitle }}
                </div>

                <div class="w-full text-sm" v-truncate>
                    {{
                        t('grid.filters.label.info', {
                            range: `${filterInfo.firstRow} - ${filterInfo.lastRow}`,
                            total: filterInfo.visibleRows
                        })
                    }}

                    <span v-if="filterInfo.visibleRows !== rowData.length">{{
                        t('grid.filters.label.filtered', {
                            max: rowData.length
                        })
                    }}</span>
                </div>
            </div>

            <div class="flex flex-1 grow-[1.4] items-center max-w-full">
                <!-- show global search -->
                <div
                    class="flex flex-1 min-w-0 items-center pb-4 mr-8"
                    v-show="config.state.search"
                >
                    <!-- global search bar -->
                    <input
                        @input="updateQuickSearch()"
                        @keypress.enter.prevent
                        @keyup.enter="
                            if (panelStore.mobileView) {
                                //@ts-ignore
                                $event?.target?.blur();
                            }
                        "
                        enterkeyhint="done"
                        v-model="config.state.searchFilter"
                        class="rv-global-search rv-input pr-32 min-w-0"
                        aria-invalid="false"
                        :aria-label="t('grid.filters.label.global')"
                        :placeholder="t('grid.filters.label.global')"
                    />
                    <!-- clear search button -->
                    <div class="-ml-30">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fit=""
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="fill-current w-24 h-24 flex-shrink-0"
                            v-if="config.state.searchFilter.length < 3"
                        >
                            <g id="search_cache224">
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                ></path>
                            </g>
                        </svg>
                        <button
                            class="flex justify-center fill-current ml-6 cursor-pointer"
                            @click="resetQuickSearch()"
                            v-else
                        >
                            <svg
                                data-v-486a0302=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 352 512"
                                class="w-18 h-18 mt-2"
                            >
                                <path
                                    data-v-486a0302=""
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="pb-2 flex ml-auto justify-end">
                    <!-- show/hide columns -->
                    <column-dropdown
                        :columnApi="columnApi"
                        :columnDefs="columnDefs"
                        :oidCols="oidCols"
                    ></column-dropdown>

                    <!-- clear all filters -->
                    <button
                        type="button"
                        class="p-4 h-40 text-gray-500 hover:text-black"
                        @click="clearSearchAndFilters()"
                        :content="t('grid.clearAll')"
                        v-tippy="{
                            placement: 'bottom'
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            width="24px"
                            viewBox="0 0 24 24"
                            class="inline fill-current"
                        >
                            <g id="filter_cache958">
                                <path
                                    d="M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "
                                ></path>
                            </g>
                        </svg>
                    </button>

                    <!-- grid options dropdown -->
                    <dropdown-menu
                        class="h-40 w-40"
                        :position="'bottom-end'"
                        :tooltip="t('panels.controls.optionsMenu')"
                        :centered="false"
                    >
                        <template #header
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="fill-current m-8 w-24 h-24"
                            >
                                <path
                                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                />
                            </svg>
                        </template>
                        <!-- toggle apply to map -->
                        <a
                            href="javascript:;"
                            class="flex leading-snug items-center w-256"
                            :class="{
                                hover:
                                    filtersStatus !== 'disabled'
                                        ? 'none'
                                        : 'text-black',
                                disabled: filtersStatus === 'disabled'
                            }"
                            @click="
                                filtersStatus !== 'disabled' &&
                                    toggleFiltersToMap()
                            "
                        >
                            <div class="md-icon-small inline items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current inline w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z"
                                    />
                                </svg>
                                {{ t('grid.label.filters.apply') }}
                                <svg
                                    height="18"
                                    width="18"
                                    viewBox="0 0 24 24"
                                    class="inline float-right"
                                    v-if="
                                        filtersStatus !== 'disabled' &&
                                        config.state.applyToMap
                                    "
                                >
                                    <g id="done">
                                        <path
                                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <!-- toggle column filters -->
                        <a
                            href="javascript:;"
                            class="flex leading-snug items-center w-256 hover:text-black"
                            @click="toggleShowFilters()"
                        >
                            <div class="md-icon-small inline items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current inline w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z "
                                    />
                                </svg>
                                {{ t('grid.label.filters.show') }}
                                <svg
                                    height="18"
                                    width="18"
                                    viewBox="0 0 24 24"
                                    class="inline float-right"
                                    v-if="config.state.colFilter"
                                >
                                    <g id="done">
                                        <path
                                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <!-- toggle extent filter -->
                        <a
                            href="javascript:;"
                            class="flex leading-snug items-center w-256"
                            :class="{
                                hover:
                                    filtersStatus !== 'disabled'
                                        ? 'none'
                                        : 'text-black',
                                disabled: filtersStatus === 'disabled'
                            }"
                            @click="
                                filtersStatus !== 'disabled' &&
                                    toggleFilterByExtent()
                            "
                        >
                            <div class="md-icon-small inline items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current inline w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z"
                                    />
                                </svg>
                                {{ t('grid.filters.extent') }}
                                <svg
                                    height="18"
                                    width="18"
                                    viewBox="0 0 24 24"
                                    class="inline float-right"
                                    v-if="
                                        filtersStatus !== 'disabled' &&
                                        config.state.filterByExtent
                                    "
                                >
                                    <g id="done">
                                        <path
                                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </dropdown-menu>
                </div>
            </div>
        </div>

        <!-- main grid component -->
        <ag-grid-vue
            v-show="!isLoadingGrid && !isErrorGrid"
            class="ag-theme-material flex-grow"
            enableCellTextSelection="true"
            :gridOptions="agGridOptions"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :components="frameworkComponents"
            @grid-ready="onGridReady"
            @keydown="stopArrowKeyProp"
            @firstDataRendered="gridRendered"
            @cell-key-press="onCellKeyPress"
            :doesExternalFilterPass="doesExternalFilterPass"
            :isExternalFilterPresent="isExternalFilterPresent"
        />
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    getCurrentInstance,
    inject,
    markRaw,
    nextTick,
    onBeforeMount,
    onBeforeUnmount,
    ref,
    watch
} from 'vue';

import {
    GlobalEvents,
    InstanceAPI,
    LayerInstance,
    NotificationType,
    PanelInstance
} from '@/api/internal';

import { DefPromise } from '@/geo/api';

import type { Attributes, TabularAttributeSet } from '@/geo/api';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridVue } from 'ag-grid-vue3';
import ColumnDropdown from './column-dropdown.vue';
import { useGridStore, type AttributeMapPair } from './store';
import { usePanelStore } from '@/stores/panel';
import type { ActionButtonDefinition, GridConfig } from './store';
import TableStateManager from './store/table-state-manager';
import ColumnStateManager from './store/column-state-manager';
import {
    GridAccessibilityManager,
    tabToNextCellHandler,
    tabToNextHeaderHandler
} from './accessibility';

// custom filter templates
import GridCustomNumberFilterV from './templates/custom-number-filter.vue';
import GridCustomTextFilterV from './templates/custom-text-filter.vue';
import GridCustomSelectorFilterV from './templates/custom-selector-filter.vue';
import GridCustomDateFilterV from './templates/custom-date-filter.vue';
import GridClearFilterV from './templates/clear-filter.vue';
import GridCustomHeaderV from './templates/custom-header.vue';

// grid button templates
import DetailsButtonRendererV from './templates/details-button-renderer.vue';
import ZoomButtonRendererV from './templates/zoom-button-renderer.vue';
import CustomButtonRendererV from './templates/custom-button-renderer.vue';
import CellRendererV from './templates/cell-renderer.vue';
import { CoreFilter, FieldType } from '@/geo/api';

import { debounce } from 'throttle-debounce';
import type { RowNode } from 'ag-grid-community';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { useI18n } from 'vue-i18n';

// to prevent lint complaining about regex expressions
/* eslint no-useless-escape: 0 */

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
// column definition for specialized columns (index, symbols, etc.)
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
}

// these should match up with the `type` value returned by the attribute promise.
const NUM_TYPES: string[] = [
    FieldType.OID,
    FieldType.DOUBLE,
    FieldType.SINGLE,
    FieldType.INTEGER
];

const iApi = inject<InstanceAPI>('iApi')!;
const gridStore = useGridStore();
const panelStore = usePanelStore();
const el = ref<HTMLElement>();
const { t } = useI18n();
const forceUpdate = () => getCurrentInstance()?.proxy?.$forceUpdate();

const props = defineProps({
    panel: {
        type: PanelInstance,
        required: true
    },
    gridId: {
        type: String,
        required: true
    }
});

const config = ref<GridConfig>({
    id: 'dummy',
    layerIds: [],
    state: new TableStateManager(),
    fieldMap: {}
});
const agGridApi = ref<GridApi>(new GridApi());
const agGridOptions = ref();
const frameworkComponents = ref();
const isLoadingGrid = ref<boolean>(false);
const isErrorGrid = ref<boolean>(false);
const loadedRecordCount = ref<Array<number>>([]);
const totalRecordCount = ref<number>(0);
const handlers = ref<Array<string>>([]);
const watchers = ref<Array<Function>>([]);
const gridTitle = ref<string>('');
const columnApi = ref<ColumnApi>(new ColumnApi());
const columnDefs = ref<Array<any>>([]);
const rowData = ref<Array<Attributes>>([]);
const oidField = ref<string>('OBJECTID'); // this is just placeholder, will get overwritten below
const gridAccessibilityManager = ref<GridAccessibilityManager | undefined>(
    undefined
);
const onCellKeyPress = GridAccessibilityManager.onCellKeyPress;
const filterInfo = ref({ firstRow: 0, lastRow: 0, visibleRows: 0 });
const filteredOids = ref<{ [uid: string]: Array<number> | undefined }>({});
const layer = iApi.geo.layer.getLayer(props.gridId) as LayerInstance;
const layerCols = ref<{
    [id: string]: Array<AttributeMapPair>;
}>({});
const origLayerIds = ref(gridStore.grids[props.gridId].layerIds);
const gridLayers = computed(() => {
    if (gridStore.grids[props.gridId]) {
        return gridStore.grids[props.gridId].layerIds
            .map(id => iApi.geo.layer.getLayer(id) as LayerInstance)
            .filter(layer => layer !== undefined);
    } else return [];
});
const oidCols = ref<Set<string>>(new Set<string>());

// manages fast incoming filter change events. Forces them to finish
// in order to avoid race conditions
const filterQueue = ref<Array<DefPromise>>([]);

const onGridReady = (params: any) => {
    agGridApi.value = params.api;
    columnApi.value = params.columnApi;

    // get grid title
    gridTitle.value = config.value.state.title || layer?.name || props.gridId;

    // initialize filter info + status
    updateFilterInfo();

    // don't need to wait for data to render if rowData available
    if (rowData.value.length > 0) {
        columnApi.value.autoSizeAllColumns();
    }

    // listen for layer filter and visibility events and update grid appropriately
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.FILTER_CHANGE,
            ({ uid, filterKey }: { uid: string; filterKey: string }) => {
                if (
                    filterKey !== CoreFilter.GRID &&
                    uid &&
                    gridLayers.value.map(layer => layer.uid).includes(uid)
                ) {
                    applyLayerFilters();
                }
            }
        )
    );
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_VISIBILITYCHANGE,
            ({ layer }: { visibility: boolean; layer: LayerInstance }) => {
                if (
                    layer.uid &&
                    gridLayers.value.map(layer => layer.uid).includes(layer.uid)
                ) {
                    applyLayerFilters();
                }
            }
        )
    );
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_RELOAD_END,
            (reloadedLayer: LayerInstance) => {
                reloadedLayer.loadPromise().then(() => {
                    if (
                        gridLayers.value
                            .map(layer => layer.uid)
                            .includes(reloadedLayer.uid)
                    ) {
                        applyLayerFilters();
                    }
                });
            }
        )
    );
    handlers.value.push(
        iApi.event.on(GlobalEvents.CONFIG_CHANGE, () => {
            // Refresh the grid when the config changes (the language might have changed)
            agGridApi.value.redrawRows({
                force: true
            } as any);
        })
    );
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            debounce(100, () => {
                if (config.value.state.filterByExtent) {
                    applyLayerFilters();
                }
            })
        )
    );
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (removedLayer: LayerInstance) => {
                if (
                    origLayerIds.value.includes(removedLayer.id) &&
                    gridLayers.value.length !== 0
                ) {
                    // recreate grid on layer removal
                    setUpColumns();
                }
            }
        )
    );
    applyLayerFilters();
};

const gridRendered = () => {
    // size grid columns
    columnApi.value.autoSizeAllColumns();

    gridAccessibilityManager.value = new GridAccessibilityManager(
        el.value!,
        agGridApi.value as GridApi,
        columnApi.value as ColumnApi
    );
};

// Updates the global search value.
const updateQuickSearch = () => {
    agGridApi.value.setQuickFilter(config.value.state.searchFilter);
};

const resetQuickSearch = () => {
    config.value.state.searchFilter = '';
    updateQuickSearch();
};

const clearSearchAndFilters = () => {
    resetQuickSearch();
    clearFilters();
    applyLayerFilters();
};

const toggleFilterByExtent = () => {
    config.value.state.filterByExtent = !config.value.state.filterByExtent;
    applyLayerFilters();
};

// Toggles the floating (column) filters on and off.
const toggleShowFilters = () => {
    let colDefs = agGridOptions.value.api.getColumnDefs();
    config.value.state.colFilter = !config.value.state.colFilter;

    colDefs.forEach((col: ColumnDefinition) => {
        col.floatingFilter = config.value.state.colFilter;
    });

    // Update the column definitions with the new filter value.
    agGridOptions.value.api.setColumnDefs(colDefs);
};

// Updates the current status of the filter.
const updateFilterInfo = () => {
    if (agGridApi.value && !isLoadingGrid.value) {
        if (config.value.state.searchFilter !== '') updateQuickSearch();
        if (config.value.state.applyToMap) {
            applyFiltersToMap();
        }
        nextTick(() => {
            updateRowInfo();
        });
    }
};

const updateRowInfo = () => {
    filterInfo.value.firstRow = agGridApi.value.getFirstDisplayedRow() + 1;
    filterInfo.value.lastRow = agGridApi.value.getLastDisplayedRow() + 1;
    filterInfo.value.visibleRows = agGridApi.value.getDisplayedRowCount();
};

// Clear all table filters.
const clearFilters = () => {
    // Replace the filter model with an empty model.
    agGridApi.value.setFilterModel({});

    // Clear any saved filter state in the table state manager.
    config.value.state.clearFilters();

    // Refresh the column filters to reset inputs.
    agGridApi.value.refreshHeader();
};

const setUpDateFilter = (
    colDef: ColumnDefinition,
    state: TableStateManager
) => {
    colDef.floatingFilterComponent = 'dateFloatingFilter';
    colDef.filterParams.comparator = function (
        filterDate: any,
        entryDate: any
    ) {
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
};

const setUpSelectorFilter = (
    colDef: ColumnDefinition,
    rowData: Attributes[],
    state: TableStateManager
) => {
    colDef.floatingFilterComponent = 'selectorFloatingFilter';
    colDef.filterParams.inRangeInclusive = true;
    colDef.floatingFilterComponentParams = {
        suppressFilterButton: true,
        stateManager: state,
        rowData: rowData
    };
};

const setUpNumberFilter = (
    colDef: ColumnDefinition,
    state: TableStateManager
) => {
    colDef.floatingFilterComponent = 'numberFloatingFilter';
    colDef.filterParams.inRangeInclusive = true;
    colDef.floatingFilterComponentParams = {
        suppressFilterButton: true,
        stateManager: state
    };
};

const setUpTextFilter = (
    colDef: ColumnDefinition,
    state: TableStateManager
) => {
    colDef.floatingFilterComponent = 'textFloatingFilter';
    colDef.floatingFilterComponentParams = {
        suppressFilterButton: true,
        stateManager: state
    };

    // If we want to add different search methods in the future, consider using some sort of generic search function.
    // see: https://github.com/ramp4-pcar4/ramp4-pcar4/pull/57#pullrequestreview-377999397

    // default to regex filtering for text columns
    colDef.filterParams.textMatcher = function (params: any) {
        // treat * as a regular special character
        const newFilterText = params.filterText.replace(/\*/, '\\*');
        // surround filter text with .* to match anything before and after
        const re = new RegExp(`^.*${newFilterText}.*`);
        return re.test(params.value);
    };

    // modified from: https://www.ag-grid.com/javascript-grid-filter-text/#text-formatter
    let disregardAccents = function (s: string) {
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
    };

    // for individual columns
    colDef.filterParams.textFormatter = function (s: string) {
        return disregardAccents(s);
    };
};

const setUpSpecialColumns = (
    col: ColumnDefinition,
    colDef: (ColumnDefinition | SpecialColumnDefinition)[],
    state: TableStateManager
) => {
    // set up row number column
    if (col.field === 'rvRowIndex') {
        let indexDef = {
            sortable: false,
            lockPosition: true,
            valueGetter: 'node.rowIndex + 1',
            suppressMovable: true,
            suppressMenu: true,
            floatingFilter: config.value.state.colFilter,
            pinned: 'left',
            maxWidth: 42,
            cellStyle: () => {
                return {
                    'padding-left': '2px',
                    'padding-right': '2px',
                    display: 'flex',
                    'justify-content': 'center'
                };
            },
            floatingFilterComponent: 'clearFloatingFilter',
            floatingFilterComponentParams: {
                stateManager: state,
                clearFilters: clearFilters,
                suppressFilterButton: true
            },
            filter: true
        };

        colDef.push(indexDef);
    }

    // Set up the interactive column that contains the zoom and details button.
    if (col.field === 'rvInteractive') {
        const buttonControls = config.value.state.controls;

        let detailsDef = {
            sortable: false,
            pinned: 'left',
            filter: false,
            lockPosition: true,
            isStatic: true,
            maxWidth: 42,
            cellStyle: () => {
                return {
                    padding: '0px'
                };
            },
            cellRenderer: DetailsButtonRendererV,
            cellRendererParams: {
                $iApi: iApi,
                t: t,
                layerCols: layerCols.value,
                isTeleport: props.panel.teleport !== undefined
            }
        };

        // Only add this button if it is defined in the grid controls.
        if (buttonControls.includes('details')) {
            colDef.push(detailsDef);
        }

        // only render the zoom buttons if there is at least one map layer in the grid
        if (hasMapLayers.value) {
            let zoomDef = {
                sortable: false,
                pinned: 'left',
                filter: false,
                lockPosition: true,
                isStatic: true,
                maxWidth: 42,
                cellStyle: () => {
                    return {
                        padding: '0px'
                    };
                },
                cellRenderer: ZoomButtonRendererV,
                cellRendererParams: {
                    $iApi: iApi,
                    layerCols: layerCols.value,
                    isTeleport: props.panel.teleport !== undefined
                }
            };

            // Only add this button if it is defined in the grid controls.
            if (buttonControls.includes('zoom')) {
                colDef.push(zoomDef);
            }
        }

        // Handle custom buttons.
        buttonControls.forEach(
            (buttonConfig: string | ActionButtonDefinition) => {
                if (buttonConfig === 'zoom' || buttonConfig === 'details')
                    return;

                let buttonDef = {
                    sortable: false,
                    pinned: 'left',
                    filter: false,
                    lockPosition: true,
                    isStatic: true,
                    maxWidth: 42,
                    cellStyle: () => {
                        return {
                            padding: '0px'
                        };
                    },
                    cellRenderer: CustomButtonRendererV,
                    cellRendererParams: {
                        $iApi: iApi,
                        t: t,
                        layerCols: layerCols.value,
                        config: buttonConfig
                    }
                };

                colDef.push(buttonDef);
            }
        );
    }

    // Set up the symbol column.
    if (col.field === 'rvSymbol') {
        let iconDef = {
            sortable: false,
            filter: false,
            lockPosition: true,
            isStatic: true,
            maxWidth: 42,
            cellRenderer: (cell: any) => {
                const layer: LayerInstance | undefined =
                    iApi.geo.layer.getLayer(cell.data.rvUid);
                if (layer === undefined) return;
                const iconContainer = document.createElement('span');
                const oid = cell.data[oidField.value];
                layer.getIcon(oid).then(i => {
                    iconContainer.innerHTML = i;
                });
                return iconContainer;
            },
            cellStyle: () => {
                return {
                    paddingTop: '3px',
                    textAlign: 'center',
                    paddingLeft: '5px',
                    paddingRight: '0px'
                };
            },
            cellRendererParams: {
                $iApi: iApi,
                oidField: oidField.value
            }
        };

        colDef.push(iconDef);
    }
};

// checks if any external (layer) filters are applied
const isExternalFilterPresent = () => {
    return !Object.values(filteredOids.value).every(oids => oids === undefined);
};

// filters row based on layer filter
const doesExternalFilterPass = (node: RowNode) => {
    const oids = filteredOids.value[node.data.rvUid];
    return oids === undefined || oids.includes(node.data[oidField.value]);
};

// updates external grid filter based on layer filter and rerenders grid
const applyLayerFilters = async () => {
    // a race condition lurks here without the "filterQueue".
    // if you get calls to this method in a short timeframe, you end up with multiple calls to
    // getFilterOIDs on the layer(s), once for each change in the filtering state.
    // These calls can be heavy, so the order they resolve can vary. What we found was
    // a call on a layer would finish after a similar call on the same layer but with an
    // updated filter. The result would get written to filteredOids, overwriting the more
    // recent/accurate result. Would end up with the grid's store of "filtered oids" not
    // matching reality; would match the random order that calls resolved.

    const thisFilterDef = new DefPromise();
    // we make a copy so any filters that come after do not change our local array.
    // this array does not contain thisFilterDef.
    const activeFilterPromises = filterQueue.value
        .slice()
        .map(d => d.getPromise());

    // push our filter in so any requests after this are blocked by us
    filterQueue.value.push(thisFilterDef);

    // we wait for any filters running before us to finish. This avoids race-condition
    // overwrites of filterOids values
    await Promise.all(activeFilterPromises);

    // our turn. get filter oids for any layers in our grid. wait for all layers to report back / update filteredOids
    await Promise.all(
        gridLayers.value.map(async layer => {
            if (layer && layer.visibility) {
                await layer
                    .getFilterOIDs(
                        [CoreFilter.GRID],
                        config.value.state.filterByExtent
                            ? iApi.geo.map.getExtent()
                            : undefined
                    )
                    .then(oids => {
                        filteredOids.value[layer.uid] = oids;
                    });
            } else {
                filteredOids.value[layer.uid] = [];
            }
        })
    );

    // filterOids are now up to date. Apply them to the grid
    agGridApi.value.onFilterChanged();

    // unblock our promise, letting any filter behind us start.
    thisFilterDef.resolveMe();

    // remove our blocker from the queue, since no one should care about this filter request anymore
    const idx = filterQueue.value.indexOf(thisFilterDef);
    if (idx === -1) {
        console.error('Grid could not find filter blocker in filter queue');
    } else {
        filterQueue.value.splice(idx, 1);
    }
};

const toggleFiltersToMap = () => {
    config.value.state.applyToMap = !config.value.state.applyToMap;
    applyFiltersToMap();
};

const applyFiltersToMap = () => {
    gridLayers.value
        .filter(layer => layer.mapLayer)
        .forEach(layer => {
            if (!config.value.state.applyToMap) {
                layer.setSqlFilter(CoreFilter.GRID, '');
            } else {
                const mapFilterQuery = getFiltersQuery(layer.id);
                layer.setSqlFilter(CoreFilter.GRID, mapFilterQuery);
            }
        });
};

// get filter SQL query string
const getFiltersQuery = (id: string) => {
    const filterModel = agGridApi.value.getFilterModel();
    let colStrs: (string | undefined)[] = [];
    Object.keys(filterModel).forEach(col => {
        // check if filter is applied to an attribute of this layer
        const attrs = getAttrPair(id, col);
        if (attrs) {
            // create SQL string with original attribute name, because otherwise the the layer wouldn't recognize the attribute name in the filter
            // i.e a layer with 'LAT' mapped to 'LATITUDE' in the grid must query '___ IN LAT' instead of '___ IN LATITUDE'
            colStrs.push(filterToSql(attrs.origAttr, filterModel[col]));
        } else {
            // filter out layer when searching a column it doesn't have
            colStrs.push('1=2');
        }
    });
    if (
        config.value.state.searchFilter &&
        config.value.state.searchFilter.length > 0
    ) {
        const globalSearchVal = globalSearchToSql(id) || '1=2';
        if (globalSearchVal.length > 0) {
            // do not push an empty global search
            colStrs.push(`(${globalSearchVal})`);
        }
    }
    return colStrs.join(' AND ');
};

// converts columns filter to SQL
const filterToSql = (col: string, colFilter: { [key: string]: any }): any => {
    switch (colFilter.filterType) {
        case 'number': {
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
        }
        case 'text': {
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
                newVal = `*${newVal}`;
                // if val contains a % or _, add ESCAPE 'ௌ' at the end of the query
                let sqlWhere = `UPPER(${col}) LIKE \'${newVal
                    .replace(/\*/g, '%')
                    .toUpperCase()}%\'`;
                return sqlWhere.includes('ௌ%') || sqlWhere.includes('ௌ_')
                    ? `${sqlWhere} ESCAPE \'ௌ\'`
                    : sqlWhere;
            }
            break;
        }
        case 'date': {
            // defaults to min and max dates respectively
            const dateFrom = new Date(colFilter.dateFrom ?? 0);
            const dateTo = new Date(colFilter.dateTo ?? 8640000000000000); // max date;
            const from = dateFrom
                ? `${
                      dateFrom.getMonth() + 1
                  }/${dateFrom.getDate()}/${dateFrom.getFullYear()}`
                : undefined;
            const to = dateTo
                ? `${
                      dateTo.getMonth() + 1
                  }/${dateTo.getDate()}/${dateTo.getFullYear()}`
                : undefined;
            switch (colFilter.type) {
                // cases are functionally greaterThanOrEqual or lessThanOrEqual
                case 'greaterThan':
                    return `${col} >= DATE '${from}'`;
                case 'lessThan':
                    return `${col} <= DATE '${from}'`; // ag-grid uses from for a single upper limit as well
                case 'inRange':
                    return `${col} >= DATE '${from}' AND ${col} <= DATE '${to}'`;
                default:
                    break;
            }
        }
    }
};

// convert global search to SQL string filter of columns excluding unfiltered columns
const globalSearchToSql = (id: string): string => {
    // TODO: support for global search on dates
    let val = config.value.state.searchFilter.replace(/'/g, "''");
    // to implement quick filters, first need to split the search text on white space
    const searchVals = val.split(' ');

    const sortedRows = (agGridApi.value as any).rowModel.rowsToDisplay;
    const columns = columnApi.value
        .getAllDisplayedColumns()
        .filter(
            (column: any) =>
                (column.colDef.filter === 'agTextColumnFilter' ||
                    column.colDef.filter === 'agNumberColumnFilter') &&
                getAttrPair(id, column.getColId())
        );

    let filteredColumns: string[] = [];

    sortedRows.forEach((row: RowNode) => {
        let rowMatch = true;
        let rowSql = '';
        // each row must contain all of the split search values
        for (let searchVal of searchVals) {
            const re = new RegExp(
                `.*${searchVal.split(' ').join('.*').toUpperCase()}`
            );
            const filterVal = `%${searchVal
                .replace(/\*/g, '%')
                .split(' ')
                .join('%')
                .toUpperCase()}`;
            // if any column data matches the search val in regex form, set foundVal to true and proceed to next search term
            let foundVal = false;
            for (let column of columns) {
                const colId = column.getColId();
                const origColId = getAttrPair(id, column.getColId())?.origAttr;
                const colDef = column.getColDef();

                // row data can be undefined when merging heterogenous layers
                if (row.data[colId] === undefined) {
                    foundVal = false;
                }
                // process global search sql independently for text and number columnns
                else if (colDef.filter === 'agTextColumnFilter') {
                    const cellData =
                        row.data[colId] === null
                            ? null
                            : row.data[colId].toString();
                    if (cellData !== null && re.test(cellData.toUpperCase())) {
                        rowSql
                            ? (rowSql = rowSql.concat(
                                  ' AND ',
                                  `(UPPER(${origColId}) LIKE \'${filterVal}%\')`
                              ))
                            : (rowSql = rowSql.concat(
                                  '(',
                                  `(UPPER(${origColId}) LIKE \'${filterVal}%\')`
                              ));
                        // if we have already stored the current sql break from loop
                        filteredColumns.includes(rowSql + ')')
                            ? (foundVal = false)
                            : (foundVal = true);
                        break;
                    }
                } else if (colDef.filter === 'agNumberColumnFilter') {
                    const cellData =
                        row.data[colId] === null ? null : row.data[colId];
                    if (cellData !== null && re.test(cellData)) {
                        rowSql
                            ? (rowSql = rowSql.concat(
                                  ' AND ',
                                  `(${origColId} = ${cellData})`
                              ))
                            : (rowSql = rowSql.concat(
                                  '(',
                                  `(${origColId} = ${cellData})`
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
};

const stopArrowKeyProp = (event: KeyboardEvent) => {
    const arrowKeys = [
        'ArrowDown',
        'Down',
        'ArrowLeft',
        'Left',
        'ArrowUp',
        'Up',
        'ArrowRight',
        'Right'
    ];
    if (arrowKeys.includes(event.key)) {
        event.stopPropagation();
    }
};

const closeGrid = () => {
    // cancel any attribute loads that are in progress
    cancelAttributeLoad();

    // close the grid panel
    if (props.panel.isOpen) {
        props.panel.close();
    }
};

const cancelAttributeLoad = () => {
    if (isLoadingGrid.value || isErrorGrid.value) {
        // stop the in progress attribute load
        gridLayers.value.forEach(layer => {
            layer.abortAttributeLoad();

            // we want to clear the attribute cache to reset it for future requests
            layer.clearFeatureCache();
        });
    }
};

/**
 * Determine if map filtering for this grid is fully enabled, partially enabled, or disabled.
 */
const filtersStatus = computed<'disabled' | 'partial' | 'enabled'>(() => {
    const filterable = gridLayers.value.map(layer => {
        return layer.visibility && layer.canModifyLayer && layer.mapLayer;
    });

    const unmodifiableExists = gridLayers.value.some(
        layer => layer.visibility && layer.mapLayer && !layer.canModifyLayer
    );
    const filterableExists = filterable.some(Boolean);

    return unmodifiableExists && filterableExists
        ? 'partial' // we have an unmodifiable map layer and we also have >= 1 layer that can be filtered, so overall filtering is partial
        : filterableExists
        ? 'enabled' // we have >= 1 layer that can be filtered, anything with filtering disabled is a data layer which is not on the map anyways, so overall filtering is enabled
        : 'disabled'; // no layers that can be filtered, so disable filtering
});

/**
 * Determine if the current grid has at least one map layer in it
 */
const hasMapLayers = computed<boolean>(() =>
    gridLayers.value.some(
        layer => layer.isLoaded && layer.supportsFeatures && layer.mapLayer
    )
);

const getAttrPair = (
    id: string,
    attr: string
): AttributeMapPair | undefined => {
    // given an attribute name, returns the attribute and, if it exists, the mapped attribute in a layer
    return layerCols.value[id].find(
        layer => (layer.mappedAttr ?? layer.origAttr) === attr
    );
};

const setUpColumns = () => {
    const fancyLayers: LayerInstance[] = gridLayers.value.filter(
        layer => layer && layer.supportsFeatures && layer.isLoaded
    ) as LayerInstance[];

    if (fancyLayers.length === 0) {
        // in the event of error'd layers, otherwise a blank datagrid will appear
        closeGrid();
    }

    // get the currently loaded and total record count from layer
    totalRecordCount.value = fancyLayers.reduce(
        (count, { featureCount }) => count + featureCount,
        0
    );

    loadedRecordCount.value = new Array(gridLayers.value.length).fill(0);

    fancyLayers.forEach(
        (fl, idx) => (loadedRecordCount.value[idx] += fl.downloadedAttributes())
    );

    // watch the load count of the attrib loader
    fancyLayers.forEach((fl, idx) => {
        watchers.value.push(
            watch(
                () => fl.downloadedAttributes(),
                (count: number) => {
                    loadedRecordCount.value[idx] = count;
                }
            )
        );
    });

    Promise.all(fancyLayers.map(l => l.loadPromise())).then(() => {
        const tableAttributePromises: Array<Promise<TabularAttributeSet>> =
            fancyLayers.map(fl => {
                return markRaw(fl).getTabularAttributes();
            });

        Promise.all(tableAttributePromises)
            .then((tableAttributes: Array<TabularAttributeSet>) => {
                // check if load was cancelled by checking the loadAborted state
                if (fancyLayers.every(fl => fl.attribLoadAborted())) {
                    // if load was cancelled, don't load grid any further and return
                    isLoadingGrid.value = false;
                    return;
                }

                const mergedTableAttrs: TabularAttributeSet = {
                    columns: [],
                    rows: [],
                    fields: [],
                    oidField: ''
                };

                // merge attributes into one table
                tableAttributes.forEach((ta, idx) => {
                    const attrMap: any = [];
                    const id: string = fancyLayers[idx].id;

                    ta.columns.forEach(col => {
                        if (
                            config.value.fieldMap &&
                            config.value.fieldMap[col.data]
                        ) {
                            attrMap.push({
                                origAttr: col.data,
                                mappedAttr: config.value.fieldMap[col.data]
                            });
                            col.data = config.value.fieldMap[col.data];
                            col.title = col.data;
                        } else {
                            attrMap.push({
                                origAttr: col.data,
                                mappedAttr: undefined
                            });
                        }

                        if (
                            !mergedTableAttrs.columns
                                .map(c => c.data)
                                .includes(col.data)
                        ) {
                            mergedTableAttrs.columns.push(col);
                        }
                    });

                    mergedTableAttrs.rows = mergedTableAttrs.rows.concat(
                        ta.rows.map(row => {
                            if (config.value.fieldMap) {
                                for (const [oldAttr, newAttr] of Object.entries(
                                    config.value.fieldMap
                                )) {
                                    if (
                                        row[oldAttr] !== undefined &&
                                        row[newAttr] === undefined
                                    ) {
                                        row[newAttr] = row[oldAttr];
                                        delete row[oldAttr];
                                    }
                                }
                            }
                            return row;
                        })
                    );

                    mergedTableAttrs.fields = mergedTableAttrs.fields.concat(
                        ta.fields.map(field => {
                            if (field.type === 'oid') {
                                oidCols.value.add(field.name);
                            }
                            return {
                                name:
                                    config.value.fieldMap &&
                                    config.value.fieldMap[field.name]
                                        ? config.value.fieldMap[field.name]
                                        : field.name,
                                type: field.type,
                                alias: field.alias ?? undefined,
                                length: field.length ?? undefined
                            };
                        })
                    );

                    mergedTableAttrs.oidField =
                        config.value.fieldMap &&
                        config.value.fieldMap[ta.oidField]
                            ? config.value.fieldMap[ta.oidField]
                            : ta.oidField;

                    // tracking which columns correspond with which layer for applyToMap filtering
                    layerCols.value[id] = attrMap;
                });

                // save field that contains oid for this layer
                oidField.value = mergedTableAttrs.oidField;

                // Iterate through table columns and set up column definitions and column filter stuff.
                // Also adds the `rvSymbol` and `rvInteractive` columns to the table.
                [
                    'rvRowIndex',
                    'rvInteractive',
                    'rvSymbol',
                    ...mergedTableAttrs.columns
                ].forEach((column: any) => {
                    if (
                        config.value.state?.columns[column.data] === undefined
                    ) {
                        config.value.state.columns[column.data] =
                            new ColumnStateManager({
                                field: column.data,
                                title: column.title
                            });
                    }
                    if (!iApi.ui.exposeOids && oidCols.value.has(column.data)) {
                        // hide oid column according to global flag
                        config.value.state.columns[column.data].visible = false;
                    }
                    let colConfig = config.value.state?.columns[column.data];
                    let col: ColumnDefinition = {
                        headerName: colConfig.title ?? column.title,
                        headerComponent: 'agColumnHeader',
                        headerComponentParams: {
                            sort: colConfig.sort
                        },
                        field: column.data ?? column,
                        isSelector: colConfig.filter.type === 'selector',
                        sortable: true,
                        lockPosition: true,
                        filterParams: {},
                        floatingFilter:
                            config.value.state.colFilter &&
                            colConfig.searchable,
                        hide: !colConfig?.visible,
                        minWidth: colConfig.width,
                        maxWidth: colConfig.width ?? 400,
                        cellRenderer: (cell: any) => {
                            return cell.value;
                        },
                        suppressHeaderKeyboardEvent: (params: any) => {
                            const keyboardEvent = params.event as KeyboardEvent;
                            //suppresses enter on header cells and tab when the cell is not focused (focus is on an inner button)
                            if (
                                params.headerRowIndex === 0 &&
                                (keyboardEvent.key === 'Enter' ||
                                    (!(
                                        keyboardEvent.target as HTMLElement
                                    ).classList.contains('ag-header-cell') &&
                                        keyboardEvent.key === 'Tab'))
                            ) {
                                return true;
                            }
                            return false;
                        }
                    };

                    // retrieve the field info for the column
                    let fieldInfo = mergedTableAttrs.fields.find(
                        (field: any) => field.name === col.field
                    );

                    if (
                        column === 'rvRowIndex' ||
                        column === 'rvSymbol' ||
                        column === 'rvInteractive'
                    ) {
                        setUpSpecialColumns(
                            col,
                            columnDefs.value,
                            config.value.state
                        );
                    } else {
                        // set up column filters according to their respective types
                        if (NUM_TYPES.indexOf(fieldInfo!.type) > -1) {
                            setUpNumberFilter(col, config.value.state);
                            col.filter = 'agNumberColumnFilter';
                            col.autoHeight = true;
                            col.cellRenderer =
                                colConfig.template === ''
                                    ? CellRendererV
                                    : iApi.component(colConfig.template);
                            col.cellRendererParams = {
                                type: 'number'
                            };
                        } else if (fieldInfo!.type === FieldType.DATE) {
                            setUpDateFilter(col, config.value.state);
                            col.filter = 'agDateColumnFilter';
                            col.autoHeight = true;
                            col.minWidth = 400;
                            col.cellRenderer =
                                colConfig.template === ''
                                    ? CellRendererV
                                    : iApi.component(colConfig.template);
                            col.cellRendererParams = {
                                type: 'date'
                            };
                        } else if (fieldInfo!.type === FieldType.STRING) {
                            if (col.isSelector) {
                                // set up a selector filter instead of a text filter if the `isSelector` flag is true.
                                setUpSelectorFilter(
                                    col,
                                    mergedTableAttrs.rows,
                                    config.value.state
                                );
                            } else {
                                setUpTextFilter(col, config.value.state);
                            }
                            col.filter = 'agTextColumnFilter';
                            col.autoHeight = true;
                            col.cellRenderer =
                                colConfig.template === ''
                                    ? CellRendererV
                                    : iApi.component(colConfig.template);
                            col.cellRendererParams = {
                                type: 'string'
                            };
                        }

                        columnDefs.value.push(col);
                    }
                });

                // load layer data into the table.
                rowData.value = markRaw(mergedTableAttrs.rows);
                columnDefs.value = markRaw(columnDefs.value);

                updateFilterInfo();

                // the grid is now ready to be displayed
                isLoadingGrid.value = false;
            })
            .catch(() => {
                isErrorGrid.value = true;
                isLoadingGrid.value = false;
            });
    });
};

onBeforeMount(() => {
    config.value = gridStore.grids[props.gridId];

    isLoadingGrid.value = true;

    // re-opening the grid for a cancelled layer doesn't re-render the grid properly
    // hence we use this force update call to force re-render
    forceUpdate();

    filterInfo.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
    };

    // import separate components
    frameworkComponents.value = {
        agColumnHeader: GridCustomHeaderV,
        numberFloatingFilter: GridCustomNumberFilterV,
        textFloatingFilter: GridCustomTextFilterV,
        selectorFloatingFilter: GridCustomSelectorFilterV,
        dateFloatingFilter: GridCustomDateFilterV,
        clearFloatingFilter: GridClearFilterV
    };

    // set up grid options
    agGridOptions.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: true,
        rowHeight: 40,
        suppressRowTransform: true,
        onFilterChanged: () => {
            applyFiltersToMap();
            updateFilterInfo();
        },
        onBodyScroll: () => {
            // prevent tooltips from leaving grid panel on scroll
            [...document.querySelectorAll('[id^=tippy]')].forEach(
                (element: any) => {
                    if (
                        element._tippy &&
                        el.value?.contains(element._tippy.reference)
                    ) {
                        element._tippy.hide();
                    }
                }
            );
        },
        onBodyScrollEnd: () => {
            updateRowInfo();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: true,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: tabToNextCellHandler,
        // tab vertically instead of horizontally
        tabToNextHeader: tabToNextHeaderHandler,
        onModelUpdated: debounce(300, () =>
            columnApi.value.autoSizeAllColumns()
        )
    };

    setUpColumns();

    if (filtersStatus.value === 'partial') {
        iApi.notify.show(
            NotificationType.WARNING,
            iApi.$i18n.t(`layer.filterwarning`)
        );
    }

    watchers.value.push(
        watch(filtersStatus, newStatus => {
            if (newStatus === 'partial') {
                iApi.notify.show(
                    NotificationType.WARNING,
                    iApi.$i18n.t(`layer.filterwarning`)
                );
            }
        })
    );
});

onBeforeUnmount(() => {
    // cancel any attribute loads that are in progress
    cancelAttributeLoad();

    // Remove all event handlers for this component
    handlers.value.forEach(handler => iApi.event.off(handler));
    watchers.value.forEach(unwatch => unwatch());
    gridAccessibilityManager.value?.removeAccessibilityListeners();
    gridAccessibilityManager.value?.removeScrollListeners();
});
</script>

<style scoped>
:deep(.ag-header-cell-sortable),
:deep(.ag-pinned-left-header),
:deep(.ag-pinned-left-cols-container) {
    cursor: default;
}
:deep(.ag-row) {
    border-left: 0px;
    border-right: 0px;
}
:deep(.ag-cell) {
    line-height: 38px;
}
:deep(.ag-pinned-left-cols-container .ag-cell):not(.ag-cell-focus) {
    border-right: none !important;
}
:deep(.ag-pinned-left-header .ag-header-cell) {
    padding: 0px !important;
}
:deep(.ag-floating-filter-full-body input) {
    border-width: 2px;
    padding: 5px;
    background: white;
}
:deep(.ag-header-container > .ag-header-row > .ag-header-cell) {
    background: #f9f9f9;
}
:deep(.ag-pinned-left-header) {
    border: 0px;
}
:deep(.ag-root .rv-input::placeholder) {
    font-size: 12px;
}
:deep(.ag-root .rv-input) {
    font-size: 12px;
}

/* Need this for hyperlinked text in the grid */
:deep(a) {
    color: rgba(37, 99, 235, 1);
    text-decoration: underline;
}

.shadow-clip {
    box-shadow: 0px 0px 15px 1px rgb(0 0 0 / 75%);
    clip-path: inset(0px 0px -50px 0px);
}

.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
