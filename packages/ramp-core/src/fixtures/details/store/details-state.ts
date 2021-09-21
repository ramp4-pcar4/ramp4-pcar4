import { IdentifyResult } from '@/geo/api';

export type DetailsItemSet = { [name: string]: DetailsItemInstance };

export interface DetailsConfig {
    items: DetailsConfigItem[];
}

export interface DetailsConfigItem {
    /**
     * The layer ID that we want to bind the custom template to.
     *
     * @type {string}
     * @memberof DetailsConfigItem
     */
    id: string;

    /**
     * The component that we would like to use as a template.
     *
     * @type {string}
     * @memberof DetailsConfigItem
     */
    template: string;
}

export class DetailsItemInstance implements DetailsConfigItem {
    id: string;

    template: string;

    componentId?: string;

    constructor(value: string | DetailsConfigItem) {
        const params = {
            ...(typeof value === 'string' ? { id: value, template: '' } : value)
        };
        ({ template: this.template, id: this.id } = params);
    }
}

export class DetailsState {
    /**
     * An object containing a features attributes.
     *
     * @type IdentifyResult[]
     * @memberof DetailsState
     */
    payload: IdentifyResult[] = [];

    /**
     * Details config templates
     *
     * @memberof DetailsState
     */
    templates: { [id: string]: DetailsItemInstance } = {};
}
