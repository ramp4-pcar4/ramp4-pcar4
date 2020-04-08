# Fixtures

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
    'p-2-screen-1': () => import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`),
}
```

Here, `import` will be picked up by webpack and used for code splitting, so it will only work for internal fixtures. For external fixtures, there are no rules for how your load external files; just return a promise with your component code and it should work.

Read [Async Components](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components) in Vue docs if you want more details.
