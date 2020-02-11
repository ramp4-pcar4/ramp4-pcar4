<template>
    <div>
        <button class="text-gray-500 hover:text-black p-2" @click="open = !open">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-5 h-5">
                <path
                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
            </svg>
        </button>
        <button
            v-if="open"
            @click="open = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"
        ></button>
        <div v-if="open" class="shadow-md border border-gray:200 absolute mt-2 py-2 w-64 bg-white rounded">
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

<style lang="scss" scoped></style>
