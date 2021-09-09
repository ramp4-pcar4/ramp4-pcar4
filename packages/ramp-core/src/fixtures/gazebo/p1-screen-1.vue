<template>
    <panel-screen :panel="panel">
        <template #header>
            Gazebo/Panel 1/Screen A
        </template>

        <template #controls>
            <div class="flex">
                <!-- this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes -->
                <panel-options-menu>
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                </panel-options-menu>
                <pin
                    :active="pinned && pinned.id === 'p1'"
                    @click="pinPanel"
                    v-if="checkScreenSize"
                ></pin>
            </div>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
                <!-- setting panel route directly in the store will not work ❌  -->
                <button
                    @click="route = { screen: 'p-1-screen-2' }"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
                >
                    See Gazebo 2
                </button>

                <img width="350px" :src="url" alt="Gazebo1" srcset="" />
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { sync } from '@/store/pathify-helper';
import { PanelInstance } from '../../api';

export default defineComponent({
    name: 'GazeboP1Screen1V',
    data() {
        return {
            route: sync('panel/items@p1.route'),
            pinned: sync('panel/pinned'),
            url:
                'https://i2.wp.com/freepngimages.com/wp-content/uploads/2017/08/wooden-garden-gazebo.png?w=860'
        };
    },
    computed: {
        checkScreenSize(): boolean {
            return this.$iApi.screenSize !== 'xs';
        }
    },
    methods: {
        pinPanel(): void {
            // this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes
            const panel = this.$store.get<PanelInstance>(`panel/items@p1`)!;
            this.pinned =
                this.pinned === null || (this.pinned && this.pinned.id) !== 'p1' ? panel : null;
        }
    }
});
</script>

<style lang="scss" scoped></style>
