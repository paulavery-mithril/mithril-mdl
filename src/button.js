import m from 'mithril';
import attributes from './attributes';
import {Mixable} from './mixin';
import {Icon} from './misc';

export let Button = new Mixable('button', ({raised, accent, colored, primary, icon}, attr, ctx)=> {
	attr.class.push('mdl-button', 'mdl-js-button');
	if(colored) attr.class.push('mdl-button--colored');
	if(accent) attr.class.push('mdl-button--accent');
	if(raised) attr.class.push('mdl-button--raised');
	if(primary) attr.class.push('mdl-button--primary');
	if(icon) {
		attr.class.push('mdl-button--icon');
		if(typeof icon === 'string') {
			// Replace children with icon
			ctx.children = <Icon>{icon}</Icon>;
		}
	}
});

export let LabelButton = new Mixable('label', (args, attr)=> {
	Button.applyMixin(args, attr);
	if (args.for) attr.for = args.for;
});

export let LinkButton = new Mixable('a', (args, attr)=> {
	Button.applyMixin(args, attr);
	let {href} = args;
	if (href) attr.href = href;
});

export let Fab = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {raised, mini, accent, colored, primary} = args;

		attr.class.push('mdl-button', 'mdl-js-button');
		attr.class.push(mini ? 'mdl-button--mini-fab' : 'mdl-button--fab');
		if(colored) attr.class.push('mdl-button--colored');
		if(accent) attr.class.push('mdl-button--accent');
		if(raised) attr.class.push('mdl-shadow--4dp');
		if(primary) attr.class.push('mdl-button--primary');

		return <button {...attr}>{children}</button>;
	}
};
