declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*lang.csv' {
    import { LocaleMessages, VueMessageType } from 'vue-i18n';
    const content: LocaleMessages<VueMessageType>;
    export default content;
}

declare module '*.csv' {
    const content: any;
    export default content;
}

declare module '*.xsl' {
    const content: any;
    export default content;
}

declare module '@braid/vue-formulate' {
    import { PluginObject } from 'vue';

    export interface FormulateErrors {
        inputErrors: Record<string, string[]>;
        formErrors: string[];
    }

    export interface FormulateGlobalInstance {
        handle: (err: FormulateErrors, formName: string, skip?: boolean) => void;
        reset: (formName: string, initialValue?: Record<string, any>) => void;
        resetValidation: (formName: string) => void;
        setValues: (formName: string, values: Record<string, any>) => void;
        submit: (formName: string) => void;
    }

    const VueFormulate: PluginObject<{}>;
    export default VueFormulate;
}

declare class ResizeObserver {
    constructor(callback: Function);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}
