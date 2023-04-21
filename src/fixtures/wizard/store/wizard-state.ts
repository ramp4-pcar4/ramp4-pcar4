import type { LayerInfo, LayerSource } from './layer-source';

export interface WizardState {
    /**
     * Service for retreiving layer config info given a file or URL
     *
     * @type {LayerSource}
     * @memberof WizardState
     */
    layerSource: LayerSource | null;

    /**
     * User entered URL
     *
     * @type {string}
     * @memberof WizardState
     */
    url: string;

    /**
     * Raw file data
     *
     * @type {ArrayBuffer}
     * @memberof WizardState
     */
    fileData: ArrayBuffer | null;

    /**
     * Layer/file type selection
     *
     * @type {string}
     * @memberof WizardState
     */
    typeSelection: string;

    /**
     * Layer configuration information
     *
     * @type {LayerInfo}
     * @memberof WizardState
     */
    layerInfo: LayerInfo;

    /**
     * Current wizard form step
     *
     * @type {WizardStep}
     * @memberof WizardState
     */
    currStep: WizardStep;
}

export const enum WizardStep {
    UPLOAD = 0,
    FORMAT = 1,
    CONFIGURE = 2
}
