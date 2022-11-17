# Datatable

## Components
The datatable panel contains multiple different components. Listed below are the most important ones, along with a brief description of what they do:

### The Grid
The grid is the main component of the datatable. It contains a row for each feature on the layer. The grid columns correspond to the attributes that belong to the features.
**Note**: features will only appear on the grid if they are currently visible

### Global Search and Column Filters
The global search and column filters allow the user to display smaller subsets of data within the table. See the [global search](#Global-Search) and [column filters](#Column-Filters).

### Scroll and Filter Status
The scroll and filter status is located in the upper left corner of the datatable. It displays the range of rows that are currently visible on the table, and the total number of records that are in the table. If any filters are applied to the grid, the number of filtered rows will be displayed instead of the total number. The range of displayed rows updates as the user scrolls up or down in the table.

### Zoom and Details Buttons
Each row in the datatable contains a zoom and details button. The zoom button centers the map on the feature in the row, and the details button opens the details panel of the feature.

## Controls
Various controls have been added to the datatable for user convenience.

### Show/Hide Columns
A dropdown menu located in the upper right corner of the datatable, labeled `Columns`. This allows the user to hide unwanted columns from the table. Columns that are visible have a checkmark displayed beside them.

### Show/Hide Column Filters
A button located in the upper right corner of the datatable, labeled `Filters`. Pressing this button toggles the [column filters](#Column-Filters) on and off.
**Note**: turning the column filter display off will not remove any column filters currently applied to the table.

### Toggle Extent Filter
A button located in the upper right corner of the datatable. When enabled, the table only displays features within the current extent.

### Clear Search and Filters
A button located in the upper right corner of the datatable. This clears the global search and removes all filters currently applied to the columns.

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
The datatable currently supports four different types of column filters. If the datatable is closed, any column filters that are applied to the table will be re-applied when it is re-opened.

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
