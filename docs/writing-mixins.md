# Writing a Mixin
A mixin is nothing but a function, which transforms a set of input attributes into a set of attributes to be set on the resulting HTML element.

## A basic mixin
```javascript
import {mixin, fromMixin} from 'mithril-mdl';

let ourMixin = mixin('ourMixin', function({someAttribute}) {
	if(someAttribute) this.class.push('our-attributes-class');
});

let OurMixin = fromMixin(ourMixin, 'span');
```

The fromMixin method just wraps our mixin into a mithril view function so we can use it like any other mithril component. It optionally takes a tag name as its second argument, which the resulting attributes will be applied to.

## Applying a mixin
Any mixin can either be manually applied within a components view function, or it can be applied automatically by the `baseMixin` mixin, which will take the `mixin` attribute and apply either a single mixin or an array of them.

The passed in attributes can be targeted towards a specific mixin by prefixing them with `ourMixin--`. This is mainly useful when the mixins are passed via attributes as well (JSX).

### Manually
The following will create a component which creates a div only with the `grid` mixin applied.

```jsx
import {callMixin, grid} from 'mithril-mdl';

let Component = {
	view(ctrl, srcAttribs, children) {
		let trgAttribs = {};

		callMixin(grid, srcAttribs, trgAttribs);

		return <div {...trgAttribs}>{children}</div>;
	}
}
```

### By passing mixins as an attribute
In the following example we use the `Cell` component and pass it a mixin as the `mixin` attribute. Internally `callMixin` will be used, which calls all mixins passed this way:

```jsx
import {Cell, grid} from 'mithril-mdl';

let Component = {
	view(ctrl, attribs, children) {
		return <Cell mixin={grid} {...attribs}>{children}</Cell>
	}
}
```
