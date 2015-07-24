import m from 'mithril';
import attributes from './attributes';

export let Icon = {
	view(ctrl, args, icon) {
		let attr = attributes(args || {});
		attr.class.push('material-icons');

		return <i {...attr}>{icon}</i>;
	}
};

export let Spacer = {
	view(ctrl, args) {
		let attr = attributes(args || {});
		attr.class.push('mdl-layout__spacer');

		return <div {...attr} />;
	}
};
