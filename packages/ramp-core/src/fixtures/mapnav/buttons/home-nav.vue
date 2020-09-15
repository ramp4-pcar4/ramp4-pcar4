<template>
    <div class="relative" tabindex="-1">
        <button class="w-full h-full default-focus-style" v-focus-item>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        </button>
        <tooltip position="left">{{ $t('mapnav.home') }}</tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomeNavV extends Vue {}
</script>

<style lang="scss" scoped></style>
