<template>
    <div class="relative" tabindex="-1">
        <button
            type="button"
            class="p-8"
            :class="{
                'text-gray-500 hover:text-black focus:text-black': active,
                'text-gray-300': !active
            }"
            :content="t('panels.controls.moveRight')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg
                class="fill-current w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4 4 16 16"
                :aria-label="t('panels.controls.moveRight')"
            >
                <path
                    d="M 8.59 16.34 L 13.17 11.75 L 8.59 7.16 L 10 5.75 L 16 11.75 L 10 17.75 Z"
                />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
defineProps({
    active: Boolean
});
</script>

<style lang="scss" scoped></style>
