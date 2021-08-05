// this file is used when running `rush build`
// the default export is exposed as window.RAMP by the library build itself
// RAMP instantiation occurs during the library build and is executed automatically as well.
import Vue from 'vue';

import api from '@/api';

import '@/styles/main.css';

// turn off production warnings as they tend to break Travis builds
//Vue.config.productionTip = false;

export default api;
