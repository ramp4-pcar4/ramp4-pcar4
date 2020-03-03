# Appbar

The Appbar is used as a starting point for functionality in the app. Its main use is buttons that open and close/minimize panels for fixtures but it can do whatever you want a component to do (assuming it fits in the appbar properly).

## Configuration

Any arbitrary vue component can be added to the appbar, the config for an item is

```json
{
    "id": "my-appbar-button",
    "component": MyAppbarButton
}
```

If an item is supplied without a component it is assumed to be a fixture (that we've developed), and will pull the appbar button from the named fixture folder.

```json
{
    "id": "legend"
}
```

The above pulls in the appbar button from `legend` and registers it under `legend-appbar-button`.

Using what we've learned, the whole config for an appbar could be:

```json
[
    {
        id: "my-appbar-button",
        component: MyAppbarButton
    },
    {
        id: "legend"
    },
    {
        id: "my-second-button"
        component: FancyButton
    }
]
```

Lastly, there is a Divider component that can be used by specifying an item with the `divider` id. As its name suggests, this component just adds a divider in between groups of appbar buttons.

Lets say we want to separate the `legend` button from the other two;

```json
[
    {
        id: "legend"
    },
    {
        id: "divider"
    },
    {
        id: "my-appbar-button",
        component: MyAppbarButton
    },
    {
        id: "my-second-button"
        component: FancyButton
    }
]
```
