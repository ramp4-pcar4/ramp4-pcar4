import { type PropType } from 'vue';
import { type PanelInstance } from '@/api';
import type { MetadataPayload } from './store';
declare const _default: import("vue").DefineComponent<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    payload: {
        type: PropType<MetadataPayload>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    payload: {
        type: PropType<MetadataPayload>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
