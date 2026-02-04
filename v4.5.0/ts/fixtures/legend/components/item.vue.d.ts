import type { PropType } from 'vue';
import { LayerItem } from '../store/layer-item';
import { SectionItem } from '../store/section-item';
import type { LegendItem } from '../store/legend-item';
declare const _default: import("vue").DefineComponent<{
    legendItem: {
        type: PropType<LegendItem | LayerItem | SectionItem>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    legendItem: {
        type: PropType<LegendItem | LayerItem | SectionItem>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
