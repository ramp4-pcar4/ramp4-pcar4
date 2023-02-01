<template>
    <mapnav-button :onClickFunction="togglePanel" :tooltip="t('legend.title')">
        <svg
            class="fill-current w-32 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
            />
        </svg>
    </mapnav-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import type { InstanceAPI } from '@/api';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const togglePanel = () => {
    iApi.panel.toggle('legend');
};
</script>

<style lang="scss" scoped></style>
