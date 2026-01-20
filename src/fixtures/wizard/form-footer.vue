<template>
    <div class="flex justify-end mb-20">
        <button class="hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2" type="button" @click="$emit('cancel')">
            {{ t('wizard.step.cancel') }}
        </button>

        <button
            class="button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400"
            :class="{ 'button--loading': animation && disabled }"
            type="button"
            :disabled="disabled"
            :animation="animation"
            @click="$emit('submit')"
        >
            <span class="button-text">{{ t('wizard.step.continue') }}</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    animation: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: true
    }
});
</script>

<style lang="scss" scoped>
.button {
    position: relative;
    &.button--loading .button-text {
        visibility: hidden;
        opacity: 0;
    }

    &.button--loading::after {
        content: '';
        position: absolute;
        width: 22px;
        height: 22px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }

    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }

        to {
            transform: rotate(1turn);
        }
    }
}
</style>
