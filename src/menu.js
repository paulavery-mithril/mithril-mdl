import m from 'mithril';
import attributes from './attributes';

export let Menu = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {bottomLeft, bottomRight, topLeft, topRight} = args;

		attr.class.push('mdl-menu', 'mdl-js-menu');
		if(bottomLeft) attr.class.push('mdl-menu--bottom-left');
		if(bottomRight) attr.class.push('mdl-menu--bottom-right');
		if(topLeft) attr.class.push('mdl-menu--top-left');
		if(topRight) attr.class.push('mdl-menu--top-right');

		return <ul for={args.for} {...attr}>{children}</ul>;
	}
};

export let MenuItem = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);

		attr.class.push('mdl-menu__item');

		return <li {...attr}>{children}</li>;
	}
};
