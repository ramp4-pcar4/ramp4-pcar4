# Grid

## Components
The grid panel contains multiple different components. Listed below are the most important ones, along with a brief description of what they do:

### The Grid Table
The grid table is the main component of the grid fixture. It contains a row for each feature on the layer. The grid columns correspond to the attributes that belong to the features.
**Note**: features will only appear on the grid if they are currently visible

### Global Search and Column Filters
The global search and column filters allow the user to display smaller subsets of data within the table. See the [global search](#global-search) and [column filters](#column-filters).

### Scroll and Filter Status
The scroll and filter status is located in the upper left corner of the grid panel. It displays the range of rows that are currently visible on the table, and the total number of records that are in the table. If any filters are applied to the grid, the number of filtered rows will be displayed instead of the total number. The range of displayed rows updates as the user scrolls up or down in the table.

### Zoom and Details Buttons
Each row in the grid table contains a zoom and details button. The zoom button centers the map on the feature in the row, and the details button opens the details panel of the feature.

## Controls
Various controls have been added to the grid for user convenience.

### Copy Text
Any cell with text in it can be copied to the clipboard by double clicking on the cell, or for keyboard users, by navigating to the cell and pressing the control and c keys. A tooltip will appear to indicate that the text has been successfully copied.

### Show/Hide Columns
A dropdown menu located in the upper right corner of the grid panel, labeled `Columns`. This allows the user to hide unwanted columns from the table. Columns that are visible have a checkmark displayed beside them.

### Clear Search and Filters
A button located in the upper right corner of the grid panel. This clears the global search and removes all filters currently applied to the columns.

### Apply Filters to Map
A control located in the upper right corner of the grid panel, within the `More` dropdown menu. When this control is enabled, features on the map are in sync with filtered features on the grid table.

### Show/Hide Column Filters
A control located in the upper right corner of the grid panel, within the `More` dropdown menu. Pressing this button toggles the [column filters](#column-filters) on and off.
**Note**: turning the column filter display off will not remove any column filters currently applied to the table.

### Toggle Extent Filter
A control located in the upper right corner of the grid panel, within the `More` dropdown menu. When enabled, the table only displays features within the current extent.

### Re-Order Columns
Each column in the table has a pair of buttons beside it, labeled `<` and `>`. Pressing either of these buttons will shift the column to the left or right, respectively. You cannot move the rightmost column to the right, or the leftmost column to the left.

### Sort Columns
Clicking on the column header will switch it between sorting methods. There are three sorting methods: no sorting, ascending order, and descending order.

- If there is an upwards arrow beside the column name, the column is being sorted in ascending order.
- If there is a downwards arrow beside the column name, the column is being sorted in descending order.
- If there is no arrow beside the column name, no sorting is being applied to the column (this is the default).


## Global Search
The global search is located in the panel header. It is a text filter that applies to *all columns* in the table. It will display any row with an entry that matches the entered text.

## Column Filters
The grid table currently supports four different types of column filters. If the grid panel is closed, any column filters that are applied to the table will be re-applied when it is re-opened.

- **Text Filter**
Represented by a text input box. Displays entries that contain matching text.
- **Number Filter**
Represented by two input boxes labelled `min` and `max`. Only supports numbers.
    - If only the minimum is entered, the table displays all values *greater than or equal to* the minimum value.
    - If only the maximum is entered, the table displays all values *less than or equal to* the maximum value.
    - If both the minimum and maximum are entered, the table displays all values in between the two numbers (including the minimum and maximum themselves).
- **Selector Filter**
Represented by a dropdown field. Displays all entries that match the selected value. The selector filter generates the available options automatically by creating an option for each unique row value.
- **Date Filter**
Represented by two date input fields. The date filter works in the same fashion as the number filter:
    - If only the minimum is entered, the table displays all dates *later than or on* the minimum date.
    - If only the maximum is entered, the table displays all dates *earlier than or on* the maximum date.
    - If both the minimum and maximum are entered, the table displays all dates _in between or on_ the dates.

## Grid Configuration

Like other fixtures, the grid has multiple options that can be adjusted through the configuration file. Since the grid settings are layer specific, the configuration resides in the fixtures property of layer config objects.
- `title: string`, renders a custom title above the grid.
- `columns`, specifies how individual columns are defined. See the [Column configuration](#column-configuration) section.
- `columnMetadata `, defines options for the grid columns. See the [Column Metadata configuration](#column-metadata-configuration) section.
- `controls`, defines the button controls in grid rows. See the [Custom Button configuration](#custom-button-configuration) section.
- `search: boolean`, shows/hides the [global search bar](#global-search).
- `searchFilter: string`, provides an initial filter in the global search bar.
- `showFilter: boolean`, shows/hides the [column filters](#show-hide-column-filters) on grid load.
- `applyToMap: boolean`, enables/disables the [Apply to Map filter](#apply-filters-to-map) by default.
- `filterByExtent: boolean`, enables/disables the [Extent filter](#toggle-extent-filter) by default.


An example of a layer with a configured grid is below

```js
const config = {
    layers: [
        {
            ... layer configurations
            fixtures: {
                grid: {
                    title: 'Datatable for this layer',
                    showFilter: false,
                    searchFilter: 'Alberta',
                }
            }
        }
    ]
}
```

## Column Configuration

Every column in the datagrid can be configured separately.
- `field: string`, a unique column identifier that aligns with attribute field name
- `title: string`, applies a custom title to the column
- `visible: boolean`, shows/hides the column on the grid by default
- `width: number`, sets the width of the column
- `sort: string`, determines the default order of the column, which can be unsorted, ascending, or descending
- `searchable: boolean`, shows/hides the column filter
- `filter: Object`, specifies filter values for the column
    - `type: string`, specifies the datatype of the column (string, selector, number, date)
    - `value: string`, specifies the default filter value for string and selector types
    - `min: string | number`, specifies the default lower bound filter value for number and date types
    - `max: string | number`, specifies the default upper bound filter value for number and date types
    - `static: boolean`, enables/disables filter input
- `template: string`, specifies a custom Vue component name to use as the cell renderer for the column. Does not apply to the OBJECTID column.

An example of a datatable with a single configured column is below

```js
const config = {
    layers: [
        {
            ... layer configurations
            fixtures: {
                grid: {
                    columns: [
                        {
                            field: 'station_id__id_station',
                            title: 'Station ID',
                            width: 500,
                            filter: {
                                type: 'string',
                                value: 6020384,
                                static: true
                            }
                        }
                    ]
                }
            }
        }
    ]
}
```

## Column Metadata Configuration

The `columnMetadata` object for a grid has the following properties:
- `exclusiveColumns: boolean`, when true, only layer fields defined in the `columns` array will be availible as columns in the grid. Otherwise, all layer fields are available as columns. By default, this is set to false.

An example of a datatable with the exclusiveColumns flag set

```js
const config = {
    layers: [
        {
            ... layer configurations
            fixtures: {
                grid: {
                    columnMetadata: {
                        exclusiveColumns: true
                    },
                    columns: [
                        {
                            field: 'station_id__id_station',
                            title: 'Station ID',
                            width: 500,
                            filter: {
                                type: 'string',
                                value: 6020384,
                                static: true
                            }
                        }
                    ]
                }
            }
        }
    ]
}
```

## Zoom Button Configuration

It is possible to change the icon for the zoom button in the data grid using the system variable `zoomIcon`. There are two built-in icons: `globe` and `magnify`. If you would like to customize the icon, the variable may be set to any emoji or SVG. Providing this value with a URL will not fetch the remote image.

Note that if the details fixture is added, the zoom icon will be modified there as well.

Example usage which sets the zoom icon to the magnifying glass:

```js
{
    configs: {
        en: {
            system: { zoomIcon: 'magnify' }
        }
    }
}
```

## Custom Button Configuration

The grid's row-level buttons can be customized via the `controls` array. By default the buttons will be the classic "Zoom To" and "Show Details" actions. These can be explicitly notated in the array using strings `"zoom"` and/or `"details"`.

Author-defined buttons can also be added by adding objects with the following structure to the `controls` array.

- `actionEvent: string`, the name of the event to raise when the button is clicked.
- `icon: string`, the icon of the button. Treated as HTML. So could be an Emoji, could be SVG or image tags.
- `tooltip: string`, tooltip for the button. This is also what screen readers will see.
- `displayOn: string`, determines which layer format this button should appear for. Options are `'geo'` for map layers, `'data'` for data layers, or `'all'` for both. Defaults to all.

The host page should add an [event handler](../../api-guides/events.md#reacting-to-an-event) on the RAMP Instance for the `actionEvent`. The event will have a payload of an object with the following properties.

- `data: Object`, a key-value attribute object for the row.
- `layer: LayerInstance`, the layer the row belongs to.
- `uid: string`, the UID of the layer.
- `oid: number`, the Object ID of the row.

An example of a datatable with a custom chart button, the classic detail button, and no zoom-to button.

```js
const config = {
    layers: [
        {
            ... layer configurations
            fixtures: {
                grid: {
                    controls: [
                        {
                            actionEvent: 'custom/showChart',
                            icon: '📊',
                            tooltip: 'View Chart'
                        },
                        'details'
                    ]
                }
            }
        }
    ]
}
```

## Merge Grid Configuration

A merge grid allows multiple layer sources to feed into a single grid. Opening a grid for any constituent layer will open the merge grid. Columns with the same field name will be combined, and mappings can be defined to combine fields of differing names across layers into a single column in the merge grid.

Since merge grids are defined at the instance level, their configuration lives in the `grid` fixture config (as opposed to within a layer config's dedicated grid fixture config). The fixture config has a property `mergeGrids`, which is an array of merge grid definition objects. The objects have the following properties.

- `gridId: string`, a unique identifier for the merge grid.
- `layers: object[]`, an array of objects defining the layers participating in the grid. They have the following properties:
  - `layerId: string`, the layer id of the layer.
  - `sublayers: integer[]`, optional array of sublayer indexes if the layerId refers to a Map Image Layer.
- `options: object`, a standard grid options configuration object for the merge grid. See the [grid config section](#grid-configuration).
- `fieldMap: object[]`,  an optional array of objects defining mappings between field names in a source layer and a column in the merge grid. They have the following properties:
  - `field: string`, the target field in the merge grid.
  - `sources: string[]`, the field names in any of the source layers that should map to the target field.

```js
const config = {
    fixtures: {
        grid: {
            mergeGrids: [
                {
                    gridId: 'gridABC',
                    layers: [
                        { layerId: 'sourceFeatureLayer' },
                        {
                            layerId: 'sourceMIL',
                            sublayers: [6, 7]
                        },
                        { layerId: 'sourceGeoJson' }
                    ],
                    options: {
                        title: 'A Grid taking columns as is'
                    }
                },
                {
                    gridId: 'gridDEF',
                    layers: [
                        { layerId: 'restaurantsOne' },
                        { layerId: 'restaurantsTwo' }
                    ],
                    options: {
                        title: 'A Grid combining different columns',
                        columns: [
                            { field: 'Location' }
                        ]
                    },
                    fieldMap: [
                        {
                            field: 'Location',
                            sources: ['Address', 'whereitsat']
                        }
                    ]
                }
            ]
        }
    }
};
```