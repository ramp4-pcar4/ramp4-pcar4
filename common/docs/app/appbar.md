# Appbar

The Appbar is used as a starting point for functionality in the app. Its main use is buttons that open and close/minimize panels for fixtures but it can do whatever you want a component to do (assuming it fits in the appbar properly).

## Configuration

Any arbitrary vue component can be added to the appbar, the config for appbar is as follows:

```json
{
    "items": ["my-appbar-button"]
}
```

An item can be supplied as simply a component name or as an object indicating the component's name and any options to be passed to that component as props:

```json
{
    "items": [{ "id": "my-other-appbar-button-with-options", "options": { "colour": "red" } }]
}
```

The `-appbar-button` suffix is optional and can be omitted. If a `gazebo` id is provided, the Appbar will automatically check if a `gazebo-appbar-button` component exist and use that one instead. This is a convenience feature to make config less verbose:

````json
{
    "items": [
        "gazebo"
    ]
}

Using what we've learned, the whole config for an appbar could be:

```json
{
    "items": [
        "my-appbar-button",
        { "id": "my-other-appbar-button-with-options", "options": { "colour": "red" } },
        "gazebo"
    ]
}
````

Lastly, there is a Divider component that can be used by specifying an item with the `divider` id. As its name suggests, this component just adds a divider in between groups of appbar buttons.

Lets say we want to separate the `gazebo` button from the other two:

```json
{
    "items": [
        "my-appbar-button",
        { "id": "my-other-appbar-button-with-options", "options": { "colour": "red" } },
        "divider",
        "gazebo"
    ]
}
```

And, you guessed it, you can register your own `my-fancy-divider` component and use it instead:

```json
{
    "items": [
        "my-appbar-button",
        { "id": "my-other-appbar-button-with-options", "options": { "colour": "red" } },
        "my-fancy-divider",
        "gazebo"
    ]
}
```
