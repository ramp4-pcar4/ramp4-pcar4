import type { PropType } from 'vue';
import '@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css';
interface ValidationMsgs {
    required?: string;
    invalid?: string;
    failure?: string;
}
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<any[]>;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    link: (...args: any[]) => void;
    text: (...args: any[]) => void;
    select: (...args: any[]) => void;
    nested: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    upload: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<any[]>;
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
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onLink?: ((...args: any[]) => any) | undefined;
    onText?: ((...args: any[]) => any) | undefined;
    onNested?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onUpload?: ((...args: any[]) => any) | undefined;
}, {
    url: string | boolean;
    options: any[];
    name: string | boolean;
    type: string;
    label: string | boolean;
    help: string | boolean;
    size: string | number;
    modelValue: string | unknown[];
    defaultOption: boolean;
    formatError: boolean;
    failureError: boolean;
    selectedValues: (string | number)[];
    sublayerOptions: Function;
    multiple: boolean;
    searchable: boolean;
    validation: boolean;
}, {}>;
export default _default;
