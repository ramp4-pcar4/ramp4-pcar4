# Panels

## TODO

Write other stuff.

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

Pass locale messages inside a `PanelConfig` when registering a panel:

```ts
this.$iApi.panel.register({
    id: 'panel-id',
    config: {
        screens: <...>,
        i18n: messages
    }
})
```

The above will inject `i18n` options into screen components.

Alternatively, pass locale messages as part of the `PanelRegistrationOptions` when registering multiple panels at the same time:

```ts
// fixture.ts
this.$iApi.panel.register({
    'panel-one': {
        screens: <...>
    },
    'panel-two': {
        screens: <...>
    },
    {
        i18n: messages
    }
})
```

The above will inject `i18n` options into all screen component of all panels being registered.

It's also possible to specify both options, with `PanelConfig` `i18n` options takes precedence of the common `PanelRegistrationOptions`:

```ts
// fixture.ts
this.$iApi.panel.register({
    'panel-one': {
        screens: <...>,
        i18n: panelOneSpecificMessages
    },
    'panel-two': {
        screens: <...>
    },
    {
        i18n: commonMessages
    }
})
```

`i18n` messages can be passed as either a `I18nComponentOptions` object or as loaded CSV file in the form used by the core localization (see above).

#### Vue Component Options

Additionally, it's possible to provide locale messages directly to the screen component as follows:

```ts
// screen-component.vue
@Component({
    i18n: {
        messages: {
            en: {
                hello: 'world'
            }
        }
    }
})
```

The above requires hardcoding locale string into the component file. If using a CSV file of locale messages needs to be folded first before passing to the component constructor:

```ts
// screen-component.vue
import row from './lang.csv'
import { fold } from '@/lang';

@Component({
    i18n: {
        messages: fold(rows)
    }
})
```

If all three method of passing locale messages are used, more specific `i18n` options take precedence:

-   component file options
-   panel registration options
-   common panel registration options

If the string key cannot be found there, `i18n` falls back to the core strings, so it's possible to use any of the common core strings in any screen components without specifying any locale messages at all.

### Non-Fixture Components

A fixture is not required for registering panels or creating on-map components--this can be done directly on the RAMP API. The ways of providing localization in such cases are exactly the same as when using a fixture.
