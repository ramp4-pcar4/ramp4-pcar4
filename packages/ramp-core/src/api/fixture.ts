import { APIScope } from './internal';
import { Fixture, FixtureMutation } from '@/store/modules/fixture';
// TODO: implement the same `internal.ts` pattern in store, so can import from a single place;

export class FixtureAPI extends APIScope {
    // TODO: moves this fixture loading function to a separate file
    // TODO: write logic for loading external fixtures
    add(value: string) {
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        import(/* webpackChunkName: "[request]" */ `@/fixtures/${value}/index.ts`).then((fixture: { default: Fixture }) => {
            fixture.default.iApi = this.iApi;

            // TODO: calling `ADD_FIXTURE` mutation directly here; might want to switch to calling the action `addFixture`
            // TODO: using this horrible concatenated mixture `fixture/${FixtureMutation.ADD_FIXTURE}!` all the time doesn't seem like a good idea;
            this.vApp.$store.set(`fixture/${FixtureMutation.ADD_FIXTURE}!`, { value: fixture.default });
        });
    }

    remove(value: string) {
        this.vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, { value });
    }
}
