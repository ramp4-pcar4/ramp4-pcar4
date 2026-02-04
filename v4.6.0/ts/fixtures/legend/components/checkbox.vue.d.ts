import { type LegendSymbology } from '@/geo/api';
import { type PropType } from 'vue';
import { LayerItem } from '../store/layer-item';
import { LegendItem } from '../store/legend-item';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<LegendSymbology | LegendItem>;
        required: true;
    };
    legendItem: {
        type: PropType<LegendItem | LayerItem>;
        required: true;
    };
    checked: {
        type: BooleanConstructor;
    };
    label: {
        type: StringConstructor;
    };
    isRadio: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<LegendSymbology | LegendItem>;
        required: true;
    };
    legendItem: {
        type: PropType<LegendItem | LayerItem>;
        required: true;
    };
    checked: {
        type: BooleanConstructor;
    };
    label: {
        type: StringConstructor;
    };
    isRadio: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
}>>, {
    disabled: boolean;
    checked: boolean;
    isRadio: boolean;
}, {}>;
export default _default;
