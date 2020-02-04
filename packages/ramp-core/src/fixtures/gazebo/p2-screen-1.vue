<template>
    <panel-screen>
        <template #header>
            Gazebo/Panel 2/Default Screen
        </template>

        <template #controls>
            <pin @click="panel.pin(!isPinned)" :active="isPinned"></pin>
        </template>

        <template #content>
            I'm a simple panel.
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { Panel, PanelRoute } from '@/store/modules/panel';
import { PanelItemAPI } from '@/api';

@Component({})
export default class Scree2V extends Vue {
    @Prop() panel!: PanelItemAPI;

    get isPinned(): boolean {
        return this.$iApi.panel.pinned === this.panel._panel.id;
    }

    mounted(): void {
        console.log(this.panel, this.$iApi.panel.pinned);
    }
}
</script>

<style lang="scss" scoped></style>
