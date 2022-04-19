<template>
    <appbar-button
        :onClickFunction="onClick"
        :tooltip="$t('details.items.title')"
    >
        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Aarticle%3A -->
        <svg
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
            />
        </svg>
    </appbar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DetailsItemsAppbarButtonV',
    methods: {
        onClick() {
            this.$iApi.panel.toggleMinimize('details-items-panel');
        }
    }
});
</script>

<style lang="scss" scoped></style>
