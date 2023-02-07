<template>
    <div
        class="ag-custom-header flex flex-1 items-center h-full w-full"
        ref="el"
    >
        <div
            v-if="sortable"
            class="flex flex-1 items-center min-w-0"
            truncate-trigger
        >
            <button
                type="button"
                @click="onSortRequested($event)"
                :content="t(`grid.header.sort.${sort}`)"
                v-tippy="{ placement: 'top', hideOnClick: false }"
                class="customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full"
                role="columnheader"
                tabindex="-1"
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
                v-if="params.enableSorting && sort === 0"
                class="w-24 inline-block"
            >
            </span>
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
                type="button"
                :content="t(`grid.header.reorder.left`)"
                v-tippy="{ placement: 'top' }"
                @click="moveLeft()"
                class="move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                tabindex="-1"
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
                type="button"
                :content="t(`grid.header.reorder.right`)"
                v-tippy="{ placement: 'top' }"
                @click="moveRight()"
                class="move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                tabindex="-1"
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

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export interface GridCustomHeader {
    sort: number;
    sortable: boolean;
    columnApi: any;
    params: any;
}

const { t } = useI18n();
const props = defineProps(['params']);
const el = ref<HTMLElement>();

const sort = ref<number>(0);
const sortable = ref<boolean>(false);
const canMoveLeft = ref<boolean>(false);
const canMoveRight = ref<boolean>(false);
const columnApi = ref<any>(null);

const onColumnReorder = () => {
    const columns: any = columnApi.value.getAllDisplayedColumns();
    const columnIdx: number = columns.indexOf(props.params.column);
    canMoveLeft.value =
        columnIdx > 3 && !columns[columnIdx - 1].colDef.isStatic;
    canMoveRight.value =
        columnIdx < columns.length - 1 &&
        !columns[columnIdx + 1].colDef.isStatic;
};

// Swap the position of a column with it's left neighbor. If the neighboring column is static,
// or if there is no left neighbor, don't move it.
const moveLeft = (): void => {
    const columns: any = columnApi.value.getAllDisplayedColumns();
    const allColumns: any = columnApi.value.getAllGridColumns();
    const index: number = allColumns.indexOf(
        columns[columns.indexOf(props.params.column) - 1]
    );

    if (canMoveLeft.value) {
        columnApi.value.moveColumn(props.params.column, index);

        // Focus the "move left" button on the new column
        // The same column index keeps this element so we can't just use a ref for the buttons;
        // e.g. grid is A | B | C and this is B, if B moves left so the grid B | A | C this element is now A
        (
            el.value
                ?.closest('.ag-header-row')
                ?.querySelectorAll('.ag-header-cell')
                [index].querySelector('.move-left') as HTMLElement
        ).focus();

        props.params.api.ensureColumnVisible(allColumns[index]);
    }
};

// Swap the position of a column with it's right neighbor. If the neighboring column is static,
// or if there is no right neighbor, don't move it.
const moveRight = (): void => {
    const columns: any = columnApi.value.getAllDisplayedColumns();
    const allColumns: any = columnApi.value.getAllGridColumns();
    const index: number = allColumns.indexOf(
        columns[columns.indexOf(props.params.column) + 1]
    );

    if (canMoveRight.value) {
        columnApi.value.moveColumn(props.params.column, index);
        props.params.api.ensureColumnVisible(allColumns[index]);
    }
};

// Switch between sorting the column by `ascending`, `descending` or `none`.
const onSortRequested = (event: any): void => {
    sort.value = (sort.value + 1) % 3;
    if (sort.value === 1) {
        props.params.setSort('asc', event.shiftKey);
    } else if (sort.value === 2) {
        props.params.setSort('desc', event.shiftKey);
    } else {
        props.params.setSort('none', event.shiftKey);
    }
};

onMounted(() => {
    sortable.value = props.params.column.colDef.sortable;
    columnApi.value = props.params.columnApi;

    if (props.params.sort === 'asc') {
        sort.value = 1;
        props.params.setSort('asc');
    } else if (props.params.sort === 'desc') {
        sort.value = 2;
        props.params.setSort('desc');
    }

    onColumnReorder();
    // update move state when column has moved
    props.params.column.addEventListener('leftChanged', () => {
        onColumnReorder();
    });
});

onBeforeUnmount(() => {
    props.params.column.removeEventListener('leftChanged', () => {
        onColumnReorder();
    });
});
</script>

<style lang="scss" scoped></style>
