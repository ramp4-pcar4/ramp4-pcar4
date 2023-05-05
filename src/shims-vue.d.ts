declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}

declare module '*lang.csv' {
    import { LocaleMessages, VueMessageType } from 'vue-i18n';
    const content: LocaleMessages<VueMessageType>;
    export default content;
}

declare module '*.xsl' {
    const content: any;
    export default content;
}

declare class ResizeObserver {
    constructor(callback: Function);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

declare module 'shpjs/dist/shp.min.js';
declare module 'csv2geojson';
