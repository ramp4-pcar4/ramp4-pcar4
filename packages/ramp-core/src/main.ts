// `main.ts` is used for serves and tests, and `main-build.ts` is used for builds

// this file is used when running `rush serve` and `rush test:e2e`
// when compiled using the `serve` command, the code is treated as an app, not a library,
// so we need to expose RAMP API on the window manually
import api from '@/api';
import Vue from 'vue';
import '@/styles/main.css';

// assign RAMP api to global variable
window.RAMP = api;

// expose Vue to the global scope so fixtures that use Vue have access to it
// this is only needed in `serve` mode; in `build`, Vue is explicitly loaded by the host page
// TODO: there are issues with how Vue is loading when using Cypress
window.Vue = Vue;

// execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope

// TODO with the removal of the geoapi promise, it appears .initRAMP is not present when this code runs.
// TODO a timeout delay for now, but should be fixed to be proper / most efficient solution
//      we might also need an interval incase 500ms is not enough?
//      is there a risk in looping forever? if implementer does not want to use an initRAMP
///     we shouldn't spin forever; maybe add a counter to kill after x attempts?
setTimeout(() => {
    if (typeof window.initRAMP === 'function') {
        window.initRAMP();
    }
}, 500);

