<template>
    <div class="relative" tabindex="-1">
        <button
            type="button"
            class="text-gray-500 hover:text-black focus:text-black p-8"
            :class="{ 'text-gray-700': active }"
            :content="t('panels.controls.back')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-16 h-16"
                viewBox="0 0 16 16"
            >
                <path
                    d="M20.485784919653916,7.578491965389372h-14.170000000000005l3.5800000000000054,-3.589999999999997l-1.409999999999993,-1.4099999999999984l-6.000000000000008,6.0000000000000275l6.000000000000008,6l1.409999999999993,-1.4100000000000001l-3.58,-3.59h14.170000000000007Z"
                    transform="matrix(0.865803 0 0 0.865803 -1.99071 0.638058)"
                />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
    active: Boolean
});
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
