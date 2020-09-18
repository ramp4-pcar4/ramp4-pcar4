# The Store

We use `Vuex` in RAMP to handle state storage and manipulation. The `Vuex` website (explanations and docs) can be found [here](https://vuex.vuejs.org/).

At its base, the `Vuex` store holds all the app state, and the rest of the code reacts to it.



## A store module

We have store modules for core as well as each fixture (more on that later).

A store module usually consists of a state object, as well as a set of `Getters`, `Actions` and `Mutations`. 

- `Getters` retrieve info from the state object.
- `Mutations` directly commit info to the state object.
- `Actions` are the "I want to affect the state" function calls. These usually wrap `Mutations` and allow us to either do calculations before committing info and/or perform multiple `Mutations` in one call.



Each module has 3 files;

- A state file (`fixturename-state.ts`) which is where the state object is declared.
- A store file (`fixturename-store.ts`) which is where the `Getters` ,`Actions` and `Mutations` are, as well as the store creation function. This function allows us to have multiple copies of a fixture running with separate state.
- An index file, which is just for module exporting



## Our module setup

Core has multiple modules for its internal state to keep things organized. Things like `layers` , `config`, `panels` etc.

Each fixture is also able to have its own store module. Since fixtures are removable/replaceable having core being in charge of store modules for them isn't doable.

Core modules are added in `store/store.ts`.
Fixture modules can be added in the fixture's `added` function using `this.$vApp.$store.registerModule(name, storeCreationFunction());`



## Accessing the store from components

For interfacing with the store we use `vuex-pathify` which has docs [here](https://davestewart.github.io/vuex-pathify/#/).

Instead of having to do `this.$vApp.$store....` every time we want to use anything we have some nice decorators from `vuex-pathify` to make it simple.

### @Get

This assigns a getter to a name in the current scope.

`@Get('panel/getVisible!') visible` assigns the `getVisible` getter from the `panel` module to the name `visible`. So if you wanted the value of `getVisible` anywhere in that file you access it using `this.visible`.

### @Call

This is `@Get` but for actions/mutations.

### @Sync

This one allows both setting and getting.

Lets say we have`@Sync('app/welcomeMessage') message`. Then `console.log(this.message)` would print out the current value of `welcomeMessage` in the store. `this.message = "Hello World"` would commit that value to `welcomeMessage`. 



