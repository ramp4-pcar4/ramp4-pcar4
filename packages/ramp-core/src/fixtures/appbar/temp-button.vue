<template>
    <appbar-button :onClickFunction="onClick">
        <template #icon> {{ tooltip.substring(0, 1) }} </template>
        <template #tooltip> {{ tooltip }} </template>
    </appbar-button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppbarButtonV from './button.vue';
import { PanelInstance } from '../../api';

@Component({
    components: {
        'appbar-button': AppbarButtonV
    }
})
export default class TempAppbarButtonV extends Vue {
    @Prop() options!: { panel: PanelInstance };

    get tooltip() {
        return this.options.panel.id || '';
    }

    onClick() {
        this.options.panel.toggleMinimize();
    }
}
</script>
