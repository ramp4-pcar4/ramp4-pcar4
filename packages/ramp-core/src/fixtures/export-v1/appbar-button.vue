<template>
    <appbar-button :onClickFunction="onClick" :tooltip="$t('export-v1.appbarButton')">
        <!-- https://fonts.google.com/icons?selected=Material+Icons:layers&icon.query=export -->
        <svg
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </svg>
    </appbar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ExportV1AppbarButtonV',
    methods: {
        onClick() {
            this.$iApi.panel.toggle('export-v1-panel');
        }
    }
});
</script>

<style lang="scss" scoped></style>
