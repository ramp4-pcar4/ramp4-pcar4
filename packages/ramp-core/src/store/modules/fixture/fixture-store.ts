import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { FixtureState, FixtureBase } from './fixture-state';
import { RootState } from '@/store/state';

type FixtureContext = ActionContext<FixtureState, RootState>;

type StoreActions = { [key: string]: Action<FixtureState, RootState> };
type StoreMutations = { [key: string]: Mutation<FixtureState> };

export enum FixtureAction {}
/* addFixture = 'addFixture',
    removeFixture = 'removeFixture' */

export enum FixtureMutation {
    ADD_FIXTURE = 'ADD_FIXTURE',
    REMOVE_FIXTURE = 'REMOVE_FIXTURE'
}

const getters = {};

const actions: StoreActions = {};

const mutations: StoreMutations = {
    /**
     * Mutation to add a new fixture to the fixture list.
     * // TODO: add options for override behaviour as in what to do if a fixture with the same id is already added
     *
     * @param {FixtureState} state
     * @param {{ value: FixtureBase }} { value }
     */
    [FixtureMutation.ADD_FIXTURE](state: FixtureState, { value }: { value: FixtureBase }): void {
        state.items = { ...state.items, [value.id]: value };

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
    [FixtureMutation.REMOVE_FIXTURE](state: FixtureState, { value }: { value: FixtureBase }): void {
        delete state.items[value.id];
        state.items = { ...state.items };

        // call the `removed` life hook if available
        if (typeof value.removed === 'function') {
            value.removed();
        }
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
