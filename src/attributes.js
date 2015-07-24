/* globals componentHandler */
let timer;

function upgrade() {
	if(process.browser && componentHandler) {
		/* This should later be componentHandler.upgradeElement() */
		clearTimeout(timer);
		timer = setTimeout(() => componentHandler.upgradeDom(), 0);
	}
}

export default function attributes({id, ripple, primary, primaryDark, active, disabled, large, config}, noupgrade) {
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
	if(arguments[0].class) attr.class.push(arguments[0].class);

	/* Keep all event handlers */
	for(let prop in arguments[0]) {
		if(prop.substring(0, 2) === 'on') attr[prop] = arguments[0][prop];
	}

	/* Try to upgrade all elements and also run a config attribute if passed */
	attr.config = function(e) {
		if(config) config(...arguments);

		if(!noupgrade) upgrade(e);
	};

	return attr;
}
