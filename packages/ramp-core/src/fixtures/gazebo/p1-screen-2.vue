<template>
    <panel-screen>
        <template #header>
            Gazebo/Panel 1/Screen B
        </template>

        <template #controls>
            <!-- this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes -->
            <pin :active="pinned === 'p1'" @click="pinPanel"></pin>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
                <!-- this is fine -->
                <button @click="goToScreen('p-1-screen-1')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    See Gazebo 1
                </button>

                <img width="350px" :src="url" alt="Gazebo2" srcset="" />
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelConfig } from '../../store/modules/panel';
import { PanelItemAPI } from '../../api';

@Component({})
export default class Scree2V extends Vue {
    url: string = 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/02/garden-shed-transparent-image-2.png?w=693';

    // ❌ this is bad because it's tappnig directly into the store circumventing the API
    // this will work, but if the store changes strcture, it might break 👇
    goToScreen(id: string): void {
        this.$store.set('panel/items@p1.route', { id });
    }

    // ❌ this is bad because it's tappnig directly into the store circumventing the API
    // and it also receives back a PanelConfig object, not the PanelItemAPI object
    // this will work, but if the store changes strcture, it might break 👇
    get pinned(): string | null {
        const panelConfig = this.$store.get<PanelConfig | null>('panel/pinned')!;
        return panelConfig ? panelConfig.id : null;
    }

    pinPanel(): void {
        // ❌ this is bad because it's tappnig directly into the store circumventing the API
        // this will work, but if the store changes structure, it might break 👇
        const panelConfig = this.$store.get<PanelConfig>(`panel/items@p1`)!;
        this.$store.set('panel/pinned', this.pinned !== 'p1' ? panelConfig : null);
    }
}
</script>

<style lang="scss" scoped></style>
