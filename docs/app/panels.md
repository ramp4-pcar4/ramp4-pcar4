# Panels

## Startup

Panels can be opened/pinned when RAMP starts up via the config. The following stock panel ID's are currently supported:
`basemap`, `export`, `geosearch`, `help`, `layer-reorder`, `legend`, `notifications`, and `wizard`.

## Buttons

Panels can be registered with button options. These consist of an icon and a tooltip which the [appbar](appbar.md) will use to create default appbar buttons as needed.

```js
this.$iApi.panel.register({
    id: `panel-one`,
    config: {
        screens: <...>,
        button: {
            icon: <...>, // svg string or other icon
            tooltip: 'Panel one' //or i18n key, i.e. panelone.button.tooltip
        }
    }
})
```

## Localization

TODO why is localization documentation in `panels.md`? I feel half of this file should exist in `config-language.md` and the rest should be massaged as as guide for how to use panels.

### Core

[Vue-i18n](https://kazupon.github.io/vue-i18n/) is used to localize the application and the core messages are injected into the RAMP instance when it's first created. All messages are stored in a CSV file of the following format:

| key         | enValue | enValid | frValue  | frValid |
| ----------- | ------- | ------- | -------- | ------- |
| lang-native | English | 1       | Français | 1       |

First column is the message key that will be used in component templates, and the rest of the file is split into languages sections, two columns per language. The first of these columns specifies a locale value for the message key and the second indicates if the value has been confirmed to be correct or if it's a mere placeholder (1 - valid; 0 - not valid).

Right now, only two languages are included, but it's possible to add new languages following the same pattern--adding two columns (`xxValue` and `xxValid`) per language where the first two letters are the short, two-letter language code.

### Fixtures

Fixtures themselves do not require localization, but they **must** provide locale messages to panels, screens, and on-map components it creates. There are several ways to do that.

#### Panel Registration Options

Pass locale messages as part of the `PanelRegistrationOptions` when registering panels:

```ts
// fixture.ts

// with a single panel
this.$iApi.panel.register({
        id: 'panel-one',
        config: {
            screens: <...>
        }
    },
    {
        i18n: <i18nOptions>
    }
);

// or several panels
this.$iApi.panel.register({
        'panel-one': {
            screens: <...>
        },
        'panel-two': {
            screens: <...>
        },
    },
    {
        i18n: <i18nOptions>
    }
);
```

`i18n` options use the following type:

```
type I18nComponentOptions = {
    messages?: VueI18n.LocaleMessages;  // https://kazupon.github.io/vue-i18n/guide/messages.html#structure
    dateTimeFormats?: VueI18n.DateTimeFormats;  // https://kazupon.github.io/vue-i18n/guide/datetime.html#datetime-localization
    numberFormats?: VueI18n.NumberFormats;  // https://kazupon.github.io/vue-i18n/guide/number.html#custom-formatting
    sharedMessages?: VueI18n.LocaleMessages;
};
```

The above code will merge `messages`, `dateTimeFormats` and `numberFormats` into the corresponding global locales, while the `sharedMessages` property will be ignored.

> **Important:**
> Because all values are merged into the global locales, all components--even ones that do not belong to this panel or fixtures--will be able to use these messages. There is a potential for key name collisions.
>
> As a rule of thumb, fixture locale keys should be prefixed with the fixture name (or its abbreviation (`basemap` => `bm`) for brevity):
>
> | key                 | enValue              | enValid | frValue                       | frValid |
> | ------------------- | -------------------- | ------- | ----------------------------- | ------- |
> | **basemap.**refresh | Map refresh required | 1       | Actualiser la carte           | 1       |
> | **basemap.**select  | Select basemap       | 1       | Sélectionner la carte de base | 1       |

#### Vue Component Options

Additionally, it's possible to provide locale messages directly to the screen component as follows:

```ts
// screen-component.vue
@Options({
    i18n: {
        messages: {
            en: {
                hello: 'world'
            }
        }
    }
})
```

The above requires hardcoding locale string into the component file. If using a CSV file, `ramp-locale-loader` will fold the CSV content into the `VueI18n.LocaleMessages` form automatically (the file name needs to end in `lang.csv`):

```ts
// screen-component.vue
import messages from './lang.csv'

@Options({
    i18n: {
        messages
    }
})
```

The above approach can be used in the core fixtures and in external fixtures compiled with webpack given that `ramp-locale-loader` package is used. For all other cases, it's responsibility of the fixture to format their locale messages appropriately as `VueI18n.LocaleMessages`.

If two methods of passing locale messages are used, more specific `i18n` options take precedence:

-   component file options
-   common panel registration options

If the string key cannot be found there, `i18n` falls back to the core strings, so it's possible to use any of the common core strings in any screen components without specifying any locale messages at all.

### Non-Fixture Components

A fixture is not required for registering panels or creating on-map components--this can be done directly on the RAMP API. The ways of providing localization in such cases are exactly the same as when using a fixture.
