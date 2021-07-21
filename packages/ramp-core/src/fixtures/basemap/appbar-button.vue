<template>
    <appbar-button :onClickFunction="onClick" :tooltip="$t('basemap.title')">
        <!-- Basemap icon -->
        <svg
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    </appbar-button>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class BasemapAppbarButtonV extends Vue {
    onClick() {
        this.$iApi.panel.toggle('basemap-panel');
    }
}
</script>

<style lang="scss" scoped></style>
