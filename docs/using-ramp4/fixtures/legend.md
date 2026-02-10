# Legend

## Overview

The legend fixture contains a panel which displays information about the map contents. The legend panel allows for easy access to each layer's data table, settings, and metadata. The panel also allows you to refresh, add, and delete layers. Most features in the legend panel are customizable. Certain app configurations can mean features are removed or do not apply to specific scenarios.

The legend fixture is a default fixture, meaning it will be automatically loaded using a standard configuration.


## Buttons

**Add Layer**
Clicking this button opens the layer wizard, which allows you to add new layers to the map.

**Reorder Layers**
Clicking this button opens the layer re-order panel (if the fixture has been added to RAMP). This fixture allows you to modify the priority in which layers appear on the map.

**Toggle Visibility**
Clicking on this button opens a dropdown menu that allows you to toggle the visibility of all legend items on or off. If an item has it's visibility control disabled, its visibility will not be modified.

**Toggle Groups**
Clicking on this button opens a dropdown menu that allows you to expand or collapse all groups in the legend.


## Components

#### Legend Item
A legend item is a generic class that represents entries in the legend. A legend item is a recursive component that can contain and be contained within other legend items. The given options for a legend item are:
- Visibility (`visibilityButton`): *determines whether a visibility button is attached to the legend item, so that the item visibility can be controlled from the legend.*
- Expand (`expandButton`): *determines whether the legend item can be expanded and collapsed in the legend.*

Toggling the visibility of a legend item will toggle the visibility of all its child items. These controls can be disabled for a specific legend item through its object in the legend portion of the configuration file. There are two ways of doing this:
1. Add the `disabledControls` property to the object as an array with the names for each control (in parentheses above). The following example demonstrates disabling the expand toggle for a legend item called `Visible Set`:

    ```js
    {
        name: 'Visible Set',
        disabledControls: ['expandButton'],
        children: [ ... ]
    }
    ```
2. Add the `controls` property to the object as an array, and omit the names for each disabled control. The next code block provides the same configuration as the previous example:

    ```js
    {
        name: 'Visible Set',
        controls: ['visibilityButton'],
        children: [ ... ]
    }
    ```

If no control configuration for the legend item is provided, both controls are enabled by default.

#### Layer Item
A layer item is a legend item bound to a single layer (or sub-layer, in the case of Map Image Layers) on the map. Layer items allow you to interact with layers from the legend. If supported, clicking on a layer item will open the data table associated with the layer. Legend entries also contain a `More options` button, which contains more interactive options:
- Metadata (`metadata`): *if a metadata URL is provided and the metadata fixture has been added, opens a panel displaying the data.*
- Settings (`settings`): *opens a settings panel that allows you to control layer opacity, visibility, and more.*
- Datatable (`datatable`): *opens the data table for the associated layer. Same action as simply clicking on the layer item.*
- Legend (`symbology`): *expands or collapses the layer symbology stack.*
- Zoom to Layer Boundary (`boundaryZoom`): *sets the map zoom level to contain all layer features.*
- Remove (`remove`): *removes the layer from the legend and map.*
- Reload (`reload`): *reloads the layer.*

In addition to these controls, opening the settings panel provides extra options that specify how the layer is displayed on the map

- Show layer (`visibility`): *toggles the visibility of the layer on or off.*
- Opacity (`opacity`): *sets the opacity of the layer as a percentage.*
- Toggle identify (`identify`): *when toggled off, data from this layer will not appear in identify results (e.g. when clicking on the map).*

Like legend item controls, these controls can be disabled for a specific layer through its object in the legend portion of the configuration file. Again, there are two ways to do this:
1. Add the `disabledLayerControls` property to the object as an array with the names for each control (in parenthesis above). The following example demonstrates disabling the boundary zoom and opacity controls for a legend item called `CleanAir`:

    ```js
    {
        layerId: 'CleanAir',
        name: 'Clean Air',
        disabledLayerControls: ['boundaryZoom', 'opacity']
    }
    ```
2. Add the `layerControls` property to the object as an array, and omit the names for each disabled control. The next example configures `CleanAir` with only the remove control enabled:

    ```js
    {
        layerId: 'CleanAir',
        name: 'Clean Air in Set',
        layerControls: ['remove']
    }
    ```

Additionally, controls will be disabled if the layer item does not support them.

#### Section Item
A section item is a legend item that is not bound to a layer. Section items can be used to group collections of legend items, as well as display information that can take the format of title, text, image, Markdown, or custom HTML template.

## Configuration
> Note that in the following examples, the `layerId` represents the ID of the layer previously added to the map. [See the documentation for Layers](#) to understand how to add a layer to the map through the configuration file (TODO).

The legend, like most other fixtures, can be configured directly through the main configuration file under the `fixtures` object. A very simple configuration file below shows where the legend configuration object should be placed:

```js
const config = {
    layers: { ... },
    fixtures: {
        legend: {
            LEGEND CONFIGURATION HERE
        },
        ... other fixture configuration
    }
}
```

The following properties exist on the legend configuration object:

- `panelWidth: number`, if a custom legend width is required you can do this here. Otherwise if left blank the legend will use the the default fixture width.
- `multilineItems`, an object which determines whether legend items are allowed to wrap onto new lines if their text requires more space. Only applies to layer items. Contains two optional properties:
    - `enabled: boolean`, which determines whether the above setting is enabled (defaults to true; if false, text will truncate at one line).
    - `maxLines: number`, which determines the max number of lines a legend item can take up. Beyond this number, text will truncate and show a tooltip on hover. Defaults to `3`. Only allows integers `1`-`6` as values. Only applies if the legend property `multilineItems.enabled` is true.
- `root: Object`, a tree-structured object that represents the layout for the legend. Top-level items can be added to the legend as a child of this object as such:

```js
const config = {
    layers: { ... },
    fixtures: {
        legend: {
            root: {
                children: {
                    ... put your legend items here ...
                }
            }
        },
        ... other fixture configuration
    }
}
```

### Legend Component Objects
There are two types of legend component objects for the legend fixture, each one representing a [Component](#components) mentioned earlier in this documentation.

#### Legend Item
Every node in the legend tree structure is an instance of a legend item. All legend items share these properties:
- `name`: display name for legend item
- `children`: list of child legend items
- `hidden`: indicates if item (and its children) should be hidden from the legend
- `expanded`: default expanded state of item
- `exclusive`: indicates if toggling visibility should follow "exclusive" behavior
- `controls:`: keeps track of list of enabled legend item controls
- `disabledControls:`: keeps track of list of disabled legend item controls

#### Layer Item
A layer item is an instance of a legend item. A single layer item directly corresponds to a single layer/sublayer on the map. It inherits the properties of a legend item, as well as:
- `layerId`: the ID of the layer this legend entry represents. The layer should already be added to the RAMP configuration under the `layers` section
- `sublayerIndex`: for Map Image Layers, an integer specifying the index of the sublayer
- `symbologyExpanded`: determines whether the symbology stack is expanded by default,
- `symbologyRenderStyle`: whether to render the images in the symbology stack as 'icons' or 'images'. Will only apply to custom symbology stacks.
- `symbologyStack`: an array of objects that will serve as the custom symbology stack to use instead of the layer's default. Each object in the array should have the following properties:
    * `image`: URL of the image to display
    * `text`: the text to display
    * (optional) `sqlQuery`: an SQL where clause to apply as a layer filter when the symbol's visibility checkbox is checked.
- `coverIcon`: a custom icon to be displayed on the symbology stack
- `description`: description text to be displayed above symbology stack when it is expanded
- `layerControls:`: keeps track of list of enabled layer item controls
- `disabledLayerControls:`: keeps track of list of disabled layer item controls

The following is an example of a layer item in the configuration file:
```js
 {
    layerId: 'WasteLocations',
    name: 'Waste Locations Layer',
    sublayerIndex: 1,
    layerControls: [
        'datatable',
        'metadata',
        'opacity',
        'reload',
        'remove',
        'settings',
        'symbology',
        'visibility'
    ],
    symbologyRenderStyle: 'icons',
    symbologyStack: [
        {
            image: 'https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg',
            text: 'Airports',
            sqlQuery: "Sector = 'Airports and Services to Airports'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_960_720.jpg',
            text: 'Chemicals',
            sqlQuery: "Sector = 'Chemicals'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/08/24/23/33/oil-rig-3629119__340.jpg',
            text: 'Oil and Gas',
            sqlQuery: "Sector = 'Oil and Gas (Conventional and Non-Conventional)'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033__340.jpg',
            text: 'Waste',
            sqlQuery: "Sector = 'Waste Treatment and Disposal'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/03/23/22/11/knowledge-3255140__340.jpg',
            text: 'Other',
            sqlQuery: "Sector = 'All Other Sectors'"
        }
    ]
}
```

#### Section Item
A section item is an instance of a legend item. A section item does not correspond with any layer, but is used to group and label other legend items. It inherits the properties of a legend item, as well as:
- `infoType`: the type of info displayed on the item, which can be title, text, an image, markdown, or HTML.
- `content`: the content to be displayed on the item
Note that when a section item has a defined `content` property, its visibility and expand control buttons must be explicitly enabled, unlike other legend items that have those buttons enabled by default.

The following is an example of a section item containing two layer items in the configuration file:

```js
{
    name: 'Layer Group',
    infoType: 'text',
    content: 'This group contains two layer items.'
    children: [
        {
            layerId: 'WaterQuantity',
            name: 'Water Quantity in Layer Group',
        },
        {
            layerId: 'WaterQuality',
            name: 'Water Quality in Layer Group',
        }
    ]
}
```
