# Config Incompatibility Guide

// TODO: Update this file when we add support for anything or make changes to the schema.
// TODO: a general review of this file's contents is warranted

Listed below are breaking changes from the RAMP2 schema i.e. properties in the RAMP2 config that cannot be mapped to some part of the RAMP4 config.

### Map

* `components`
    - `geoSearch`
        * `showGraphic`
        * `showInfo`
    - `mouseInfo`
    - `scaleBar`
        * `attachTo`
        * `scalebarUnit`

### Layers

* `state`
    - `boundingBox`
    - `snapshot`
* `refreshInterval`
* `table`
    - `description`
    - `maximize`
    - `lazyFilter`
    - `searchStrictMatch`
    - `printEnabled`
    - `columns`
        * `description`
* `enableStructuredDelete`
* `suppressGetCapabilities` (for WMS layers only)
* `legendMimeType` (for WMS layers only)
* `currentStyle` (for WMS layer entries only)
* `allStyles` (for WMS layer entries only)
* `details` (Note: a details template can be specified, but since it must be the ID of a Vue component, the value from the RAMP2 config cannot be ported over.)

### Legend

* `entry`
    - `entryId`
    - `controlledIds`
    - `description`
    - `symbologyStack`
    - `symbologyRenderStyle`
* `group`
    - `controls` and `disabledControls`: all values except visibility button.
* `infoSection`
    - `infoType`: `unboundLayer` value only.
    - `export`
* `visibilitySet`
    - `collapse`

### Services

* `search`
    - `serviceUrls`
        * `geoSuggest`
    - `disabledSearches`
* `export`
    - `map`
        * `value`
    - `mapElements`
        * `value`
    - `legend`
        * `value`
        * `showInfoSymbology`
        * `showControlledSymbology`
    - `timestamp`
        * `value`
    - `timeout`
    - `cleanCanvas`
* `corsEverywhere`
* `exportMapUrl`
* `geometryUrl`
* `googleAPIKey`
* `esriLibUrl`
* `geolocation`
* `coordInfo`
* `print`

### UI

* `navBar`
    - `extra`: marquee and history values.
* `fullscreen`
* `theme`
* `logoUrl`
* `failureFeedback`
* `title`
* `restrictNavigation`
* `about`