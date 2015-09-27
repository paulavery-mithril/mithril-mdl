# Material Design Lite components via mithril.js
This module provides mithril components which construct html to be used with the [Material Design Lite](http://www.getmdl.io/) framework.
It provides a simple way to apply the needed classes to create MDL components. It spits out normal html elements, and calls `componentHandler.upgradeElement(element)` on element creation. It is designed to work nicely with JSX (via babel or similar).
Not nearly all components are supported right now. I will continue adding them when the need comes up. Your are welcome to submit pull requests :)

## Basics
Some attributes will be used by all components.

The following attributes will be carried over to the topmost resulting element:
* `id`
* `class`
* `config`
* `disabled`
* all attributes beginning with `on` (`onclick`, `onchange`, etc.)

And these attributes all apply some classes:
* `large`: applies `mdl-layout--large-screen-only`
* `ripple`: applies `mdl-js-ripple-effect`
* `active`: applies `is-active`
* `primary`: applies `mdl-color--primary`
* `primaryDark`: applies `mdl-color--primary-dark`

## Components
The following components can be imported from the module directly.

**ES5**
```js
var Button = require('mithril-mdl').Button;
```

**ES6**
```js
import {Button} from 'mithril-mdl';
```

You may then use them like so:

**ES5**
```js
m.render(document.body, m(Button, {ripple: true, accent: true, raised: true}, 'I am a button!'));
```

**JSX**
```jsx
m.render(document.body, <Button ripple accent raised>I am a button!</Button>);
```

### Fab
**Tag:** `button`

**Class:** `mdl-button mdl-js-button mdl-button--fab`

**Attributes:**
* `mini`: Switches `mdl-button--fab` to `mdl-button--mini-fab`
* `color`: Sets `mdl-button--colored`
* `accent`: Sets `mdl-button--accent`
* `raised`: Sets `mdl-shadow--4dp`
* `primary`:  Sets `mdl-button--primary`

### Button
**Tag:** `button`

**Class:** `mdl-button mdl-js-button`

**Attributes:**
* `color`: Sets `mdl-button--colored`
* `accent`: Sets `mdl-button--accent`
* `raised`: Sets `mdl-button--raised`
* `primary`:  Sets `mdl-button--primary`

### Icon
**Tag:** `i`

**Class:** `material-icons`

### Spacer
**Tag:** `div`

**Class:** `mdl-layout__spacer`

### ProgressBar
**Tag:** `div`

**Class:** `mdl-progress mdl-js-progress mdl-progress__indeterminate`

**Attributes:**
* `progress`: A number which will be passed to `MaterialProgress.setProgress()`. If set also removes `mdl-progress__indeterminate`
* `buffer`: A number which will be passed to `MaterialProgress.setBuffer()`.

**WARNING:** The JavaScript portion of this is not tested across redraws and might break.

### TextInput
**Tag:** `div` wrapping `input`, `label` and optionally `span`

**Class:** `mdl-textfield mdl-js-textfield`, `mdl-textfield__label` and `mdl-textfield__error`

**Attributes:**
All default attributes (`class`, `id` etc.) are assigned to the `input` element. `id` has to be passed to allow for a label.
* `value`: sets `value` of the `input`
* `label`: sets text content of the `label`
* `error`: if this and pattern is set, adds a `span`, with this text set as its text content.
* `pattern`: sets `pattern` property of the `input`
* `floating`: sets `mdl-textfield--floating-label` on the `div`
* `outerClass`: additional classes to apply to the `div` (should be a string)

### Grid
**Tag:** `div`

**Class:** `mdl-grid`

### Cell
**Tag:** `div`

**Class:** `mdl-cell`

**Attributes:**
* `align`: sets `mdl-cell--${align}`. Should be `top`, `stretch` or `bottom`
* `width`: sets `mdl-cell--${width}-col`. Basically the number of columns for this cell
* `phone`: sets `mdl-cell--${phone}-col-phone`
* `tablet`: sets `mdl-cell--${tablet}-col-tablet`
* `desktop`: sets `mdl-cell--${desktop}-col-desktop`
* `nophone`: sets `mdl-cell--hide-phone`
* `notablet`: sets `mdl-cell--hide-tablet`
* `nodesktop:` sets `mdl-cell--hide-desktop`

### Tabs
**Tag:** `div`

**Class:** `mdl-layout__tab-bar`

### Tab
**Tag:** `a`

**Class:** `mdl-layout__tab`

**Attributes:**
* `href`: Transferred over

### Layout
**Tag:** `header`

**Class:** `mdl-layout__header`

**Attributes:**
* `scroll`: Sets `mdl-layout__header--scroll`
* `waterfall`: Sets `mdl-layout__header--waterfall`
* `transparent`: Sets `mdl-layout__header--transparent`

### Title
**Tag:** `span`

**Class:** `mdl-layout-title`

### Header
**Tag:** `div`

**Class:** `mdl-layout mdl-js-layout`

**Attributes:**
* `drawer`: If this or `fixedDrawer` is provided, sets `mdl-layout--overlay-drawer-button`
* `fixedDrawer`: Sets `mdl-layout--fixed-drawer`
* `fixedHeader`: Sets `mdl-layout--fixed-header`
* `fixedTabs`: Sets `mdl-layout--fixed-tabs`

### HeaderRow
**Tag:** `div`

**Class:** `mdl-layout__header-row`

### Navigation
**Tag:** `div`

**Class:** `mdl-navigation`

### NavLink
**Tag:** `a`

**Class:** `mdl-navigation__link`

**Attributes:**
* `href`: Transferred over

### Drawer
**Tag:** `div`

**Class:** `mdl-layout__drawer`

### Content
**Tag:** `main`

**Class:** `mdl-layout__content`

## Problems
* Not really reliable for partial redraws (still works, just flickering etc.), due to mdls js adding elements all over the place (or maybe me being an idiot, not sure)
