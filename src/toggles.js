import m from 'mithril';
import attributes from './attributes';
import {Icon} from './misc';
import {randomID, joinClasses} from './utils';

export let Toggle = {
	innerType: 'checkbox',

	view(ctrl, args, ...children) {
		args = args || {};
		let {id, checked, disabled, innerClass = []} = args;
		if(typeof innerClass === 'string') innerClass = [innerClass];

		// Use a random innerID if no ID is specified. This way we don't have to
		// force users to specify IDs just to make the checkbox clickable.
		let innerID = id ? id + '-cb' : `mdl-cb__${randomID()}-private`;
		if(disabled) delete args.disabled;

		// Put required attributes on the inner element
		let innerAttr = {
			id: innerID,
			class: this.innerClass,
			type: this.innerType
		};
		if(disabled) innerAttr.disabled = true;
		if(checked) innerAttr.checked = true;

		// Add explicitly specified inner classes and toString function
		innerAttr.class.push.apply(innerAttr.class, innerClass);
		innerAttr.class.toString = joinClasses;

		// Event handlers should also be put on the inner element
		for(let prop in args) {
			if(prop.substring(0, 2) === 'on') innerAttr[prop] = args[prop];
		}

		let attr = attributes(args);

		// Put CSS classes and innerID link on the outer label
		attr.class.push.apply(attr.class, this.outerClass);
		attr.for = innerID;

		let label = this.createLabel(args, attr, children);

		return <label {...attr}>
				<input {...innerAttr} />
				{label}
			</label>;
	}
};

export let Checkbox = {
	__proto__: Toggle,
	innerClass: ['mdl-checkbox__input'],
	outerClass: ['mdl-checkbox', 'mdl-js-checkbox'],

	createLabel({labelClass = []}, attr, children) {
		if(typeof labelClass === 'string') labelClass = [labelClass];
		labelClass.push('mdl-checkbox__label');
		labelClass.toString = joinClasses;
		return <span class={labelClass}>{children}</span>;
	}
};

export let Switch = {
	__proto__: Toggle,
	innerClass: ['mdl-switch__input'],
	outerClass: ['mdl-switch', 'mdl-js-switch'],

	createLabel({labelClass = []}, attr, children) {
		if(typeof labelClass === 'string') labelClass = [labelClass];
		labelClass.push('mdl-switch__label');
		labelClass.toString = joinClasses;
		return <span class={labelClass}>{children}</span>;
	}
};

export let IconToggle = {
	__proto__: Toggle,
	innerClass: ['mdl-icon-toggle__input'],
	outerClass: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],

	createLabel({iconClass = []}, attr, children) {
		if(typeof iconClass === 'string') iconClass = [iconClass];
		iconClass.push('mdl-icon-toggle__label');
		iconClass.toString = joinClasses;
		return <Icon class={iconClass}>{children}</Icon>;
	}
};

