# Fixtures

This covers various ways to create fixtures.

## Interface

The fixture interface has four methods, all optional. They take no parameters and return no value. If a custom fixture implements them, the RAMP instance will run them at the appropriate time.

- `added()` is run when the fixture has been added to the RAMP instance
- `initialized()` is run when the fixture is `added` and the instance map has finished initializing
- `terminated()` is run immediately before the fixture is removed from the RAMP instance
- `removed()` is run after fixture is removed from the RAMP instance

## Creation

### Internal

This approach involves forking the R4MP code-base, adding new fixtures, and re-building the project. While this can be rather intensive, the result means the new fixtures are now a part of the R4MP library you are hosting and can be used like other provided fixtures.

Fixture code should be placed in a directory within `src/fixtures`. The directory name should be the fixture name. The existing source code can be used as a guide or template to begin a fixture, if desired.

The remaining creation examples deal with fixtures that are defined outside of the R4MP source, and are more appropriate for a site that is just using the compiled R4MP library (and not wanting to fork & rebuild).

### Headless

For a non-visual (i.e. no need for Vue UI rendering) fixture, a class that respect the fixture interface can be loaded.

```js
class HeadlessFixture {
    initialized() {
        // do stuff
        this.$iApi.geo.map.zoomToLevel(8);
    }
}

rInstance.fixture.add('headless', HeadlessFixture);
```

Note the `.add()` method will upgrade the class prototype so it has the standard fixture stuff, like the `.$iApi` property in the example.

### Plain Javascript

This type of fixture is written in plain JS, and requires no compilation step since it doesn't use Vue components or Vue templates or imports any other third-party code. Vue templates in this type of fixture are written as render functions, hence already compiled in the format Vue runtime can understand.

This is the most simple and fast way to create fixtures as no build step is required. It is also the most compact way to create fixtures as no external code (like Vue component decorators or other helper functions) is included in the fixture bundle.

A sample of this type of fixture can be found [here](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/demos/starter-scripts/sample-fixtures/diligord/diligord-fixture.js).

### Typescript, Vue Decorators

This type of fixture is written in Typescript and contains a `.vue` single-file component in which code is written with the help of Vue decorators (`Component` and `Prop`). Since this fixture contains a Vue template, a build step is necessary to compile HTML template to the render function Vue runtime understands, as well as converting the Typescript to Javascript.

This is the most comfortable way to create fixtures since it's possible to use nice things like decorators and other syntactic sugar, RAMP type definitions, and intellisense.

The resulting bundle includes more of external code as Vue decorators will be incorporated into the end file.

A sample of this type of fixture can be found [here](https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts/sample-fixtures/iklob).

For more information about how to use `Vue`, click [here](https://vuejs.org/guide/introduction.html)

> **Note:**
>
> Since these fixtures use `Vue` and `Vue` runtime is not bundled in, the fixture expects `Vue` to be available on the global scope.
>
> ```html
> <!-- load Vue since RAMP doesn't bundle it -->
> <script src="https://unpkg.com/vue"></script>
>
> <!-- load RAMP after loading Vue -->
> <script src="./lib/ramp.js"></script>
>
> <!-- load script that creates RAMP instance-->
> <script type="module" src="./starter-scripts/index.js"></script>
>
> <!-- load fixtures that require Vue -->
> <script src="../dist/sample-fixtures/diligord-fixture.js"></script>
> ```

### Typescript, No Vue Decorators

This type of fixture is written in Typescript and contains a `.vue` single-file component. The code of the component, however, is written in plain Typescript, without use of Vue decorators. This fixture also requires a build step.

The resulting bundle includes a small amount of external code needed to normalize Vue components, plus a UMD wrapper around it.

Compared to the Vue Decorator technique, this approach offers a smaller package size and avoids having to care about library loading order while still providing the convenience of Typescript and Vue templates. The lack of decorators will likely be the deciding factor.

A sample of this type of fixture can be found [here](https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/packages/ramp-sample-fixtures/src/mouruge).

## Loading External Fixtures

### The Preferred Way

The preferred way of loading fixtures involves either importing the fixture class or adding it to the global scope (`window.hostedFixtures` or any other suitable place) and then letting the host page add it to a specific RAMP instance.

```js
// my-fixture.js
window.hostFixtures = window.hostFixtures || {};
window.hostFixtures['myfixture'] = MyFixture;
```

```html
// index.html
<!-- load fixture -->
<script src="../path/my-fixture.js"></script>

<!-- load Vue and RAMP -->
<script src="https://unpkg.com/vue"></script>
<script src="./lib/ramp.js"></script>

<script>
    const rInstance = RAMP.createInstance(...);
    rInstance.fixture.add('myfixture', window.hostFixtures.myfixture);
</script>
```

### The Other (Rare) Way

Sometimes, the preferred way doesn't work. Specifically, it won't work when it's not possible to load a fixture that relies on global `Vue` before `RAMP` is loaded, and therefore it's not guaranteed that `RAMP` won't be instantiated earlier (before the fixture can add itself to the global scope).

The following method is more cumbersome since it requires watching a global variable. In such cases, the host page can save the RAMP instance to a global variable and let the fixture add itself to it after the instance is instantiated. This will look something like this:

```ts
// my-fixture.js
const handle = setInterval(() => {
    if (!rInstance) {
        return;
    }
    // wait for `rInstance` to be defined and add `myfixture` to it
    rInstance.fixture.add('myfixture', MyFixture);
    clearInterval(handle);
}, 1000);
```

```html
// index.html
<!-- load RAMP + Vue -->
<script src="ramp+vue"></script>

<!-- load fixtures that require Vue -->
<script src="../path/my-fixture.js"></script>

<script>
    var rInstance;
    rInstance = RAMP.createInstance(document.getElementById('app'), ...);
</script>
```

## Lazy-Loading

It's possible to lazy-load fixture code for screen panels. This will split code for individual panel screens into separate file and will be loaded on demand. Otherwise, all fixture code is loaded right away and it defeats parts of the idea to make R4MP as flexible as possible. See `gazebo` fixture for examples.

Two methods of lazy loading:

### Insider

When registering panels, provide a relative path to the screen component to lazy load:

```ts
screens: {
    'p-2-screen-2': 'gazebo/p2-screen-2.vue',
},
```

The path should be relative to the fixtures home folder, and the `panel.ts` will try to load a component from `src/fixtures/${screen}`.

This is the simplest way and it's recommended if you are coding fixtures.

### Macho

Provide a function that returns a promise resolving with a Vue component:

```ts
screens: {
    'p-2-screen-1': () => import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`)
}
```

Here, `import` will be picked up by webpack and used for code splitting, so it will only work for internal fixtures. For external fixtures, there are no rules for how you load external files; just return a promise with your component code and it should work.

Read [Async Components](https://vuejs.org/guide/components/async.html) in Vue docs if you want more details.
