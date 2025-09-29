import { IdentifyItem } from '../../../api';
import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<IdentifyItem>;
        required: true;
    };
    open: {
        type: BooleanConstructor;
        required: false;
    };
    inList: {
        type: BooleanConstructor;
        required: false;
    };
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<IdentifyItem>;
        required: true;
    };
    open: {
        type: BooleanConstructor;
        required: false;
    };
    inList: {
        type: BooleanConstructor;
        required: false;
    };
}>> & Readonly<{}>, {
    open: boolean;
    inList: boolean;
}, {}, {}, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, any>;
export default _default;
