import m from 'mithril';
import attributes from '../attributes';

export let Drawer = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);

		attr.class.push('mdl-layout__drawer');

		return <div {...attr}>{children}</div>;
	}
};

export let Navigation = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		attr.class.push('mdl-navigation');

		return <div {...attr}>{children}</div>;
	}
};

export let NavLink = {
	view(ctrl, args, name) {
		args = args || {};
		let attr = attributes(args);
		attr.class.push('mdl-navigation__link');
		attr.href = args.href;

		return <a {...attr}>{name}</a>;
	}
};
