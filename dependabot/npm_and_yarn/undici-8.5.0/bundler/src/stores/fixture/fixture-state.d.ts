export type FixtureBaseSet = {
    [name: string]: FixtureBase;
};
export interface FixtureBase {
    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof Fixture
     */
    id: string;
    /**
     * Indicates whether to keep the fixture when the language changes. Defaults to true.
     * If only one config is provided for all languages, the fixture will be kept on language change, regardless of the value of the flag.
     *
     * @type {boolean}
     * @memberof Fixture
     */
    persist: boolean;
    /**
     * [Optional] Called synchronously when the fixture is added to R4MP.
     *
     * @memberof Fixture
     */
    added?(): void;
    /**
     * [Optional] Called synchronously when the fixture is removed from R4MP.
     *
     * @memberof Fixture
     */
    removed?(): void;
    /**
     * [Optional] Called after the core map logic has executed. If the fixture is added after the map initialization, this is called immediately.
     *
     * At this point, any custom content (panels, on-map components, etc.) can be added to R4MP. Custom content can also be added throughout the life of the [module].
     *
     * @memberof Fixture
     */
    initialized?(): void;
}
