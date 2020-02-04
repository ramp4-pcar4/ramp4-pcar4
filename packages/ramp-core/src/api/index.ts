import Vue from 'vue';

export * from './internal';

import { InstanceAPI } from './internal';
import mixin from './mixin';

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

// export `InstanceApi` as `Instance` on global RAMP interface
export default {
    Instance: InstanceAPI
};
