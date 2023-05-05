<template>
    <mapnav-button :onClickFunction="onClick" :tooltip="t('mapnav.fullscreen')">
        <svg
            v-if="iApi.isFullscreen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-32 h-20"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
            />
        </svg>
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-32 h-20"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
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

const onClick = () => {
    iApi.toggleFullscreen();
};
</script>

<style lang="scss" scoped></style>
