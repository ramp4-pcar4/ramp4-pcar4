import screen from './screen.vue';
import { markRaw } from 'vue';

class MourugeFixture {
    added(): void {
        // TODO: import `FixtureInstance` types
        (this as any).$iApi.panel.register({
            id: 'mouruge-p1',
            config: {
                screens: { 'mouruge-s1': markRaw(screen) }
            }
        });
    }
}

// this is the preferred way to add fixtures to R4MP (the fixture file needs
// to be loaded before the main RAMP file--`RAMP.umd.js`)
// add the fixture class to the global variable and then add it to the R4MP
// instance when R4MP is instantiated on the host page
const ew = window as any;

ew.hostFixtures = ew.hostFixtures || {};
ew.hostFixtures['mouruge'] = MourugeFixture;
