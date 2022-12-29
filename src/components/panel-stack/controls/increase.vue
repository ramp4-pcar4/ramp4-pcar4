<template>
    <div class="relative" tabindex="-1">
        <button
            type="button"
            class="p-8"
            :class="{
                'text-gray-500 hover:text-black focus:text-black': active,
                'text-gray-300': !active
            }"
            :content="$t('panels.controls.increase')"
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
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IncreaseV',
    props: {
        active: Boolean
    }
});
</script>

<style lang="scss" scoped></style>
