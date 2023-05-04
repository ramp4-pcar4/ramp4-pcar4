<template>
    <dropdown-menu
        v-focus-item
        :position="dropdownPlacement"
        :tooltip="t('export.menu')"
        tooltip-placement="top"
    >
        <template #header>
            <div
                class="flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"
            >
                <svg
                    class="fill-current w-24 h-24 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none" />
                        <path
                            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
                        />
                    </g>
                </svg>
            </div>
        </template>
        <template v-slot:default>
            <a
                v-for="component in componentSelectedState"
                :key="component.name"
                @click="toggleComponent(component)"
                href="javascript:;"
                :class="`text-left text-sm sm:text-base ${
                    component.selectable ? 'cursor-pointer' : 'cursor-default'
                }`"
                :aria-label="component.name"
            >
                <div class="md-icon-small inline">
                    <svg
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        :class="`inline mx-8 ${
                            !component.selected ? 'invisible' : ''
                        }`"
                    >
                        <g>
                            <path
                                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            />
                        </g>
                    </svg>
                    <span
                        :class="`inline ${
                            !component.selectable ? 'text-gray-300' : ''
                        }
                    `"
                        >{{
                            t(`export.menu.component.${component.name}`)
                        }}</span
                    >
                </div>
            </a>
        </template>
    </dropdown-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelStore } from '@/stores/panel';
import { useExportStore } from './store';

const { t } = useI18n();
const panelStore = usePanelStore();
const exportStore = useExportStore();
const emit = defineEmits(['onComponentToggle']);

defineProps({
    componentSelectedState: {
        type: Object,
        required: true
    }
});

const dropdownPlacement = computed<string>(() =>
    panelStore.mobileView ? 'top-end' : 'left-end'
);

const toggleComponent = (component: any): void => {
    if (!component.selectable) {
        return;
    }
    // update the store
    exportStore.toggleSelected({
        name: component.name
    });

    // notify the parent that a component was toggled
    emit('onComponentToggle');
};
</script>

<style lang="scss" scoped></style>
