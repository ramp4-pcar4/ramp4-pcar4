# Configuration Language Switching

The main configuration file in RAMP to use is determined by the current language of the app. Each language is restricted to being linked to a single config and is in the format of key-value pairings where the key is the language code with its associated formatted config object as the value.

```js
registeredConfigs = {
    en: enConfig,
    fr: frConfig,
    es: esConfig
}
```

## Registering Configs

In order to register a config on app startup, the user can pass in one or more configs as part of a constructor parameter when making the call to initialize the RAMP Instance.

In the RAMP instance constructor, the first config (required) will be registered for all supported app languages (contained in `i18n.messages`). Any subsequent config file will be registered directly to its specified language.

**TODO**: link a doc on `i18n` setup *here* when complete

A more detailed description of the process will be covered with the examples below.

### Example 1: Passing a single config in RAMP Instance constructor

```ts
RAMP.createInstance(document.getElementById('app'), { en: enConfig })
```

If the user chooses to pass a single config like above, RAMP will take that config and populate it for all available app languages in `i18n.messages`.

For example, if `i18n.messages` contains **en**, **fr** and **es**, then the registered configs by the end of the instance constructor will look like this:

```js
registeredConfigs = {
    'en': enConfig,
    'fr': enConfig,
    'es': enConfig
}
```

### Example 2: Passing multiple configs in RAMP Instance constructor

```ts
RAMP.createInstance(document.getElementById('app'), {
    en: enConfig,
    fr: frConfig
})
```

If the user chooses to pass in more than one config file, each user specified language will be linked to its unique config, while any remaining languages in `i18n.messages` will default to the first config passed in the parameter. The registered configs will look like this at the end of the instance constructor:

```js
registeredConfigs = {
    'en': enConfig,
    'fr': frConfig,
    'es': enConfig
}
```

### Switching Languages

Switching to a different language in-app will cause RAMP to conduct an analysis on `registeredConfigs` to identify the config pertaining to the new app language.

Say we change the app language from **en** to **fr**. In the first example, the new active config remains the same (`enConfig`) and in the second example, the new active config changes from `enConfig` to `frConfig`.

**Note**: If the app switches to a language that is not associated with a config (i.e., language unsupported by RAMP), an error will be thrown with a message informing the user.

### Number Localization

**TODO**: Revisit this once we decide what to do with `numberFormats`

The default config for number localization can be found in the `numberFormats` object in `src/lang/index.ts`.
The localization options use the built-in Internalization API and the documentation for it can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat).

Example usage of number formatting:

```ts
let value = 1000.119;
let str = rInstance.$i18n.n(value, 'number');
console.log(str);
// 1000.119 (for en)
// 1000,119(for fr)
```

Localization options can also be passed in when the formatting function is called:

```ts
let value = 1000.119;
let str = rInstance.$i18n.n(value, 'number', {
    maximumFractionDigits: 1,
    useGrouping: true
} as any);
console.log(str);
// 1,000.1 (for en)
// 1 000,1 (for fr)
```

## Localization

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

```js
type I18nComponentOptions = {
    messages?: VueI18n.LocaleMessages;          // https://kazupon.github.io/vue-i18n/guide/messages.html#structure
    dateTimeFormats?: VueI18n.DateTimeFormats;  // https://kazupon.github.io/vue-i18n/guide/datetime.html#datetime-localization
    numberFormats?: VueI18n.NumberFormats;      // https://kazupon.github.io/vue-i18n/guide/number.html#custom-formatting
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

A fixture is not required for registering panels or creating on-map components; this can be done directly on the RAMP API. The ways of providing localization in such cases are exactly the same as when using a fixture.

