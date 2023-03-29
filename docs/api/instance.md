# Instance API

TODO: Add missing API links as they become available.

The Instance API provides an interface to manage all aspects of a RAMP instance. When calling the `createInstance(...)` function to place a RAMP instance on a page (see the [startup documentation](./startup.md) for more details on this), it will return an API for the new instance. Detailed below are the properties and methods it provides.

#### APIs

* `fixture` - the fixture API.
* `panel` - [the panel API](../app/panels.md#the-panel-api)
* `event` - [the event API](./events.md)
* `geo` - the geo API
* `notify` - [the notification API](./notifications.md)

#### Other Attributes

* `$vApp` - an object of type `ComponentPublicInstance` that represents the Vue app for the RAMP instance. See the [Vue documentation](https://vuejs.org/api/component-instance.html) for details. Note that use of the various APIs is encouraged over accessing the app's properties and methods directly.
* `$element` - an object of type `VueApp<Element>` that represents the root element for the instance's Vue app.
* `$i18n` - an object representing the [Vue I18n Composer Instance](https://vue-i18n.intlify.dev/api/composition.html#composer) for the instance's Vue app.
* `language` - a string representing the current language for the instance.
* `screenSize` - a string representing the screen size for the app. Returns the largest tailwind screen class on the element. Possible values are 'lg', 'md', 'sm' or 'xs'.
* `animate` - a boolean representing whether the app has animations enabled.
* `isFullScreen` - a boolean representing whether the app is currently fullscreen.
* `started` - a boolean representing whether the app has been started.

Note that all the properties above are read only.

#### Methods

* `reload(configs?: RampConfigs, options?: RampOptions)` - Reloads a RAMP4 instance with a new config and options, if provided. If not provided, the same config and default options are used.
* `component(id: string): Object` - Retrieves a global Vue component by its id.
* `component(id: string, definition?: any)` - Registers a global Vue component given an id and a constructor (which is represented by the `definition` parameter).
* `getConfig(): RampConfig` - Gets a deep copy of the currently active config.
* `setLanguage(language: string)` - Sets the language of the app to the specified string (e.g. 'en' or 'fr').
* `toggleFullscreen()` - Toggles fullscreen for the app.
* `updateAlert(alert: string)` - Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).
* `start()` - Starts the app i.e. loads the map and layers. Used when `startRequired` is set to true in the [instance options](./startup.md#instance-options).
* `useStore(id: string)` - Returns the store with the specified id, if it exists, else returns undefined. The following out-of-the-box store ID's are currently supported: appbar, areas-of-interest, config, details, export, fixture, geosearch, grid, help, instance, layer, legend, map-caption, mapnav, maptip, metadata, northarrow, notification, overviewmap, panel, scrollgurard, and wizard. Note that for ids that correspond to fixture ids, the fixture must be added before the store can be retrieved.




