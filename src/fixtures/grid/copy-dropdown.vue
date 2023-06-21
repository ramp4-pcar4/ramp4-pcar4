<template>
    <dropdown-menu
        class="relative"
        position="bottom-end"
        :tooltip="t('grid.label.copy')"
        :tooltip-placement="'bottom'"
        :centered="false"
    >
        <template #header>
            <div class="flex p-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fit=""
                    height="24px"
                    width="24px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    focusable="false"
                    class="inline mr-1 fill-current"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                        clip-rule="evenodd"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </template>
        <div
            class="copy-dropdown pointer-events-auto px-8 flex justify-center w-256"
        >
            <input
                class="rv-input rv-global-search w-full"
                type="number"
                min="1"
                :max="props.rowData.length"
                :placeholder="`${t('grid.label.row')} (1 - ${
                    props.rowData.length
                })`"
                v-model="row"
                @input="
                    () => {
                        rowError = false;
                    }
                "
            />
            <div v-if="rowError" class="text-red-900 text-xs">
                {{
                    t('grid.label.copy.error.row', {
                        max: props.rowData.length
                    })
                }}
            </div>
            <select
                class="form-select border-b border-b-gray-600 py-0 w-full cursor-pointer mt-8"
                v-model="col"
                v-truncate
                @change="
                    () => {
                        colError = false;
                    }
                "
            >
                <option value="" disabled hidden v-truncate>
                    {{ t('grid.label.column') }}
                </option>
                <option
                    v-for="col in props.columnDefs.filter(
                        c => c.headerName && c.headerName.length > 0
                    )"
                    :value="col.field"
                    :key="col.headerName"
                    v-truncate
                >
                    {{ col.headerName }}
                </option>
            </select>
            <div v-if="colError" class="text-red-900 text-xs">
                {{ t('grid.label.copy.error.col') }}
            </div>
            <button
                type="button"
                @click="copy"
                class="bg-blue-500 text-white w-full p-4 mt-8 focus:outline-none"
                :class="success ? 'cursor-default' : 'hover:bg-blue-700'"
                :aria-label="
                    success ? t('grid.label.copied') : t('grid.label.copy')
                "
            >
                <div class="flex items-center justify-center" v-if="success">
                    <svg
                        height="18"
                        width="18"
                        viewBox="0 0 24 24"
                        class="inline fill-white"
                    >
                        <g id="done">
                            <path
                                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            />
                        </g>
                    </svg>
                    <span class="ml-8">{{ t('grid.label.copied') }}</span>
                </div>
                <span v-else>{{ t('grid.label.copy') }}</span>
            </button>
        </div>
    </dropdown-menu>
</template>

<script setup lang="ts">
import type { Attributes } from '@/geo/api';
import { ref, type PropType } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const col = ref<string>('');
const row = ref<number>();
const rowError = ref<boolean>(false);
const colError = ref<boolean>(false);
const success = ref<boolean>(false);

const props = defineProps({
    columnDefs: { type: Object as PropType<Array<any>>, required: true },
    rowData: { type: Object as PropType<Array<Attributes>>, required: true }
});

const copy = () => {
    if (success.value) {
        return;
    }

    if (!row.value || row.value < 1 || row.value > props.rowData.length) {
        rowError.value = true;
    }

    if (!col.value) {
        colError.value = true;
    }

    if (rowError.value || colError.value) {
        return;
    }

    success.value = true;
    navigator.clipboard.writeText(props.rowData[row.value! - 1][col.value]);
    setTimeout(() => {
        success.value = false;
    }, 3000);
};
</script>

<style scoped>
.copy-dropdown {
    &:hover {
        background-color: white !important;
    }
}
</style>
