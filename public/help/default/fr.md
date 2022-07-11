
# [fr] General User Interface Guidance


[fr] Menu options on the left will typically open new information panels. These panels have the option to pin them in place or close them using the thumb-pin and "x" buttons, respectively.

[fr] The bell symbol in the lower-left corner displays notifications related to services or information on the map. Messages will be displayed here when erroneous services are not able to load on the map.

[fr] For general or technical inquiries regarding the Reusable Accessible Mapping Platform that this interactive map is based on, please contact [applicationsdecartographieweb-webmappingapplications@ec.gc.ca](mailto:applicationsdecartographieweb-webmappingapplications@ec.gc.ca). You may access the RAMP GitHub repository using the "About RAMP" button in the lower-left corner.

# Identifying Data

[fr] There are three ways to access the data on the map:

1. [fr] Select a point - Click or touch a data feature on the map, which will open or update the details panel with information specific to that item. 
2. [fr] Accessed via Data Table and search - see "Data Table" section below.
3. [fr] Keyboard control crosshairs - see "Accessibility - Keyboard Navigation" section below.

# [fr] Navigation Controls

[fr] Navigation controls are used for changing the viewing extent of the map.

[fr] The following navigation controls can be found in the bottom right corner of the map:

| [fr] Function | [fr] Description |
|--|--|
| [fr] Zoom in - Plus (+) | [fr] Zoom in one level on the map to see more detailed content |
| [fr] Zoom out - Minus (-) | [fr] Zoom out one level on the map to see less detailed content |
| [fr] Fullscreen | [fr] Full screen presents map content using the entire page. Full screen option is only available when the map is embedded into another page | [fr] Home / Initial extent | [fr] Zoom and pan map such that initial extent is visible |
| [fr] Help | [fr] Toggle open or closed the help dialog |


# [fr] Navigation Information

[fr] The navigation information is located in the lower right corner of the map and includes map scale and mouse cursor positioning coordinates.

[fr] The positioning coordinates can be in degrees minutes seconds (DMS), decimal degrees or meters depending on the projection and configuration used.


# [fr] Overview Map

[fr] The overview map displays a generalised view of the main map at a smaller scale. It can be found in the top right corner of the map.

[fr] Select-hold on the overview map and drag it to change the extent of the main map. Selecting the toggle arrow icon in the top right corner of the overview map will expand or collapse it.

# [fr] Legend

[fr] The Legend panel, accessed from the first option in the left menu, serves as a map legend and lists the layers available to display in the map.

[fr] Access the layer list by clicking on the layer button in the top, left of center portion of the viewer.

[fr] Each layer has some symbology associated with it. For simple layers with only one representative icon, the icon will be present next to the layer name. For complex layers (i.e. those with multiple symbols used per layer) the icon will show as a stack that can be toggled open and closed which is expanded beneath the layer name. WMS layers may optionally have a graphical legend defined, if one is present it will be displayed in the same drop down manner.

[fr] You can toggle the visibility of the layer at any time by selecting the checkbox next to each layer.

[fr] Note, if a layer fails to load correctly it will be identified by an error notice. Instead of the standard layer actions you can select to either reload the layer (this is particularly helpful if there is a temporary network connectivity issue) or remove the layer.

# [fr] Layer Settings

[fr] While hovering over a layer or tabbing to one, select the three dots icon to make the settings menu appear.

[fr] Note that some settings may not be available depending on various factors such as layer type or configuration.

|[fr] Name|[fr] Description|
|----|----|
| [fr] Metadata | [fr] Display relevant metadata in a slideout panel |
| [fr] Settings | [fr] Opens slideout panel where bounding box and queryable data can be toggled as well as the ability to adjust opacity amount |
| [fr] Datatable | [fr] Select to view data in table format |
| [fr] Show legend | [fr] Expands/Collapses the legend image stack |
| [fr] Zoom to layer boundary | [fr] Pans and zooms the map so that the layer boundary is in view |
| [fr] Reload | [fr] Reloads the layer |
| [fr] Remove | [fr] Remove the layer from the map and legend |
  

# [fr] Layer Submenu

[fr] In the Legend panel, 4 functions appear in a row at the top:

|[fr] Name|[fr] Description|
|----|----|
| [fr] Add Layer | [fr] Menu options to add a file or service based layer |
| [fr] Reorder Layers | [fr] Provides an alternative to the click-hold and drag reordering already available. When selected, layers are only reorderable by holding onto the handle icon next to each layer. Most useful for touch devices |
| [fr] Toggle Groups | [fr] Opens or closes all groups |
| [fr] Toggle Visibility | [fr] Enables or disables the visibility for all layers |

# [fr] Geolocation Search

### [fr] General Use

[fr] The geosearch component functions to allow users to search for places in Canada. When the geosearch icon in the left-hand menu is clicked, a panel is displayed with an input field for search keywords.

#### [fr] Supported Search Types

__[fr] Keyword search__: Type any keyword into geosearch to display a list of results that contains the keyword.

- [fr] each search result consists of: location name (with keyword highlighted), location province, and location type (lake, city, town, etc.)

- [fr] click on any individual result to mark its coordinates and zoom the map to center around this location

__[fr] FSA search__: A __forward sortation area (FSA)__ is a way to designate a geographical area based on the first three characters in a Canadian postal code. All postal codes that start with the same three characters are considered an __FSA__.

- [fr] a search using FSA will display a list of results in the vicinity of that area

- [fr] the very first result is a location of the FSA itself, click to zoom and center the map on the FSA

- [fr] example: type in __M3H__

__[fr] Latitude/Longitude search__: Search using lat/long coordinates to display a list of results in the vicinity of that map point.

- [fr] similarly to FSA search, the first result will be a location of those coordinates entered, click this to zoom and center the map on the map point

- [fr] lat/long search recognizes spaces, commas, semicolons, or vertical bars (|) to separate the co-ordinates

- [fr] example: type in __54.3733,-91.7417__

__[fr] NTS search__: __ National Topographic System (NTS)__ is a system used for providing general topographic maps of the country, producing details on landforms, lakes/rivers, forests, roads and railways, etc.

- [fr] the NTS is split into three major zones: "Southern zone" - latitudes between 40°N and 68°N, "Arctic zone" - latitudes between 68°N and 80°N, and the "High Arctic zone" - latitudes between 80°N and 88°N

- [fr] an NTS map number consists of a string containing a number identifying a map sheet, a letter identifying a map area, and a number identifying the scale map sheet

- [fr] likewise, the first result will be a location of the NTS map number, click to center map on this area

- [fr] example: type in __030M13__

#### [fr] Unsupported Search Types

__[fr] Street address__: Search using direct street addresses is not supported by geosearch.

- [fr] entering any valid street address should not return any results

### [fr] Geosearch Filtering

[fr] When searching for a location, a results panel will appear below the search box. This results panel contains two dropdown boxes that allow you to filter the search results by their __province__ and by their __type__ (lake, town, river, etc.). To the right of these two boxes is a __Clear Filters__ ![](datatable/clear.png) button, which when clicked clears the selected filter options.

[fr] At the bottom of the results panel, there is a checkbox labeled __visible on map__. Checking this box will further filter the results to only show locations that are currently visible on the map. Moving the map around or zooming in/out with this box selected will automatically update the results to display locations that are on the map.


# [fr] Basemap Selector

[fr] The basemap selector modifies the underlying basemap to provide a variety of geographical contexts.

__[fr] To open the basemap selector:__

[fr] Select the "basemaps" icon in the left-hand menu. You will be presented with one or more basemaps to choose from, separated by their projection types (e.g. Lambert vs. Web Mercator). The map will reload if you change projections, but not if you switch basemaps within the same projection.


# [fr] Export Image

[fr] You can export an image of the map and its visible layers along with; a legend, title, north arrow with scalebar, custom footnote<sup>*</sup>, and a timestamp<sup>†</sup>.

[fr] Select the "Export" down-arrow icon in the left-hand menu to get started. A panel will appear with an image of the map, and an option to enter a map title if desired.

[fr] If you'd like to add or remove sections of the exported image such as a legend, click on the options cogwheel in the lower-right corner of the panel. There you'll be able to select/deselect the sections to appear in the exported image.

[fr] Click on the download button in the bottom-left of the panel to retrieve the final generated map image.

<sup>*</sup>[fr] Please note that the footnote may not be available depending on the map.

<sup>†</sup>[fr] Please note timestamp is optional and may not be available depending on the map

  
# [fr] Data Table Panel

[fr] The __Data Table__ panel is shown above in its initial state.

[fr] In addition to scrolling data, it is possible to:

- [fr] Sort the data by selecting the header of the column. Multiple columns can be sorted by holding down shift before clicking a column header

- [fr] Open the detail panel corresponding to a given row by selecting the *Details* paper icon

- [fr] Position the map view to the location of the feature corresponding to a given row by selecting the *Zoom To Feature* magnifying glass icon

- [fr] Move the columns by selecting left and right arrows beside the column title to shift it left or right

- [fr] Filter the columns by numerical range, text, selection or date (if the configuration allows it). Changes in the table can also be made to reflect on the map by applying or clearing filters from map options, available in the top right corner of the data table

- [fr] Show and/or hide columns by clicking on the *Hide Columns* icon, in the top right corner of the data table.

- [fr] Navigate the table using a keyboard

  
[fr] The number of features in the layer is displayed in the top left corner below the layer title.

### [fr] Table Controls

[fr] This control group is located at the top of the data table and has the following options:

#### [fr] First row:

- [fr] Collapse
    - [fr] Condenses the table into a smaller panel so the map is viewable at the same time
- [fr] Expand
    - [fr] Expands the table into a wider panel that fits the available area over the map
- [fr] Minimize
    - [fr] Hides the data grid from the map view, accessible to expand from the left-hand menu bar
- [fr] Close Table
    - [fr] Closes the table
- Global Search
- [fr] Filter the table by making sure that the search term is a substring of the rows' data at one or more columns

  

#### Second row:

- [fr] Apply Table Filters To Map
    - [fr] update the map to display only the data that is visible in the table
    - [fr] if the data in the table already matches the data displayed on the map, this button will be disabled

- [fr] Toggle Column Visibilities
    - [fr] allows you to choose which columns you want to be visible on the table

- [fr] Show filters
    - [fr] toggling this option off will hide all column filters
    - [fr] unable to change column filters while toggled off
    - [fr] column filters remain applied even when toggled off

- [fr] Table Menu (More Options)
    - [fr] Clear Search and Filters
        - [fr] clear any existing filters and searches that may be applied to the table


### [fr] Sorting and Reordering

[fr] For each column in the data table, there may be a set of arrows associated with that column which represents how it can be sorted and reordered.

  __[fr] Column Sort__: Click on the column title to sort the columns in ascending/descending order (for numerical data) and alphabetical order (for text data).

- [fr] an upward arrow (![](datatable/sortAsc.png)) next to the column title indicates that the column data is being sorted in ascending order or alphabetical order

- [fr] a downward arrow (![](datatable/sortDesc.png)) next to the column title indicates that the column data is being sorted in descending order or reverse alphabetical order

- [fr] No arrow next to the column title means that there is no sort applied to current column

- [fr] sort multiple columns at once using shift + select column names

- [fr] how it works: the next selected column using tab will be sorted according to the last selected column's groups of identical data

__[fr] Column Reorder__: [fr] The two right/left arrows next to the column name are for reordering the columns.

- [fr] click the right arrow to swap a column with the one on the right

- [fr] the right arrow is disabled for the rightmost column of a data table

- [fr] click the left arrow to swap a column with the one on the left

- [fr] the left arrow is disabled for the leftmost column of a data table

### [fr] Filter data

[fr] Data can be filtered by column. A column is searchable if there is an input field under the title of the header. As mentioned previously, there are 4 types of filters:

-  __[fr] Text__: Character input field. Use the wildcard character (\*) to replace a sequence of zero or more characters (e.g. _* levo_ will find Charlevoix)

-  _[fr] Note, without a generic character, the search will find only the elements where the word searched begins the sentence._

-  __[fr] Number__: Input fields that accept only numbers

    - [fr] If a minimum and a maximum are defined the filter will search for a range

    - [fr] If, for example, only a minimum is defined, it will perform the operation _greater than_

-  __[fr] Selection__: Drop-down menu which allows the selection of one or more predefined values

-  __[fr] Date__: Similar to the numeric field but uses dates

[fr] Some filters are not editable; Their value can not be changed. They are represented by a dashed line below their value.
  

### [fr] Global Search

[fr] This control, which is found in the upper right corner of the data table, allows to filter the data table globally.

- [fr] If you enter the _Brook_ value, the data table will select the data that contains _Brook_ at any location (e.g. _Corner Brook_ will be selected)

  
### [fr] Keyboard Navigation

[fr] Use `Tab` to go through each of the table controls, and to navigate between the three major table groups:

- [fr] Column Headers

- [fr] Column Filters

- [fr] Table Body

[fr] Once any major group is focused on, you can use the arrow keys to navigate through the table cells for that component. Doing this will highlight the currently focused table cell.

[fr] To access the buttons and/or input fields within a cell, make sure the cell is highlighted (by using arrow keys as above) and use `Tab` to navigate between its children.

# [fr] Accessibility

[fr] The Reusable Accessible Mapping Platform is designed to be used in a context that is WCAG 2.1 "AA" compliant. Due diligence for full compliance is the responsibility of the page owner.

#### [fr] Keyboard Navigation

[fr] Keyboard functionality is provided as an alternative for users who are unable to use a mouse. Use the Tab key to navigate forward to links and controls on the page. Press Shift+Tab to go back one step. Use the Enter or Spacebar keys to activate links and controls.

[fr] When the map gains focus, a crosshairs marker is displayed in the center of the map. Use the __arrow__ keys to move the map and __+__ / __-__ keys to zoom in and out. Press __Enter__ to select a feature under the crosshairs and display associated data in the Details panel.
