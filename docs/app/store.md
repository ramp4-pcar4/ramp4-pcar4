# The Store

We use `🍍 Pinia 🍍` in RAMP to handle state storage and manipulation. `Pinia` is a state management library which handles reactive data and state across components in the app.

Full documentation can be found on the [`Pinia` website](https://pinia.vuejs.org/).

## Our store setup

Core has multiple stores for its internal state to keep things organized. Things like `layers` , `config`, `panels` etc.

Each fixture is also able to have its own store. Since fixtures are removable/replaceable having core being in charge of stores for them isn't doable.

Core stores are added in `store/store.ts`.

You can also create your own custom store for a custom fixture or otherwise, and bind it to your RAMP instance's pinia instance. For an example of how this can be done, please see our [custom funtimes fixture](https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts/sample-fixtures/funtimes). A demo of the funtimes fixture is available [here](https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/index-samples?sample=37).

## Store files

For our core stores, each store folder has 3 files;

- A state file (`fixturename-state.ts`) which is where the state interface is declared, along with any other relevant types.
- A store file (`fixturename-store.ts`) which is where the `state` ,`getters` and `actions` are, as well as the store creation function. This function allows us to have multiple copies of a fixture running with separate state.
- An index file, which is just for store exporting.

A store file contains a `defineStore(...)` function with two arguments: a unique store id and a Setup function.

```
export const useNotificationStore = defineStore('notification', () => {
  // ... setup function
})
```

A Setup function consists of `state` properties, as well as an optional set of `getters` and `actions`.

- `state` properties represent data in the store, defined using `ref()`.
- `getters` retrieve info from the state, defined using `computed()`
- `actions` act as methods to modify the state, defined using `function()`

Below is a simple example of a Setup function for the `notification` store:

```
() => {
    // state
    const notificationStack = ref([]);
    const groups = ref({});

    // getter
    const notificationNumber = computed(() => {
        return notificationStack.value.length >= 99
            ? 99
            : notificationStack.value.length;
    });

    // action
    function clearAll() {
        Object.values(groups.value).forEach(group => removeGroup(group));
        notificationStack.value = [];
    }

    return { notificationStack, groups, notificationNumber, clearAll };
}
```

Note that any `state` property, `getter`, or `action` that will be accessed from somewhere else in the app must be returned by the Setup function.

## How the store is accessed internally

### Accessing the store inside a component

To interface with a store within a component, `useFixtureNameStore()` is called within `setup()`:

```
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore();
```

Then the store and its properties can be accessed anywhere in the component:

```
const number = computed(() => notificationStore.notificationNumber);
const clearAll = () => notificationStore.clearAll();
```

### Accessing the store outside components

Using a store outside a component is nearly identical to using a store within a component, with the additional requirement of passing the `pinia` instance that was passed to the app to the `useFixtureNameStore()` function call.

```
const notificationStore = useNotificationStore(this.$vApp.$pinia);
```

## How you can access the store

The `InstanceAPI` has a method called `useStore()` which you can call to retrieve a desired store. See the [instance API](../api/instance.md#methods) documentation for details.