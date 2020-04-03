<template>
    <div class="absolute top-0 left-0 flex flex-col items-stretch bg-black-75 h-full w-40 sm:w-64 pointer-events-auto" v-focus-list>
        <component
            v-for="(item, index) in items"
            :is="item.componentId"
            :key="`${item}-${index}`"
            class="h-24 my-4 first:mt-8 text-gray-400 hover:text-white"
            :class="{ 'py-12': item.id !== 'divider' }"
            :focus-item="item.id !== 'divider'"
            :options="item.options"
        ></component>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { AppbarItemInstance } from './store';
import DividerV from './divider.vue';

Vue.component('divider', DividerV);

@Component
export default class AppbarV extends Vue {
    @Get('appbar/visible') items!: AppbarItemInstance[];

    get registeredItems(): AppbarItemInstance[] {
        return this.items.filter(item => item.componentId);
    }
}
</script>

<style lang="scss" scoped>
.focused {
    @apply bg-blue-900 text-white;
}
</style>
