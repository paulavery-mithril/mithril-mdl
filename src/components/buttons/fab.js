import m from 'mithril';
import {Icon} from '../misc/icon';
import {mixin, callMixin, baseMixin} from '../../mixin';

export let fab = mixin('fab', function({raised, mini, accent, colored, primary}) {
	this.class.push('mdl-button', 'mdl-js-button');
	this.class.push(mini ? 'mdl-button--mini-fab' : 'mdl-button--fab');
	if(colored) this.class.push('mdl-button--colored');
	if(accent) this.class.push('mdl-button--accent');
	if(raised) this.class.push('mdl-shadow--4dp');
	if(primary) this.class.push('mdl-button--primary');
});

export let Fab = {
	view(ctrl, srcAttribs, ...children) {
		let trgAttribs = {};

		callMixin(baseMixin, srcAttribs, trgAttribs);
		callMixin(fab, srcAttribs, trgAttribs);

		if(srcAttribs.icon && typeof srcAttribs.icon === 'string') {
			children = <Icon>{ srcAttribs.icon }</Icon>;
		}

		return <button {...trgAttribs}>{children}</button>;
	}
};
