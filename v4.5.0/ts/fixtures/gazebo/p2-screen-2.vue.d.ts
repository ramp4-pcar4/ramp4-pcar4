import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';
declare const _default: import("vue").DefineComponent<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    greeting: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    greeting: {
        type: StringConstructor;
    };
}>>, {}, {}>;
export default _default;
