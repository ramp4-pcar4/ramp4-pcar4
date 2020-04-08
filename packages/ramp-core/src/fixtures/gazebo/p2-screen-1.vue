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

            <div class="flex flex-row justify-center items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    @click="panel.show({ screen: 'p-2-screen-2', props: { greeting: 'Howdy?' } })"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
                >
                    Go back to B
                </button>

                <button @click="panel.show('p-2-screen-3')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2">
                    Go to C
                </button>
            </div>

            <p class="mt-16">{{ greeting }}</p>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelInstance } from '@/api';

@Component({})
export default class P2Screen1V extends Vue {
    // ✔ this prop is always present and it's set by the panel-container component
    @Prop() panel!: PanelInstance;

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
