
# General User Interface Guidance

Menu options on the left will typically open new information panels. These panels have the option to pin them in place or close them using the thumb-pin and "x" buttons, respectively.

The bell symbol in the lower-left corner displays notifications related to services or information on the map. Messages will be displayed here when erroneous services are not able to load on the map.

For general or technical inquiries regarding the Reusable Accessible Mapping Platform that this interactive map is based on, please contact [applicationsdecartographieweb-webmappingapplications@ec.gc.ca](mailto:applicationsdecartographieweb-webmappingapplications@ec.gc.ca). You may access the RAMP GitHub repository using the "About RAMP" button in the lower-left corner.


# Identifying Data

There are three ways to access the data on the map:

1. Select a point - Click or touch a data feature on the map, which will open or update the details panel with information specific to that item.
2. Accessed via Data Table and search - see "Data Table" section below.
3. Keyboard control crosshairs - see "Accessibility - Keyboard Navigation" section below.


# Navigation Controls

Navigation controls are used for changing the viewing extent of the map.

The following navigation controls can be found in the bottom right corner of the map:

| Icon | Function | Description |
|--|--|--|
| ![The icon representing the Zoom In function](navigation/zoomin.png) | Zoom in - Plus (+) | Zoom in one level on the map to see more detailed content |
| ![The icon representing the Zoom Out function](navigation/zoomout.png) | Zoom out - Minus (-) | Zoom out one level on the map to see less detailed content |
| ![The icon representing the fullscreen function](navigation/fullscreen.png) | Fullscreen | Full screen presents map content using the entire page. Full screen option is only available when the map is embedded into another page |
| ![The icon representing the Geolocation function](navigation/geolocate.png) | Geolocate | Zoom and pan map over the current location of the device |
| ![The icon representing the Initial map extent function](navigation/home.png) | Home / Initial extent | Zoom and pan map such that initial extent is visible |
| ![The icon representing the help function](navigation/help.png) | Help | Toggle open or closed the help dialog |


# Navigation Information

The navigation information is located in the lower right corner of the map and includes map scale and mouse/crosshairs positioning coordinates.

The positioning coordinates can be in degrees minutes seconds (DMS), decimal degrees or meters depending on the projection and configuration used.


# Overview Map

The overview map displays a generalised view of the main map at a smaller scale. It can be found in the top right corner of the map.

Select-hold on the overview map and drag it to change the extent of the main map. Selecting the toggle arrow icon in the top right corner of the overview map will expand or collapse it.


# Legend

The Legend panel, accessed from the first option in the left menu, serves as a map legend and lists the layers available to display in the map.

Access the layer list by clicking on the layer button in the top, left of center portion of the viewer.

Each layer has some symbology associated with it. For simple layers with only one representative icon, the icon will be present next to the layer name. For complex layers (i.e. those with multiple symbols used per layer) the icon will show as a stack that can be toggled open and closed which is expanded beneath the layer name. WMS layers may optionally have a graphical legend defined, if one is present it will be displayed in the same drop down manner.

You can toggle the visibility of the layer at any time by selecting the checkbox next to each layer.

Note, if a layer fails to load correctly it will be identified by an error notice. Instead of the standard layer actions you can select to either reload the layer (this is particularly helpful if there is a temporary network connectivity issue) or remove the layer.


# Layer Settings

While hovering over a layer or tabbing to one, select the three dots icon to make the settings menu appear.

Note that some settings may not be available depending on various factors such as layer type or configuration.

| Icon | Function | Description |
|--|--|--|
| ![The icon representing the Metadata function](layer/metadata.png) | Metadata | Display relevant metadata in a slideout panel |
| ![The icon representing the Settings function](layer/settings.png) | Settings | Opens slideout panel where bounding box and queryable data can be toggled as well as the ability to adjust opacity amount |
| ![The icon representing the Datatable function](layer/datatable.png) | Datatable | Select to view data in table format |
| ![The icon representing the Show Legend function](layer/legend.png) | Show legend | Expands/Collapses the legend image stack |
| ![The icon representing the Zoom to Layer Boundary function](layer/zoomBoundary.png) | Zoom to layer boundary | Pans and zooms the map so that the layer boundary is in view |
| ![The icon representing the Reload function](layer/reload.png) | Reload | Reloads the layer |
| ![The icon representing the Remove function](layer/remove.png) | Remove | Remove the layer from the map and legend |


# Layer Submenu

In the Legend panel, 4 functions appear in a row at the top:

| Icon | Function | Description |
|--|--|--|
| ![The icon representing the Add Layer function](layer/addLayer.png) | Add Layer | Menu options to add a file or service based layer |
| ![The icon representing the Reorder Layers function](layer/reorderLayers.png) | Reorder Layers | Provides an alternative to the click-hold and drag reordering already available. When selected, layers are only reorderable by holding onto the handle icon next to each layer. Most useful for touch devices |
| ![The icon representing the Toggle Groups function](layer/toggleGroups.png) | Toggle Groups | Opens or closes all groups |
| ![The icon representing the Toggle Visibility function](layer/toggleVisibility.png) | Toggle Visibility | Enables or disables the visibility for all layers |


# Add Layer

Additional layers can be added to the map viewer. Supported formats include: ESRI Feature Layer, ESRI Map Image Layer, ESRI Tile Layer, ESRI Imagery Layer, OGC Web Map Service, OGC Web Feature Service, or a file layer (supported formats include GeoJSON, CSV and Shapefile). The '+' button at the top of the Legend will launch the wizard panel.

Usage:
- If you wish to add a file, you can do so by dragging the file over the import wizard, by selecting a file for upload, or by providing the URL to the file.
- If you wish to add a service, you can do so by entering the service URL into the text box.
- Click the 'Continue' button to proceed.
- Select the option from the dropdown menu with the correct file or service type. If an incompatible type is selected, an error will be displayed and users can try the following: try a different layer type, verify the service URL, or ensure the service has CORS support.
- Click the 'Continue' button to proceed.
- Depending on the type of dataset being loaded, various parameters can be set in this final phase.
- Each layer type allows the choice of a **Layer Name**, which will be displayed in the viewer.
- A Feature Layer allows the choice of a **Primary Field**, which determines the attribute used to identify a feature in the data table panel and map tips; a **Tooltip Field**, which determines the attribute used as tooltip content when a feature is mouse hovered. All other information is derived from the service's metadata.
- A Map Image Layer or a WMS Service allows the choice of a **Nested** option, which maintains layer grouping if applicable; a **Layers** picker, from which you can select which layers will be imported. All other information is derived from the service’s metadata.
- A WFS Service or a file based dataset allows the choice of a **Primary Field**, which acts the same as in a Feature Layer; a **Tooltip Field**, which acts the same as in a Feature Layer; a **Colour**, which determines the colour of the points / lines / polygons on the map. CSV files also requires the specification of the columns that contain the **Latitude** and **Longitude** values, used to derive the point location on the map. All other information is derived from the source's metadata.
- Attempting to add file layers through a remote URL may fail due to server configuration. In this case, downloading the file and then uploading to the application as a local file layer is recommended.
- FeatureServer layers: Note that it is currently not possible to import a FeatureServer as a Map Image layer, in this case please import layers individually as a Feature Layer.
- Raster layers: Note that Raster Layer data must be added as a Map Image Layer. It is not possible to add an individual raster layer from a service, please use the main service URL and select the desired layers from the 'Layers' picker in the 'Configure layer' step. Raster Layers will not have any attributes or identify support.
- Click the 'Continue' button to insert the layer into the map.


# Geolocation Search

### General Use

The geosearch component functions to allow users to search for places in Canada. When the geosearch icon in the left-hand menu is clicked, a panel is displayed with an input field for search keywords.

#### Supported Search Types

__Keyword search__: Type any keyword into geosearch to display a list of results that contains the keyword.

- each search result consists of: location name (with keyword highlighted), location province, and location type (lake, city, town, etc.)
- click on any individual result to mark its coordinates and zoom the map to center around this location

__Street address__: Search using direct street addresses to display a list of results related to the search term

- addresses can be located by street name, or more precisely by place number and street name
- results are sorted in order of how closely the address matches the search term

__FSA search__: A __forward sortation area (FSA)__ is a way to designate a geographical area based on the first three characters in a Canadian postal code. All postal codes that start with the same three characters are considered an __FSA__.

- a search using FSA will display a list of results in the vicinity of that area
- the very first result is a location of the FSA itself, click to zoom and center the map on the FSA
- example: type in __M3H__

__Latitude/Longitude search__: Search using lat/long coordinates to display a list of results in the vicinity of that map point.

- similarly to FSA search, the first result will be a location of those coordinates entered, click this to zoom and center the map on the map point
- lat/long search recognizes spaces, commas, semicolons, or vertical bars (|) to separate the co-ordinates
- example: type in __54.3733,-91.7417__

__NTS search__: __National Topographic System (NTS)__ is a system used for providing general topographic maps of the country, producing details on landforms, lakes/rivers, forests, roads and railways, etc.

- the NTS is split into three major zones: "Southern zone" - latitudes between 40°N and 68°N, "Arctic zone" - latitudes between 68°N and 80°N, and the "High Arctic zone" - latitudes between 80°N and 88°N
- an NTS map number consists of a string containing a number identifying a map sheet, a letter identifying a map area, and a number identifying the scale map sheet
- likewise, the first result will be a location of the NTS map number, click to center map on this area
- example: type in __030M13__

### Geosearch Filtering

When searching for a location, a results panel will appear below the search box. This results panel contains two dropdown boxes that allow you to filter the search results by their __province__ and by their __type__ (lake, town, river, etc.). To the right of these two boxes is a __Clear Filters__ ![An icon representing the "Clear" function](datatable/clearFilters.png) button, which when clicked clears the selected filter options.

At the bottom of the results panel, there is a checkbox labeled __visible on map__. Checking this box will further filter the results to only show locations that are currently visible on the map. Moving the map around or zooming in/out with this box selected will automatically update the results to display locations that are on the map.


# Basemap Selector

The basemap selector modifies the underlying basemap to provide a variety of geographical contexts.

__To open the basemap selector:__

Select the "basemaps" icon in the left-hand menu. You will be presented with one or more basemaps to choose from, separated by their projection types (e.g. Lambert vs. Web Mercator). The map will reload if you change projections, but not if you switch basemaps within the same projection.


# Export Image

You can export an image of the map and its visible layers along with; a legend, title, north arrow with scalebar, custom footnote<sup>*</sup>, and a timestamp<sup>†</sup>.

Select the "Export" down-arrow icon in the left-hand menu to get started. A panel will appear with an image of the map, and an option to enter a map title if desired.

If you'd like to add or remove sections of the exported image such as a legend, click on the options cogwheel in the lower-right corner of the panel. There you'll be able to select/deselect the sections to appear in the exported image.

Click on the download button in the bottom-left of the panel to retrieve the final generated map image.

<sup>*</sup>Please note that the footnote may not be available depending on the map.

<sup>†</sup>Please note timestamp is optional and may not be available depending on the map


# Data Table Panel

The __Data Table__ panel is shown above in its initial state.

In addition to scrolling data, it is possible to:

- Sort the data by selecting the header of the column. Multiple columns can be sorted by holding down shift before clicking a column header
- Open the detail panel corresponding to a given row by selecting the *Details* paper icon
- Position the map view to the location of the feature corresponding to a given row by selecting the *Zoom To Feature* magnifying glass icon
- Move the columns by selecting left and right arrows beside the column title to shift it left or right
- Filter the columns by numerical range, text, selection or date (if the configuration allows it). Changes in the table can also be made to reflect on the map by applying or clearing filters from map options, available in the top right corner of the data table
- Show and/or hide columns by clicking on the *Hide Columns* icon, in the top right corner of the data table.
- Navigate the table using a keyboard
- Copy the text in a cell by double clicking on it, or for keyboard users, by navigating to the cell and pressing the control and c keys.

The number of features in the layer is displayed in the top left corner below the layer title.

### Table Controls

This control group is located at the top of the data table and has the following options:

#### First row:

- ![An icon representing the "Collapse" function](datatable/collapse.png) Collapse
    - Condenses the table into a smaller panel so the map is viewable at the same time
- ![An icon representing the "Expand" function](datatable/expand.png) Expand
    - Expands the table into a wider panel that fits the available area over the map
- ![An icon representing the "Minimize" function](datatable/minimize.png) Minimize
    - Hides the data grid from the map view, accessible to expand from the left-hand menu bar
- ![An icon representing the "Close table" function](datatable/close.png) Close Table
    - Closes the table
- Global Search
    - Filter the table by making sure that the search term is a substring of the rows' data at one or more columns

#### Second row:

- ![An icon representing the "Apply filters" function](datatable/applyFilters.png) Apply Table Filters To Map
    - update the map to display only the data that is visible in the table
    - if the data in the table already matches the data displayed on the map, this button will be disabled
- ![An icon representing the "Toggle column visibilities" function](datatable/toggleCols.png) Toggle Column Visibilities
    - allows you to choose which columns you want to be visible on the table
- ![An icon representing the "Show filters" function](datatable/showFilters.png) Show filters
    - toggling this option off will hide all column filters
    - unable to change column filters while toggled off
    - column filters remain applied even when toggled off
- ![An icon representing the "Extent filter" function](datatable/extentFilter.png) Extent filter
    - toggles filter by extent
- ![An icon representing the "Clear search and filters" function](datatable/clearFilters.png) Clear Search and Filters
    - clear any existing filters and searches that may be applied to the table

### Sorting and Reordering

For each column in the data table, there may be a set of arrows associated with that column which represents how it can be sorted and reordered.

  __Column Sort__: Click on the column title to sort the columns in ascending/descending order (for numerical data) and alphabetical order (for text data).

- an upward arrow next to the column title indicates that the column data is being sorted in ascending order or alphabetical order
- a downward arrow next to the column title indicates that the column data is being sorted in descending order or reverse alphabetical order
- No arrow next to the column title means that there is no sort applied to current column
- sort multiple columns at once using shift + select column names
- how it works: the next selected column using tab will be sorted according to the last selected column's groups of identical data

__Column Reorder__: The two right/left arrows next to the column name are for reordering the columns.

- click the right arrow to swap a column with the one on the right
- the right arrow is disabled for the rightmost column of a data table
- click the left arrow to swap a column with the one on the left
- the left arrow is disabled for the leftmost column of a data table

### Filter data

Data can be filtered by column. A column is searchable if there is an input field under the title of the header. As mentioned previously, there are 4 types of filters:

-  __Text__: Character input field. Use the wildcard character (\*) to replace a sequence of zero or more characters (e.g. _* levo_ will find Charlevoix)
-  _Note, without a generic character, the search will find only the elements where the word searched begins the sentence._
-  __Number__: Input fields that accept only numbers
    - If a minimum and a maximum are defined the filter will search for a range
    - If, for example, only a minimum is defined, it will perform the operation _greater than_
-  __Selection__: Drop-down menu which allows the selection of one or more predefined values
-  __Date__: Similar to the numeric field but uses dates

Some filters are not editable; Their value can not be changed. They are represented by a dashed line below their value.

### Global Search

This control, which is found in the upper right corner of the data table, allows to filter the data table globally.

- If you enter the _Brook_ value, the data table will select the data that contains _Brook_ at any location (e.g. _Corner Brook_ will be selected)

### Keyboard Navigation

Use `Tab` to go through each of the table controls, and to navigate between the three major table groups:

- Column Headers
- Column Filters
- Table Body

Once any major group is focused on, you can use the arrow keys to navigate through the table cells for that component. Doing this will highlight the currently focused table cell.

To access the buttons and/or input fields within a cell, make sure the cell is highlighted (by using arrow keys as above) and use `Tab` to navigate between its children.


# Accessibility

The Reusable Accessible Mapping Platform is designed to be used in a context that is WCAG 2.1 "AA" compliant. Due diligence for full compliance is the responsibility of the page owner.

#### Keyboard Navigation

Keyboard functionality is provided as an alternative for users who are unable to use a mouse. Use the Tab key to navigate forward to links and controls on the page. Press Shift+Tab to go back one step. Use the Enter or Spacebar keys to activate links and controls.

When the map gains focus, a crosshairs marker is displayed in the center of the map. Use the __arrow__ keys to move the map and __+__ / __-__ keys to zoom in and out. Press __Enter__ to select a feature under the crosshairs and display associated data in the Details panel.
