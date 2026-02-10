# Details Fixture

The details fixture adds a panel to RAMP that displays in-depth information about any specific data point on the map. It can be opened by performing an identify query either on the map or through the RAMP API.

## Panels
The details fixture consists of three sections:

1. The __Layer List__ is the vertical column of icons along the left side of the panel. It contains a list of map layers participating in the identify and displays how many results were found for each layer. Clicking on one of these icons will display results for that layer.
2. The __Feature Info__ view displays information about a single result item. This screen will look different depending on the format of the information returned by the identify query. This is also the screen that can be customized using custom templates (see below). Scroll controls can move the view to other results in the layer. The "See List" button will switch to __List View__.
3. The __List View__ contains a list of all results found for the selected layer. Clicking on an item in this list will bring you to the __Feature Info__ screen.

## Details Configuration

### Fixture Settings

The fixture config supports a few global settings, such as a panel width and a [panel teleport target](../../api-guides/panels#teleporting-panels). 

The default Vue template for each detail [format](https://ramp4-pcar4.github.io/ramp4-pcar4/main/docs/api-tech-docs/enums/geo_api_geo_defs.IdentifyResultFormat.html) type can be specified. New templates must be [registered on the instance](#creating-a-custom-template). If not provided, the out-of-box RAMP templates will be used.

```js
fixtures: {
    details: {
        panelWidth: 450,
        templates: {
            esri: 'MyCustomDefaultEsriTemplate',
            html: 'MyCustomDefaultHtmlTemplate'
        }
    }
}
```

### Layer Settings

Since content can vary per layer, each layer config can provide details configurations under its own fixture configuration object.

- `name` (string): will override the name field used on the default ESRI template. The field defined by the layer is used if not provided.
- `template` (string): a [custom template ](#creating-a-custom-template) to use for this layer.
- `priority` (integer): will influence if this layers result is first shown on a fresh identify. The value is 50 if not provided, lower numbers have higher priority.
- `fields` (array of objects): can contain overriding settings for individual attributes on the default ESRI template. Object properties are
  - `field` (string): matches the layer field name that this object is targeting.
  - `alias` (string): specifies a different field name alias for the details display.
  - `visible` (boolean): controls if field will show in the display. Defaults to `true`.

```js
layers: [
    {
        id: 'sample',
        url: 'https://fake.ca/layer',
        layerType: 'esri-feature',
        fixtures: {
            details: {
                priority: 1,
                name: 'fancy_field',
                fields: [
                    { field: 'secret_field', visible: false },
                    { field: 'badly_worded_field', alias: 'A Nice Name' }
                ]
            }
        }
    }
]
```

## Zoom Button Configuration

It is possible to change the icon for the zoom button in the default ESRI details template by using the system variable `zoomIcon`. There are two built-in icons: `globe` and `magnify`. If you would like to customize the icon, the variable may be set to any emoji or SVG. Providing this value with a URL will not fetch the remote image.

Note that if the grid fixture is added, the zoom icon will be modified there as well.

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

## Creating a Custom Template

If you don't want to use the provided templates for your layer results, you can create your own. All you need to do is create a template Vue component on the RAMP instance, and then add the layer-to-template binding to the RAMP configuration file.

The example below explains how to create a basic template for the details panel.

### Example: Creating a Custom Template

__1.__ The first thing you should do is create the Vue component that you want to use as the template. You can do this in various ways, but this example will make use of template literals. If you need to include Javascript that contains more than a single expression, use the `methods` option, as shown below.

To keep this example simple, the template created here will display the name of the point when it is clicked on and call a method to display the point's symbol, if it has one.

```js
rInstance.$element.component('My_Custom_Component', {
        props: ['identifyData'],
        template: `
            <div>
                <span>The feature name is: {{this.identifyData.data['name']}}</span>
                <div v-html="displaySymbol()"/>
            </div>
        `,
        methods: {
            displaySymbol() {
                if (this.identifyData.data['Symbol']) {
                    return `
                        <span>The feature symbol is: ${this.identifyData.data['Symbol']}</span>
                    `;
                }
            }
        }
    }
});
```

__Note:__ it is important that you include the `identifyData` prop in the component since the details fixture will populate it with the results from the identify query. The `identifyData` prop is necessary in order to access the results. The property will be an [IdentifyItem](https://ramp4-pcar4.github.io/ramp4-pcar4/main/docs/api-tech-docs/interfaces/geo_layer_support_identify.IdentifyItem.html).


__2.__ Once the custom component has been created, you will want to add your layer to RAMP and set the new component as a custom template in the details fixture. You can do both of these in the configuration file:

```js
const rInstance = RAMP.createInstance(document.getElementById("map"), {
    map: { ... },
    layers: [
        {
            id: 'My_New_Layer',
            layerType: 'esri-feature',
            url: 'http://my-website.example/path/to/esri/layer',
            fixtures: {
                details: {
                    template: 'My_Custom_Template'
                }
            }
        }
    ]
});
```

As shown in the config snippet above, template bindings should be placed under the layer's details fixture configuration. When the details panel first loads, it looks for any template bindings in here. Note that the `template` should match the name of the custom component that you registered on the host page.

After completing these two steps, the custom component should now be displayed when requesting data from `My_New_Layer`.