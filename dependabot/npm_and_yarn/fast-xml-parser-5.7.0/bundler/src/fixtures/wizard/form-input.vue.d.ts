import { PropType } from '../../../vue/dist/vue.esm-bundler.js';
export interface ValidationMsgs {
    required?: string;
    invalid?: string;
    failure?: string;
}
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    activeStep: {
        type: NumberConstructor;
        default: number;
    };
    defaultOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatError: {
        type: BooleanConstructor;
        default: boolean;
    };
    failureError: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    label: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    name: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    options: {
        type: PropType<Array<any>>;
        default(): never[];
    };
    selectedValues: {
        type: PropType<(string | number)[]>;
        default: () => never[];
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sublayerOptions: {
        type: FunctionConstructor;
        default(): never[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The kind of input we want. file | url | select | checkbox | text
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    validation: {
        type: BooleanConstructor;
        default: boolean;
    };
    validationMessages: {
        type: PropType<ValidationMsgs>;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
}>, {
    selectInput: Readonly<import('../../../vue/dist/vue.esm-bundler.js').ShallowRef<HTMLSelectElement | null>>;
    textInput: Readonly<import('../../../vue/dist/vue.esm-bundler.js').ShallowRef<HTMLInputElement | null>>;
    urlInput: Readonly<import('../../../vue/dist/vue.esm-bundler.js').ShallowRef<HTMLInputElement | null>>;
}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    text: (...args: any[]) => void;
    link: (...args: any[]) => void;
    select: (...args: any[]) => void;
    upload: (...args: any[]) => void;
    nested: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    focusElement: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    activeStep: {
        type: NumberConstructor;
        default: number;
    };
    defaultOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatError: {
        type: BooleanConstructor;
        default: boolean;
    };
    failureError: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    label: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    name: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    options: {
        type: PropType<Array<any>>;
        default(): never[];
    };
    selectedValues: {
        type: PropType<(string | number)[]>;
        default: () => never[];
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sublayerOptions: {
        type: FunctionConstructor;
        default(): never[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The kind of input we want. file | url | select | checkbox | text
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    validation: {
        type: BooleanConstructor;
        default: boolean;
    };
    validationMessages: {
        type: PropType<ValidationMsgs>;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onText?: ((...args: any[]) => any) | undefined;
    onLink?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onUpload?: ((...args: any[]) => any) | undefined;
    onNested?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocusElement?: ((...args: any[]) => any) | undefined;
}>, {
    size: string | number;
    options: any[];
    name: string | boolean;
    url: string | boolean;
    type: string;
    label: string | boolean;
    multiple: boolean;
    help: string | boolean;
    ariaLabel: string;
    modelValue: string | unknown[];
    searchable: boolean;
    step: number;
    activeStep: number;
    defaultOption: boolean;
    formatError: boolean;
    failureError: boolean;
    selectedValues: (string | number)[];
    sublayerOptions: Function;
    validation: boolean;
}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {
    el: HTMLDivElement;
    urlInput: HTMLInputElement;
    treeWrapper: HTMLDivElement;
    selectInput: HTMLSelectElement;
    textInput: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
