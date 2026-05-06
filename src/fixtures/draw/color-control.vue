<template>
    <div class="draw-color-control">
        <div class="rv-color-row">
            <label class="rv-label text-sm font-bold" :for="`${controlId}-hex-input`">
                {{ label }}
            </label>

            <span class="rv-color-swatch" :style="{ backgroundColor: normalizedColor }" aria-hidden="true"></span>

            <input
                :id="`${controlId}-hex-input`"
                v-model="draftColor"
                class="rv-color-input"
                type="text"
                inputmode="text"
                autocapitalize="off"
                spellcheck="false"
                :aria-invalid="!draftValid"
                :aria-describedby="!draftValid ? `${controlId}-error` : undefined"
                @blur="commitDraft"
                @keydown.enter.prevent="commitDraft"
            />

            <button
                type="button"
                class="rv-disclosure-button"
                :aria-controls="`${controlId}-editor`"
                :aria-expanded="expanded"
                @click="expanded = !expanded"
            >
                {{ expanded ? t('draw.settings.color.done') : t('draw.settings.color.edit') }}
            </button>
        </div>

        <p v-if="!draftValid" :id="`${controlId}-error`" class="rv-color-error">
            {{ t('draw.settings.color.invalid') }}
        </p>

        <div v-if="expanded" :id="`${controlId}-editor`" class="rv-color-editor" @keydown.esc.stop="expanded = false">
            <ColorPicker
                alpha-channel="hide"
                :visible-formats="['hex']"
                default-format="hex"
                :id="`${controlId}-picker`"
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
import { computed, ref, watch } from 'vue';
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
const draftColor = ref(normalizeHexColor(props.color));

const normalizedColor = computed(() => normalizeHexColor(props.color));
const draftValid = computed(() => /^#?[0-9a-fA-F]{6}$/.test(draftColor.value.trim()));

const normalizeDraft = (value: string): string => normalizeHexColor(value, normalizedColor.value);

const commitDraft = () => {
    if (!draftValid.value) {
        draftColor.value = normalizedColor.value;
        return;
    }

    emit('update:color', normalizeDraft(draftColor.value));
};

const updateColor = (eventData: any) => {
    const nextColor = normalizeHexColor(eventData.colors.hex.substring(0, 7), normalizedColor.value);
    draftColor.value = nextColor;
    emit('update:color', nextColor);
};

watch(
    () => props.color,
    color => {
        draftColor.value = normalizeHexColor(color);
    }
);
</script>

<style lang="scss" scoped>
.draw-color-control {
    @apply flex flex-col gap-4;
}

.rv-color-row {
    display: grid;
    grid-template-columns: minmax(84px, 1fr) 28px 92px auto;
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

.rv-color-input {
    @apply p-5 bg-white text-sm;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1px;
    min-width: 0;
    text-transform: lowercase;
    width: 92px;
}

.rv-color-input:focus {
    outline: none;
    border-bottom: 2px solid #ddd;
    margin-bottom: 0px;
}

.rv-color-input[aria-invalid='true'] {
    border-bottom-color: #b91c1c;
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

.rv-color-error {
    @apply text-xs text-red-700;
    margin: 0;
}

.rv-color-editor {
    border: 1px solid #e5e7eb;
    border-radius: 3px;
    padding: 8px;
}

.rv-copy-icon {
    display: block;
    height: 15px;
    width: 15px;
}
</style>
