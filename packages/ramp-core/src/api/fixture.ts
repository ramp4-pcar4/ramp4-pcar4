export default class FixtureAPI {
    _thisApp: Vue;

    constructor(thisApp: Vue) {
        this._thisApp = thisApp;
    }

    // TODO: moves this fixture loading function to a separate file
    // TODO: write logic for loading external fixtures
    add(value: string) {
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        import(/* webpackChunkName: "[request]" */ `@/fixtures/${value}/index.ts`).then((fixture: any) => {
            fixture.default.app = this._thisApp;

            this._thisApp.$store.set('fixture/addFixture!', { value: fixture.default });
        });
    }
}
