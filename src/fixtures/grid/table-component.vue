<template>
    <div class="flex flex-col w-full h-full bg-white" ref="el">
        <div v-show="isErrorGrid">
            <p class="pl-8">{{ t('grid.splash.error') }}</p>
        </div>
        <div v-show="isLoadingGrid && !isErrorGrid" class="flex flex-col justify-center items-center h-full">
            <!-- show loading animation if loading -->
            <div class="flex flex-row">
                <span class="font-bold text-2xl">{{ loadedRecordCount.reduce((sum, count) => sum + count, 0) }}</span>
                <svg class="stroke-black stroke-1" height="50" width="25">
                    <line x1="0" y1="50" x2="25" y2="0"></line>
                </svg>
                <span class="mt-20 text-xl">{{ totalRecordCount }}</span>
            </div>
            <div class="my-20">
                <span class="text-sm">{{
                    loadedRecordCount.reduce((sum, count) => sum + count, 0) < totalRecordCount
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
        <div v-show="!isLoadingGrid && !isErrorGrid" class="flex flex-wrap gap-y-8 items-center pl-8 pb-8">
            <div class="flex flex-1 flex-col max-w-full mr-8">
                <div v-show="gridTitle !== ''" class="w-full font-bold" v-truncate>
                    {{ gridTitle }}
                </div>

                <div class="w-full text-sm" v-truncate>
                    {{
                        (!somethingVisible && filterInfo.visibleRows === 0
                            ? `${t('grid.filters.label.hidden')} — `
                            : '') +
                        t('grid.filters.label.info', {
                            range:
                                filterInfo.visibleRows !== 0 ? `${filterInfo.firstRow} - ${filterInfo.lastRow}` : '0',
                            total: filterInfo.visibleRows
                        })
                    }}

                    <span v-if="filterInfo.visibleRows !== rowData.length && somethingVisible">{{
                        t('grid.filters.label.filtered', {
                            max: rowData.length
                        })
                    }}</span>
                </div>
            </div>

            <div class="flex flex-1 grow-[1.4] items-center max-w-full">
                <!-- show global search -->
                <div
                    class="search-bar flex flex-1 min-w-0 items-center pb-4 mr-8"
                    v-show="mergedGridConfig.state.search"
                >
                    <!-- global search bar -->
                    <input
                        @input="updateQuickSearch()"
                        @keypress.enter.prevent
                        @keyup.enter="
                            if (panelStore.mobileView) {
                                //@ts-expect-error TODO: explain why this is needed or remove
                                $event?.target?.blur();
                            }
                        "
                        enterkeyhint="done"
                        v-model="mergedGridConfig.state.searchFilter"
                        class="rv-global-search rv-input pr-32 min-w-0"
                        aria-invalid="false"
                        :aria-label="t('grid.filters.label.global')"
                        :placeholder="t('grid.filters.label.global')"
                    />
                    <!-- clear search button -->
                    <div class="-ml-30 text-gray-500 search-clear-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fit=""
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="fill-current w-24 h-24 flex-shrink-0"
                            v-if="mergedGridConfig.state.searchFilter.length < 3"
                        >
                            <g id="search_cache224">
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                ></path>
                            </g>
                        </svg>
                        <button
                            class="flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black"
                            @click="resetQuickSearch()"
                            :aria-label="t('grid.search.clear')"
                            v-else
                        >
                            <svg
                                data-v-486a0302=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 352 512"
                                class="fill-current w-18 h-18 mt-2"
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
                        :gridApi="agGridApi!"
                        :columnDefs="columnDefs"
                        :systemCols="systemCols"
                        @refreshHeaders="agGridApi!.refreshHeader()"
                    ></column-dropdown>

                    <!-- clear all filters -->
                    <button
                        type="button"
                        class="grid-clearall p-4 h-40"
                        :class="canClearFilters ? 'text-gray-500 hover:text-black' : 'text-gray-300 cursor-default'"
                        @click="canClearFilters && clearSearchAndFilters()"
                        :content="t('grid.clearAll')"
                        :aria-label="t('grid.clearAll')"
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
                            class="leading-snug w-256"
                            :class="{
                                hover: filtersStatus !== 'disabled' ? 'none' : 'text-black',
                                disabled: filtersStatus === 'disabled'
                            }"
                            @click="filtersStatus !== 'disabled' && toggleFiltersToMap()"
                            role="button"
                            :aria-label="t('grid.label.filters.apply')"
                        >
                            <div class="md-icon-small flex flex-nowrap items-center gap-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z"
                                    />
                                </svg>
                                <span class="grow">{{ t('grid.label.filters.apply') }}</span>
                                <svg
                                    height="18"
                                    width="18"
                                    viewBox="0 0 24 24"
                                    v-if="filtersStatus !== 'disabled' && mergedGridConfig.state.applyToMap"
                                >
                                    <g id="done">
                                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <!-- toggle column filters -->
                        <a
                            href="javascript:;"
                            class="leading-snug w-256 hover:text-black"
                            @click="toggleShowFilters()"
                            role="button"
                            :aria-label="t('grid.label.filters.show')"
                        >
                            <div class="md-icon-small flex flex-nowrap items-center gap-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z "
                                    />
                                </svg>
                                <span class="grow">{{ t('grid.label.filters.show') }}</span>
                                <svg height="18" width="18" viewBox="0 0 24 24" v-if="mergedGridConfig.state.colFilter">
                                    <g id="done">
                                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <!-- toggle extent filter -->
                        <a
                            href="javascript:;"
                            class="leading-snug w-256"
                            :class="{
                                hover: filtersStatus !== 'disabled' ? 'none' : 'text-black',
                                disabled: filtersStatus === 'disabled'
                            }"
                            @click="filtersStatus !== 'disabled' && toggleFilterByExtent()"
                            role="button"
                            :aria-label="t('grid.filters.label.extent')"
                        >
                            <div class="md-icon-small flex flex-nowrap items-center gap-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z"
                                    />
                                </svg>
                                <span class="grow">{{ t('grid.filters.label.extent') }}</span>
                                <svg
                                    height="18"
                                    width="18"
                                    viewBox="0 0 24 24"
                                    v-if="filtersStatus !== 'disabled' && mergedGridConfig.state.filterByExtent"
                                >
                                    <g id="done">
                                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="javascript:;"
                            class="leading-snug w-256"
                            :class="{ hover: 'text-black' }"
                            @click="togglePinned()"
                            role="button"
                            :aria-label="t('grid.label.pinColumns')"
                        >
                            <div class="md-icon-small flex flex-nowrap items-center gap-x-4">
                                <svg
                                    v-if="pinned"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z"
                                    />
                                </svg>
                                <svg
                                    v-else-if="!pinned"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current w-20 h-20 mr-2 text-gray-500"
                                >
                                    <path
                                        d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z"
                                    />
                                </svg>
                                <span class="grow">{{ t('grid.label.pinColumns') }}</span>
                                <svg height="18" width="18" viewBox="0 0 24 24" v-if="pinned">
                                    <g id="done">
                                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <a
                            href="javascript:;"
                            class="leading-snug w-256"
                            :class="{ hover: 'text-black' }"
                            @click="exportData()"
                            role="button"
                            :aria-label="t('grid.label.export')"
                        >
                            <div class="md-icon-small flex flex-nowrap items-center gap-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="fill-current w-20 h-20 mr-2 text-gray-500"
                                >
                                    <g>
                                        <path
                                            d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
                                        ></path>
                                    </g>
                                </svg>
                                <span class="grow">{{ t('grid.label.export') }}</span>
                            </div>
                        </a>
                    </dropdown-menu>
                </div>
            </div>
        </div>

        <div
            :content="t('grid.cells.controls')"
            v-tippy="{
                placement: 'top',
                trigger: 'manual',
                touch: false
            }"
            class="w-full h-full flex flex-col"
            v-if="showGrid"
            v-show="!isLoadingGrid && !isErrorGrid"
            ref="gridContainer"
            tabIndex="-1"
        >
            <!-- main grid component -->
            <ag-grid-vue
                class="ag-theme-material flex-grow"
                :enableCellTextSelection="true"
                :accentedSort="true"
                :localeText="locale === 'en' ? AG_GRID_LOCALE_EN : AG_GRID_LOCALE_FR"
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
    onMounted,
    ref,
    useTemplateRef,
    watch
} from 'vue';

import { GlobalEvents, InstanceAPI, LayerInstance, NotificationType, PanelInstance } from '@/api/internal';
import { CoreFilter, DefPromise, FieldType, LayerState } from '@/geo/api';
import type { Attributes, TabularAttributeSet } from '@/geo/api';
import * as GridUtils from './grid-utils';
import to from 'await-to-js';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridVue } from 'ag-grid-vue3';

import { useGridStore } from './store';
import type { ActionButtonDefinition, AttributeMapPair, GridConfig, TableStateOptions } from './store';
import { usePanelStore } from '@/stores/panel';
import { GridAccessibilityManager, tabToNextCellHandler, tabToNextHeaderHandler } from './accessibility';

import ColumnDropdown from './column-dropdown.vue';
import TableStateManager from './store/table-state-manager';
import ColumnStateManager from './store/column-state-manager';

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

// grid locales
import { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_FR } from '@ag-grid-community/locale';

import { debounce } from 'throttle-debounce';

import type { ColDef, GridApi, RowNode } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';

// register all community features
ModuleRegistry.registerModules([AllCommunityModule]);
// mark all grids as using legacy themes
provideGlobalGridOptions({ theme: 'legacy' });

import { useI18n } from 'vue-i18n';

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

// these should match up with the `type` value returned by the attribute promise.
const NUM_TYPES: string[] = [FieldType.OID, FieldType.DOUBLE, FieldType.SINGLE, FieldType.INTEGER];

const iApi = inject('iApi') as InstanceAPI;
const gridStore = useGridStore();
const panelStore = usePanelStore();
const mobileView = computed(() => panelStore.mobileView);
const pinned = ref<boolean>(!mobileView.value);
const el = ref<HTMLElement>();
const gridContainer = useTemplateRef('gridContainer');
const { t, locale } = useI18n();
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

/**
 * The grid configuration (assembled from all layer sources).
 * This tracks the grid in memory, preserves settings when other grids get opened.
 */
const mergedGridConfig = ref<GridConfig>({
    id: 'dummy',
    layerIds: [],
    state: new TableStateManager(),
    fieldMap: {}
});

const showGrid = ref(true);
const agGridApi = ref<GridApi | null>(null);
const agGridOptions = ref();
const frameworkComponents = ref();
const isLoadingGrid = ref<boolean>(false);
const isErrorGrid = ref<boolean>(false);
const loadedRecordCount = ref<Array<number>>([]);
const totalRecordCount = ref<number>(0);
const handlers = ref<Array<string>>([]);
const watchers = ref<Array<() => void>>([]);
const gridTitle = ref<string>('');
const columnDefs = ref<Array<ColumnDefinition | SpecialColumnDefinition>>([]);
const rowData = ref<Array<Attributes>>([]);
const oidField = ref<string>('OBJECTID'); // this is just placeholder, will get overwritten below
const gridAccessibilityManager = ref<GridAccessibilityManager | undefined>(undefined);
const onCellKeyPress = GridAccessibilityManager.onCellKeyPress;
const filterInfo = ref({ firstRow: 0, lastRow: 0, visibleRows: 0 });
const filteredOids = ref<{ [uid: string]: Array<number> | undefined }>({});

/**
 * Maps layer ids to column mappings for that layer
 */
const layerCols = ref<Record<string, Array<AttributeMapPair>>>({});

/**
 * All the layer ids that can participate in this grid
 */
const origLayerIds = ref(gridStore.grids[props.gridId].layerIds);

/**
 * All layers that can participate in this grid, and exist in RAMP
 */
const gridLayers = computed(() => {
    if (gridStore.grids[props.gridId]) {
        return origLayerIds.value.map(id => iApi.geo.layer.getLayer(id)).filter(layer => layer !== undefined);
    } else return [];
});

/**
 * If there are any active filters (column or search box).
 */
const canClearFilters = computed(
    () => mergedGridConfig.value.state.filtered || mergedGridConfig.value.state.searchFilter
);

/**
 * Tracks names of the "system"-ish columns. Typically object id, and any measurement stuff like "shape_area" and "shape_length"
 */
const systemCols = ref<Set<string>>(new Set<string>());

// manages fast incoming filter change events. Forces them to finish
// in order to avoid race conditions
const filterQueue = ref<Array<DefPromise<void>>>([]);

/**
 * The API for the AG-Grid
 */
const gridApi = computed(() => agGridApi.value!);

const addAriaLabels = (): void => {
    const checkboxInputs = iApi.$vApp.$el.querySelectorAll(
        '.ag-input-field-input.ag-checkbox-input'
    ) as NodeListOf<Element>;

    checkboxInputs.forEach((input, index) => {
        const allColumns = gridApi.value.getAllDisplayedColumns();
        const column = allColumns?.[index].getColDef();

        input.setAttribute('aria-label', column?.headerName ?? t('grid.label.specialColumn'));
    });
};

/**
 * Indicates at least one layer in this grid is loaded and visible.
 */
const somethingVisible = computed(() =>
    gridLayers.value.some(layer => layer.layerState === LayerState.LOADED && layer.visibility)
);

/**
 * Callback when the AG-Grid is ready
 * @param params nugget of stuff from ag-grid
 */
const onGridReady = (params: any) => {
    agGridApi.value = params.api;

    // get grid title
    let finalTitle = mergedGridConfig.value.state.title;
    if (!finalTitle) {
        const layer = iApi.geo.layer.getLayer(props.gridId);
        // fallback. layer name if layer exists & not a merge grid. otherwise grid id as final flail (will at least alert dev to add a title)
        finalTitle = layer?.name || props.gridId;
    }

    gridTitle.value = finalTitle;

    // initialize filter info + status
    updateFilterInfo();

    // don't need to wait for data to render if rowData available
    if (rowData.value.length > 0) {
        gridApi.value.autoSizeAllColumns();
    }

    // Initial load
    addAriaLabels();

    gridApi.value.addEventListener('rowDataUpdated', addAriaLabels);

    // listen for layer filter and visibility events and update grid appropriately
    handlers.value.push(
        iApi.event.on(GlobalEvents.FILTER_CHANGE, ({ uid, filterKey }: { uid: string; filterKey: string }) => {
            if (filterKey !== CoreFilter.GRID && uid && gridLayers.value.map(layer => layer.uid).includes(uid)) {
                applyLayerFilters();
            }
        })
    );
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_VISIBILITYCHANGE,
            ({ layer }: { visibility: boolean; layer: LayerInstance }) => {
                if (layer.uid && gridLayers.value.map(layer => layer.uid).includes(layer.uid)) {
                    applyLayerFilters();
                }
            }
        )
    );
    handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_RELOAD_END, (reloadedLayer: LayerInstance) => {
            reloadedLayer.loadPromise().then(() => {
                if (gridLayers.value.map(layer => layer.uid).includes(reloadedLayer.uid)) {
                    applyLayerFilters();
                }
            });
        })
    );
    handlers.value.push(
        iApi.event.on(GlobalEvents.LANG_CHANGE, () => {
            // Refresh the grid when the language changes
            gridApi.value.redrawRows({
                force: true
            } as any);
        })
    );
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            debounce(100, () => {
                if (mergedGridConfig.value.state.filterByExtent) {
                    applyLayerFilters();
                }
            })
        )
    );
    handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_REMOVE, (removedLayer: LayerInstance) => {
            if (origLayerIds.value.includes(removedLayer.id) && gridLayers.value.length !== 0) {
                // recreate grid on layer removal
                setUpColumns();
            }
        })
    );
    applyLayerFilters();
};

const gridRendered = (): void => {
    // size grid columns
    gridApi.value.autoSizeAllColumns();
    gridAccessibilityManager.value = new GridAccessibilityManager(el.value!, agGridApi.value as GridApi);
    addAriaLabels();
};

// Updates the global search value.
const updateQuickSearch = (): void => {
    gridApi.value.setGridOption('quickFilterText', mergedGridConfig.value.state.searchFilter);
};

const resetQuickSearch = (): void => {
    mergedGridConfig.value.state.searchFilter = '';
    updateQuickSearch();
};

const clearSearchAndFilters = (): void => {
    resetQuickSearch();
    clearFilters();
    applyLayerFilters();
};

const toggleFilterByExtent = (): void => {
    mergedGridConfig.value.state.filterByExtent = !mergedGridConfig.value.state.filterByExtent;
    applyLayerFilters();
};

/**
 * Toggles the floating (column) filters on and off.
 */
const toggleShowFilters = () => {
    const colDefs = gridApi.value.getColumnDefs();
    mergedGridConfig.value.state.colFilter = !mergedGridConfig.value.state.colFilter;

    colDefs?.forEach((col: ColDef) => {
        col.floatingFilter = mergedGridConfig.value.state.colFilter;
    });

    // Update the column definitions with the new filter value.
    gridApi.value.setGridOption('columnDefs', colDefs);
};

/**
 * Updates the current status of the filter.
 */
const updateFilterInfo = (): void => {
    if (agGridApi.value && !isLoadingGrid.value) {
        if (mergedGridConfig.value.state.searchFilter !== '') updateQuickSearch();
        if (mergedGridConfig.value.state.applyToMap) {
            applyFiltersToMap();
        }
        nextTick(() => {
            const cols = gridApi.value.getAllDisplayedColumns();
            if (cols && cols.length > 0) {
                gridApi.value.refreshCells({
                    columns: [cols[0]] // Limits the refresh action to the row number column.
                });
            }
            updateRowInfo();
        });
    }
};

const updateRowInfo = (): void => {
    filterInfo.value.firstRow = gridApi.value.getFirstDisplayedRowIndex() + 1;
    filterInfo.value.lastRow = gridApi.value.getLastDisplayedRowIndex() + 1;
    filterInfo.value.visibleRows = gridApi.value.getDisplayedRowCount();
};

/**
 * Clear all table filters.
 */
const clearFilters = (): void => {
    // Replace the filter model with an empty model.
    gridApi.value.setFilterModel({});

    // Clear any saved filter state in the table state manager.
    mergedGridConfig.value.state.clearFilters();

    // Refresh the column filters to reset inputs.
    gridApi.value.refreshHeader();
};

const togglePinned = (): void => {
    pinned.value = !pinned.value;
    const pinSetting = pinned.value ? 'left' : null;

    const cols = gridApi.value.getAllDisplayedColumns();
    if (cols && cols.length >= 3) {
        gridApi.value.setColumnsPinned(cols.slice(1, 3), pinSetting);
    }
};

const exportData = (): void => {
    // Filter out the 'special columns'
    const columnsToExport = gridApi.value.getAllDisplayedColumns().filter(column => {
        const colDef = column.getColDef();
        return !colDef.headerComponentParams?.preventExport;
    });

    // Replaces HTML symbols with their corresponding string character (i.e., &quot; -> ")
    const temp = document.createElement('p');
    const decodeEntities = (s: string): string => {
        temp.innerHTML = s;
        return temp.textContent || temp.innerText;
    };

    gridApi.value.exportDataAsCsv({
        columnKeys: columnsToExport,
        suppressQuotes: true,
        processCellCallback: cell => {
            const cellType = cell.column.getColDef().cellRendererParams;
            if (!cell.value || (cellType && cellType.type === 'number')) return cell.value;
            else if (cellType && cellType.type === 'date')
                return `"${new Date(cell.value).toLocaleDateString('en-CA', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}"`;
            else return `"${decodeEntities(cell.value).replace(/"/g, '""')}"`;
        }
    });
};

const setUpDateFilter = (colDef: ColumnDefinition, state: TableStateManager): void => {
    colDef.floatingFilterComponent = 'dateFloatingFilter';
    colDef.filterParams.comparator = function (filterDate: any, entryDate: any) {
        const entry = new Date(entryDate);

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
    colDef.suppressFloatingFilterButton = true;
    colDef.floatingFilterComponentParams = {
        stateManager: state
    };
};

const setUpSelectorFilter = (colDef: ColumnDefinition, rowData: Attributes[], state: TableStateManager): void => {
    colDef.floatingFilterComponent = 'selectorFloatingFilter';
    colDef.filterParams.inRangeInclusive = true;
    colDef.suppressFloatingFilterButton = true;
    colDef.floatingFilterComponentParams = {
        stateManager: state,
        rowData: rowData
    };
};

const setUpNumberFilter = (colDef: ColumnDefinition, state: TableStateManager): void => {
    colDef.floatingFilterComponent = 'numberFloatingFilter';
    colDef.filterParams.inRangeInclusive = true;
    colDef.suppressFloatingFilterButton = true;
    colDef.floatingFilterComponentParams = {
        stateManager: state
    };
};

const setUpTextFilter = (colDef: ColumnDefinition, state: TableStateManager): void => {
    colDef.floatingFilterComponent = 'textFloatingFilter';
    colDef.suppressFloatingFilterButton = true;
    colDef.floatingFilterComponentParams = {
        stateManager: state
    };

    // If we want to add different search methods in the future, consider using some sort of generic search function.
    // see: https://github.com/ramp4-pcar4/ramp4-pcar4/pull/57#pullrequestreview-377999397

    // default to regex filtering for text columns
    colDef.filterParams.textMatcher = function (params: any) {
        // treat * as a regular special character
        if (!params.filterText || typeof params.filterText !== 'string') return true;
        const newFilterText = params.filterText.replace(/\*/, '\\*').replace(/[()\[\]]/g, '\\$&');
        // surround filter text with .* to match anything before and after
        const re = new RegExp(`^.*${newFilterText}.*`);
        return re.test(params.value);
    };

    // modified from: https://www.ag-grid.com/javascript-grid-filter-text/#text-formatter
    const disregardAccents = function (s: string) {
        if (!s || typeof s !== 'string') return s;
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
    colDefs: Array<ColumnDefinition | SpecialColumnDefinition>,
    state: TableStateManager
): void => {
    // set up row number column
    if (col.field === 'rvRowIndex') {
        const indexDef: SpecialColumnDefinition = {
            field: 'rvRowIndex',
            headerName: '',
            headerComponentParams: { preventExport: true },
            sortable: false,
            lockPosition: true,
            valueGetter: 'node.rowIndex + 1',
            suppressMovable: true,
            suppressHeaderMenuButton: true,
            suppressHeaderContextMenu: true,
            floatingFilter: mergedGridConfig.value.state.colFilter,
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
            suppressFloatingFilterButton: true,
            floatingFilterComponentParams: {
                stateManager: state,
                clearFilters: clearFilters
            },
            filter: true
        };

        colDefs.push(indexDef);
    }

    // Set up the interactive column that contains the zoom and details button.
    if (col.field === 'rvInteractive') {
        const buttonControls = mergedGridConfig.value.state.controls;

        const detailsDef: SpecialColumnDefinition = {
            field: 'rvDetailsButton',
            headerName: '',
            headerComponentParams: { isStatic: true, preventExport: true },
            sortable: false,
            pinned: mobileView.value ? null : 'left',
            filter: false,
            lockPosition: true,
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
            colDefs.push(detailsDef);
        }

        // only render the zoom buttons if there is at least one map layer in the grid
        if (hasMapLayers.value) {
            const zoomDef: SpecialColumnDefinition = {
                field: 'rvZoomButton',
                headerName: '',
                headerComponentParams: { isStatic: true, preventExport: true },
                sortable: false,
                pinned: mobileView.value ? null : 'left',
                filter: false,
                lockPosition: true,
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
                colDefs.push(zoomDef);
            }
        }

        // Handle custom buttons.
        buttonControls.forEach((buttonConfig: string | ActionButtonDefinition) => {
            if (buttonConfig === 'zoom' || buttonConfig === 'details') return;

            const buttonDef: SpecialColumnDefinition = {
                field: `rvCustomButton_${typeof buttonConfig === 'string' ? buttonConfig : buttonConfig.actionEvent}`,
                headerName: '',
                headerComponentParams: { isStatic: true, preventExport: true },
                sortable: false,
                pinned: mobileView.value ? null : 'left',
                filter: false,
                lockPosition: true,
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
            colDefs.push(buttonDef);
        });
    }

    // Set up the symbol column.
    if (col.field === 'rvSymbol') {
        const iconDef: SpecialColumnDefinition = {
            field: 'rvSymbol',
            headerName: '',
            headerComponentParams: { isStatic: true, preventExport: true },
            sortable: false,
            filter: false,
            lockPosition: true,
            maxWidth: 42,
            cellDataType: false,
            cellRenderer: (cell: any) => {
                const layer = iApi.geo.layer.getLayer(cell.data.rvUid);
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
        colDefs.push(iconDef);
    }
};

// checks if any external (layer) filters are applied
const isExternalFilterPresent = () => {
    return !Object.values(filteredOids.value).every(oids => oids === undefined);
};

// filters row based on layer filter
const doesExternalFilterPass = (node: any) => {
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

    const thisFilterDef = new DefPromise<void>();
    // we make a copy so any filters that come after do not change our local array.
    // this array does not contain thisFilterDef.
    const activeFilterPromises = filterQueue.value.slice().map(d => d.getPromise());

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
                        mergedGridConfig.value.state.filterByExtent ? iApi.geo.map.getExtent() : undefined
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
    gridApi.value.onFilterChanged();

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
    mergedGridConfig.value.state.applyToMap = !mergedGridConfig.value.state.applyToMap;
    applyFiltersToMap();
};

const applyFiltersToMap = () => {
    gridLayers.value
        .filter(layer => layer.mapLayer)
        .forEach(layer => {
            if (!mergedGridConfig.value.state.applyToMap) {
                layer.setSqlFilter(CoreFilter.GRID, '');
            } else {
                const mapFilterQuery = getFiltersQuery(layer.id);
                layer.setSqlFilter(CoreFilter.GRID, mapFilterQuery);
            }
        });
};

/**
 * Get filter SQL query string
 */
const getFiltersQuery = (layerId: string) => {
    const filterModel = gridApi.value.getFilterModel();
    const colStrs: (string | undefined)[] = [];
    Object.keys(filterModel || {}).forEach(col => {
        // check if filter is applied to an attribute of this layer
        const attrs = getAttrPair(layerId, col);
        if (attrs) {
            // create SQL string with original attribute name, because otherwise the the layer wouldn't recognize the attribute name in the filter
            // i.e a layer with 'LAT' mapped to 'LATITUDE' in the grid must query '___ IN LAT' instead of '___ IN LATITUDE'
            colStrs.push(filterToSql(attrs.origAttr, filterModel[col]));
        } else {
            // filter out layer when searching a column it doesn't have
            colStrs.push('1=2');
        }
    });
    if (mergedGridConfig.value.state.searchFilter && mergedGridConfig.value.state.searchFilter.length > 0) {
        const globalSearchVal = globalSearchToSql(layerId) || '1=2';
        if (globalSearchVal.length > 0) {
            // do not push an empty global search
            colStrs.push(`(${globalSearchVal})`);
        }
    }
    return colStrs.join(' AND ');
};

/**
 * converts columns filter to SQL
 * @param col column name. this will be the attribute name in the filter
 * @param colFilter this is the ag-grid filter model for the column https://www.ag-grid.com/javascript-data-grid/filter-api/
 */
const filterToSql = (col: string, colFilter: Record<string, any>): string | undefined => {
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
            const val = colFilter.filter.replace(/'/g, /''/);
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
                    newVal = newVal + val.substr(lastIdx, escMatch.index - lastIdx) + escMatch[0].slice(-1);
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
                const sqlWhere = `UPPER(${col}) LIKE \'${newVal.replace(/\*/g, '%').toUpperCase()}%\'`;
                return sqlWhere.includes('ௌ%') || sqlWhere.includes('ௌ_') ? `${sqlWhere} ESCAPE \'ௌ\'` : sqlWhere;
            }
            break;
        }
        case 'date': {
            // defaults to min and max dates respectively
            const dateFrom = new Date(colFilter.dateFrom ?? 0);
            const dateTo = new Date(colFilter.dateTo ?? 8640000000000000); // max date;
            const from = dateFrom
                ? `${dateFrom.getMonth() + 1}/${dateFrom.getDate()}/${dateFrom.getFullYear()}`
                : undefined;
            const to = dateTo ? `${dateTo.getMonth() + 1}/${dateTo.getDate()}/${dateTo.getFullYear()}` : undefined;
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
const globalSearchToSql = (layerId: string): string => {
    // TODO: support for global search on dates
    const val = mergedGridConfig.value.state.searchFilter.replace(/'/g, "''");
    // to implement quick filters, first need to split the search text on white space
    const searchVals = val.split(' ');

    const sortedRows: RowNode[] = [];
    gridApi.value.forEachNodeAfterFilterAndSort(node => {
        sortedRows.push(node as RowNode);
    });
    const columns = gridApi.value
        .getAllDisplayedColumns()
        .filter(
            (column: any) =>
                (column.colDef.filter === 'agTextColumnFilter' || column.colDef.filter === 'agNumberColumnFilter') &&
                getAttrPair(layerId, column.getColId())
        );

    const filteredColumns: string[] = [];

    sortedRows.forEach((row: RowNode) => {
        let rowMatch = true;
        let rowSql = '';
        // each row must contain all of the split search values
        for (const searchVal of searchVals) {
            const re = new RegExp(`.*${searchVal.split(' ').join('.*').toUpperCase()}`);
            const filterVal = `%${searchVal.replace(/\*/g, '%').split(' ').join('%').toUpperCase()}`;
            // if any column data matches the search val in regex form, set foundVal to true and proceed to next search term
            let foundVal = false;
            for (const column of columns ?? []) {
                const colId = column.getColId();
                const origColId = getAttrPair(layerId, column.getColId())?.origAttr;
                const colDef = column.getColDef();

                // row data can be undefined when merging heterogenous layers
                if (row.data[colId] === undefined) {
                    foundVal = false;
                }
                // process global search sql independently for text and number columnns
                else if (colDef.filter === 'agTextColumnFilter') {
                    const cellData = row.data[colId] === null ? null : row.data[colId].toString();
                    if (cellData !== null && re.test(cellData.toUpperCase())) {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        rowSql
                            ? (rowSql = rowSql.concat(' AND ', `(UPPER(${origColId}) LIKE \'${filterVal}%\')`))
                            : (rowSql = rowSql.concat('(', `(UPPER(${origColId}) LIKE \'${filterVal}%\')`));
                        // if we have already stored the current sql break from loop
                        if (filteredColumns.includes(rowSql + ')')) {
                            foundVal = false;
                        } else {
                            foundVal = true;
                        }
                        break;
                    }
                } else if (colDef.filter === 'agNumberColumnFilter') {
                    const cellData = row.data[colId] === null ? null : row.data[colId];
                    if (cellData !== null && re.test(cellData)) {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        rowSql
                            ? (rowSql = rowSql.concat(' AND ', `(${origColId} = ${cellData})`))
                            : (rowSql = rowSql.concat('(', `(${origColId} = ${cellData})`));
                        foundVal = !filteredColumns.includes(rowSql + ')');
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
    const arrowKeys = ['ArrowDown', 'Down', 'ArrowLeft', 'Left', 'ArrowUp', 'Up', 'ArrowRight', 'Right'];
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
    gridLayers.value.some(layer => layer.isLoaded && layer.supportsFeatures && layer.mapLayer)
);

/**
 * Given a layer id and its attribute name,  attempts to find the mapped attribute pair for it
 */
const getAttrPair = (layerId: string, attr: string): AttributeMapPair | undefined => {
    // limitation: cannot do swapsies-like mapping between real attributes and mapped attributes.
    // eg. orig layer has fields xx and yy.  Can't map xx to yy and yy to zz.
    //     would likely write xx to yy, then overwrite with yy (from source). then would duplicate yy (source) to zz.
    return GridUtils.findAttributePair(layerCols.value, layerId, attr);
};

const setUpColumns = async (): Promise<void> => {
    /**
     * Layers our grid sources that exist, are loaded, and deal in Features
     */
    const fancyLayers = gridLayers.value.filter(layer => layer.supportsFeatures && layer.isLoaded);

    if (fancyLayers.length === 0) {
        // in the event of error'd layers, otherwise a blank datagrid will appear
        closeGrid();
    }

    // get the currently loaded and total record count from layer
    totalRecordCount.value = fancyLayers.reduce((count, { featureCount }) => count + featureCount, 0);

    loadedRecordCount.value = new Array(gridLayers.value.length).fill(0);

    fancyLayers.forEach((fl, idx) => (loadedRecordCount.value[idx] += fl.downloadedAttributes()));

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

    // for safety. items in fancyLayers should already be loaded.
    await Promise.all(fancyLayers.map(l => l.loadPromise()));

    // load/fetch all the attributes needed for the table. store those attribute load promises in an array.
    const tableAttributePromises = fancyLayers.map(async fl => {
        const tabularAttrSet = await markRaw(fl).getTabularAttributes();

        const gridConfig = mergedGridConfig?.value?.state?.state as TableStateOptions | undefined;

        // use selectedColumnNames to filter out unwanted columns, but only if the appropriate flag is set
        if (gridConfig?.columns && gridConfig.columnMetadata?.exclusiveColumns) {
            const selectedColumnNames = gridConfig.columns.map((column: { field: any }) => column.field);
            tabularAttrSet.columns = tabularAttrSet.columns.filter(column => selectedColumnNames.includes(column.data));
        }

        return tabularAttrSet;
    });

    // wait for everything to load
    const [tableError, tableAttributes] = await to(Promise.all(tableAttributePromises));

    if (tableError) {
        console.error(tableError);
        isErrorGrid.value = true;
        isLoadingGrid.value = false;
        return;
    }

    // check if load was cancelled by checking the loadAborted state
    if (fancyLayers.every(fl => fl.attribLoadAborted())) {
        // if load was cancelled, don't load grid any further and return
        isLoadingGrid.value = false;
        return;
    }

    /**
     * Holds the final table, consisting of all source layer "tables" merged together
     */
    const mergedTableAttrs: TabularAttributeSet = {
        columns: [],
        rows: [],
        fields: [],
        oidField: ''
    };

    // merge attributes into one table
    tableAttributes.forEach((sourceTableAttribs, idx) => {
        const attrMap: Array<AttributeMapPair> = [];
        const layerId: string = fancyLayers[idx].id;

        // scan the source layer's table's columns
        sourceTableAttribs.columns.forEach(col => {
            if (mergedGridConfig.value.fieldMap && mergedGridConfig.value.fieldMap[col.data]) {
                // this source column maps to the grid. save the mapping
                attrMap.push({
                    origAttr: col.data,
                    mappedAttr: mergedGridConfig.value.fieldMap[col.data]
                });

                // update the column metadata with the mapped value
                col.data = mergedGridConfig.value.fieldMap[col.data];
                col.title = col.data;
            } else {
                // mark as not mapped
                attrMap.push({
                    origAttr: col.data,
                    mappedAttr: undefined
                });
            }

            // if our final table definition doesn't have this column, and this column is participating,
            // add it to the definition.
            if (!mergedTableAttrs.columns.map(c => c.data).includes(col.data)) {
                mergedTableAttrs.columns.push(col);
            }
        });

        // add the rows from this layer to the final merge grid.
        mergedTableAttrs.rows = mergedTableAttrs.rows.concat(
            sourceTableAttribs.rows.map(row => {
                // if there is field-mapping, shuttle the row value from the old field to the new field, then smite the old field
                if (mergedGridConfig.value.fieldMap) {
                    for (const [oldAttr, newAttr] of Object.entries(mergedGridConfig.value.fieldMap)) {
                        if (row[oldAttr] !== undefined && row[newAttr] === undefined) {
                            row[newAttr] = row[oldAttr];
                            delete row[oldAttr];
                        }
                    }
                }
                return row;
            })
        );

        // add source table fields to the merge grid fields.
        // TODO wouldn't this make duplicate objects across multiple layer sources? is there some kind of cleanup later?
        //      like we'd concact "name" from layer one, then concat "name" from layer two.
        //      run a console log test if no obvious answer
        mergedTableAttrs.fields = mergedTableAttrs.fields.concat(
            sourceTableAttribs.fields.map(field => {
                // Add system columns to the set if they need to be hidden
                if (
                    (!iApi.ui.exposeOids && field.type === 'oid') ||
                    (!iApi.ui.exposeMeasurements &&
                        (field.name.toLowerCase() === 'shape_length' || field.name.toLowerCase() === 'shape_area'))
                ) {
                    systemCols.value.add(field.name);
                }
                return {
                    name:
                        mergedGridConfig.value.fieldMap && mergedGridConfig.value.fieldMap[field.name]
                            ? mergedGridConfig.value.fieldMap[field.name]
                            : field.name,
                    type: field.type,
                    alias: field.alias ?? undefined,
                    length: field.length ?? undefined
                };
            })
        );

        // derive OID field.
        // NOTE this will update/rewrite with every source. maybe thats easiest, but also seems a bit fragile.
        //      if last table is mapped bad, boom. I guess the whole thing depends on proper config.
        mergedTableAttrs.oidField =
            mergedGridConfig.value.fieldMap && mergedGridConfig.value.fieldMap[sourceTableAttribs.oidField]
                ? mergedGridConfig.value.fieldMap[sourceTableAttribs.oidField]
                : sourceTableAttribs.oidField;

        // tracking which columns correspond with which layer for applyToMap filtering
        layerCols.value[layerId] = attrMap;
    });

    // save field that contains oid for this grid
    oidField.value = mergedTableAttrs.oidField;

    // scan the values of the rows. for text values, run the HTML escaper to avoid values being converted into dom nodes.
    for (let i = 0; i < mergedTableAttrs.rows.length; i++) {
        for (const [key] of Object.entries(mergedTableAttrs.rows[i])) {
            if (iApi.ui.isPlainText(mergedTableAttrs.rows[i][key])) {
                mergedTableAttrs.rows[i][key] = iApi.ui.escapeHtml(mergedTableAttrs.rows[i][key]);
            }
        }
    }

    // Iterate through table columns and set up column definitions and column filter stuff.
    // Also adds the `rvSymbol` and `rvInteractive` columns to the table.
    const specialCols = ['rvRowIndex', 'rvInteractive', 'rvSymbol'].map(scn => ({
        data: scn,
        title: '',
        special: true
    }));

    // devnote: the special columns need to come first in the array we iterate over.
    //          if not, the rvSymbol will lurk within regular columns.
    // devnote: using "as any" on regular columns lets us sneak the "special" bool declaration onto the regular columns without actually adding it.
    //          it will be undefined, thus falsey, thus doing what we want
    specialCols.concat(mergedTableAttrs.columns as any).forEach(column => {
        // ensure final grid has column state for this column
        if (mergedGridConfig.value.state.columns[column.data] === undefined) {
            mergedGridConfig.value.state.columns[column.data] = new ColumnStateManager({
                field: column.data,
                title: column.title
            });
        }

        // hide system columns according to their flags
        if ((!iApi.ui.exposeOids || !iApi.ui.exposeMeasurements) && systemCols.value.has(column.data)) {
            mergedGridConfig.value.state.columns[column.data].visible = false;
        }

        const colConfig = mergedGridConfig.value.state.columns[column.data];
        const isSelector = colConfig.filter.type === 'selector';

        // create a column def for AG grid. this will be general, and then enhanced based on column specifics
        const col: ColumnDefinition = {
            headerName: colConfig.title ?? column.title,
            headerComponent: 'agColumnHeader',
            headerComponentParams: {
                sort: colConfig.sort
            },
            field: column.data ?? column,
            sortable: true,
            lockPosition: true,
            filterParams: {},
            floatingFilter: mergedGridConfig.value.state.colFilter && colConfig.searchable,
            hide: !colConfig.visible,
            minWidth: colConfig.width,
            maxWidth: colConfig.width ?? 400,
            cellRenderer: (cell: any) => {
                return cell.value;
            },
            suppressHeaderKeyboardEvent: (params: any): boolean => {
                const keyboardEvent = params.event as KeyboardEvent;
                //suppresses enter on header cells and tab when the cell is not focused (focus is on an inner button)
                if (
                    params.headerRowIndex === 0 &&
                    (keyboardEvent.key === 'Enter' ||
                        (!(keyboardEvent.target as HTMLElement).classList.contains('ag-header-cell') &&
                            keyboardEvent.key === 'Tab'))
                ) {
                    return true;
                }
                return false;
            }
        };

        // enhance the column based on what it is (special, or normal + datatype)
        if (column.special) {
            setUpSpecialColumns(col, columnDefs.value, mergedGridConfig.value.state);
        } else {
            // retrieve the field info for the column
            // TODO would this have collisions for multiple fields? I suspect the first of many would get matched.
            const fieldInfo = mergedTableAttrs.fields.find(field => field.name === col.field);

            col.cellRenderer = colConfig.template === '' ? CellRendererV : iApi.component(colConfig.template);
            col.autoHeight = true;

            // set up column filters according to their respective types
            if (NUM_TYPES.indexOf(fieldInfo!.type) > -1) {
                setUpNumberFilter(col, mergedGridConfig.value.state);
                col.filter = 'agNumberColumnFilter';
                col.cellRendererParams = {
                    type: 'number'
                };
            } else if (fieldInfo!.type === FieldType.DATE) {
                setUpDateFilter(col, mergedGridConfig.value.state);
                col.filter = 'agDateColumnFilter';
                col.minWidth = 400;
                col.cellRendererParams = {
                    type: 'date'
                };
            } else if (fieldInfo!.type === FieldType.STRING) {
                if (isSelector) {
                    // set up a selector filter instead of a text filter if the `isSelector` flag is true.
                    setUpSelectorFilter(col, mergedTableAttrs.rows, mergedGridConfig.value.state);
                } else {
                    setUpTextFilter(col, mergedGridConfig.value.state);
                }
                col.filter = 'agTextColumnFilter';
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
};

const keyupEvent = (e: Event): void => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && gridContainer.value?.matches(':focus')) {
        (gridContainer.value as any)._tippy.show();
    }
};

const blurEvent = (): void => {
    (gridContainer.value as any)._tippy.hide();
};

onMounted((): void => {
    gridContainer.value?.addEventListener('keyup', keyupEvent);
    gridContainer.value?.addEventListener('blur', blurEvent);
});

onBeforeMount((): void => {
    mergedGridConfig.value = gridStore.grids[props.gridId];

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
            [...iApi.$vApp.$el.querySelectorAll('[id^=tippy]')].forEach((element: any) => {
                if (element._tippy && el.value?.contains(element._tippy.reference)) {
                    element._tippy.hide();
                }
            });
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
        onModelUpdated: debounce(300, () => {
            gridApi.value.autoSizeAllColumns();
            addAriaLabels();
        })
    };

    setUpColumns();

    if (filtersStatus.value === 'partial') {
        iApi.notify.show(NotificationType.WARNING, iApi.$i18n.t(`layer.filterwarning`));
    }

    // ag-grid does not update automatically when language/locale is changed,
    // so we force it to update here
    watchers.value.push(
        watch(locale, () => {
            showGrid.value = false;
            setTimeout(() => {
                showGrid.value = true;
            }, 10);
        })
    );

    watchers.value.push(
        watch(filtersStatus, newStatus => {
            if (newStatus === 'partial') {
                iApi.notify.show(NotificationType.WARNING, iApi.$i18n.t(`layer.filterwarning`));
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
    gridContainer.value?.removeEventListener('keyup', keyupEvent);
    gridContainer.value?.removeEventListener('blur', blurEvent);
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

:deep(.ag-header-cell-comp-wrapper) {
    padding-right: 2px;
    padding-left: 2px;
}

/* Need this for hyperlinked text in the grid */
:deep(a) {
    color: rgba(37, 99, 235, 1);
    text-decoration: underline;
}

.search-bar:hover {
    .search-clear-container {
        @apply text-black;
    }
}

.shadow-clip {
    box-shadow: 0px 0px 15px 1px rgb(0 0 0 / 75%);
    clip-path: inset(0px 0px -50px 0px);
}

.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
