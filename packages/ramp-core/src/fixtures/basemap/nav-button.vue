<template>
    <div class="relative" tabindex="-1">
        <button @click="togglePanel()" class="w-full h-full default-focus-style" v-focus-item>
            <svg class="fill-current w-32 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"
                />
            </svg>
        </button>
        <tooltip position="left">{{ $t('basemap.title') }}</tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class BasemapNavButtonV extends Vue {
    // TODO: replace with proper toggle once implemented
    togglePanel(): void {
        const panel = this.$iApi.panel.get('basemap-panel');

        if (panel.isOpen) {
            panel.close();
        } else {
            panel.open();
        }
    }
}
</script>

<style lang="scss" scoped></style>
