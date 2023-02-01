# Tooltips

We use [vue-tippy](https://github.com/KABBOUCHI/vue-tippy) for tooltips. All the documentation is there but for a basic use case:

```html
<button content="Tooltip content" v-tippy>Hello</button>
```

or

```html
<button :content="t('translation.string.path')" v-tippy="{placement: 'left'}">Hello</button>
```
