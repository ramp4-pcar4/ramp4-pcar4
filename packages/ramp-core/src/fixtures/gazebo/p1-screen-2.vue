<template>
    <panel-screen :panel="panel">
        <template #header>
            Gazebo/Panel 1/Screen B
        </template>

        <template #controls>
            <!-- this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes -->
            <pin
                :active="pinned === 'p1'"
                @click="pinPanel"
                v-if="$iApi.screenSize !== 'xs'"
            ></pin>
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
import { Vue } from 'vue-property-decorator';
import { PanelInstance } from '../../api';

export default class GazeboP1Scree2V extends Vue {
    url: string =
        'https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/02/garden-shed-transparent-image-2.png?w=693';

    // ❌ this is bad because it's tappnig directly into the store circumventing the API
    // this will work, but if the store changes strcture, it might break 👇
    goToScreen(screen: string): void {
        this.$store.set('panel/items@p1.route', { screen });
    }

    // ❌ this is bad because it's tappnig directly into the store circumventing the API
    // this will work, but if the store changes strcture, it might break 👇
    get pinned(): string | null {
        const panel = this.$store.get<PanelInstance | null>('panel/pinned')!;
        return panel ? panel.id : null;
    }

    pinPanel(): void {
        // ❌ this is bad because it's tappnig directly into the store circumventing the API
        // this will work, but if the store changes structure, it might break 👇
        const panel = this.$store.get<PanelInstance>(`panel/items@p1`)!;
        this.$store.set('panel/pinned', this.pinned !== 'p1' ? panel : null);
    }
}
</script>

<style lang="scss" scoped></style>
