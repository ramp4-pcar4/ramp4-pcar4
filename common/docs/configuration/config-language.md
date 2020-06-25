# Configuration Language Switching

The main configuration file in RAMP to use is determined by the current language of the app. Each language is restricted to being linked to a single config and is in the format of key-value pairings where the key is the language code with its associated formatted config object as the value.  
```
registeredConfigs = {
    en: enConfig,
    fr: frConfig,
    es: esConfig
}
```

## Registering Configs 

In order to register a config on app startup, the user can pass in one or more configs as part of a constructor parameter when making the call to initialize the RAMP Instance. 

In the RAMP instance constructor, the first config (required) will be registered for all supported app languages (contained in `i18n.messages`). Any subsequent config file will be registered directly to its specified language. 

**TODO**: link a doc on `i18n` setup [here]() when complete

A more detailed description of the process will be covered with the examples below. 

### Example 1: Passing a single config in RAMP Instance constructor  

```typescript=
new RAMP.Instance(document.getElementById('app'), { en: enConfig })
```

If the user chooses to pass a single config like above, RAMP will take that config and populate it for all available app languages in `i18n.messages`. 

For example, if `i18n.messages` contains **en**, **fr** and **es**, then the registered configs by the end of the instance constructor will look like this: 
```
registeredConfigs = {
    'en': enConfig,
    'fr': enConfig,
    'es': enConfig
}
```

### Example 2: Passing multiple configs in RAMP Instance constructor 

```typescript=
new RAMP.Instance(document.getElementById('app'), {
    en: enConfig,
    fr: frConfig
})
```

If the user chooses to pass in more than one config file, each user specified language will be linked to its unique config, while any remaining languages in `i18n.messages` will default to the first config passed in the parameter. The registered configs will look like this at the end of the instance constructor: 
```
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