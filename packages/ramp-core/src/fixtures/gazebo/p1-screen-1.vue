<template>
    <panel-screen>
        <template #header>
            Gazebo/Panel 1/Screen A
        </template>

        <template #controls>
            <pin :active="pinned === 'p1'" @click="pinPanel"></pin>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
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

import { Panel, PanelRoute } from '@/store/modules/panel';

@Component
export default class Screen1V extends Vue {
    @Prop() panel!: Panel;

    @Sync('panel/items@p1.route') route!: PanelRoute;
    @Sync('panel/pinned') pinned!: string | null;

    url: string = 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2017/08/wooden-garden-gazebo.png?w=860';

    pinPanel(): void {
        this.pinned = this.pinned !== 'p1' ? 'p1' : null;
    }
}
</script>

<style lang="scss" scoped></style>
