import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { LayerItem } from '../store/layer-item';
import { SectionItem } from '../store/section-item';
import { LegendItem } from '../store/legend-item';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    legendItem: {
        type: PropType<LegendItem | LayerItem | SectionItem>;
        required: true;
    };
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    legendItem: {
        type: PropType<LegendItem | LayerItem | SectionItem>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {
    el: HTMLDivElement;
    legendFocusItem: HTMLDivElement;
}, any>;
export default _default;
