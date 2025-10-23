declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    onClickFunction: {
        type: FunctionConstructor;
        required: true;
    };
    buttonId: {
        type: StringConstructor;
        required: true;
    };
    tooltip: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>, {}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    onClickFunction: {
        type: FunctionConstructor;
        required: true;
    };
    buttonId: {
        type: StringConstructor;
        required: true;
    };
    tooltip: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>> & Readonly<{}>, {
    tooltip: string | boolean;
}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
