import type { FixtureBase } from './fixture-state';
import { DefPromise } from '@/geo/api';
import { defineStore } from 'pinia';
import { markRaw, ref } from 'vue';

export const useFixtureStore = defineStore('fixture', () => {
    const items = ref<{ [name: string]: FixtureBase }>({});
    const loadPromises = ref<{ [name: string]: DefPromise }>({});
    const persistFlags = ref<{ [name: string]: boolean }>({});

    function getLoadPromises(fixtureIds: string[]): Promise<void>[] {
        return fixtureIds.map(id => loadPromises.value[id].getPromise());
    }

    function addFixture(value: FixtureBase, persist?: boolean) {
        items.value = { ...items.value, [value.id]: markRaw(value) };
        persistFlags.value = {
            ...persistFlags.value,
            [value.id]: persist !== false
        };
        // since fixture has successfully loaded, resolve its associated load promise
        if (!(value.id in loadPromises.value)) {
            const loadPromise = new DefPromise();
            loadPromise.resolveMe();
            loadPromises.value = {
                ...loadPromises.value,
                [value.id]: loadPromise
            };
        } else {
            loadPromises.value[value.id].resolveMe();
        }
        // call the `added` life hook if available
        if (typeof value.added === 'function') {
            value.added();
        }
    }

    function removeFixture(value: FixtureBase) {
        delete items.value[value.id];
        items.value = { ...items.value };
        delete persistFlags.value[value.id];
        persistFlags.value = { ...persistFlags.value };
        delete loadPromises.value[value.id];
        loadPromises.value = { ...loadPromises.value };
        // call the `removed` life hook if available
        if (typeof value.removed === 'function') {
            value.removed();
        }
    }

    function addLoadPromise(fixtureId: string) {
        loadPromises.value = {
            ...loadPromises.value,
            [fixtureId]: new DefPromise()
        };
    }

    return {
        items,
        loadPromises,
        persistFlags,
        getLoadPromises,
        addFixture,
        removeFixture,
        addLoadPromise
    };
});
