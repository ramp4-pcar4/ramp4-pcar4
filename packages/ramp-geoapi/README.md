# GeoAPI Package

Serves as an insulator / abstraction from the actual mapping API.
Currently the mapping API is [ESRI JS API 4](https://developers.arcgis.com/javascript/index.html), so this package also serves to keep the Dojo framework fenced in.

Original Typescript / Webpack magic framework was stolen from https://github.com/juristr/webpack-typescript-starter

Short example of how to consume/instantiate the GeoAPI from another package using default configuration

```ts
import GapiLoader, { GeoApi } from 'ramp-geoapi';

const gapiPromise: Promise<GeoApi> = GapiLoader(window);
gapiPromise.then((gapi: GeoApi) => {
    gapi.doSomething();
});
```
