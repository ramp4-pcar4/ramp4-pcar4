<template>
    <div class="ag-custom-header flex flex-1 items-center">
        <div class="flex flex-1 items-center">
            <span @click="onSortRequested('asc', $event)" class="customHeaderLabel">{{ params.displayName }}</span>
            <span v-if="params.enableSorting && sort === 1" class="customSortDownLabel">
                <div class="md-icon-small">
                    <svg height="24" width="24">
                        <g id="arrow_upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" /></g>
                    </svg>
                </div>
            </span>
            <span v-if="params.enableSorting && sort === 2" class="customSortUpLabel">
                <div class="md-icon-small">
                    <svg height="24" width="24">
                        <g id="arrow_downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></g>
                    </svg>
                </div>
            </span>
        </div>

        <div v-if="sortable">
            <span @click="moveLeft()">
                <div class="inline-block">
                    <svg height="24" width="24">
                        <g id="keyboard_arrow_left"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" /></g>
                    </svg>
                </div>
            </span>
            <span @click="moveRight()">
                <div class="inline-block">
                    <svg height="24" width="24">
                        <g id="keyboard_arrow_right"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /></g>
                    </svg>
                </div>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomHeader extends Vue {
    data(): Object {
        return {
            sort: 0,
            sortable: false
        };
    }

    mounted(): void {
        this.gridApi = this.params.api;
        this.columnApi = this.params.columnApi;
        this.sortable = this.params.column.colDef.sortable;
    }

    // Swap the position of a column with it's left neighbor. If the neighboring column is static,
    // or if there is no left neighbor, don't move it.
    moveLeft(): void {
        const columns: any = this.columnApi.getAllDisplayedColumns();
        const allColumns: any = this.columnApi.getAllGridColumns();

        let columnIdx: number = columns.findIndex((col: any) => col.colId === this.params.column.colId);
        if (columnIdx === 0) return;

        const index: number = allColumns.indexOf(columns[columnIdx - 1]);

        if (!columns[columnIdx - 1].colDef.isStatic) {
            this.columnApi.moveColumnByIndex(columnIdx, index);
        }
    }

    // Swap the position of a column with it's right neighbor. If the neighboring column is static,
    // or if there is no right neighbor, don't move it.
    moveRight(): void {
        const columns = this.columnApi.getAllDisplayedColumns();
        const allColumns = this.columnApi.getAllGridColumns();

        let columnIdx = columns.findIndex((col: any) => col.colId === this.params.column.colId);
        if (columnIdx === columns.length - 1) return;

        const index = allColumns.indexOf(columns[columnIdx + 1]);

        if (!columns[columnIdx + 1].colDef.isStatic) {
            this.columnApi.moveColumnByIndex(columnIdx, index);
        }
    }

    // Switch between sorting the column by `ascending`, `descending` or `none`.
    onSortRequested(order: any, event: any): void {
        this.sort = (this.sort + 1) % 3;
        if (this.sort == 1) {
            this.params.setSort('asc', event.shiftKey);
        } else if (this.sort == 2) {
            this.params.setSort('desc', event.shiftKey);
        } else {
            this.params.setSort('', event.shiftKey);
        }
    }
}

export default interface CustomHeader {
    sort: number;
    sortable: boolean;
    gridApi: any;
    columnApi: any;
    params: any;
}
</script>
