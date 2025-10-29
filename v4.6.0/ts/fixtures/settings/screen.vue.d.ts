import type { PanelInstance } from '@/api';
import { LayerInstance } from '@/api/internal';
import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    layer: {
        type: PropType<LayerInstance>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    layer: {
        type: PropType<LayerInstance>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
