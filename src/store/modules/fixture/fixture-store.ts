import type { ActionContext, Action, Mutation } from 'vuex';

import { FixtureState } from './fixture-state';
import type { FixtureBase } from './fixture-state';
import type { RootState } from '@/store/state';
import { DefPromise } from '@/geo/api';

type FixtureContext = ActionContext<FixtureState, RootState>;

type StoreActions = { [key: string]: Action<FixtureState, RootState> };
type StoreMutations = { [key: string]: Mutation<FixtureState> };

export enum FixtureAction {}
/* addFixture = 'addFixture',
    removeFixture = 'removeFixture' */

export enum FixtureMutation {
    ADD_FIXTURE = 'ADD_FIXTURE',
    REMOVE_FIXTURE = 'REMOVE_FIXTURE',
    ADD_LOAD_PROMISE = 'ADD_LOAD_PROMISE'
}

const getters = {
    /**
     * Returns registration promises from the state, for the specified fixtureIds.
     * Should ideally be called when all fixtureIds have a promise associated with them.
     * @param fixtureIds the fixture Ids for which promises should be returned
     */
    getLoadPromises:
        (state: FixtureState) =>
        (fixtureIds: string[]): Promise<void>[] => {
            const loadPromises: Promise<void>[] = [];
            fixtureIds.forEach((fixtureId: string) => {
                if (fixtureId in state.loadPromises) {
                    loadPromises.push(
                        state.loadPromises[fixtureId].getPromise()
                    );
                }
            });
            return loadPromises;
        }
};

const actions: StoreActions = {};

const mutations: StoreMutations = {
    /**
     * Mutation to add a new fixture to the fixture list.
     * // TODO: add options for override behaviour as in what to do if a fixture with the same id is already added
     *
     * @param {FixtureState} state
     * @param {{ value: FixtureBase }} { value }
     */
    [FixtureMutation.ADD_FIXTURE](
        state: FixtureState,
        { value }: { value: FixtureBase }
    ): void {
        state.items = { ...state.items, [value.id]: value };
        // since fixture has successfully loaded, resolve its associated load promise
        if (!(value.id in state.loadPromises)) {
            const loadPromise = new DefPromise();
            loadPromise.resolveMe();
            state.loadPromises = {
                ...state.loadPromises,
                [value.id]: loadPromise
            };
        } else {
            state.loadPromises[value.id].resolveMe();
        }
        // call the `added` life hook if available
        if (typeof value.added === 'function') {
            value.added();
        }
    },

    /**
     * Mutation to remove an existing fixture from the fixture list.
     *
     * @param {FixtureState} state
     * @param {{ value: FixtureBase }} { value }
     */
    [FixtureMutation.REMOVE_FIXTURE](
        state: FixtureState,
        { value }: { value: FixtureBase }
    ): void {
        delete state.items[value.id];
        state.items = { ...state.items };
        delete state.loadPromises[value.id];
        state.loadPromises = { ...state.loadPromises };
        // call the `removed` life hook if available
        if (typeof value.removed === 'function') {
            value.removed();
        }
    },

    /**
     * Mutation to add a new load promise for the specified fixture Id.
     *
     * @param {FixtureState} state
     * @param {string} fixtureId
     */
    [FixtureMutation.ADD_LOAD_PROMISE](
        state: FixtureState,
        fixtureId: string
    ): void {
        state.loadPromises = {
            ...state.loadPromises,
            [fixtureId]: new DefPromise()
        };
    }
};

export function fixture() {
    const state = new FixtureState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations }
    };
}
