import LayerSource, { LayerInfo } from './layer-source';

export class WizardState {

    /**
     * Service for retreiving layer config info given a file or url
     *
     * @type {LayerSource}
     * @memberof WizardState
     */
    layerSource: LayerSource | null = null;

    /**
     * User entered URL
     *
     * @type {string}
     * @memberof WizardState
     */
    url: string = '';

    /**
     * Raw file data
     *
     * @type {ArrayBuffer}
     * @memberof WizardState
     */
    fileData: ArrayBuffer | null = null;

    /**
     * Layer/file type selection
     *
     * @type {string}
     * @memberof WizardState
     */
    typeSelection: string = '';

    /**
     * Layer configuration informatino
     *
     * @type {LayerInfo}
     * @memberof WizardState
     */
    layerInfo: LayerInfo =  { config: null, configOptions: [] };

    /**
     * Current wizard form step
     *
     * @type {WizardStep}
     * @memberof WizardState
     */
    step: WizardStep = WizardStep.UPLOAD;

}

export enum WizardStep {
    UPLOAD = 0,
    SELECT = 1,
    CONFIGURE = 2
}