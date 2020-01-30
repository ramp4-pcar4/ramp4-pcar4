// this file is used when running `rush serve`
// when compiled using the `serve` command, the code is treated as an app, not a library,
// so we need to expose RAMP API on the window manually
import everything from '@/main-build';
(window as any).RAMP = everything;
