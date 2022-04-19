import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { WizardState, WizardStep } from './wizard-state';
import type { RootState } from '@/store/state';

type WizardContext = ActionContext<WizardState, RootState>;

const getters = {};

const actions = {
    goToStep: (context: WizardContext, step: WizardStep) => {
        switch (context.state.step) {
            case WizardStep.UPLOAD:
                if (step === WizardStep.UPLOAD) {
                    context.commit('SET_URL', '');
                } else if (step === WizardStep.FORMAT) {
                    // go to next step
                    context.commit('SET_STEP', WizardStep.FORMAT);
                }
                break;
            case WizardStep.FORMAT:
                if (step === WizardStep.UPLOAD) {
                    // go to previous step
                    if (context.state.fileData) {
                        // only reset url if a file was uploaded
                        context.commit('SET_URL', '');
                        context.commit('SET_FILE_DATA', null);
                    }
                    context.commit('SET_TYPE_SELECTION', '');
                    context.commit('SET_STEP', WizardStep.UPLOAD);
                } else if (step === WizardStep.CONFIGURE) {
                    // go to next step
                    context.commit('SET_STEP', WizardStep.CONFIGURE);
                }
                break;
            case WizardStep.CONFIGURE:
                if (step === WizardStep.UPLOAD) {
                    // reset everything
                    context.commit('SET_URL', '');
                    context.commit('SET_TYPE_SELECTION', '');
                    context.commit('SET_FILE_DATA', null);
                    context.commit('SET_LAYER_INFO', {
                        config: null,
                        configOptions: []
                    });
                    context.commit('SET_STEP', WizardStep.UPLOAD);
                } else if (step === WizardStep.FORMAT) {
                    // go to previous step
                    context.commit('SET_LAYER_INFO', {
                        config: null,
                        configOptions: []
                    });
                    context.commit('SET_STEP', WizardStep.FORMAT);
                }
                break;
        }
    }
};

const mutations = {};

export enum WizardStore {
    layerSource = 'wizard/layerSource',
    url = 'wizard/url',
    typeSelection = 'wizard/typeSelection',
    fileData = 'wizard/fileData',
    layerInfo = 'wizard/layerInfo',
    step = 'wizard/step',
    goToStep = 'wizard/goToStep'
}

export function wizard() {
    const state = new WizardState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
