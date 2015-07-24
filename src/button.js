import m from 'mithril';
import attributes from './attributes';

export let Button = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {raised, accent, color, primary} = args;

		attr.class.push('mdl-button', 'mdl-js-button');
		if(color) attr.class.push('mdl-button--colored');
		if(accent) attr.class.push('mdl-button--accent');
		if(raised) attr.class.push('mdl-button--raised');
		if(primary) attr.class.push('mdl-button--primary');

		return <button {...attr}>{children}</button>;
	}
};

export let Fab = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {raised, mini, accent, color, primary} = args;

		attr.class.push('mdl-button', 'mdl-js-button');
		attr.class.push(mini ? 'mdl-button--mini-fab' : 'mdl-button--fab');
		if(color) attr.class.push('mdl-button--colored');
		if(accent) attr.class.push('mdl-button--accent');
		if(raised) attr.class.push('mdl-shadow--4dp');
		if(primary) attr.class.push('mdl-button--primary');

		return <button {...attr}>{children}</button>;
	}
};
