<template>
    <panel-screen :panel="panel">
        <template #header>
            Gazebo/Panel 1/Screen B
        </template>

        <template #controls>
            <!-- this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes -->
            <pin :active="pinned() === 'p1'" @click="pinPanel" v-if="checkScreenSize"></pin>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
                <!-- setting panel route directly in the store will not work ❌  -->
                <button
                    @click="goToScreen('p-1-screen-1')"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
                >
                    See Gazebo 1
                </button>

                <img width="350px" :src="url" alt="Gazebo2" srcset="" />
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { get } from '@/store/pathify-helper';

export default defineComponent({
    name: 'GazeboP1Scree2V',
    data() {
        return {
            url:
                'https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/02/garden-shed-transparent-image-2.png?w=693'
        };
    },
    computed: {
        checkScreenSize(): boolean {
            return this.$iApi.screenSize !== 'xs';
        }
    },
    methods: {
        pinPanel(): void {
            // ❌ this is bad because it's tappnig directly into the store circumventing the API
            // this will work, but if the store changes structure, it might break 👇
            const panel = get(`panel/items@p1`) as any;
            this.$iApi.$vApp.$store.set('panel/pinned', this.pinned() !== 'p1' ? panel : null);
        },
        goToScreen(screen: string): void {
            this.$iApi.$vApp.$store.set('panel/items@p1.route', { screen });
        },
        pinned(): string | null {
            const panel = get('panel/pinned') as any;
            return panel ? panel.id : null;
        }
    }
});
</script>

<style lang="scss" scoped></style>
