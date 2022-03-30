TODO: revisit this once the appbar has been enhanced (#817)

# Appbar

The Appbar is used as a starting point for functionality in the app. Its main use is buttons that open and close/minimize panels for fixtures but it can do whatever you want a component to do (assuming it fits in the appbar properly).

## Configuration

Any arbitrary vue component can be added to the appbar, the config for appbar is as follows:

```js
{
    items: ["my-appbar-button"]
}
```

An item can be supplied as simply a component name or as an object indicating the component's name and any options to be passed to that component as props:

```js
{
    items: [{
        id: "my-other-appbar-button-with-options", 
        options: { colour: "red" }
    }]
}
```

The `-appbar-button` suffix is optional and can be omitted. If a `gazebo` id is provided, the Appbar will automatically check if a `gazebo-appbar-button` component exist and use that one instead. This is a convenience feature to make config less verbose:

```js
{
    items: [
        "gazebo"
    ]
}
```

There is also the ability to configure temporary appbar buttons, these buttons are shown when a panel is opened and disappear when the related panel is closed. Again, the `-appbar-button` suffix is optional and can be omitted when specifying the appbar component id. The config is used as follows:

```js
{
    temporaryButtons: [
        "legend",
        { panelId: "settings-panel", appbarItem: "settings" }
    ]
}
```

The first item in the array above (`legend`) will link `legend-panel` to `legend-appbar-button`. The second item links `settings-panel` (panel-id) to the appbar-item described like it would in `items` in this case `settings` or `settings-appbar-button`.

Using what we've learned, the whole config for an appbar could be:

```js
{
    items: [
        "my-appbar-button",
        { id: "my-other-appbar-button-with-options", options: { colour: "red" } },
        "gazebo"
    ]
}
````

Lastly, there is a Divider component that can be used by specifying an item with the `divider` id. As its name suggests, this component just adds a divider in between groups of appbar buttons.

Lets say we want to separate the `gazebo` button from the other two:

```js
{
    items: [
        "my-appbar-button",
        { id: "my-other-appbar-button-with-options", options: { colour: "red" } },
        "divider",
        "gazebo"
    ]
}
```

And, you guessed it, you can register your own `my-fancy-divider` component and use it instead:

```js
{
    items: [
        "my-appbar-button",
        { id: "my-other-appbar-button-with-options", options: { colour: "red" } },
        "my-fancy-divider",
        "gazebo"
    ]
}
```

## Making an appbar button

Most things on the appbar will want a button that has an icon, a tooltip, and does something when clicked. For this you can use the `appbar-button` helper component:

```html
<template>
    <appbar-button :onClickFunction="yourFunctionHere" :tooltip="Tooltip text here, can be a string in 'quotes' or javascript that returns a string">
        <!-- whatever you want the button to show goes here, it will usually be an svg -->
    </appbar-button>
</template>
```
