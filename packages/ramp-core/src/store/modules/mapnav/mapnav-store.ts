import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { MapnavState, MapnavItemInstance } from './mapnav-state';
import { RootState } from '@/store/state';

type MapnavContext = ActionContext<MapnavState, RootState>;

type StoreActions = { [key: string]: Action<MapnavState, RootState> };
type StoreMutations = { [key: string]: Mutation<MapnavState> };

const getters = {
    /**
     * Return a list of appbar items with registered components (ones that can be rendered right now).
     *
     * @param {Mapnav} state
     * @returns {MapnavItemInstance[]}
     */
    visible(state: MapnavState): MapnavItemInstance[] {
        return state.order.map<MapnavItemInstance>(id => state.items[id]).filter(item => item.componentId);
    }
};

const actions: StoreActions = {};

const mutations: StoreMutations = {};

export function mapnav() {
    const state = new MapnavState();
    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(['items', 'order']) }
    };
}
