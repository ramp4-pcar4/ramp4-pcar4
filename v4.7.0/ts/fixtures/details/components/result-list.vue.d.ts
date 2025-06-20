import type { IdentifyResult } from '@/api';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    results: {
        type: PropType<IdentifyResult[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    results: {
        type: PropType<IdentifyResult[]>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
