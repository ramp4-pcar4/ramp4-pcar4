# RAMP Instantiation

TODO do we need a note about needing the Vue library script to be added before RAMP script? Are there any other dependencies? Should this type of "page setup" be it's own doc page?

## Creating An Instance

A page script can create an instance of RAMP with the following call:

```js
var rInstance = new RAMP.Instance(pageElement, config, options);
```

Multiple instances can be hosted on a page (each requiring their own pageElement).

The `pageElement` is the HTML element or element id that the instance should be created in on the page.

The `config` is an object containing configuration objects keyed by language codes. See TODO LINK TO CONFIG SCHEMA DOC. Example:

```json
{
    en: {
        map: {},
        layers: {},
        fixtures: {}
    },
    fr: {
        map: {},
        layers: {},
        fixtures: {}
    }
}
```

### Instance Options

The following options are supported when creating an instance.

`loadDefaultFixtures` will instruct RAMP to use the default set of fixtures, providing an "out-of-the-box" experience and requiring minimal setup. The default value is `true`, setting it to `false` means the instantiator must manage their own fixture setup. See the [defaults page](../app/defaults.md) and the [fixtures page](../app/fixtures.md) for additional details.

`loadDefaultEvents` is related to `loadDefaultFixtures`, and will apply the default event handlers to link all the default fixtures to each-other and the RAMP core. The default value is `true`, setting it to `false` means the instantiator must wire up their own preferred event handlers.  See the [defaults page](../app/defaults.md) and the [events page](events.md) for additional details.

`startRequired` will instruct RAMP to not initialze the map until the `.start()` method on the instance is called. The default value is `false`, and in this case the `.start()` call is not required. Setting to `true` allows the instance to exist and any pre-map processing or setup to occur before the map initializes.

The `options` parameter can be omitted when creating a RAMP instance; the default values will provide the "out-of-the-box" functionality and will launch immediately.
