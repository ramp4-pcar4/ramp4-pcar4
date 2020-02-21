<template>
    <div class="absolute top-0 left-0 flex flex-col items-center bg-black opacity-75 h-full w-40 md:w-64 pointer-events-auto">
        <component v-for="(item, index) in items" :is="item.id" :key="`${item.id}-${index}`" class="h-16 mt-8 mb-8 first:mt-16"></component>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { AppbarItemConfig } from './store';
import DividerV from './divider.vue';

Vue.component('divider', DividerV);

@Component
export default class AppbarV extends Vue {
    get items() {
        return this.$iApi.$vApp.$store.get('appbar/items');
    }
}
</script>

<style lang="scss" scoped></style>
