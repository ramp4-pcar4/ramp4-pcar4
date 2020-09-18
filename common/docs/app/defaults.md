# Default Setup

The RAMP instance provides APIs to set up fixtures and events, allowing a high degree of customization. However, there is also a default setup that will provide stock fixtures and events. The default setup will result in a functional viewer that only requires a configuration file.

## Default Fixtures

The following fixtures are included in the default setup.  Any special interfaces they support is also noted; this information is relevant when replacing defaults fixtures, as discussed in the Examples section below.

TODO maybe these lists go in separate pages, like reference pages.

### Appbar

The `appbar` provides a means to open and track panels, or run custom commands.

Continued [here](appbar.md).


### Mapnav

The `mapnav` provides a means pan and zoom the map. TODO create and hyperlink to `mapnav.md`, or provide any other relevant info here.

### Legend

The `legend` provides an interactive listing of the layers and other data on the map. TODO create and hyperlink to `legend.md`

### Grid

The `grid` provides a tabular view of attributes for a feature class.

Continued [here](datatable.md).

### Details

The `details` provides an interface to view information about a feature / voxel, and to see a collection of identify results.

Continued [here](details.md).

### Basemap

The `basemap` provides a means to change the basemap layers of the map. TODO create and hyperlink to `basemap.md`, or provide any other relevant info here.

### Geosearch

The `geosearch` is a utility that allows one to search for geographic names and zoom to the results.

Continued [here](geosearch.md).

### Help

The `help` provides a means to display user help for the application. TODO create and hyperlink to `help.md`, or provide any other relevant info here.

### Metadata

The `metadata` provides an interface to view extra information about a layer. TODO create and hyperlink to `metadata.md`, or provide any other relevant info here.

### Settings

The `settings` allow you to make live modifications to a layer on the map. TODO create and hyperlink to `settings.md`

## Default Events Handlers

Along with the default fixtures, there are default event handlers that are applied to make them react to each other and to the RAMP core. See the examples section below and the LINKTO Events API page for details on how to work with event handlers.

TODO keep updating the list, make new subsections as appropriate. Maybe move to a separate page if it becomes a huge list.

### Map Handlers

- `ramp_map_click_runs_identify` causes the identify process to start when the map is clicked
- `ramp_identify_opens_details` causes the details fixture to open, displaying the result of an identify request.

## Examples

### Default Setup

Creating a default instance of RAMP. No special action is required.

```js
function initRAMP() {
    var rInstance = new RAMP.Instance(domElement, configs);
}
```

Create a default instance the long-winded way.

```js
function initRAMP() {
    var options = {
        loadDefaultFixtures: false,
        loadDefaultEvents: false
    };
    var rInstance = new RAMP.Instance(domElement, configs, options);
    rInstance.fixtures.addDefaultFixtures();
    rInstance.event.addDefaultEvents();
}
```

### Replacing Default Fixtures

Replacing a default fixture with a custom fixture of the same name and interface. Note that we can just call `addDefaultFixtures()` without any special parameters; when it attempts to load the default `help` fixture, it will see the already loaded fixture and use that.

```js
function initRAMP() {
    var options = {
        loadDefaultFixtures: false
    };
    var rInstance = new RAMP.Instance(domElement, configs, options);
    rInstance.fixtures.add('help', CustomHelpFixtureClass);
    rInstance.fixtures.addDefaultFixtures();
}
```

Note that if the default fixture exposes any methods on its API, a replacement fixture must also implement the method signature. Otherwise runtime errors will likely occur, or some adjustments on the default event handlers will be required to remove any calls to the methods (in which case it is likely easier to just give the fixture a unique name and remove the default fixture).

### Subsets of the Default Setup

Adding a subset of default fixtures. This map does very little! Note we could also suppress and then selectively add the neccessary default event handlers. This would be slightly more efficient (we would not have handlers reacting and then realizing there is nothing to do), but also requires one to figure out what event handlers are still needed.

```js
function initRAMP() {
    var options = {
        loadDefaultFixtures: false
    };
    var rInstance = new RAMP.Instance(domElement, configs, options);
    rInstance.fixtures.add('help', CustomHelpFixtureClass);
    rInstance.fixtures.addDefaultFixtures(['help', 'appbar', 'mapnav']);
}
```
