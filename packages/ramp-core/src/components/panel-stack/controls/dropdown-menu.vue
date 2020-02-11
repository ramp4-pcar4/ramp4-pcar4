<template>
    <div>
        <button class="text-gray-500 hover:text-black p-2" @click="open = !open">
            <slot name="header"></slot>
        </button>
        <button
            v-if="open"
            @click="open = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"
        ></button>
        <div v-if="open" class="rv-dropdown shadow-md border border-gray:200 absolute mt-2 py-2 w-64 bg-white rounded z-10">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

@Component
export default class MenuV extends Vue {
    data() {
        return {
            open: false
        };
    }
}
</script>

<style lang="scss" scoped>
.rv-dropdown > * {
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #2d3748;
}
.rv-dropdown > *:hover {
    background-color: #eee;
}
</style>
