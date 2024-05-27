# RAMP Instantiation

## Creating An Instance

A page script can create an instance of RAMP with the following call:

```js
var rInstance = RAMP.createInstance(pageElement, config, options);
```

The return object is an `InstanceAPI` for the new instance. More information on that API can be found [here](../api-guides/instance.md).

Multiple instances can be hosted on a page (each requiring their own page element).

The `pageElement` is the HTML element or element id that the instance should be created in on the page. Currently, a page element should not be targeted by `createInstance()` more than once (errors will likely occur). If an existing instance needs to be reset, please use the `.reload()` method on the `InstanceAPI`.

The `config` is an object containing a `configs` object which is keyed by language codes with configurations as values. The configurations must follow [this schema](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/schema.json).
This object can optionally include a `startingFixtures` list which is a set of fixtures that the RAMP instance will load. An example of the `config` object is shown below:

```js
{
    startingFixtures: ['appbar', 'legend'],
    configs: {
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
}
```

### Instance Options

The following options are supported when creating an instance.

`loadDefaultFixtures` will instruct RAMP to use the default set of fixtures, providing an "out-of-the-box" experience and requiring minimal setup. The default value is `true`, setting it to `false` means the instantiator must manage their own fixture setup. See the [defaults page](../using-ramp4/default-setup.md) and the [fixtures page](../using-ramp4/fixtures/custom-fixtures.md) for additional details. If `startingFixtures` is specified in the the `config` object above and is non-empty, this option will be ignored and the specified fixtures will be loaded instead.

`loadDefaultEvents` is related to `loadDefaultFixtures`, and will apply the default event handlers to link all the default fixtures to each-other and the RAMP core. The default value is `true`, setting it to `false` means the instantiator must wire up their own preferred event handlers.  See the [defaults page](../using-ramp4/default-setup.md) and the [events page](../api-guides/events.md) for additional details.

`startRequired` will instruct RAMP to not initialize the map until the `.start()` method on the instance is called. The default value is `false`, and in this case the `.start()` call is not required. Setting to `true` allows the instance to exist and any pre-map processing or setup to occur before the map initializes.

The `options` parameter can be omitted when creating a RAMP instance; the default values will provide the "out-of-the-box" functionality and will launch immediately.

### Basic Sample

The HTML template below shows a very basic example of how to setup and use RAMP on a webpage.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Basic RAMP Sample</title>

        <!-- Load RAMP stylesheet -->
        <link rel="stylesheet" href="./lib/ramp.css" />
    </head>
    <body style="margin: 0">
        <!-- The page element that the RAMP instance will be created in -->
        <div id="ramp-instance" style="height: 100vh; max-height: -webkit-fill-available"></div>

        <!-- Load the compiled RAMP script-->
        <script src="./lib/ramp.js"></script>

        <!-- Create simple RAMP instance-->
        <script>
            const config = {
                configs: {
                    en: {
                        map: {
                            extentSets: [
                                {
                                    id: 'EXT_ESRI_World_AuxMerc_3857',
                                    default: {
                                        xmax: -5007771.626060756,
                                        xmin: -16632697.354854,
                                        ymax: 10015875.184845109,
                                        ymin: 5022907.964742964,
                                        spatialReference: {
                                            wkid: 102100,
                                            latestWkid: 3857
                                        }
                                    }
                                }
                            ],
                            lodSets: [
                                {
                                    id: 'LOD_ESRI_World_AuxMerc_3857',
                                    lods: RAMP.geo.defaultLODs(
                                        RAMP.geo.defaultTileSchemas()[1]
                                    )
                                }
                            ],
                            tileSchemas: [
                                {
                                    id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                                    name: 'Web Mercator Maps',
                                    extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                                    lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                                    thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                                }
                            ],
                            basemaps: [
                                {
                                    id: 'baseEsriWorld',
                                    layers: [
                                        {
                                            id: 'World_Imagery',
                                            layerType: 'esri-tile',
                                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                                        }
                                    ],
                                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                                }
                            ],
                            initialBasemapId: 'baseEsriWorld'
                        }
                    }
                }
            };

            const options = {
                loadDefaultFixtures: true,
                loadDefaultEvents: true,
                startRequired: false
            }

            const rInstance = RAMP.createInstance(
                document.getElementById('ramp-instance'),
                config,
                options
            );
        </script>
    </body>
</html>
```

Click [here](https://ramp4-pcar4.github.io/ramp4-pcar4/main/index-simple.html) to see this page in action.

## RAMP Build Files

When you download and open up the folder containing the compiled version of RAMP, you will see several files:

1. `ramp.css`

This is the RAMP stylesheet and should be included in your webpage/app. You can include it using a `<link>` tag in your HTML:

```html
<link rel="stylesheet" href="./ramp.css">
```

Alternatively, if you're working in a JavaScript module, you can import it using an asset import and apply it using `document.adoptedStyleSheets`:

```javascript
import rampStyles from './ramp.css';
document.adoptedStyleSheets = [rampStyles];
```

2. `ramp.browser.iife.prod.js` and `ramp.browser.iife.js`

These are the IIFE versions of RAMP. They create a global `RAMP` variable with several properties, including `createInstance`, `configUpgrade`, `layerConfigUpgrade`, and `geo`. 

The `ramp.browser.iife.prod.js` version is minified (most compressed), and is recommended for most use cases.

Here's an example of using the IIFE version:

```html
<script src="./ramp.browser.iife.js"></script>
<script>
    const config = {...config definition goes here...}
    const options = {...options definition goes here...}

    const rInstance = RAMP.createInstance(
        document.getElementById('ramp-instance'),
        config,
        options
    );
</script>
```

3. `ramp.browser.es.prod.js`, `ramp.browser.es.js`, and `ramp.bundle.es.js`

These scripts are native ES modules, you'll need to import the desired function from the file. They contain the same properties as `ramp.browser.iife.js`. 

The `ramp.browser.es.prod.js` version is minified (most compressed), and is recommended for most use cases.

The `ramp.bundle.es.js` version is intended for use in a host project that uses npm and has its own bundler like webpack or rollup. This version excludes all RAMP dependencies, expecting them to be handled by the host project's npm manager and bundled into the host's build. This allows for better optimization and deduplication of dependencies in the host project.

Here is a code snippet showing usage:

```javascript
import { createInstance, geo } from './ramp.browser.es.js';

const config = {...config definition goes here...}
const options = {...options definition goes here...}

const rInstance = createInstance(
    document.getElementById('ramp-instance'),
    config,
    options
);
```

Both ESM and IIFE versions are designed to run in a browser environment, other environments like Node.js are not supported.