import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { FixturesState, Fixture } from './fixtures-state';
import { RootState } from '../../state';

type FixturesContext = ActionContext<FixturesState, RootState>;

const state: FixturesState = new FixturesState();

type StoreActions = { [key: string]: Action<FixturesState, RootState> };
type StoreMutations = { [key: string]: Mutation<FixturesState> };

export enum ActionName {
    addFixture = 'addFixture',
    removeFixture = 'removeFixture'
}

export enum MutationName {
    ADD_FIXTURE = 'ADD_FIXTURE',
    REMOVE_FIXTURE = 'REMOVE_FIXTURE'
}

const getters = {};

const actions: StoreActions = {
    [ActionName.addFixture](context: FixturesContext, { value }: { value: Fixture }): void {
        context.commit(MutationName.ADD_FIXTURE, { value });
    },

    [ActionName.removeFixture](context: FixturesContext, { value }: { value: Fixture }): void {
        context.commit(MutationName.REMOVE_FIXTURE, { value });
    }
};

const mutations: StoreMutations = {
    /**
     * Mutation to add a new fixture to the fixture list.
     * // TODO: add options for override behaviour as in what to do if a fixture with the same id is already added
     *
     * @param {FixturesState} state
     * @param {{ value: Fixture }} { value }
     */
    [MutationName.ADD_FIXTURE](state: FixturesState, { value }: { value: Fixture }): void {
        state.fixtures.push(value);

        // call the `added` life hook if available
        if (typeof value.added === 'function') {
            value.added();
        }
    },

    /**
     * Mutation to remove an existing fixture from the fixture list.
     *
     * @param {FixturesState} state
     * @param {{ value: Fixture }} { value }
     */
    [MutationName.REMOVE_FIXTURE](state: FixturesState, { value }: { value: Fixture }): void {
        const index = state.fixtures.findIndex(fixture => fixture.id === value.id);
        if (index === -1) {
            return;
        }

        state.fixtures.splice(index, 1);

        // call the `removed` life hook if available
        if (typeof value.removed === 'function') {
            value.removed();
        }
    }
};

export const fixtures = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
