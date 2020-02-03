// this file is used when running `rush serve`
// when compiled using the `serve` command, the code is treated as an app, not a library,
// so we need to expose RAMP API on the window manually
import api from '@/api';

const wany = window as any;

wany.RAMP = api;

// execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope
api.gapiPromise.then(function() {
    if (typeof wany.initRAMP === 'function') {
        wany.initRAMP();
    }
});
