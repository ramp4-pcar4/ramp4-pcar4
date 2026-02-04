import { InstanceAPI } from '../../../api';
import { LegendItem } from './legend-item';
export declare const enum InfoType {
    Title = "title",
    Text = "text",
    Image = "image",
    Markdown = "markdown",
    Template = "template"
}
/**
 * A class that represents legend items used to group a collection of child items.
 */
export declare class SectionItem extends LegendItem {
    _infoType: InfoType;
    _content: string;
    /**
     * Create a new SectionItem.
     * @param {InstanceAPI} iApi instance API for the RAMP that this is associated with
     * @param {any} config the config for the given SectionItem
     * @param {LegendItem} parent a legend item that this item is a child of
     */
    constructor(iApi: InstanceAPI, config: any, parent?: LegendItem);
    /** Returns the info type of this SectionItem */
    get infoType(): InfoType;
    /** Returns the content of this SectionItem */
    get content(): string;
    /** Sets new content for this SectionItem
     * @param {string} content new content
     */
    set content(content: string);
    /**
     * Returns a legend config representation of this item.
     */
    getConfig(): any;
}
