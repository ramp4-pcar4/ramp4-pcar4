# RAMP Library

## Common API Items

All sources of the RAMP library expose the following API items.

- `createInstance` will generate a RAMP viewer in the page. See the [instantiation](instantiation.md) page for more details.
- `geo` provides common GIS methods and objects not tied to any specific RAMP instance.
- `configUpgrade` is a utility method to convert RAMP2 / RAMP3 config files to RAMP4 format.
- `layerConfigUpgrade` is similar to `configUpgrade`, but only converts layer configuration objects.

## Build Locations

The RAMP [Releases](https://github.com/ramp4-pcar4/ramp4-pcar4/releases) page provides zipped downloads of the built library. If generating builds from a local development environment, build files will appear in the `dist` folder after running `npm run build`.

## From NPM

RAMP is hosted on [npm](https://www.npmjs.com/package/ramp-pcar), and can be added to a web project that uses bundler via the `package.json` file. Once included, API items can be accessed via `import` statements.

```js
import { createInstance } from 'ramp-pcar';
```

For the curious developer, the contents of the `bundler` folder is what the host project will consume. These files consist of the RAMP codebase, but exclude all RAMP dependencies, expecting them to be handled by the project's npm manager and bundled into the host's build. This allows for better optimization and de-duplication of dependencies.

## From RAMP Single File Builds

Versions the library are provided as a single Javascript file. These are the easiest to add to an existing web page, however the size of the library can slow down the time to load the page.

Both ESM and IIFE versions are designed to run in a browser environment, other environments like Node.js are not supported.

### CSS

The file `ramp.css` is the RAMP stylesheet and should be included in your webpage/app. You can include it using a `<link>` tag in your HTML:

```html
<link rel="stylesheet" href="./ramp.css">
```

Alternatively, if you're working in a JavaScript module, you can import it using an asset import and apply it using `document.adoptedStyleSheets`:

```javascript
import rampStyles from './ramp.css';
document.adoptedStyleSheets = [rampStyles];
```

### IIFE Builds

The file `ramp.browser.iife.js` is the minified IIFE version of RAMP. It creates a global `RAMP` variable that contains the [common APIs](#common-api-items). 

Here's an example of using the IIFE version:

```html
<script src="./ramp.browser.iife.js"></script>
<script>
    const config = {...config definition goes here...}
    const options = {...options definition goes here...}

    const rInstance = RAMP.createInstance(
        document.getElementById('ramp-div'),
        config,
        options
    );
</script>
```

### ESM Build

The file `ramp.browser.es.js` is the RAMP library as native ES modules. They'll need to import the desired function from the file

Here is a code snippet showing usage:

```javascript
import { createInstance, geo } from './ramp.browser.es.js';

const config = {...config definition goes here...}
const options = {...options definition goes here...}

const rInstance = createInstance(
    document.getElementById('ramp-div'),
    config,
    options
);
```

## From RAMP Chunked Build

The folder `esDynamic` contains the RAMP library split into many files. These allow parts of the library to be loaded as-needed, improving the initital startup speed but generating more web requests overall. File `ramp.js` serves as the starting module.

Here is a code snippet showing usage:

```html
<script type="module">
    import { createInstance } from './esDynamic/ramp.js';

    const config = {...config definition goes here...}
    const options = {...options definition goes here...}

    const rInstance = createInstance(
        document.getElementById('ramp-div'),
        config,
        options
    );
</script>
```