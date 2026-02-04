import { type PropType } from 'vue';
import type { LayerItem } from '../store/layer-item';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    legendItem: {
        type: PropType<LayerItem>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    legendItem: {
        type: PropType<LayerItem>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
