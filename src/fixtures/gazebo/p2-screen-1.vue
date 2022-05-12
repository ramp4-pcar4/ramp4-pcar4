<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 2/Screen A </template>

        <template #controls>
            <!-- <pin> is a global button component that any fixture/panel/screen can reuse -->

            <!-- ✔ this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not 👇 -->
            <pin
                @click="panel.pin(!isPinned)"
                :active="isPinned"
                v-if="checkScreenSize"
            ></pin>

            <!-- ✔ this will also work 👇 -->
            <!-- <pin @click="panel.pin(!panel.isPinned)" :active="panel.isPinned"></pin> -->
        </template>

        <template #content>
            {{ $t('gz.hello') }}

            <div class="flex flex-row justify-center items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    @click="
                        panel.show({
                            screen: 'p-2-screen-2',
                            props: { greeting: 'Howdy?' }
                        })
                    "
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
                >
                    Go back to B
                </button>

                <button
                    @click="panel.show('p-2-screen-3')"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
                >
                    Go to C
                </button>
            </div>

            <p class="mt-16">{{ greeting }}</p>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { PanelInstance } from '@/api';

export default defineComponent({
    name: 'GazeboP2Screen1V',
    props: {
        panel: { type: Object as PropType<PanelInstance>, required: true },
        greeting: { type: String }
    },
    computed: {
        isPinned(): boolean {
            return this.panel.isPinned;
            // ✔ this also works 👇
            // return this.$iApi.panel.pinned !== null && this.$iApi.panel.pinned.id === this.panel.id;
        },
        checkScreenSize(): boolean {
            return this.$iApi.screenSize !== 'xs';
        }
    }
});
</script>

<style lang="scss" scoped></style>
