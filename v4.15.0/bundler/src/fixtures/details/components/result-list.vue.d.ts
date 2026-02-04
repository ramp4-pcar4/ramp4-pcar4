import { IdentifyResult } from '../../../api';
import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    results: {
        type: PropType<Array<IdentifyResult>>;
        required: true;
    };
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "item-selected": (...args: any[]) => void;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    uid: {
        type: StringConstructor;
        required: true;
    };
    results: {
        type: PropType<Array<IdentifyResult>>;
        required: true;
    };
}>> & Readonly<{
    "onItem-selected"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, any>;
export default _default;
