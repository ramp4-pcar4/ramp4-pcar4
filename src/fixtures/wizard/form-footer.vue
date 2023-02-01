<template>
    <div class="flex justify-end mb-20">
        <button
            class="hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2"
            type="button"
            @click="$emit('cancel')"
        >
            {{ t('wizard.step.cancel') }}
        </button>

        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400"
            type="button"
            :disabled="disabled"
            @click="$emit('submit')"
        >
            {{ t('wizard.step.continue') }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    disabled: {
        type: Boolean,
        default: true
    }
});
</script>

<style lang="scss" scoped></style>
