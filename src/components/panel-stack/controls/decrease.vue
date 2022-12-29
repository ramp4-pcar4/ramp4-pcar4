<template>
    <div class="relative" tabindex="-1">
        <button
            type="button"
            class="p-8"
            :class="{
                'text-gray-500 hover:text-black focus:text-black': active,
                'text-gray-300': !active
            }"
            :content="$t('panels.controls.decrease')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3.0"
                stroke="currentColor"
                class="fill-current w-16 h-16"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DecreaseV',
    props: {
        active: Boolean
    }
});
</script>

<style lang="scss" scoped></style>
