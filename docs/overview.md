# Overview

An official and professional documentation site is still in the works. This page will serve to help quickly find existing content and view using github's built-in markdown renderer.

Some texts are still incomplete or outdated. We appreciate your patience, things will shape up in time. Missing or incorrect items may be [logged as issues](https://github.com/ramp4-pcar4/ramp4-pcar4/issues/new), we will do our best to prioritize.

## Basic Implementation

The [Instantiation](introduction/instantiation.md) page provides examples of how to instantiate a RAMP instance, and basic HTML templates to reference.

## Migration from RAMP 2 / RAMP 3

- The [v4.0.0 Release Notes](https://github.com/ramp4-pcar4/ramp4-pcar4/releases/tag/v4.0.0) will highlight breaking changes and features not yet implemented.
- This [Config Upgrade Sample Page](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/demos/starter-scripts/r2-config-upgraded.js) shows how one can utilize the provided upgrade functions in an attempt to migrate a RAMP2 configuration to the RAMP4 schema. Note the functions `configUpgrade()` and `layerConfigUpgrade()` are available on the `RAMP.` global if using the standard build, or can be imported if using the `esm` build.
- The [Config Incompatibilty](using-ramp4/incompatibility.md) page provides a list of RAMP2 config properties that are currently not supported.
- The [API Migration](resources/migration/api-migration.md) page is horribly incomplete but provides some detail on API differences.
- The [Config Schema](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/schema.json) provides a technical specification of the new RAMP4 configuration structure.

## App Configuration

- Configuring across [different languages](using-ramp4/config-language.md). Be aware the text residing in the RAMP core is compiled, so those items are currently available only in English and French. New languages can be added but requires a re-build of the library.
- The [Layers Configuration](using-ramp4/layer-config.md) page is fairly complete.
- Configuration for various fixtures
  - [Appbar](using-ramp4/fixtures/appbar.md#configuration)
  - [Details Custom Templating](using-ramp4/fixtures/details.md#creating-a-custom-template)
  - [Geosearch](using-ramp4/fixtures/geosearch.md#configuration)
  - [Grid](using-ramp4/fixtures/grid.md#configuration)
  - [Layer Settings](using-ramp4/fixtures/layer-settings.md#configuration)
  - [Legend](using-ramp4/fixtures/legend.md#configuration) (configuration snippets are embedded in functional descriptions)
- The [collection of sample configs](https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts) on the repo may also be of use to see working examples.

## API Documentation

APIs exposed by the library:

- [Instance API](api-guides/instance.md)
- [Events API](api-guides/events.md)
- [Geometry API](api-guides/geometry.md)
- [Layers API](api-guides/layers.md)
- [Legend Fixture API](api-guides/legend.md)
- [Notification API](api-guides/notifications.md)
- [Panels API](api-guides/panels.md#the-panel-api) (doc is incomplete)

Information on more involved modifications via the API:

- Information on [Default Behaviors](using-ramp4/default-setup.md)
- Creating [Custom Fixtures](using-ramp4/fixtures/custom-fixtures.md)

## Developer Resources

- [Core Classes Overview](resources/core-classes.md)
- How [Focus Lists](resources/focus-list.md) behave
- The [Panels](api-guides/panels.md) system
- A very brief blurb about [tooltips](resources/tooltips.md)
- How [Pinia Stores](resources/store.md) are used internally
- Information about various fixtures
  - [Appbar](using-ramp4/fixtures/appbar.md) (outdated)
  - [Details](using-ramp4/fixtures/details.md) (outdated)
  - [Geo Search](using-ramp4/fixtures/geosearch.md)
  - [Grid](using-ramp4/fixtures/grid.md)
  - [Layer Settings](using-ramp4/fixtures/layer-settings.md)
  - [Legend](using-ramp4/fixtures/legend.md)