import { PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { default as VueSlider } from '../../../scripts/vue-slider-component.d.ts';
import { PanelInstance } from '../../api';
type InspectorTab = 'details' | 'style' | 'edit';
declare const _default: VueSlider.DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    initialTab: {
        type: PropType<InspectorTab>;
        default: string;
    };
    tabRequestId: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    panel: {
        type: PropType<PanelInstance>;
        required: true;
    };
    initialTab: {
        type: PropType<InspectorTab>;
        default: string;
    };
    tabRequestId: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    initialTab: InspectorTab;
    tabRequestId: number;
}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {
    editBanner: HTMLDivElement;
}, any>;
export default _default;
