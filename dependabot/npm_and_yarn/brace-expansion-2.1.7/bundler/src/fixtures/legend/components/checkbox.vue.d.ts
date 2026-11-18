import { LegendSymbology } from '../../../geo/api';
import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { LayerItem } from '../store/layer-item';
import { LegendItem } from '../store/legend-item';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    value: {
        type: PropType<LegendItem | LegendSymbology>;
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
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    value: {
        type: PropType<LegendItem | LegendSymbology>;
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
}>> & Readonly<{}>, {
    disabled: boolean;
    checked: boolean;
    isRadio: boolean;
}, {}, {}, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
