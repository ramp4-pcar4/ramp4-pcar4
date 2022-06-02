<template>
    <appbar-button
        v-if="panelButton"
        :onClickFunction="onClickFunction"
        :tooltip="$t(panelButton.tooltip)"
        :id="panelId"
        ><div
            class="fill-current w-24 h-24 ml-8 sm:ml-20"
            v-html="panelButton.icon"
        ></div
    ></appbar-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultAppbarButtonV',
    props: {
        panelId: {
            type: String,
            required: true
        },
        minimize: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        panelButton() {
            return this.$iApi.panel.get(this.panelId)?.button;
        }
    },
    methods: {
        onClickFunction() {
            if (this.minimize) {
                this.$iApi.panel.toggleMinimize(this.panelId);
            } else {
                this.$iApi.panel.toggle(this.panelId);
            }
        }
    }
});
</script>

<style lang="scss" scoped></style>
