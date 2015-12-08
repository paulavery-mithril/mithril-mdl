import m from 'mithril';

/* globals componentHandler */
function upgradeElement(element) {
	if(process.browser && componentHandler) {
		componentHandler.upgradeElement(element);
	}
}

/**
 * Helper to create a mixin object
 * mixer can be one of:
 *  function: full blown mixin
 *  object: all parameters will be written onto the attribute object
 *  string: string will be added as classes
 */
export function mixin(name, mixer) {
	let fn;

	if(typeof mixer === 'function') {
		fn = mixer;
	} else if(typeof mixer === 'object') {
		fn = function() {
			for(let attr in mixer) {
				this[attr] = mixer[attr];
			}
		};
	} else if(typeof mixer === 'string') {
		fn = function() {
			this.class.push.apply(this.class, mixer.split(' '));
		};
	} else {
		throw new Error('Mixins can only be created from either a function, an object or a string');
	}

	fn.title = name;
	return fn;
}

/**
 * Calls a mixin with the given source and target attributes.
 * It allows passing in source attributes prefixed by `mixinname.`, so we can avoid overlap in attributes
 */
export function callMixin(fn, srcAttribs, trgAttribs) {
	srcAttribs = srcAttribs || {};
	let name = fn.title;
	let mixins = srcAttribs.mixin;
	delete srcAttribs.mixin;

	let processedAttribs = Object.keys(srcAttribs).reduce((sum, attrib) => {
		let split = attrib.split('--');

		if(split.length === 1 && sum[split[0]] === undefined && split[0] !== 'mixin') {
			sum[split[0]] = srcAttribs[attrib];
		} else if(split[0] === name) {
			sum[split[1]] = srcAttribs[attrib];
		}

		return sum;
	}, {});

	/* Call this mixin */
	fn.call(trgAttribs, processedAttribs);

	/* Apply all passed mixins */
	if(typeof mixins !== 'undefined') {
		if(Array.isArray(mixins)) {
			mixins.forEach(mix => {
				callMixin(mix, srcAttribs, trgAttribs);
			});
		} else {
			callMixin(mixins, srcAttribs, trgAttribs);
		}
	}
}

/**
 * A base mixin, which handles any globally applicable styles like color, shadows, ripple effects etc.
 * It also handles a `mixin` attribute with which you can extend any element
 */
export let baseMixin = mixin('base', function({id, ripple, primary, primaryDark, color, textColor, active, disabled, large, shadow, config, href, value, for: forArg, class: classArg}) {
	this.class = [];
	this.class.toString = () => this.class.join(' ');

	/* Some common attributes to transfer and set */
	if(id) this.id = id;
	if(href) this.href = href;
	if(forArg) this.for = forArg;
	if(disabled) this.disabled = true;
	if(large) this.class.push('mdl-layout--large-screen-only');
	if(ripple) this.class.push('mdl-js-ripple-effect');
	if(active) this.class.push('is-active');
	if(primary) this.class.push('mdl-color--primary');
	if(primaryDark) this.class.push('mdl-color--primary-dark');
	if(shadow) this.class.push(`mdl-shadow--${shadow}dp`);
	if(color) this.class.push(`mdl-color--${color}`);
	if(textColor) this.class.push(`mdl-color-text--${textColor}`);
	if(typeof value !== 'undefined') this.value = value;

	if(classArg) {
		if(typeof classArg === 'string') {
			this.class.push(classArg);
		} else {
			/* Extend with array of classes */
			this.class.push.apply(this.class, classArg);
		}
	}

	/* Keep all event handlers and data attributes */
	for(let prop in arguments[0]) {
		if(prop.substring(0, 2) === 'on') this[prop] = arguments[0][prop];
		if(prop.substring(0, 5) === 'data-') this[prop] = arguments[0][prop];
	}

	/* Try to upgrade all elements and also run a config attribute if passed */
	this.config = function(e, isInitialized) {
		if(config) config(...arguments);

		if(!isInitialized) upgradeElement(e);
	};
});

/**
 * Generates a component from a mixin.
 * Calls the baseMixin, then the provided one and then dumps all the attributes onto a provided tag
 */
export function fromMixin(mix, Tag = 'div') {
	return {
		view: (ctrl, srcAttribs, ...children) => {
			let trgAttribs = {};

			callMixin(baseMixin, srcAttribs, trgAttribs);
			callMixin(mix, srcAttribs, trgAttribs);

			return <Tag {...trgAttribs}>
				{children}
			</Tag>;
		}
	};
}
