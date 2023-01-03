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

    ```
    {
        name: 'Visible Set',
        disabledControls: ['expandButton'],
        children: [ ... ]
    }
    ```
2. Add the `controls` property to the object as an array, and omit the names for each disabled control. The next code block provides the same configuration as the previous example:

    ```
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

    ```
    {
        layerId: 'CleanAir',
        name: 'Clean Air',
        disabledLayerControls: ['boundaryZoom', 'opacity']
    }
    ```
2. Add the `layerControls` property to the object as an array, and omit the names for each disabled control. The next example configures `CleanAir` with only the remove control enabled:

    ```
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

```text
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
- `root: Object`, a tree-structured object that represents the layout for the legend. Top-level items can be added to the legend as a child of this object as such:

```text
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
There are two types of legend component objects for the legend fixture, each one representing a [Component](#Components) mentioned earlier in this documentation.

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
```text
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
            sqlQuery:
                "Sector = 'Airports and Services to Airports'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_960_720.jpg',
            text: 'Chemicals',
            sqlQuery: "Sector = 'Chemicals'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/08/24/23/33/oil-rig-3629119__340.jpg',
            text: 'Oil and Gas',
            sqlQuery:
                "Sector = 'Oil and Gas (Conventional and Non-Conventional)'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033__340.jpg',
            text: 'Waste',
            sqlQuery:
                "Sector = 'Waste Treatment and Disposal'"
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/03/23/22/11/knowledge-3255140__340.jpg',
            text: 'Other',
            sqlQuery:
                "Sector = 'All Other Sectors'"
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
```text
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

## CRUD API
The CRUD (Create, Read, Update, Delete) API for the legend provides an interface that is able to create, read, update, and delete legend items.

The API can be accessed through the RAMP API:
> const API = RAMPInstance.fixture.get('legend');

### Create
Provides the following methods:
- `createItem(itemConfig: any, parent?: LegendItem)`: creates and returns a legend item instance given a config object. This method does not add the item to the legend.
- `addItem(item: any | LegendItem, parent?: LegendItem)`: adds a legend item to the legend, as a child of the parent provided.
- `addLayerItem(layer: LayerInstance, parent?: LegendItem)`: given a layer instance, creates a configuration object as a child of the parent provided.

### Read
Provides the following methods:
- `getLegend()`: returns a direct reference to the full legend tree. Modifications made to this object will persist.
- `getLegendConfig()`: returns the current state of the legend tree in the form of a legend config snippet.
- `getItem(uid: string)`: retrieves the legend item with the uid provided.
- `getLayerItem(layer: string | LayerInstance)`: retrieves the layer item for the given layer/layer ID.
- `getAllExpanded(expanded: boolean)`: retrieves all legend items with the given expanded state.
- `getAllVisible(visibility: boolean)`: retrieves all legend items with the given visibility state.

Note that all of the methods above return direct reference(s) to legend item(s) in the store. Therefore, directly manipulating properties of the returned item(s) will result in changes to the UI. Here is an example of this:

```JS
const myItem = legendApi.getItem('abcdefg');
myItem.name = 'I have renamed my item!'; // this line will cause the name to update in the UI.
```

For more information on the different properties that legend items have, read the [legend component objects section](#legend-component-objects).


### Update
Provides the following methods:
- `updateLegend(layer)`: finds the associated legend item by id and "mount" the layer onto the item
- `expandItems(expanded: boolean, root?: LegendEntry)`: sets the `expanded` state of legend items to the value provided. If `root` is provided, then the value will be set for all items under that entry.
- `showItems(visibility: boolean, root?: LegendEntry)`: sets the `visible` state of legend items to the value provided. If `root` is provided, then the value will be set for all items under that entry.

### Delete
Provides the following methods:
- `removeItem(item: string | LegendItem)`: removes the legend item with the provided uid, or item instance.
- `removeLayerItem(layer: string | LayerInstance)`: removes the legend item connected to the layer ID or instance provided.
