declare function rerender(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
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
    numItems: {
        type: NumberConstructor;
        default: number;
    };
    renderWatch: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    rerender: typeof rerender;
}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    updateParent: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    position: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: ObjectConstructor;
        default(): {};
    };
    numItems: {
        type: NumberConstructor;
        default: number;
    };
    renderWatch: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onUpdateParent?: ((...args: any[]) => any) | undefined;
}>, {
    position: string;
    popperOptions: Record<string, any>;
    numItems: number;
    renderWatch: number;
}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
