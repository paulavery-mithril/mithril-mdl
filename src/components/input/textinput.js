import m from 'mithril';
import {callMixin, baseMixin} from '../../mixin';

export let TextInput = {
	view(ctrl, srcAttribs) {
		let trgAttribs = {};
		let {id, label, pattern, error, floating, outerClass} = srcAttribs;
		callMixin(baseMixin, srcAttribs, trgAttribs);

		trgAttribs.class.push('mdl-textfield__input');
		if(pattern) trgAttribs.pattern = pattern;

		outerClass = [
			'mdl-textfield',
			'mdl-js-textfield',
			outerClass || '',
			floating ? 'mdl-textfield--floating-label' : ''
		].join(' ');

		return <div class={outerClass}>
			<input {...trgAttribs} />

			{(label && id) ? <label for={id} class="mdl-textfield__label">{label}</label> : null}
			{(pattern && error) ? <span class="mdl-textfield__error">{error}</span> : null}
		</div>;
	}
};
