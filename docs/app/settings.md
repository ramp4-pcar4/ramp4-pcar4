# Settings

## Overview

The settings fixture displays a panel containing information about a given layer. The settings panel also enables a user to modify layer settings. Settings can be made adjustable or fixed in the `config`. 

The settings fixture is a default fixture, meaning it will be automatically loaded using a standard configuration.


## Configuration
Unlike most fixtures, the settings fixture is configured separately for each layer in the main configuration file. A very simple configuration file below shows that the legend configuration object should be placed within a layer object, directly under the `fixtures` property:

```text
const config = {
    layers: [ 
        {
            id: 'RAMP Layer',
            layerType: 'esri-feature',
            url: '...',
            fixtures: {
                settings: { 
                ... layer settings go here ...
                }
            }
        },
        ... more layers
    ]
}
```

### Properties

The settings configuration object supports the following two properties:

- `controls`: keeps track of the list of enabled layer controls
    - Visibility (`visibility`): *determines whether layer visibility can be toggled*
    - Opacity (`opacity`): *determines whether layer opacity can be adjusted*
    - Identify (`identify`): *determines whether layer identification can be toggled*
- `disabledControls`: keeps track of the list of disabled layer controls
    - See above

By default, if no `settings` configuration object is provided within a layer configuration, all layer controls are enabled. There are two ways to disable layer controls: 
1. Add the `disabledControls` property to the object as an array with the names for each control (in parenthesis above). The following example demonstrates disabling the visibility and identify controls for the layer item `RAMP Layer`:

```
    {
        id: 'RAMP Layer',
        layerType: 'esri-feature',
        url: '...',
        fixtures: {
            settings: { 
                disabledControls: [
                    'visibility',
                    'identify'
                ]
            }
        }
    }
```
        
1. Add the `controls` property to the object as an array and omit the names of the disabled layers. The next example configures `RAMP Layer`  in the same way as before:

```
    {
        id: 'RAMP Layer',
        layerType: 'esri-feature',
        url: '...',
        fixtures: {
            settings: { 
                controls: [
                    'opacity'
                ]
            }
        }
    }
```