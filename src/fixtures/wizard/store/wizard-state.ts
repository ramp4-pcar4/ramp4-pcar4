import { LayerType } from '@/geo/api';
import type { LayerSource, LayerInfo } from './layer-source';

export class WizardState {
    /**
     * Service for retreiving layer config info given a file or URL
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
    typeSelection = '';

    /**
     * Layer configuration information
     *
     * @type {LayerInfo}
     * @memberof WizardState
     */
    layerInfo: LayerInfo = {
        config: { id: 'Placeholder', layerType: LayerType.UNKNOWN, url: '' },
        configOptions: []
    };

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
    FORMAT = 1,
    CONFIGURE = 2
}
