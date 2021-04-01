# Tooltips

The `tooltip` component will show the desired text in a bubble, on hover or on navigation with the keyboard. It is also used as `aria-labelledby` to help with accessibility.

## Use

The component only needs the text you want to show, and optionally a position. Position can be `top`, `bottom`, `left` or `right`. By default the position is `top`.

The tooltip should be the next sibling of the button/control/etc.

```html
<div class="relative">
    <button>X</button>
    <tooltip position="bottom">Close</tooltip>
</div>
```
