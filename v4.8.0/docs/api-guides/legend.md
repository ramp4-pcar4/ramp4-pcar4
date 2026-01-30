# Legend API

The CRUD (Create, Read, Update, Delete) API for the legend provides an interface that is able to create, read, update, and delete legend items.

The API can be accessed through the RAMP API:
> const API = RAMPInstance.fixture.get('legend');

## Create
Provides the following methods:
- `createItem(itemConfig: any, parent?: LegendItem)`: creates and returns a legend item instance given a config object. This method does not add the item to the legend.
- `addItem(item: any | LegendItem, parent?: LegendItem)`: adds a legend item to the legend, as a child of the parent provided.
- `addLayerItem(layer: LayerInstance, parent?: LegendItem)`: given a layer instance, creates a configuration object as a child of the parent provided.

## Read
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

For more information on the different properties that legend items have, read the [legend component objects section](../using-ramp4/fixtures/legend.md#legend-component-objects).


## Update
Provides the following methods:
- `updateLegend(layer)`: finds the associated legend item by id and "mount" the layer onto the item
- `expandItems(expanded: boolean, root?: LegendEntry)`: sets the `expanded` state of legend items to the value provided. If `root` is provided, then the value will be set for all items under that entry.
- `showItems(visibility: boolean, root?: LegendEntry)`: sets the `visible` state of legend items to the value provided. If `root` is provided, then the value will be set for all items under that entry.

## Delete
Provides the following methods:
- `removeItem(item: string | LegendItem)`: removes the legend item with the provided uid, or item instance.
- `removeLayerItem(layer: string | LayerInstance)`: removes the legend item connected to the layer ID or instance provided.
