# RAMP4 Legend Documentation


## Overview

The legend fixture contains a panel which displays information about the map contents. The legend panel allows for easy access to each layer's data table, settings, and metadata. The panel also allows you to refresh and delete layers. Most features in the legend panel are customizable. Certain app configurations can mean features are removed or do not apply to specific scenarios. 

The legend fixture is a default fixture, meaning it will be automatically loaded using a standard configuration.


## Buttons

**Toggle Visibility**
Clicking on this button opens a dropdown menu that allows you to toggle the visibility of all map layers on or off. If a layer has it's visibility control disabled, its visibility will not be modified.

**Toggle Groups**
Clicking on this button opens a dropdown menu that allows you to expand or collapse all layer groups in the legend. 

**Reorder Layers**
Clicking this button opens the layer re-order panel (if the fixture has been added to RAMP). This fixture allows you to modify the priority in which layers appear on the map. 

**Add Layer**
Clicking this button opens the layer wizard, which allows you to add new layers to the map.

## Components

#### Legend Entry
A legend entry represents a single layer (or sub-layer, in the case of Map Image Layers) on the map. A layer's legend entry allows you to interact with the layer. If supported, clicking on the legend entry will open the data table associated with the layer. Legend entries also contain a `More options` button, which contains more interactive options:
- Metadata (`metadata`): *if a metadata URL is provided, opens a panel displaying the data.*
- Settings (`settings`): *opens a settings panel that allows you to control layer opacity, visibility, and more.*
- Datatable (`datatable`): *opens the data table for the associated layer. Same action as simply clicking on the legend entry.*
- Legend: *expands or collapses the layer symbology stack.*
- Zoom to Layer Boundary (`boundaryZoom`): *sets the map zoom level to contain all layer features.*
- Remove (`remove`): *removes the layer from the legend and map.*
- Reload (`reload`): *reloads the layer.*
- Visibility (`visibility`): *whether the visibility of this layer can be toggled on or off.*

These controls can be disabled for a specific layer through its object in the legend portion of the configuration file. To do this, add the `disabledControls` property to the object as an array. The app names for each of these controls are in parenthesis above. The following example demonstrates disabling the boundary zoom for a layer called `CleanAir`:

```
{
    layerId: 'CleanAir',
    name: 'Clean Air in Set',
    disabledControls: ['boundaryZoom']
}
```

When accessing the `More options` menu for this layer in the app, the `Zoom to Boundary` button will not be able to be clicked.

#### Legend Group
A legend group is a recursive component that can contain legend entries, or other legend groups. A legend group can be collapsed to hide the legend entires contained within it. Toggling the visibility on the group, if enabled, will toggle the visibility of all of the legend entries contained within.

#### Visibility Group
A visibility group works similar to the legend group, however the legend only allows for at most one child of the group to the visible at a time. If one child is visible and you toggle the visibility on for another child, the visibility for the first child will be turned off.

#### Info Section
TODO once added

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
                    ... put your layer objects here ...
                }
            }
        },
        ... other fixture configuration
    }
}
```

### Legend Component Objects
There are four types of legend component objects for the legend fixture, each one representing one of the [Components](#Components) mentioned earlier in this documentation.

#### Entry
An entry acts as a leaf of the legend tree structure. It has the following properties:

`layerId`: the ID of the layer this legend entry represents. The layer should already be added to the RAMP configuration under the `layers` section.

`name`: the name that will be displayed for this layer in the legend.

`sublayerIndex`: For Map Image Layers, an integer specifying the index of the sublayer.

`controls`: an array of controls that are enabled for this legend entry.

`disabledControls`: an array of controls that are disabled for this legend entry.

`symbologyExpanded`: a boolean that determines whether the symbology stack is expanded by default.

The following is an example of an entry in the configuration file:
```text
 {
    layerId: 'WaterQuantity',
    name: 'Water Quantity in Nested Group',
    sublayerIndex: 1,
    controls: [
        'datatable',
        'metadata',
        'reload',
        'remove',
        'settings',
        'symbology'
    ]
}
```

#### Entry Group
An entry group acts as a non-leaf node of the legend tree structure. It has the following properties:

`name`: the name that will be displayed for this layer in the legend.

`expanded`: a boolean, true if the group is expanded by default.

`controls`: an array of controls that are enabled for this legend group.

`disabledControls`: an array of controls that are disabled for this legend group.

`children`: an array. Items in this array can be configuration for any legend component (an entry, an entry group, a visibility set, or an info section).

The following is an example of an entry group in the configuration file:

```text
{
    name: 'Group in Set',
    children: [
        {
            layerId: 'WaterQuantity',
            name: 'Water Quantity in Nested Group',
            sublayerIndex: 1,
            controls: [
                'datatable',
                'metadata',
                'reload',
                'remove',
                'settings',
                'symbology'
            ]
        },
        {
            layerId: 'WaterQuantity',
            name: 'CO2 in Nested Group',
            sublayerIndex: 9
        },
        {
            layerId: 'WaterQuality',
            name: 'Water Quality in Nested Group',
            sublayerIndex: 5
        }
    ]
}
```

#### Visibility Set
A visibility set is displayed similar to the group, however only one entry can be visibile at a time. It has the following properties:

`collapse` (not yet implemented): a boolean, if true renders the visibility set as a single legend entry.

`exclusiveVisibility`: an array, similar to the `children` property in the group config. Items in this array can be either an entry, or an entry group. It **cannot** be another visibility set.

The following is an example of a visibility set in the configuration file:

```text
{
    name: 'Visibility Set',
    exclusiveVisibility: [
        {
            layerId: 'CleanAir',
            name: 'Clean Air in Set',
            disabledControls: ['boundaryZoom']
        },
        {
            name: 'Group in Set',
            children: [
                {
                    layerId: 'WaterQuantity',
                    name: 'CO2 in Nested Group',
                    sublayerIndex: 9
                },
                {
                    layerId: 'WaterQuality',
                    name: 'Water Quality in Nested Group',
                    sublayerIndex: 5
                }
            ]
        }
    ]
}
```

#### Info Section
TO BE IMPLEMENTED


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
- `getItem(id: string)`: retrieves the legend item with the id provided.
- `getLayerItem(id: string)`: retrieves the legend item provided with the id of the layer.
- `getAllExpanded(expanded: boolean)`: retrieves all legend items with the given expanded state.
- `getAllVisible(visibility: boolean)`: retrieves all legend items with the given visibility state.


### Update
Provides the following methods:
- `updateLegend(layer)`: finds the associated legend item by id and "mount" the layer onto the item
- `expandItems(expanded: boolean, root?: LegendEntry)`: sets the `expanded` state of legend items to the value provided. If `root` is provided, then the value will be set for all items under that entry.
- `showItems(visibility: boolean, root?: LegendEntry)`: sets the `visible` state of legend items to the value provided. If `root` is provided, then the value will be set for all items under that entry.

### Delete
Provides the following methods:
- `removeItem(item: string | LegendItem)`: removes the legend item with the provided ID, or item instance.
- `removeLayerItem(layer: string | LayerInstance)`: removes the legend item connected to the layer ID or instance provided.
