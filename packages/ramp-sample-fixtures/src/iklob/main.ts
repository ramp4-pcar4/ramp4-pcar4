import { markRaw } from 'vue';
import screen from './screen.vue';
class IklobFixture {
    added(): void {
        // TODO: import `FixtureInstance` types
        (this as any).$iApi.panel.register(
            {
                id: 'iklob-p1',
                config: {
                    screens: { 'iklob-s1': markRaw(screen) }
                }
            },
            {}
        );
    }
}

declare const rInstance: any;

// if it's not possible to load the fixture file before `RAMP.umd.js` is
// loaded, and therefore it's not guaranteed that RAMP won't be
// instantiated earlier, the host page can save RAMP instance to a global
// variable and the fixture can add itself to it after the instance is instantiated;
// this method is more cumbersome since it requires watching a global variable

const handle = setInterval(() => {
    if (!rInstance) {
        return;
    }
    rInstance.fixture.add('iklob', IklobFixture);
    clearInterval(handle);
}, 5000);
