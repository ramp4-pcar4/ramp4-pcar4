export type FixtureBaseSet = { [name: string]: FixtureBase };

export interface FixtureBase {
    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof Fixture
     */
    id: string;

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

    /**
     * [Optional] Called before the fixture is removed from R4MP.
     *
     * This is a clean-up phase, and at this point, any custom content (panels, on-map components, etc.) must be removed.
     *
     * @memberof Fixture
     */
    terminated?(): void;
}
