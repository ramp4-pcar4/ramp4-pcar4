# Extent Guard

## Overview

The extent guard fixture allows a map view to be restricted to a geographical extent. If the center of the map view goes outside of the bounds, the map will pan back within the bounds.

The extent guard fixture is not a default fixture, meaning it [must be added to the instance](custom-fixtures#pre-made-fixtures).


## Configuration

Configuration should be placed in the `fixtures` object of the config file, keyed by the fixture name. Extent Guard supports two modes of operation.

### Always On

The fixture will be active regardless of the Extent Set being used by the map.

```js
{
  fixtures: {
    extentguard: {
        alwaysOn: true
    }
  }
}
```

### Specific Extent Sets

The fixture will only be active when the provided Extent Sets are being used. Typically this will align with specific basemap schemas. The Extent Set ids must match ids defined in the `map.extentSets` section of the config file.

```js
{
  fixtures: {
    extentguard: {
        extentSetIds: ["EXT_NRCAN_Lambert_3978"]
    }
  }
}
```

## Bounding Area

The Extent Guard uses the `maximum` extent defined in the active Extent Set as the boundary to enforce. If `maximum` is not defined, it will fallback to use the `full` extent, or the `default` extent if full is not provided either.
