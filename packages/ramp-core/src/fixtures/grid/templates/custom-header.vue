<template>
    <div class="ag-custom-header flex flex-1 items-center h-full w-full">
        <div v-if="sortable" class="flex flex-1 items-center min-w-0">
            <button
                @click="onSortRequested('asc', $event)"
                :content="$t(`grid.header.sort.${sort}`)"
                v-tippy="{ placement: 'top', hideOnClick: false }"
                class="customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full"
                role="columnheader"
                truncate-trigger
            >
                <div v-truncate="{ externalTrigger: true }">
                    {{ params.displayName }}
                </div>
            </button>
        </div>
        <span v-else class="customHeaderLabel" role="columnheader" v-truncate>{{
            params.displayName
        }}</span>

        <div v-if="sortable" class="flex">
            <span
                v-if="params.enableSorting && sort === 1"
                class="customSortDownLabel"
            >
                <div class="md-icon-small">
                    <svg height="24" width="24">
                        <g id="arrow_upward">
                            <path
                                d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
                            />
                        </g>
                    </svg>
                </div>
            </span>
            <span
                v-if="params.enableSorting && sort === 2"
                class="customSortUpLabel"
            >
                <div class="md-icon-small">
                    <svg height="24" width="24">
                        <g id="arrow_downward">
                            <path
                                d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                            />
                        </g>
                    </svg>
                </div>
            </span>
            <button
                :content="$t(`grid.header.reorder.left`)"
                v-tippy="{ placement: 'top' }"
                @click="moveLeft()"
                class="opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                :disabled="!canMoveLeft"
            >
                <div class="inline-block">
                    <svg height="24" width="24">
                        <g id="keyboard_arrow_left">
                            <path
                                d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                            />
                        </g>
                    </svg>
                </div>
            </button>
            <button
                :content="$t(`grid.header.reorder.right`)"
                v-tippy="{ placement: 'top' }"
                @click="moveRight()"
                class="opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                :disabled="!canMoveRight"
            >
                <div class="inline-block">
                    <svg height="24" width="24">
                        <g id="keyboard_arrow_right">
                            <path
                                d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                            />
                        </g>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class GridCustomHeaderV extends Vue {
    sort: number = 0;
    sortable: boolean = false;
    canMoveLeft = false;
    canMoveRight = false;

    mounted(): void {
        this.gridApi = this.params.api;
        this.columnApi = this.params.columnApi;
        this.sortable = this.params.column.colDef.sortable;
        this.onColumnReorder();
        // update move state when column has moved
        this.params.column.addEventListener('leftChanged', () => {
            this.onColumnReorder();
        });
    }

    beforeDestroy() {
        this.params.column.removeEventListener('leftChanged', () => {
            this.onColumnReorder();
        });
    }

    onColumnReorder() {
        const columns: any = this.columnApi.getAllDisplayedColumns();
        const columnIdx: number = columns.indexOf(this.params.column);
        this.canMoveLeft =
            columnIdx > 3 && !columns[columnIdx - 1].colDef.isStatic;
        this.canMoveRight =
            columnIdx < columns.length - 1 &&
            !columns[columnIdx + 1].colDef.isStatic;
    }

    // Swap the position of a column with it's left neighbor. If the neighboring column is static,
    // or if there is no left neighbor, don't move it.
    moveLeft(): void {
        const columns: any = this.columnApi.getAllDisplayedColumns();
        const allColumns: any = this.columnApi.getAllGridColumns();
        const index: number = allColumns.indexOf(
            columns[columns.indexOf(this.params.column) - 1]
        );

        if (this.canMoveLeft) {
            this.columnApi.moveColumn(this.params.column, index);
        }
    }

    // Swap the position of a column with it's right neighbor. If the neighboring column is static,
    // or if there is no right neighbor, don't move it.
    moveRight(): void {
        const columns: any = this.columnApi.getAllDisplayedColumns();
        const allColumns: any = this.columnApi.getAllGridColumns();
        const index: number = allColumns.indexOf(
            columns[columns.indexOf(this.params.column) + 1]
        );

        if (this.canMoveRight) {
            this.columnApi.moveColumn(this.params.column, index);
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

export default interface GridCustomHeader {
    sort: number;
    sortable: boolean;
    gridApi: any;
    columnApi: any;
    params: any;
}
</script>

<style lang="scss" scoped></style>
