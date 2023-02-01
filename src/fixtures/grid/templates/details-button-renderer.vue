<template>
    <button
        type="button"
        class="flex items-center justify-center w-46 h-44"
        :content="t('grid.cells.details')"
        v-tippy="{ placement: 'top' }"
        @click="openDetails"
        tabindex="-1"
        ref="el"
    >
        <svg
            class="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 24 24"
            width="16"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
            />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { GlobalEvents } from '@/api/internal';
import type { InstanceAPI } from '@/api/internal';
import { IdentifyResultFormat } from '@/geo/api';
import { useI18n } from 'vue-i18n';

const props = defineProps(['params']);
const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const el = ref<HTMLElement>();

const openDetails = () => {
    let data = Object.assign({}, props.params.data);
    delete data['rvInteractive'];
    delete data['rvSymbol'];

    // grid only supports esri features at the moment, so we hardcode that format
    iApi.event.emit(GlobalEvents.DETAILS_TOGGLE, {
        data: data,
        uid: props.params.uid,
        format: IdentifyResultFormat.ESRI
    });
};

onMounted(() => {
    // need to hoist events to top level cell wrapper to be keyboard accessible
    props.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            openDetails();
        }
    });

    props.params.eGridCell.addEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    props.params.eGridCell.addEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});

onBeforeUnmount(() => {
    props.params.eGridCell.removeEventListener(
        'keydown',
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                openDetails();
            }
        }
    );

    props.params.eGridCell.removeEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    props.params.eGridCell.removeEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});
</script>

<style lang="scss" scoped></style>
