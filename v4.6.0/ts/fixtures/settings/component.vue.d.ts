import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"toggle" | "input" | "slider">;
        required: true;
    };
    config: {
        type: ObjectConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: PropType<"visibility" | "opacity" | "refresh" | "location" | "box">;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"toggle" | "input" | "slider">;
        required: true;
    };
    config: {
        type: ObjectConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: PropType<"visibility" | "opacity" | "refresh" | "location" | "box">;
        required: true;
    };
}>>, {}, {}>;
export default _default;
