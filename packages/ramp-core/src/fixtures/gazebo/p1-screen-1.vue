<template>
    <panel-screen>
        <template #header>
            Gazebo/Panel 1/Screen A
        </template>

        <template #controls>
            <!-- this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes -->
            <pin :active="pinned && pinned.id === 'p1'" @click="pinPanel"></pin>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
                <!-- this is fine -->
                <button @click="route = { id: 'p-1-screen-2' }" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    See Gazebo 2
                </button>

                <img width="350px" :src="url" alt="Gazebo1" srcset="" />
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelConfig, PanelConfigRoute } from '@/store/modules/panel';

@Component
export default class Screen1V extends Vue {
    // ❌ this is a horrible way, don't do that! this is directly tapping into the store and two-way binds `route` property fro a specific panel
    // this will work, but all possible interactions should go through the API, because the store implementation might change and this will break
    // 👇
    @Sync('panel/items@p1.route') route!: PanelConfigRoute;

    // ❌ also don't do this for the reasons above 👇
    @Sync('panel/pinned') pinned!: PanelConfig | null;

    url: string = 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2017/08/wooden-garden-gazebo.png?w=860';

    pinPanel(): void {
        // this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes
        const panelConfig = this.$store.get<PanelConfig>(`panel/items@p1`)!;
        this.pinned = this.pinned === null || (this.pinned && this.pinned.id) !== 'p1' ? panelConfig : null;
    }
}
</script>

<style lang="scss" scoped></style>
