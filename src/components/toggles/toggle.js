import m from 'mithril';
import {baseMixin, callMixin} from '../../mixin';
import {randomID, joinClasses} from '../../utils';

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

		let trgAttributes = {};
		callMixin(baseMixin, args, trgAttributes);

		// Put CSS classes and innerID link on the outer label
		trgAttributes.class.push.apply(trgAttributes.class, this.outerClass);
		trgAttributes.for = innerID;

		let label = this.createLabel(args, trgAttributes, children);

		return <label {...trgAttributes}>
			<input {...innerAttr} />
			{label}
		</label>;
	}
};
