# Focus List

The Focus List directive handles keyboard navigation for lists of items using the arrow keys. This helps reduce the number of tabs (or key presses in general) to get to where you need to go in the app.

## Navigating the lists

`Up` and `down` arrow keys move the selection up and down the list respectively. (`Left` and `right` for horizontal lists)

`Tab` as normal, will move focus to the next "tabbable" element. However, `focus-item`s are not tabbable, and sub-items are only tabbable if their parent `focus-item` is selected/focused.

So if there is not selected `focus-item` or the `focus-item` has no sub items, `tab` will move away from the list. If there is a tabbable sub-item, then `tab` will select that.

`Enter` will click the currently selected `focus-item` as it would with a normally focused button.

`Escape` will remove `focus-item` selection and move focus back to the main list.

## Basics

To use this directive add `v-focus-list` to your "list" element and `focus-item` to each item within the list that you want selectable.

```html
<div v-focus-list>
    <button focus-item></button>
    <button focus-item></button>
    <button focus-item></button>
    <button focus-item></button>
</div>
```

The directive by default, will allow navigation with the up and down arrows. To make your list horizontal, and navigable by left and right arrows, set `v-focus-list="'horizontal'"` note the `"` and `'` quotes

```html
<div v-focus-list="'horizontal'">
    ...
</div>
```

## Styling

We supply a default styling for focused items using the class `default-focus-style`.

```html
<div v-focus-list>
    <button focus-item class="default-focus-style"></button>
    <button focus-item class="default-focus-style"></button>
    <button focus-item class="default-focus-style"></button>
    <button focus-item class="default-focus-style"></button>
</div>
```

This will give the focus-item a blue outline when selected and active, and a grey outline when selected but the user is focused on another part of the app.

### Custom

Here are some guidelines to make writing your own focus styling easier:

-   The selected focus-item has the `focused` class, selectable with `.focused`
-   Focus-lists are given the `focus-list` attribute (since directive attributes only stick around with binding), this is selectable with `[focus-list]`
-   The selected focus-item is active if the `[focus-list]` has `:focus`
-   There is no selected `[focus-item]` if the `[focus-list]` does not have `[aria-activedescendant]`

If your styles are not scoped you should use a class so that only certain `focus-item`s get the styling.

An example in plain css:

```css
[focus-item].focused.custom-focus-style {
    color: red;
}
[focus-list]:focus [focus-item].focused.custom-focus-style {
    color: blue;
}
```

The focus item will have text and such coloured red when focused but not active, and will be coloured blue when it is focused and active.

## Other things of note

-   The focus list directive can handle lists within lists.
-   Clicks are handled as well and maintains consistency between the two control schemes.
