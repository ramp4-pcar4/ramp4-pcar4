# Core Class Structures

This section outlines the classes and interfaces found in the exposed parts of the RAMP instance. When adding new things, the classes and patterns should be observed for consistency.

## InstanceAPI

This is the class that defines the public API of a running instance of RAMP.

## APIScope

This couples together the `InstanceAPI` and the `Vue` application and provides easy access to both.

## SubcomponentAPI

These are the classes that define a subcomponent of the Instance API. E.g. `EventAPI`, `FixtureAPI`. These classes should extend `APIScope`.

Subcomponents are accessed in the following manner.

```
iApi.event.emit(stuff);
```

`.event` is the subcomponent, `.emit` is a method exposed by the subcomponent API.

## SubcomponentInstance

These are classes that define instances of API subcomponents that can be created by a caller. The two prime examples are `FixtureInstance` and `PanelInstance`. These classes should extend `APIScope`.

An example of Subcomponent Instances using Panel subcomponent:

```
var myPanel = iApi.panel.get('panelId');
myPanel.pin(true);
```

`myPanel` is an instance of the Subcomponent Instance. `.panel` is the SubcomponentAPI. `.pin` is a method exposed on Subcomponent Instance.

## ISubcomponentInstance

This denotes an interface for a constructor of an item that has a `SubcomponentInstance` class.

NOTE since this only appears to exist for `FixtureInstance` and not for Panels or the Ramp Instance, might be worth omitting or marking this as highly optional.

## Fixtures

Similar to the `SubcomponentAPI` classes of the Instance API, Fixtures can implement specific API classes. The classname should be in the format `FixturenameAPI` and they should extend the class `FixtureInstance` from the main API.

The main fixture class should have the name `FixturenameFixture` and extend the previously created `FixturenameAPI`. If the fixture has no API class then `FixturenameFixture` can directly extend `FixtureInstance`.

An example using the Grid fixture.

```
class GridAPI extends FixtureInstance {

    // a method that the Grid fixture exposes as an API,
    // that is allowed to be invoked by outside callers.
    openGrid(id: string): void {
       // do stuff
    }
}

class GridFixture extends GridAPI {
    async added() {
      // specific implementation for the Grid fixture
    }
}

// the code to create the Grid fixture would be something like
var gridFixtureInstance = new GridFixture(instanceApi);
```

## Vue classes

Our component classes follow the naming convention: `ComponentnameV` (which extend `Vue` as normal). The `V` allows us to distinguish Vue components from store classes, api classes, etc.

Our store folders export a function rather than a class/object. These are just named as `module`. This function creates an instance of `ModuleState` which should be defined in the `module-state.ts` file. For more info look at the [store docs](store.md).

## LayerInstance

This class acts as the base interface for map layers. While there can be many different implementations, this class should be used to type variables that can handle any layer. All layer implementations should inherit from this class.
