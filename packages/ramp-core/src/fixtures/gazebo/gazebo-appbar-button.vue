<template>
    <button class="py-6" @click="togglePanel()">
        G
    </button>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import P1Screen1V from './p1-screen-1.vue';
import P1Screen2V from './p1-screen-2.vue';
import GazeboFixture from '.';

@Component
export default class GazeboAppbarButton extends Vue {
    togglePanel(): void {
        const panel = this.$iApi.panel.get('p1');

        this.$iApi.fixture.get<GazeboFixture>('gazebo')!.panels.p1.open();

        panel!.route();
        if (panel) {
            panel.close();
        } else {
            this.$iApi.panel.open({
                id: 'p1',
                screens: [
                    { id: 'p-1-screen-1', component: P1Screen1V },
                    { id: 'p-1-screen-2', component: P1Screen2V }
                ],
                route: {
                    id: 'p-1-screen-1'
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>
