import { APIScope } from './internal';
import { Fixture } from '@/store/modules/fixture';

export class FixtureAPI extends APIScope {
    // TODO: moves this fixture loading function to a separate file
    // TODO: write logic for loading external fixtures
    add(value: string) {
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        import(/* webpackChunkName: "[request]" */ `@/fixtures/${value}/index.ts`).then((fixture: { default: Fixture }) => {
            fixture.default.iApi = this.iApi;

            this.vApp.$store.set('fixture/addFixture!', { value: fixture.default });
        });
    }
}
