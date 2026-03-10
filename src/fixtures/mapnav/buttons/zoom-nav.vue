<template>
    <div>
        <mapnav-button :onClickFunction="zoomIn" :tooltip="t('mapnav.zoomIn')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        </mapnav-button>
        <divider-nav></divider-nav>
        <mapnav-button :onClickFunction="zoomOut" :tooltip="t('mapnav.zoomOut')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
                <path d="M19 13H5v-2h14v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        </mapnav-button>
    </div>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import { throttle } from 'es-toolkit/function';
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import DividerNav from './divider-nav.vue';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const zoomIn = throttle(() => iApi.geo.map.zoomIn(), 400, { edges: ['leading'] });
const zoomOut = throttle(() => iApi.geo.map.zoomOut(), 400, { edges: ['leading'] });
</script>

<style lang="scss" scoped></style>
