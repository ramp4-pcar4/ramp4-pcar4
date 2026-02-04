import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<{
            value: boolean;
            disabled?: boolean | undefined;
        }>;
        required: true;
    };
    name: StringConstructor;
    icon: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggled: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<{
            value: boolean;
            disabled?: boolean | undefined;
        }>;
        required: true;
    };
    name: StringConstructor;
    icon: StringConstructor;
}>> & {
    onToggled?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
