import type { IdentifyResult } from '@/geo/api';
import type { PanelWidthObject } from '@/api';

export type DetailsItemSet = { [name: string]: DetailsItemInstance };

export interface DetailsConfig {
    /**
     * The dictionary of default templates indexed by identify result format with value as the template component id.
     */
    templates: { [type: string]: string };

    /**
     * The width of the details panel in pixels.
     *
     * @type {number}
     * @interface GridConfig
     */
    panelWidth: PanelWidthObject | number;
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
     * The optional display name of the layer.
     *
     * @type {string}
     * @memberof DetailsConfigItem
     */
    name: string;

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

    name: string;

    template: string;

    componentId?: string;

    constructor(value: string | DetailsConfigItem) {
        const params = {
            ...(typeof value === 'string'
                ? { id: value, template: '', name: '' }
                : value)
        };
        ({ template: this.template, id: this.id, name: this.name } = params);
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
     * Details config properties
     *
     * @memberof DetailsState
     */
    properties: { [id: string]: DetailsItemInstance } = {};

    /**
     * Details default templates indexed by the identify result format
     *
     * @memberof DetailsState
     */
    defaultTemplates: { [type: string]: string } = {};
}
