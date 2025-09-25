declare const _default: import("vue").DefineComponent<{
    results: {
        type: any;
        required: true;
    };
    selected: {
        type: StringConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "selection-changed": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    results: {
        type: any;
        required: true;
    };
    selected: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onSelection-changed"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
