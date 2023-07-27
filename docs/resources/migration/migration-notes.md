# Migration from RAMP 2 / RAMP 3

- The [v4.0.0 Release Notes](https://github.com/ramp4-pcar4/ramp4-pcar4/releases/tag/v4.0.0) will highlight breaking changes and features not yet implemented.
- This [Config Upgrade Sample Page](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/demos/starter-scripts/r2-config-upgraded.js) shows how one can utilize the provided upgrade functions in an attempt to migrate a RAMP2 configuration to the RAMP4 schema. Note the functions `configUpgrade()` and `layerConfigUpgrade()` are available on the `RAMP.` global if using the standard build, or can be imported if using the `esm` build.
- The [Config Incompatibilty](../../using-ramp4/incompatibility.md) page provides a list of RAMP2 config properties that are currently not supported.
- The [Config Schema](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/schema.json) provides a technical specification of the new RAMP4 configuration structure.
