import { defineStore } from 'pinia';
import { LayerType } from '@/geo/api';
import { WizardStep } from './wizard-state';
import { ref } from 'vue';

export const useWizardStore = defineStore('wizard', () => {
    const layerSource = ref(null);
    const url = ref('');
    const typeSelection = ref('');
    const fileData = ref(null);
    const layerInfo = ref({
        config: {
            id: 'Placeholder',
            layerType: LayerType.UNKNOWN,
            url: ''
        },
        configOptions: []
    });
    const currStep = ref(WizardStep.UPLOAD);

    function goToStep(step: WizardStep) {
        switch (currStep.value) {
            case WizardStep.UPLOAD:
                if (step === WizardStep.UPLOAD) {
                    url.value = '';
                } else if (step === WizardStep.FORMAT) {
                    // go to next step
                    currStep.value = WizardStep.FORMAT;
                }
                break;
            case WizardStep.FORMAT:
                if (step === WizardStep.UPLOAD) {
                    // go to previous step
                    if (fileData.value) {
                        // only reset url if a file was uploaded
                        url.value = '';
                        fileData.value = null;
                    }
                    typeSelection.value = '';
                    currStep.value = WizardStep.UPLOAD;
                } else if (step === WizardStep.CONFIGURE) {
                    // go to next step
                    currStep.value = WizardStep.CONFIGURE;
                }
                break;
            case WizardStep.CONFIGURE:
                if (step === WizardStep.UPLOAD) {
                    // reset everything
                    url.value = '';
                    typeSelection.value = '';
                    fileData.value = null;
                    layerInfo.value = {
                        config: null,
                        configOptions: []
                    };
                    currStep.value = WizardStep.UPLOAD;
                } else if (step === WizardStep.FORMAT) {
                    // go to previous step
                    layerInfo.value = {
                        config: null,
                        configOptions: []
                    };
                    currStep.value = WizardStep.FORMAT;
                }
                break;
        }
    }

    return {
        layerSource,
        url,
        typeSelection,
        fileData,
        layerInfo,
        currStep,
        goToStep
    };
});
