<template>
    <appbar-button :onClickFunction="onClick" :tooltip="$t('legend.title')">
        <!-- https://material.io/resources/icons/?icon=layers&style=baseline -->
        <svg
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
            />
        </svg>
    </appbar-button>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class LegendAppbarButtonV extends Vue {
    onClick() {
        this.$iApi.panel.toggle('legend-panel');
    }
}
</script>

<style lang="scss" scoped></style>
