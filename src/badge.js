import m from 'mithril';
import attributes from './attributes';

export let Badge = {
	view(ctrl, args, label) {
		args = args || {};
		let attr = attributes(args);
		let {badge, icon} = args;

		attr.class.push('mdl-badge');
		if(icon) attr.class.push('material-icons');

		return <span {...attr} data-badge={badge}>{icon ? icon : label}</span>;
	}
};
