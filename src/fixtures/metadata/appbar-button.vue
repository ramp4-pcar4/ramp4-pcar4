<template>
    <appbar-button :onClickFunction="onClick" :tooltip="$t('metadata.title')">
        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Adescription -->
        <svg
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
            />
        </svg>
    </appbar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MetadataAppbarButtonV',
    methods: {
        onClick() {
            this.$iApi.panel.toggleMinimize('metadata-panel');
        }
    }
});
</script>

<style lang="scss" scoped></style>
