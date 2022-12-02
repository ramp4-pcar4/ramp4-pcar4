TODO: this needs to be updated to reflect changes made by https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/817

# Appbar

The Appbar is used as a starting point for functionality in the app. Its main use is buttons that open and close/minimize panels for fixtures but it can do whatever you want a component to do (assuming it fits in the appbar properly).

## Configuration

The items array can contain Panel IDs as strings or Appbar Item Configs. The below config will add a button for the `legend` panel as well as the component `my-other-appbar-button`. The `my-other-appbar-button` must be registered globally, and the `legend` panel must be registered with a button specified ([details here](panels.md)).

```js
{
    items: [ "legend",
        {id: "my-other-appbar-button"}]
}
```

Appbar Item Configs can also take options:

```js
{
    items: [{
        id: "my-other-appbar-button-with-options", 
        options: { colour: "red" }
    }]
}
```

Using what we've learned, the whole config for an appbar could be:

```js
{
    items: [
        "legend",
        { id: "my-other-appbar-button", options: { colour: "red" } },
        "gazebo"
    ]
}
```

Lastly, the appbar can divide buttons into groups. This is done by specifying `items` as a 2d array. Each sub-array will have a divider placed between them.

Lets say we want to separate the `gazebo` button from the other two:

```js
{
    items: [
        ["legend",
        { id: "my-other-appbar-button", options: { colour: "red" } }],
        ["gazebo"]
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
