<template>
    <div class="absolute top-0 left-0 flex flex-col items-stretch bg-black-75 h-full w-40 sm:w-64 pointer-events-auto" v-focus-list>
        <component
            v-for="(item, index) in items"
            :is="item.id"
            :key="`${item.id}-${index}`"
            class="h-24 my-4 first:mt-8 text-gray-400 hover:text-white"
            :class="{ 'py-12': item.id !== DIVIDER }"
            :focus-item="item.id !== DIVIDER"
        ></component>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { AppbarItemConfig } from './store';
import DividerV from './divider.vue';

const DIVIDER_ID = 'divider';

Vue.component(DIVIDER_ID, DividerV);

@Component
export default class AppbarV extends Vue {
    // to use in the template
    DIVIDER = DIVIDER_ID;

    @Get('appbar/items') items!: AppbarItemConfig[];
}
</script>

<style lang="scss" scoped>
.focused {
    @apply bg-blue-900 text-white;
}
</style>
