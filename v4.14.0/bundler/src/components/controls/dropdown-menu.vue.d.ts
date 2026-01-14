declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {
            close: () => boolean;
        }): any;
    };
    refs: {
        el: HTMLDivElement;
        dropdownTrigger: HTMLButtonElement;
        dropdown: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
    tooltipPlacementAlt: {
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
}>, {}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
    tooltipPlacementAlt: {
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
}>> & Readonly<{}>, {
    position: string;
    popperOptions: Record<string, any>;
    tooltipPlacement: string;
    tooltipPlacementAlt: string;
    tooltipTheme: string;
    tooltipAnimation: string;
    centered: boolean;
}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
