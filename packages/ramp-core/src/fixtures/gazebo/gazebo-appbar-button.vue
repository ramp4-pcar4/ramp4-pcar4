<template>
    <button class="py-6" @click="togglePanel()">
        G
    </button>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class GazeboAppbarButton extends Vue {
    togglePanel(): void {
        const panel = this.$iApi.panel.get('p1');

        if (panel.isOpen) {
            panel.close();
        } else {
            panel.open();
        }
    }
}
</script>

<style lang="scss" scoped></style>
