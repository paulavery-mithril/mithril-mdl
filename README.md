# Material Design Lite components via mithril.js
This module provides [mithril](http://mithril.js.org/) components which construct HTML to be used with the [Material Design Lite](http://www.getmdl.io/) framework.
It provides a simple way to apply the needed classes to create MDL components. It spits out normal HTML elements, and calls `componentHandler.upgradeElement(element)` on element creation. It is designed to work nicely with JSX (via babel or similar).
Not nearly all components are supported right now. I will continue adding them when the need comes up. Your are welcome to submit pull requests :)

## Basics
Some attributes will be used by all components and are carried over (`id`, `class`, `config`, `href`, `disabled`, `value`, `for`). This includes all `on-` event handlers.

And these attributes all apply some classes:
* `large`: applies `mdl-layout--large-screen-only`
* `ripple`: applies `mdl-js-ripple-effect`
* `active`: applies `is-active`
* `primary`: applies `mdl-color--primary`
* `primaryDark`: applies `mdl-color--primary-dark`
* `shadow`: applies `mdl-shadow--${shadow}dp`
* `color`: applies `mdl-color--${textColor}`
* `textColor`: applies `mdl-color-text--${textColor}`

## Components
Components can be imported from the module directly:

**ES6:**
```js
import {Button} from 'mithril-mdl';
```

**ES5:**
```js
var Button = require('mithril-mdl').Button;
```

You may then use them like so:
**JSX:**
```jsx
m.render(document.body, <Button ripple accent raised>I am a button!</Button>);
```

**ES5/ES6:**
```js
m.render(document.body, m(Button, {ripple: true, accent: true, raised: true}, 'I am a button!'));
```

Documentation for all components can be found in the [docs/components](docs/components) directory.


## Mixins
Mixins are often provided as lowercase versions of the corresponding components. They are annotated in the components documentation.
More information can be found [here](docs/writing-mixins.md).

**Example:**

```jsx
import {Cell, grid} from 'mithril-mdl';

/**
 * Creates a cell with a grid mixin.
 * Cell will be passed attr, grid will use grid--attr instead.
 * Cell and grid will both use attr2
 */
export default <Grid>
	<Cell mixin={grid} attr="value1" grid--attr="value2" attr2="value3">
		<Cell>Some Stuff</Cell>
	</Cell>
</Grid>
```
