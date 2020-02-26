# Appbar

(this content was lifted from the Appbar PR notes)

Any arbitrary vue component can be added to the appbar, the config for an item is

```
{
    id: "my-appbar-button",
    component: MyAppbarButton
}
```

If an item is supplied without a component it is assumed to be a fixture (that we've developed), and will pull the appbar button from the named fixture folder.

```
{
    id: "legend"
}
```
pulls the appbar button from `legend` and registers it under `legend-appbar-button`.

Similarly there is a Divider component that can be used by specifying an item with the `divider` id.