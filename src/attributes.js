/* globals componentHandler */

function upgradeElement(element) {
	if(process.browser && componentHandler) {
		componentHandler.upgradeElement(element);
	}
}

export default function attributes({id, ripple, primary, primaryDark, active, disabled, large, shadow, config}, noupgrade) {
	let attr = {};
	attr.class = [];
	attr.class.toString = () => attr.class.join(' ');

	/* Some common attributes to transfer and set */
	if(id) attr.id = id;
	if(disabled) attr.disabled = true;
	if(large) attr.class.push('mdl-layout--large-screen-only');
	if(ripple) attr.class.push('mdl-js-ripple-effect');
	if(active) attr.class.push('is-active');
	if(primary) attr.class.push('mdl-color--primary');
	if(primaryDark) attr.class.push('mdl-color--primary-dark');
	if(shadow) attr.class.push(`mdl-shadow--${shadow}dp`);
	if(color) attr.class.push(`mdl-color--${color}`);

	let classArg = arguments[0].class;
	if(classArg) {
		if(typeof(classArg) === 'string') attr.class.push(classArg);
		else attr.class.push.apply(attr.class, classArg); // extend with array of classes
	}

	/* Keep all event handlers */
	for(let prop in arguments[0]) {
		if(prop.substring(0, 2) === 'on') attr[prop] = arguments[0][prop];
	}

	/* Try to upgrade all elements and also run a config attribute if passed */
	attr.config = function(e, isInitialized) {
		if(config) config(...arguments);

		if(!isInitialized && !noupgrade) upgradeElement(e);
	};

	return attr;
}
