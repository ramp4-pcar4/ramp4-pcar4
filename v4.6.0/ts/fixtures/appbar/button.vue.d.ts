declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    onClickFunction: {
        type: FunctionConstructor;
        required: true;
    };
    id: {
        type: StringConstructor;
        required: true;
    };
    tooltip: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onClickFunction: {
        type: FunctionConstructor;
        required: true;
    };
    id: {
        type: StringConstructor;
        required: true;
    };
    tooltip: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
}>>, {
    tooltip: string | boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
