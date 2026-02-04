declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    position: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: ObjectConstructor;
        default(): {};
    };
    tooltip: {
        type: StringConstructor;
    };
    tooltipPlacement: {
        type: StringConstructor;
        default: string;
    };
    tooltipTheme: {
        type: StringConstructor;
        default: string;
    };
    tooltipAnimation: {
        type: StringConstructor;
        default: string;
    };
    centered: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: ObjectConstructor;
        default(): {};
    };
    tooltip: {
        type: StringConstructor;
    };
    tooltipPlacement: {
        type: StringConstructor;
        default: string;
    };
    tooltipTheme: {
        type: StringConstructor;
        default: string;
    };
    tooltipAnimation: {
        type: StringConstructor;
        default: string;
    };
    centered: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: {
        type: StringConstructor;
    };
}>>, {
    popperOptions: Record<string, any>;
    position: string;
    tooltipPlacement: string;
    tooltipTheme: string;
    tooltipAnimation: string;
    centered: boolean;
}, {}>, {
    header?(_: {}): any;
    default?(_: {
        close: () => boolean;
    }): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
