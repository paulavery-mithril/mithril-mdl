import m from 'mithril';
import attributes from './attributes';

export let TextInput = {
	view(ctrl, args) {
		args = args || {};
		let attr = attributes(args);
		let {value, label, pattern, error, floating, outerClass} = args;

		attr.type = 'text';
		attr.class.push('mdl-textfield__input');
		if(pattern) attr.pattern = pattern;
		if(typeof value !== undefined) attr.value = value;

		return <div class={`mdl-textfield mdl-js-textfield ${outerClass || ''} ${floating ? 'mdl-textfield--floating-label' : ''}`}>
			<input {...attr} />

			{(label && attr.id) ? <label for={attr.id} class="mdl-textfield__label">{label}</label> : null}
			{(pattern && error) ? <span class="mdl-textfield__error">{error}</span> : null}
		</div>;
	}
};
