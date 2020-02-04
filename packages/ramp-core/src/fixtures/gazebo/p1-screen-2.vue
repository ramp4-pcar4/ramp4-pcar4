<template>
    <panel-screen>
        <template #header>
            Gazebo/Panel 1/Screen B
        </template>

        <template #controls>
            <pin :active="pinned === 'p1'" @click="pinPanel"></pin>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
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

// this is an example of a on-map component (doesn't use panels)

@Component({})
export default class Scree2V extends Vue {
    goToScreen(id: string): void {
        this.$store.set('panel/items@p1.route', { id });
    }

    url: string = 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/02/garden-shed-transparent-image-2.png?w=693';

    get pinned(): string | null {
        return this.$store.get<string | null>('panel/pinned')!;
    }

    pinPanel(): void {
        this.$store.set('panel/pinned', this.pinned !== 'p1' ? 'p1' : null);
    }
}
</script>

<style lang="scss" scoped></style>
