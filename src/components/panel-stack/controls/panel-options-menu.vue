<template>
    <dropdown-menu
        class="flex"
        :tooltip="t('panels.controls.optionsMenu')"
        :popperOptions="{ strategy: 'fixed' }"
        position="bottom-end"
    >
        <template #header>
            <div class="p-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="fill-current w-20 h-20"
                >
                    <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    />
                </svg>
            </div>
        </template>
        <slot></slot>
    </dropdown-menu>
</template>

<script setup lang="ts">
import DropdownMenu from '@/components/controls/dropdown-menu.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
:deep(.rv-dropdown > *) {
    @apply w-full text-left;
}
</style>
