import type { InstanceAPI } from '@/api';
import { LegendControl, LegendItem } from './legend-item';

export const enum InfoType {
    Title = 'title',
    Text = 'text',
    Image = 'image',
    Markdown = 'markdown',
    Template = 'template'
}

/**
 * A class that represents legend items used to group a collection of child items.
 */
export class SectionItem extends LegendItem {
    _infoType: InfoType; // the type of info displayed on this SectionItem
    _content: string; // the content to be displayed for this SectionItem

    /**
     * Create a new SectionItem.
     * @param {InstanceAPI} iApi instance API for the RAMP that this is associated with
     * @param {any} config the config for the given SectionItem
     * @param {LegendItem} parent a legend item that this item is a child of
     */
    constructor(iApi: InstanceAPI, config: any, parent?: LegendItem) {
        super(iApi, config, parent);

        this._infoType = config.infoType ?? InfoType.Title;
        this._content = config.content ?? '';
        if (config.infoType === InfoType.Template) {
            this.$element.component(`${this._uid}-info-section`, {
                template: this._content
            });
        }
        if (config.infoType || config.content) {
            this._controls = config.controls?.slice() ?? [LegendControl.Expand];
        }
        super.load();
    }

    /** Returns the info type of this SectionItem */
    get infoType(): InfoType {
        return this._infoType;
    }

    /** Returns the content of this SectionItem */
    get content(): string {
        return this._content;
    }

    /** Sets new content for this SectionItem
     * @param {string} content new content
     */
    set content(content: string) {
        this._content = content;
    }

    /**
     * Returns a legend config representation of this item.
     */
    getConfig() {
        const config: any = {
            infoType: this._infoType,
            content: this._content
        };
        return { ...super.getConfig(), ...config };
    }
}
