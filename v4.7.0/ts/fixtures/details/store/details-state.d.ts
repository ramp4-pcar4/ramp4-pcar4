import type { PanelWidthObject } from '@/api';
export declare type DetailsItemSet = {
    [name: string]: DetailsItemInstance;
};
export interface DetailsConfig {
    /**
     * The dictionary of default templates indexed by identify result format with value as the template component id.
     */
    templates: {
        [type: string]: string;
    };
    /**
     * The width of the details panel in pixels.
     *
     * @type {number}
     * @interface GridConfig
     */
    panelWidth: PanelWidthObject | number;
}
export interface DetailsFieldItem {
    /**
     * Unique identifier for the field. Aligns with the layer field name.
     */
    field: string;
    /**
     * Specifies the field title.
     */
    alias?: string;
    /**
     * Whether this field is displayed.
     */
    visible?: boolean;
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
    /**
     * An array to specify how the layer data fields are defined.
     *
     * @type {array}
     * @memberof DetailsConfigItem
     */
    fields?: DetailsFieldItem[];
}
export declare class DetailsItemInstance implements DetailsConfigItem {
    id: string;
    name: string;
    template: string;
    fields?: DetailsFieldItem[];
    componentId?: string;
    constructor(value: string | DetailsConfigItem);
}
