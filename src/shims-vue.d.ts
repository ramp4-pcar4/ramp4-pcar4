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

declare module 'csv2geojson';
declare module '@ramp4-pcar4/vue3-treeselect';
declare module '@terraformer/arcgis';
declare module '@terraformer/spatial';
