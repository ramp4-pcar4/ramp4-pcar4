<template>
    <div class="appbar-item relative inset-x-0 w-full text-center" ref="el">
        <button
            type="button"
            class="text-gray-400 w-full h-48 focus:outline-none hover:text-white"
            @click="open = !open"
            v-focus-item
            :content="t('appbar.more')"
            v-tippy="{ placement: 'right' }"
        >
            <svg
                class="fill-current w-24 h-24 m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
            </svg>
        </button>
        <div
            v-show="open"
            @blur="open = false"
            :position="position"
            id="dropdown"
            class="dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    position: {
        type: String,
        default: 'bottom-right'
    }
});

const open = ref(false);
const el = ref<Element>();

onMounted(() => {
    window.addEventListener(
        'click',
        event => {
            if (
                event.target instanceof HTMLElement &&
                !el.value?.contains(event.target)
            ) {
                open.value = false;
            }
        },
        { capture: true }
    );
});

onBeforeUnmount(() => {
    window.removeEventListener(
        'click',
        event => {
            if (
                event.target instanceof HTMLElement &&
                !el.value?.contains(event.target)
            ) {
                open.value = false;
            }
        },
        { capture: true }
    );
});
</script>

<style lang="scss" scoped>
.dropdown {
    @apply left-full bottom-0;
}
</style>
