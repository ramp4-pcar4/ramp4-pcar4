<template>
    <button
        type="button"
        class="clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-grab text-gray-500 hover:text-black"
        @click="clearFilters"
        :content="t('grid.filters.clear')"
        v-tippy="{ placement: 'bottom' }"
        :disabled="!params.stateManager.filtered"
        tabindex="-1"
        ref="el"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            class="h-24 w-24 fill-current"
            viewBox="0 0 24 24"
        >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
                <g>
                    <path
                        d="M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z"
                    />
                    <path
                        d="M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z"
                    />
                </g>
            </g>
        </svg>
    </button>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps(['params']);
const { t } = useI18n();
const el = ref<HTMLElement>();

const clearFilters = () => props.params.clearFilters();

onMounted(async () => {
    // need to hoist events to top level cell wrapper to be keyboard accessible
    await nextTick();
    const headerCell: HTMLElement = el.value?.closest('.ag-header-cell')!;
    const grid: HTMLElement = headerCell.closest('.ag-pinned-left-header')!;
    headerCell.addEventListener('keydown', async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
            clearFilters();
            await nextTick();
            (
                grid.querySelector(
                    '.ag-header-cell.ag-floating-filter'
                ) as HTMLElement
            ).focus();
        }
    });

    headerCell.addEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    headerCell.addEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});

onBeforeUnmount(() => {
    const headerCell: HTMLElement = el.value?.closest('.ag-header-cell')!;
    const grid: HTMLElement = headerCell.closest('.ag-pinned-left-header')!;
    headerCell.removeEventListener('keydown', async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
            clearFilters();
            await nextTick();
            (
                grid.querySelector(
                    '.ag-header-cell.ag-floating-filter'
                ) as HTMLElement
            ).focus();
        }
    });

    headerCell.removeEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    headerCell.removeEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});
</script>

<style lang="scss" scoped></style>
