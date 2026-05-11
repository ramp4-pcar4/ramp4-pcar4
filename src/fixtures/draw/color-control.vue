<template>
    <div class="draw-color-control">
        <div class="rv-color-row">
            <span class="rv-label text-sm font-bold">
                {{ label }}
            </span>

            <span class="rv-color-swatch" :style="{ backgroundColor: normalizedColor }" aria-hidden="true"></span>

            <span class="rv-color-value">{{ normalizedColor }}</span>

            <button
                type="button"
                class="rv-disclosure-button"
                :aria-controls="editorId"
                :aria-expanded="expanded"
                @click="expanded = !expanded"
            >
                {{ expanded ? t('draw.settings.color.done') : t('draw.settings.color.edit') }}
            </button>
        </div>

        <div v-if="expanded" :id="editorId" class="rv-color-editor" @keydown.esc.stop="expanded = false">
            <ColorPicker
                alpha-channel="hide"
                :visible-formats="['hex']"
                default-format="hex"
                :id="pickerId"
                :color="normalizedColor"
                @color-change="updateColor"
            >
                <template #hue-range-input-label>
                    <span class="sr-only">{{ t('draw.settings.color.hue') }}</span>
                </template>

                <template #copy-button>
                    <span class="sr-only">{{ t('draw.settings.color.copy') }}</span>
                    <copy-icon class="rv-copy-icon" aria-hidden="true"></copy-icon>
                </template>
            </ColorPicker>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, useId } from 'vue';
import { ColorPicker } from 'vue-accessible-color-picker';
import { useI18n } from 'vue-i18n';

import CopyIcon from './icons/copy-icon.vue';
import { normalizeHexColor } from './settings';

const emit = defineEmits<{
    (event: 'update:color', color: string): void;
}>();

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    controlId: {
        type: String,
        required: true
    }
});

const { t } = useI18n();
const expanded = ref(false);
const generatedId = useId();

const normalizedColor = computed(() => normalizeHexColor(props.color));
const editorId = computed(() => `${props.controlId}-${generatedId}-editor`);
const pickerId = computed(() => `${props.controlId}-${generatedId}-picker`);

const updateColor = (eventData: any) => {
    const nextColor = normalizeHexColor(eventData.colors.hex.substring(0, 7), normalizedColor.value);
    emit('update:color', nextColor);
};
</script>

<style lang="scss" scoped>
.draw-color-control {
    @apply flex flex-col gap-4;
}

.rv-color-row {
    display: grid;
    grid-template-columns: minmax(84px, 1fr) 28px minmax(72px, auto) auto;
    gap: 8px;
    align-items: center;
}

.rv-label {
    @apply flex items-center;
    min-width: 0;
}

.rv-color-swatch {
    border: 1px solid #9ca3af;
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
    height: 24px;
    width: 24px;
}

.rv-color-value {
    @apply text-sm text-gray-800;
    min-width: 0;
    text-transform: lowercase;
    white-space: nowrap;
}

.rv-disclosure-button {
    @apply inline-flex items-center justify-center text-sm text-gray-700 bg-white;
    border: 1px solid #ddd;
    min-height: 28px;
    padding: 0 8px;
    white-space: nowrap;
}

.rv-disclosure-button:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
}

.rv-color-editor {
    padding-top: 4px;
}

.rv-copy-icon {
    display: block;
    height: 15px;
    width: 15px;
}

:deep(.vacp-color-input-label-text) {
    display: none;
}

:deep(.vacp-copy-button) {
    background-color: v-bind(normalizedColor);
}
</style>
