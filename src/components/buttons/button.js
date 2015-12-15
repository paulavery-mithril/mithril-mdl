import m from 'mithril';
import {Icon} from '../misc/icon';
import {mixin, callMixin, baseMixin} from '../../mixin';

export let button = mixin('button', function({raised, accent, colored, primary, icon}) {
	this.class.push('mdl-button', 'mdl-js-button');
	if(colored) this.class.push('mdl-button--colored');
	if(accent) this.class.push('mdl-button--accent');
	if(raised) this.class.push('mdl-button--raised');
	if(primary) this.class.push('mdl-button--primary');
	if(icon) this.class.push('mdl-button--icon');
});

export let Button = {
	view(ctrl, srcAttribs, ...children) {
		let trgAttribs = {};

		callMixin(baseMixin, srcAttribs, trgAttribs);
		callMixin(button, srcAttribs, trgAttribs);

		if(srcAttribs.icon && typeof srcAttribs.icon === 'string') {
			children = <Icon>{ srcAttribs.icon }</Icon>;
		}

		return <button {...trgAttribs}>{children}</button>;
	}
};
