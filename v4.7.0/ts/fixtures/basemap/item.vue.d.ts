import type { PropType } from 'vue';
import type { RampBasemapConfig, RampTileSchemaConfig } from '@/geo/api';
declare const _default: import("vue").DefineComponent<{
    basemap: {
        type: PropType<RampBasemapConfig>;
        required: true;
    };
    tileSchema: {
        type: PropType<RampTileSchemaConfig>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    basemap: {
        type: PropType<RampBasemapConfig>;
        required: true;
    };
    tileSchema: {
        type: PropType<RampTileSchemaConfig>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
