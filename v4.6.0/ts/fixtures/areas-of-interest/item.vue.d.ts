import type { PropType } from 'vue';
import type { AreaOfInterest } from './store';
declare const _default: import("vue").DefineComponent<{
    area: {
        type: PropType<AreaOfInterest>;
        required: true;
    };
    showThumbnail: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    area: {
        type: PropType<AreaOfInterest>;
        required: true;
    };
    showThumbnail: {
        type: BooleanConstructor;
    };
}>>, {
    showThumbnail: boolean;
}, {}>;
export default _default;
