import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { FieldDefinition } from '../../../geo/api';
import { DetailsFieldItem } from '../store';
import { IdentifyItem } from '../../../api';
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    fixtureFields: {
        type: PropType<Array<DetailsFieldItem>>;
        required: false;
    };
    fields: {
        type: PropType<Array<FieldDefinition>>;
        required: true;
    };
    identifyData: {
        type: PropType<IdentifyItem>;
        required: true;
    };
}>, {}, {}, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    fixtureFields: {
        type: PropType<Array<DetailsFieldItem>>;
        required: false;
    };
    fields: {
        type: PropType<Array<FieldDefinition>>;
        required: true;
    };
    identifyData: {
        type: PropType<IdentifyItem>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
