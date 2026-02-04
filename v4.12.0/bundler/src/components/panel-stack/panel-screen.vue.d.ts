import { PanelInstance } from '../../api';
import { PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        controls?(_: {}): any;
        content?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        el: HTMLDivElement;
        contentEl: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: BooleanConstructor;
        default: boolean;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    screenId: {
        type: StringConstructor;
        required: false;
    };
}>, {
    el: Readonly<import('../../../vue/dist/vue.esm-bundler.js').ShallowRef<HTMLDivElement | null>>;
}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: BooleanConstructor;
        default: boolean;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    screenId: {
        type: StringConstructor;
        required: false;
    };
}>> & Readonly<{}>, {
    footer: boolean;
    header: boolean;
    content: boolean;
}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {
    el: HTMLDivElement;
    contentEl: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
