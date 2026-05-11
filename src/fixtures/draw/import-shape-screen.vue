<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('draw.import.title') }}
        </template>

        <template #content>
            <div class="rv-import-content">
                <form name="draw-import" @submit.prevent>
                    <wizard-input
                        type="file"
                        name="file"
                        file-accept=".json,application/json"
                        :multiple-files="true"
                        :label="t('draw.import.file.label')"
                        :help="t('draw.import.file.help')"
                        :aria-label="t('draw.import.file.label')"
                        @upload="handleUpload"
                    />
                </form>

                <p v-if="errorMessage" class="rv-import-error" role="alert">
                    {{ errorMessage }}
                </p>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';

import type { PanelInstance } from '@/api';
import type { InstanceAPI } from '@/api/internal';

import WizardInput from '../wizard/form-input.vue';
import { DRAW_IMPORT_PANEL_ID } from './settings';
import { readDrawShapeFiles } from './shape-io';
import { useDrawStore } from './store';

defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true }
});

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const drawStore = useDrawStore();
const errorMessage = ref('');

const handleUpload = async (uploadedFiles: File | File[]) => {
    const files = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles];
    errorMessage.value = '';

    try {
        const shapes = await readDrawShapeFiles(files);
        drawStore.requestImportShapes(shapes);
        iApi.panel.close(DRAW_IMPORT_PANEL_ID);
    } catch {
        errorMessage.value = t('draw.import.error.invalid');
        iApi.updateAlert(errorMessage.value);
    }
};
</script>

<style lang="scss" scoped>
.rv-import-content {
    @apply p-8;
}
.rv-import-error {
    @apply mt-8 text-sm text-red-900;
}
</style>
