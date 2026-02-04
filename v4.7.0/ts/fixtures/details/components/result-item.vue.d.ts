import type { IdentifyItem } from '@/api';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<IdentifyItem>;
        required: true;
    };
    open: {
        type: BooleanConstructor;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<IdentifyItem>;
        required: true;
    };
    open: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    open: boolean;
}, {}>;
export default _default;
