<template>
    <panel-screen>
        <template #header>
            Gazebo/Panel 2/Screen A
        </template>

        <template #controls>
            <!-- <pin> is a global button component that any fixture/panel/screen can reuse -->

            <!-- ✔ this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not 👇 -->
            <pin @click="panel.pin(!isPinned)" :active="isPinned"></pin>

            <!-- ✔ this will also work 👇 -->
            <!-- <pin @click="panel.pin(!panel.isPinned)" :active="panel.isPinned"></pin> -->
        </template>

        <template #content>
            I'm a simple panel.

            <div class="flex flex-col items-center mt-4">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    @click="panel.route({ id: 'p-2-screen-2', props: { greeting: 'Howdy?' } })"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
                >
                    Go back to B
                </button>
            </div>

            <p class="mt-4">{{ greeting }}</p>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelItemAPI } from '@/api';

@Component({})
export default class Scree2V extends Vue {
    // ✔ this prop is always present and it's set by the panel-container component
    @Prop() panel!: PanelItemAPI;

    // ✔ this prop is passed to this component as part of the `route` property when switching/rendering this screen
    @Prop() greeting?: string;

    // ✔ create a computer property from the `pinned` value exposed on the API
    // TODO: if there many similar pieces of code that repeat often, we can pull them out into a mixin
    get isPinned(): boolean {
        return this.panel.isPinned;

        // ✔ this also works 👇
        // return this.$iApi.panel.pinned !== null && this.$iApi.panel.pinned.id === this.panel.id;
    }
}
</script>

<style lang="scss" scoped></style>
