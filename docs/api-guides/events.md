# Events API

## Overview

The events API provides an interface to manage events and event handlers on the RAMP instance event bus. Classic event busses (busi?) normally deal with named events and handler functions reacting to those events. This approach means to target an event handler (for example, to remove it), one needs a pointer to the handler function.

Since RAMP provides a default setup, and that setup contains event handlers, this makes it difficult for a 3rd party to access those handlers. To get around this, the RAMP events API introduces event handler names. Interactions with the API use the handler name instead of the handler function, and default event handler names can be found in the [defaults page](../app/defaults.md#default-events-handlers) for anyone wishing to manipulate them.

For a list of events that are raised by the RAMP core, please see the [core events list](../app/defaults.md#core-events).

## Primary Event Methods

### Reacting to an Event

To have a function run whenever an event fires, use the `on()` method. Supply the event name to listen for, the function to act as the event handler, and optionally a handler name. The method will return the handler name; this will be the name provided in the parameter, or if none was supplied it will be the system generated handler name.


```js
var rInstance = RAMP.createInstance(domElement, configs);
var myHandler = function (param) {
    doStuff(param);
};
rInstance.event.on('map/click', myHandler, 'my_custom_map_click_handler');
```

Similarly, the `once()` method can be used to set up a one-time event handler. After the handler is triggered by the event, it is unregistered automatically.

```js
var rInstance = RAMP.createInstance(domElement, configs);
var myOneTimeHandler = function (param) {
    doStuff(param);
};
rInstance.event.once('map/click', myOneTimeHandler, 'my_custom_onetime_map_click_handler');
```

### Removing an Event Handler

To cause an active event handler to stop reacting to an event, use the `off()` method. The event handler name is required to locate the handler to remove.

```js
// remove the handler set up in the .on() example
rInstance.event.off('my_custom_map_click_handler');
```

### Manually Firing an Event

To trigger an event, use the `emit()` method. The event can be an existing event used by the RAMP core, or can be a new custom event. Any handlers listening for the event will be executed. If the handlers are expecting a set of parameters, they are supplied after the event name.

```js
// manually trigger a map click event
rInstance.event.emit('map/click', clickCoordinatesPayload);
```

While event names can be any string, it is suggested using the `domain/description` format. If the event is tied to a fixture, it is suggested the fixture name be used for the domain. E.g. `imagetool/image_enhanced`.

## Secondary Event Methods

### List of Registered Events

The `eventNames()` method will return an array of event names that have registered their name with the event API. This is mostly handy for debugging, checking the spelling of event names, etc. Note that this returns event names, not event handler names. Also note that it is possible to have active events that did not register, and thus are not in this array.

```js
var enames = rInstance.event.eventNames();

// enames -> ['map/click', 'map/extentchanged', ...]
```

### Registering an Event

To have an event name show up in the `eventNames()` result, it can be registerd using the `registerEventName()` method. An ideal place for this call would be in the startup code of a fixture that exposes some events. An array of names can also be provided. Duplicate registrations will be ignored.

```js
rInstance.event.registerEventName('page/customevent');
rInstance.event.registerEventName(['imagetool/image_enhanced', 'imagetool/image_saved']);
```

### List of Active Event Handlers

The `activeHandlers()` method will return an array of event handler names that are active. This is handy for checking if a handler is already active, and for debugging. An optional parameter will filter the results to handlers for a specific event.

```js
var allnames = rInstance.event.activeHandlers();
var extentnames = rInstance.event.activeHandlers('map/extentchanged');

// allnames -> ['handlername1', 'image_enhancer', ...]
// extentnames -> ['update_extent_filter', 'geosearch_extent_update']
```
