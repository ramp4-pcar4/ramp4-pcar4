<template>
    <appbar-button
        :onClickFunction="onClick"
        :tooltip="$t('grid.button.title')"
    >
        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Atable_chart -->
        <svg
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
                d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"
            />
        </svg>
    </appbar-button>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class GridAppbarButtonV extends Vue {
    onClick() {
        this.$iApi.panel.toggleMinimize('grid-panel');
    }
}
</script>

<style lang="scss" scoped></style>
