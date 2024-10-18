import type { PanelInstance } from '@/api';
import type { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    footer: boolean;
    header: boolean;
    content: boolean;
}, {}>, {
    header?(_: {}): any;
    controls?(_: {}): any;
    content?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
