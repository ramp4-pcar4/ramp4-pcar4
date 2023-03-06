<template>
    <div>
        <div class="rv-label text-sm pt-10">
            {{ name }}
        </div>
        <div class="flex flex-row">
            <input
                @keypress.enter.prevent
                class="rv-input text-md w-full"
                type="number"
                :value="config.value"
                :disabled="isDisabled"
                min="0"
                max="100"
            />
        </div>
        <div class="text-xs pt-10 text-gray-600 mb-20">
            {{ t('settings.label.refreshOff') }}
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '@arcgis/core/config';
import { onBeforeUnmount, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    config: {
        type: Object,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});

const isDisabled = ref(!!props.config.disabled);
const watchers = reactive<Array<Function>>([]);

watchers.push(
    // watch the config for changes to the opacity value
    watch(
        () => props.config,
        (newConfig: any) => {
            isDisabled.value = !!newConfig.disabled;
        },
        { deep: true }
    )
);

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
.rv-input {
    @apply p-5;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1px;
}
.rv-input:focus {
    outline: none;
    border-bottom: 2px solid #ddd;
    margin-bottom: 0px;
}
.rv-input:disabled {
    color: #ddd;
}
</style>
