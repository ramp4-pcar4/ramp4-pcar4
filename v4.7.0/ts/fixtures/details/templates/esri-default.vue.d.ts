import type { PropType } from 'vue';
import type { FieldDefinition } from '@/geo/api';
import type { DetailsFieldItem } from '@/fixtures/details/store';
import type { IdentifyItem } from '@/api';
declare const _default: import("vue").DefineComponent<{
    fixtureFields: {
        type: PropType<DetailsFieldItem[]>;
        required: false;
    };
    fields: {
        type: PropType<FieldDefinition[]>;
        required: true;
    };
    identifyData: {
        type: PropType<IdentifyItem>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fixtureFields: {
        type: PropType<DetailsFieldItem[]>;
        required: false;
    };
    fields: {
        type: PropType<FieldDefinition[]>;
        required: true;
    };
    identifyData: {
        type: PropType<IdentifyItem>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
