# Panels

## Overview

Panels are essentially containers used to display all types of information in in RAMP4. They take up the full height of the page while their width is configurable, except on mobile screens, where panels always take up 80% of the available space and only one can be displayed at a time.

For non-mobile screens, when more than one panel is open:
* panels stack horizontally, aligned to the left.
* the stack takes up the full width of the screen, so there will be as many panels visible as there is space for.
* when a panel is opened while there is no more space, the first panel on the left that is not pinned is hidden, but not removed from the stack.
* when a panel is closed, a last panel to be hidden (if exists) is brought back.

Panels can also have multiple screens, and the screen to be displayed can be adjusted via the [API](#the-panel-api). Each screen has the following three sections:
* header - this is where the panel title and control buttons go. Note that there is also a controls subsection within the header where all custom controls will go.
* content - the main "body" of the panel, where all the content goes.
* footer - this is for any content you want to appear at the bottom of the panel.

Detailed instructions for how to customize each section can be found in the [creating your own panel](#creating-your-own-panel) section.

## Controls

Each panel has a number of buttons that can be used to control various aspects of panel behaviour. You can even create your own panel control buttons (see the [creating your own panel](#creating-your-own-panel) section for how to do this). However, RAMP also provides a number of "out of the box" panel control buttons, which are listed below:
* close - closes the panel i.e. removes it from the stack.
* back - closes the currently visible panel and displays the previously visible panel (if it exists). Only available for mobile screen sizes by default.
* minimize - minimizes the panel i.e. hides the panel but keeps it in the stack. This button is by default only enabled for panels that have appbar buttons that are not defined in the appbar's confguration. Read the [appbar documentation](../using-ramp4/fixtures/appbar.md) for more details.
* pin - pins the panel in place, which prevents the panel from being hidden when the stack runs out of space. Therefore, if the leftmost panel is pinned and the stack runs out of space, the pinned panel stays visible and the next most leftmost panel is hidden.
* left/right - swaps position with the panel to the left/right.
* expand/collapse - expands the panel to cover the remaining width in the stack when in "expand mode", and collapses panel to its original width when in "collapse mode". This button is by default only enabled for the grid panel.

## PanelInstance Object

A panel in RAMP4 is represented by a `PanelInstance` object. The object has the following properties:
* `id` - (readonly) a string representing the ID of the panel.
* `screens` - (readonly) an object representing the screens to be displayed inside the panel. Each key represents a screen ID, while each value represents the screen itself, which must be one of the following types:
    - `string` - a path to a `.vue` file that contains the Vue component for the screen.
    - a Vue component object
    - a Vue component constructor function
    - a Vue `AsyncComponentFunction`

    More information about the above options can be found in the [Vue documentation](https://vuejs.org/guide/introduction.html). Additionally, a few basic examples are presented in the [creating your own panel section](#creating-your-own-panel) below.
* `loadedScreens` - (readonly) a list of strings, where each string is a screen ID (a key in the `screens` object), representing the screens that are ready to be rendered on the page. If a screen is not ready to be rendered, a loading spinner is shown instead of the screen's contents.
* `alertName` - (readonly) the i18n key for what the panel should be referred to when using RAMP with screen readers. Please see the [localization documentation](../using-ramp4/config-language.md) for details.
* `controls` - an object with string keys representing a control and boolean values representing whether the control is to be enabled or not. Note that none of the default controls can be enabled/disabled through this object, except the expand control.
* `button` - an object representing the appbar button for this panel. It has the following properties:
    - `icon` - an embedded SVG tag representing the icon for the appbar button.
    - `tooltip` - the i18n key for the text to display when hovering over the button. Please see the [localization documentation](../using-ramp4/config-language.md) for details.
* `route` - an object that represents the current screen to be displayed on the panel. It has the following properties:
    - `screen` - the screen ID to display. This must be a key in the `screens` object.
    - `props` - the props to pass in to the panel screen.
* `style` - an object that represents the styling for the panel. Each key is a CSS property, and each value is the value of that property.
* `expanded` - (readonly) a boolean representing whether the panel is currently expanded to take up the full width of the stack.
* `isLeftMostPanel` - (readonly) a boolean representing whether the panel is the leftmost in the stack.
* `isRightMostPanel` - (readonly) a boolean representing whether the panel is the rightmost in the stack.
* `isOpen` - (readonly) a boolean representing whether the panel is currently open.
* `isPinned` - (readonly) a boolean representing whether the panel is currently pinned.
* `isVisible` - (readonly) a boolean representing whether the panel is currently visible.
* `width` - (readonly) the width of the panel.

Additionally, the `PanelInstance` Object has the following methods:
* `registerScreen(id: string)` - loads panel screen components for the specified screen. This should be called just before the screen is to be shown for the first time.
* `isScreenLoaded(id: string)` - returns a boolean indicating whether the specified screen is loaded and ready for display.
* `open(value?: string | { screen: string; props?: object })` - opens the panel. If a screen is specified, that is the one that will be shown.
* `close()` - closes the panel. This means that the panel is no longer in the stack, but its `PanelInstance` object is still accessible for future use.
* `minimize()` - minimizes the panel.
* `move(direction: 'left' | 'right')` - moves the panel by one position in the specified direction (left or right), if possible.
* `remove()` - removes the panel from the stack as well as from the entire app. Unlike the `close()` method, the `PanelInstance` object no longer accessible.
* `toggle(value?: boolean | { screen: string; props?: object; toggle?: boolean })` - toggle open/close panel if no value provided, force toggle panel if value specified (open if `toggle` is true, `close` if toggle is false), or toggle panel on specified screen if provided.
* `toggleMinimize(value?: boolean | { screen: string; props?: object; toggle?: boolean })` - toggle panel's minimize state if no value provided, force toggle panel's minimize state if value specified, or toggle panel's minimize state on specified screen if provided.
* `pin(value?: boolean)` - pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
* `show(value: string | { screen: string; props?: object })` - shows the specified screen in the panel, using any props defined in the `props` object. If the specified screen has not been registered yet, the method will first register the screen before showing it.
* `setStyles(style: object, replace = false)` - sets the styles of the panel by using a provided CSS styles object.
* `expand(expand?: boolean)` - expands/collapses/toggles the expand state of the panel. Panels set to expand fill empty space.

All of the above methods except `registerScreen` and `isScreenLoaded` are proxies to the [Panel API](#the-panel-api) methods of the same name.

## Configuration

One of the top level sections of the config is `panels`, where you may include the following properties:
*  `open` - an array of objects that describes which panels to open on startup. Each object has the following properties:
    - `id` - the ID of the panel to open. The following out-of-the-box panel ID's are currently supported: `basemap`, `export`, `geosearch`, `help`, `layer-reorder`, `legend`, `notifications`, and `wizard`. Additionally, panel ID's for any custom-made panels are also supported. However, note that only panels without props can currently be opened on startup via the config. Other panels can be opened on startup, but only via the [API](#the-panel-api).
    - `screen` - the ID of the screen to show on the panel.
    - `pin` - a boolean indicating whether to pin the panel as well (in addition to opening).
* `reorderable` - a boolean indicating whether the panel reorder controls are enabled.

## Creating Your Own Panel (using Vue)

Naturally, you may want to display your own custom information on a panel in RAMP. A prerequisite to achieving this is to know/learn [Vue](https://vuejs.org/).

Steps for creating your own panel and displaying it in the panel stack are detailed below.

### Step 1: Create Vue template for panel screen(s)

This can be done in three ways. Examples for how to use each method are shown below. To learn the specific details of how to use each method, please read the [Vue documentation](https://vuejs.org/guide/introduction.html).

#### Method 1: Vue `render()` function

```js
import { h, markRaw, resolveComponent } from 'vue';

const screen = {
    props: ['panel'],
    data() {
        return {
            title: 'My Panel Title',
            count: 0
        };
    },
    render() {
        const panelScreen = resolveComponent('panel-screen');
        return h(
            panelScreen,
            {
                panel: this.panel
            },
            {
                header: () => h('span', this.title),
                content: () =>
                    h(
                        'div',
                        {
                            class: 'flex flex-col items-center'
                        },
                        [
                            h(
                                'button',
                                {
                                    class: 'bg-blue-500 hover:bg-blue-700 font-bold text-white py-8 px-16',
                                    onClick: () => (this.count += 1)
                                },
                                [h('span', this.count)]
                            ),
                        ]
                    )
            }
        );
    }
```

#### Method 2: Vue component objects

```js
const screen = {
    props: ['panel'],
    data() {
        return {
            title: 'My Panel Title',
            count: 0
        };
    },
    template:
     `
        <panel-screen :panel="this.panel">
            <template #header>
                <span>{{ this.title }}</span>
            </template>
            <template #content>
                <div class="flex flex-col items-center">
                    <button class="bg-blue-500 hover:bg-blue-700 font-bold text-white py-8 px-16" onClick="() => (this.count += 1)">
                        <span>{{ this.count }}</span>
                    </button>
                </div>
            </template>
        </panel-screen>
     `
}
```
#### Method 3: `.vue` file

```Vue
<template>
    <panel-screen :panel="panel">
        <template #header>
            <span>{{ title }}</span>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
                <button class="bg-blue-500 hover:bg-blue-700 font-bold text-white py-8 px-16" onClick="() => (this.count += 1)">
                    <span>{{ count }}</span>
                </button>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { PanelInstance } from '@/api';

export default defineComponent({
    name: 'MyScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>
        }
    },
    data() {
        return {
            title: 'My Panel Title',
            count: 0
        };
    }
});
</script>

<style lang="scss" scoped></style>
```

A few notes regarding writing a panel screen template:
* The template must have the `panel-screen` component as its root. This is a globally registered component within RAMP so you do not need to import it from anywhere.
* You need to have a `panel` prop in your template to pass into the `panel-screen` component.
* There are four "slots" in the `panel-screen` component where you can pass in content from your template: header, content, footer, and controls. These sections have been described in the [overview](#overview) above.
* For the `.vue` file method, the syntax in the example above is not required. In fact, any method of writing a Vue single file component will work. For example, you may wish to write the component in Composition API with the `<script setup>` syntax.

### Step 2: Register your panel

Before your panel is ready to use, you need to register it via the `register` method in the [API](#the-panel-api). Specifics of the method can be seen in the API. Shown below are the ways you would register the panel for each type of panel screen template creation method in step 1.

#### Method 1: `render()` function

```js
const panelConfig = {
    id: 'myPanel',
    config: {
        screens: { 'screen1': markRaw(screen) },
        button: {
            icon: `<span>P</span>`,
            tooltip: 'My panel'
        },
        alertName: 'My panel',
        expanded: true,
        style {
            'background-color': 'red'
        }
    }
};

myRAMPInstance.panel.register(panelConfig);
```

#### Method 2: Vue component objects

You need basically the same code as above, except the screen does not need to be wrapped inside `markRaw`.

#### Method 3: `.vue` file

```js
// in a different JS/TS file

// import component from .vue file
import MyScreenV from './screen.vue';

// register the panel
const panelConfig = {
    id: 'myPanel',
    config: {
        screens: { 'screen1': markRaw(MyScreenV) },
        button: {
            icon: `<span>P</span>`,
            tooltip: 'My panel'
        },
        alertName: 'My panel',
        expanded: true,
        style {
            'background-color': 'red'
        }
    }
};

myRAMPInstance.panel.register(panelConfig);
```

### Step 3: Use the API to do stuff with your panel

Your panel is now ready for use! You should now leverage the [API](#the-panel-api) to perform different functions of your choice. For example, you can display the panel on the screen with the `open` method, pin the panel on the screen with the `pin` method, and so on.


## Creating Your Own Panel (using HTML)
Alternatively, you can display your own custom information within a panel using plain HTML. Steps for creating your own panel, using HTML, and displaying it in the panel stack are detailed below

### Step 1: Create HTML content (for both languages)
If you want the content of your custom panel to switch on a language change, you must describe the content you want to display for each language. This can be done in two ways: using strings containing the HTML content, or creating `HTMLElement` objects. Examples of each method are shown below.

### Method 1: String containing HTML

```js
const englishContent = "<div> This is my English content </div>"
const frenchContent = "<div> Ceci est mon contenu en français </div>"
```


### Method 2: Defining HTML object
```js
const englishContent = document.createElement("div");
const englishText = document.createTextNode("This is my English content");
englishContent.appendChild(englishText);

const frenchContent = document.createElement("div");
const frenchText = document.createTextNode("Ceci est mon contenu en français");
frenchContent.appendChild(frenchText);
```

### Step 2: Register your panel
Before your panel is ready for use, you need to register it via the `registerHTML` method in the [Panel API](#the-panel-api). Shown below is the way you would register the panel for either of the panel screen template creation methods in step 1.

Note that, for `i18nMap`, the keys of this object should be language strings, and the values should be objects of keys that map to strings of the respective language. The keys within the objects for each language are what should be used for the `alertName`, as well as any other content within the panel. Currently the only language strings supported are 'en' and 'fr'.

```js
const htmlContent = {en: englishContent, fr: frenchContent};
const panelId = 'panel1';
const alertName = 'panelName';
const i18nMap = { 
    en: {'panelName': "My panel"},
    fr: {'panelName': "Mon panneau"}
};
const panelStyle = {
    'background-color': 'red'
}; 

const htmlPanel = {
    content: htmlContent,
    id: panelId,
    alertName, 
    i18nMap,
    style: panelStyle, 
};
const myCustomPanel = myRAMPInstance.panel.registerHTML(htmlPanel);
```

### Step 3: Use the API to do stuff with your panel
Your panel is now ready for use! You should now leverage the [Panel API](#the-panel-api) to perform different functions of your choice. For example, you can display the panel on the screen with the `open` method, pin the panel on the screen with the `pin` method, and so on.

One endpoint within the the [Panel API](#the-panel-api) that is exclusive to HTML panels is `updateHTML`

## Teleporting panels

Panels that come out of the box can also be rendered outside the panel stack, in the container of your choice. In order to do so, you must provide a teleport configuration inside the fixture config of the fixture that registers the panel. The configuration has four properties:

* `target` - (required) the element where the panel will be rendered instead of its usual spot in the panel stack. The value can be the element itself or a string query selector.
* `showHeader` - (optional) a boolean indicating whether or not to show the panel's header, defaults to `false`.
* `showAppbarButton` - (optional) a boolean indicating whether or not opening the panel will show an appbar button for it, defaults to `false`. This only applies to temporary appbar buttons.
* `breakpoints` - (optional) an object of type `{ className<string>: minWidth<number>}` pairs.
The `className` will be applied as a CSS class when the container width is greater than or equal to the breakpoint `minWidth`. The class will be applied to the panel container i.e. the direct child of the teleport target element. This allows customization in what panel styling will be applied at specific panel widths.

Below is a configuration snippet that shows how to configure the legend to appear in your own `div` element:

```js
fixtures: {
    legend: {
        root: {
            children: [
                {
                    name: 'Keyword search',
                    layerId: 'climateActionMap',
                    symbologyExpanded: true
                }
            ]
        },
        panelTeleport: {
            target: document.getElementById('legend'),
            showHeader: true,
            showAppbarButton: false,
            breakpoints: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500
            }

        }
    }
}
```

Some other important things to note include:

* In order to get the regular panel styling, you will need to add the `ramp-styles` class to your target element. Otherwise, things are likely to look funny.
* Teleported panels by have the `focus-container` directive removed by default. If you wish to add this directive back, you can add the `inner-shell` class to your target element.
* Unlike regular panels, teleported panels will always take up the full width of the target element. Therefore, it is not recommended to teleport multiple panels into one container.


## The Panel API

The API can be accessed through the RAMP Instance API:
```js
const panelAPI = myRAMPInstance.panel
```

Notes:
* Wherever, it says `value: string | PanelInstance`, it means that the value can be either the panel's ID or its `PanelInstance` Object.
* Wherever, it says `value: string | PanelInstance | PanelInstancePath`, it means that the value can be either the panel's ID or its `PanelInstance` Object, or the `PanelInstancePath` object, which has the following properties:
    - `id` - the ID of the panel to open.
    - `screen` - the ID of the screen to show.
    - `props` - props to pass into the screen.

The API provides the following methods:

* `register(value: PanelConfigPair | PanelConfigSet, options?: PanelRegistrationOptions)` - registers a provided panel config object/a set of provided panel config objects and returns the resulting `PanelInstance` object/set of `PanelInstance` objects. Note that registering a panel automatically registers all its screens as well.

    The `PanelConfigPair` object has an `id` property which specifies the panel's ID, and a `config` property which specifies the panel's config, whereas the `PanelConfigSet` object has keys as panel IDs and values as panel config objects. Panel config objects have the following properties:

    - `screens`
    - `alertName`
    - `controls`
    - `button`
    - `style`
    - `expanded`

    These properties are the same as the ones described in the [`PanelInstance` object](#panelinstance-object).

    Additionally, the `PanelRegistrationOptions` object has one optional property of `i18n`, where you should include the localized strings for the panel. For more details on localization, please see the [localization documentation](../using-ramp4/config-language.md)
* `isRegistered(panelId: string | string[]): Promise<PanelInstance | PanelInstance[]>` - provides a promise that resolves to the `PanelInstance` object (if `panelId` is a string) or the array of `PanelInstance` objects (if `panelId` is an array) when panel(s) with the specified panel ID(s) have completed registration.
* `allRegistered(): string[]` - provides a listing of all currently registered panel ids.
* `registerHTML(htmlPanel: HTMLPanelInstance)` - Registers a new panel containing a screen of HTML content and returns the PanelInstance. Note: `htmlPanel.i18nMap` should be structured as follows:

```js
{
    lang1: {key1: lang1-value1, key2: lang1-value2, ...}, 
    lang2: {key1: lang2-value1, key2: lang2-value2, ...},
    ...
}
```

* `updateHTML(panel: PanelInstance | string, html: { [key: string]: string | HTMLElement }, screenId?: string)` - Updates the content of a specific HTML-based screen of a panel, using HTML content 
* `remove(value: string | PanelInstance): void` - removes the specified panel from the panel stack.
* `get(value: string | PanelInstance): PanelInstance` - finds and returns the specified panel.
* `open(value: string | PanelInstance | PanelInstancePath)` - opens the specified panel.
* `opened(): PanelInstance[]` - returns an array of all the panels that are currently opened.
* `visible(): PanelInstance[]` - returns an array of all the panels that are currently visible.
* `close(value: string | PanelInstance): PanelInstance` - closes the specified panel.
* `minimize(value: string | PanelInstance): PanelInstance` - minimizes the specified panel. Note that the difference between this and closing is that minimizing will result in the temporary appbar buttons staying instead of going away.
* `move(value: string | PanelInstance, direction: 'left' | 'right'): PanelInstance` - moves the specified panel one position in the specified direction, if possible. The `direction` parameter can take values of either "left" or "right".
* `toggle(value: string | PanelInstance | PanelInstancePath, toggle?: boolean): PanelInstance` - toggles the panel open/closed. The optional `toggle` boolean can be used to force the panel to open/close (`true` for open, `false` for close).
* `toggleMinimize(value: string | PanelInstance | PanelInstancePath, toggle?: boolean): PanelInstance` - same as `toggle`, but toggles between open and minimize instead of open and close.
* `pin(value: string | PanelInstance, pin?: boolean): PanelInstance` -  pins/unpins/toggles (if no `pin` value provided) the pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
* `pinned(): PanelInstance | null` - returns the currently pinned panel, if it exists.
* `show(value: string | PanelInstance, route: PanelConfigRoute): PanelInstance | undefined` - sets route (panel to be shown) of the specified panel to the specified route (recall that this is an object with the screen ID and props as properties).
* `setStyle(value: string | PanelInstance, style: object, replace: boolean = false): PanelInstance | null`- sets the styles of the specified panel by using the provided CSS styles object. If `replace` is `true`, the currently existing styles will be overwritten.
* `expand(value: string | PanelInstance, expand?: boolean): PanelInstance | null` - expands/collapses the expand state of the specified panel. Toggles whether the panel expands if no expand value is given.