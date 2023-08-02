# Geosearch

The Geosearch component is contained inside a panel in the application. Geosearch makes use of the [Geogratis services](https://geogratis.gc.ca/), in particular the [Geolocation service](https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/web-services/geolocation-service/17304) and the [Geoname service](https://www.nrcan.gc.ca/maps-tools-and-publications/maps/geographical-names-canada/application-programming-interface-api/9249).

## Component Breakdown

The Geosearch component can be broken down into multiple parts: search bar, Geosearch filters, and a list of returned Geosearch results.

### Geosearch Bar:

In the header of the Geosearch panel, there is a search bar which allows users to search for various locations in Canada using any of the supported search types mentioned below. To the right of the search bar is the usual pin and close panel buttons.

![](/geosearch-search.png)

#### Supported Search Types

**Keyword search**: Type any keyword into Geosearch to display a list of results that contains the keyword.
- each search result consists of: location name (with search keyword highlighted), location province, and location type (lake, city, town, etc.)
- street addresses are prioritized in the list of results
- click on any individual result to mark its coordinates and zoom the map to center around this location

**FSA search**: A **forward sortation area (FSA)** is a way to designate a geographical area based on the first three characters in a Canadian postal code. All postal codes that start with the same three characters are considered an **FSA**.
- a search using FSA will display a list of results in the vicinity of that area
- the very first result is a location of the FSA itself, click to zoom and center the map on the FSA
- example: type in **M3H**

**Latitude/Longitude search**: Search using lat/long coordinates to display a list of results in the vicinity of that map point.
- similarly to FSA search, the first result will be a location of those coordinates entered, click this to zoom and center the map on the map point
- lat/long search recognizes spaces, commas, semicolons, or vertical bars (|) to separate the co-ordinates
- example: type in **54.3733, -91.7417**

**NTS search**: **National Topographic System (NTS)** is a system used for providing general topographic maps of the country, producing details on landforms, lakes/rivers, forests, roads and railways, etc.
- the NTS is split into three major zones: "Southern zone" - latitudes between 40°N and 68°N, "Arctic zone" - latitudes between 68°N and 80°N, and the "High Arctic zone" - latitudes between 80°N and 88°N
- an NTS map number consists of a string containing a number identifying a map sheet, a letter identifying a map area, and a number identifying the scale map sheet
- likewise, the first result will be a location of the NTS map number, click to center map on this area
- example: type in **030M13**

### Geosearch Filters:

The row of options immediately below the search bar contains two dropdown boxes that allow you to filter the search results by their **province** (Alberta, British Columbia, Ontario, etc.) and/or **type** (lake, town, river, etc.). To the right of these two filters is a **Clear Filters** button, which clears all existing selected filter options.

![](/geosearch-top-filters.png)

Near the bottom of the Geosearch panel, there is a checkbox labeled **visible on map**. Checking this box will filter the results to only show locations that are visible in the current map extent. Moving the map around or zooming in/out with this box selected will be reflected by updating the results to display locations within the new map extent.

![](/geosearch-bottom-filters.png)

### Geosearch Results:

When searching for a location, a list of matched results with all appropriate filters applied (map extent, province, type) will be displayed. This takes up the main body of the Geosearch panel. There is an upper limit of 100 results possible to be displayed. If no matching results are found, then a message will appear in place of the results to inform the users.

![](/geosearch-results.png)

## Configuration

The Geosearch panel has multiple options that can be adjusted through the configuration file. Though the Geosearch fixture is designed with the GeoGratis API in mind, a `serviceUrls` object with the following properties can define alternate URLs for the lookup service:

- `geoLocateUrl: string`, endpoint for the Geolocation service
- `geoNameUrl: string`, endpoint for the Geoname service
- `geoProvinceUrl: string`, endpoint for province codes provided by the Geoname service
- `geoTypesUrl: string`, endpoint for type codes provided by the Geoname service

Also, a `settings` object enables additional fixture customization:

- `categories: string[]`, filter by [concise type](https://geogratis.gc.ca/services/geoname/en/codes/concise.json) or street address ('ADDR') when using the Geoname service
- `sortOrder: string[]`, order search results based on category types, where missing types are appended to the bottom of the sorted list
- `disabledSearchTypes: string[]`, omit results for given [search types](#supported-search-types) (`LAT/LNG`, `FSA`, and `NTS`)
- `maxResults: number`, specifies the maximum number of results from a query
- `officialOnly: boolean`, results only use official names for geographic names

An example of a configured Geosearch panel is below

```
geosearch: {
    settings: {
        categories: ['CITY', 'TOWN', 'VILG', 'ADDR'],
        sortOrder: ['TOWN', 'CITY'],
        disabledSearchTypes: ['FSA'],
        maxResults: 20
    }
}
```