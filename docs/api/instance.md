# Instance API

TODO: Add missing API links as they become available.

The instance API provides an interface to manage all aspects of a RAMP instance. In fact, the return value of the `createInstance(...)` function, which is used to instantiate RAMP instances on a page, is of type `InstanceAPI`. Detailed below are the properties and methods provided by the Instance API.

#### APIs

* `fixture` - the fixture API.
* `panel` - [the panel API](../app/panels.md#the-panel-api)
* `event` - [the event API](./events.md)
* `geo` - the geo API
* `notify` - [the notification API](./notifications.md)

#### Other Attributes

* `$vApp` - an object of type `ComponentPublicInstance` that represents the Vue app for the RAMP instance. See the [Vue documentation](https://vuejs.org/api/component-instance.html) for details. Note that use of the various APIs is encouraged over accessing the app's properties and methods directly.
* `$element` - an object of type `VueApp<Element>` that represents the root element for the instance's Vue app.
* `language` - a string representing the current language for the instance.
* `screenSize` - a string representing the screen size for the app. Returns the largest tailwind screen class on the element. Possible values are 'lg', 'md', 'sm' or 'xs'.
* `animate` - a boolean representing whether the app has animations enabled.
* `isFullScreen` - a boolean representing whether the app is currently fullscreen.
* `started` - a boolean representing whether the app has been started.

Note that all the properties above are read only.

#### Methods

* `initialize(configs?: RampConfigs, options?: RampOptions)` - Initializes a RAMP instance with the given config and options. Note that this method is only for internal use. Using this method externally is not recommended.
* `reload(configs?: RampConfigs, options?: RampOptions)` - Reloads a RAMP4 instance with a new config and options, if provided. If not provided, the same config and default options are used.
* `component(id: string): Object` - Retrieves a global Vue component by its id.
* `component(id: string, definition?: any)` - Registers a global Vue component given an id and a constructor (which is represented by the `definition` parameter).
* `getConfig(): RampConfig` - Gets a deep copy of the currently active config.
* `setLanguage(language: string)` - Sets the language of the app to the specified string (e.g. 'en' or 'fr').
* `toggleFullscreen()` - Toggles fullscreen for the app.
* `updateAlert(alert: string)` - Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).
* `start()` - Starts the app i.e. loads the map and layers.




