import screen from './screen.vue';

class MourugeFixture {
    added(): void {
        // TODO: import `FixtureInstance` types
        (this as any).$iApi.panel
            .register({
                id: 'mouruge-p1',
                config: {
                    screens: { 'mouruge-s1': screen }
                }
            })
            .open();
    }
}

// this is the preferred way to add fixtures to R4MP (the fixture file needs to be loaded before the main RAMP file--`RAMP.umd.js`)
// add the fixture class to the global variable and then added it to the R4MP instance in the `initRAMP` callback function on the host page
const ew = window as any;

ew.hostFixtures = ew.hostFixtures || {};
ew.hostFixtures['mouruge'] = MourugeFixture;
