import m from 'mithril';
import attributes from './attributes';

export let Card = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {shadow} = args;

		attr.class.push('mdl-card');
		if(shadow) attr.class.push(`mdl-shadow--${shadow}dp`);

		return <div {...attr}>{children}</div>;
	}
};

export let CardTitle = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {expand, size} = args;

		attr.class.push('mdl-card__title');
		if(expand) attr.class.push('mdl-card--expand');

		size = size || 2;

		return <div {...attr}><h2 class="mdl-card__title-text">{children}</h2></div>;
	}
};

export let CardSupportingText = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {border, expand} = attr;

		attr.class.push('mdl-card__title-text');
		if(border) attr.class.push('mdl-shadow--border');
		if(expand) attr.class.push('mdl-card--expand');

		return <div {...attr}>{children}</div>;
	}
};