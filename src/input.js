import m from 'mithril';
import attributes from './attributes';
import {Icon} from './misc';

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

export let Checkbox = {
	view(ctrl, args, label) {
		args = args || {};
		let {id, ripple} = args;

		let attrLabel = attributes({ ripple: ripple });
		attrLabel.class.push('mdl-checkbox', 'mdl-js-checkbox');

		args.ripple = false;
		let attr = attributes(args, true);
		attr.type = 'checkbox';
		attr.class.push('mdl-checkbox__input');

		return <label {...attrLabel} for={id}>
			<input {...attr} />
			{(label && id) ? <span class="mdl-checkbox__label">{label}</span> : null}
		</label>;
	}
};

export let Radio = {
	view(ctrl, args, label) {
		args = args || {};
		let {id, name, ripple} = args;

		let attrLabel = attributes({ ripple: ripple });
		attrLabel.class.push('mdl-radio', 'mdl-js-radio');

		args.ripple = false;
		let attr = attributes(args, true);
		attr.type = 'radio';
		attr.class.push('mdl-radio__button');

		return <label {...attrLabel} for={id}>
			<input {...attr} name={name} />
			{(label && id) ? <span class="mdl-radio__label">{label}</span> : null}
		</label>;
	}
};

export let Switch = {
	view(ctrl, args, label) {
		args = args || {};
		let {id, ripple} = args;

		let attrLabel = attributes({ ripple: ripple });
		attrLabel.class.push('mdl-switch', 'mdl-js-switch');

		args.ripple = false;
		let attr = attributes(args, true);
		attr.type = 'checkbox';
		attr.class.push('mdl-switch__input');

		return <label {...attrLabel} for={id}>
			<input {...attr} />
            { label ? <span class="mdl-switch__label">{label}</span> : null }
		</label>;
	}
};

export let Toggle = {
	view(ctrl, args, icon) {
		args = args || {};
		let {id, ripple} = args;

		let attrLabel = attributes({ ripple: ripple });
		attrLabel.class.push('mdl-icon-toggle', 'mdl-js-icon-toggle');

		args.ripple = false;
		let attr = attributes(args, true);
		attr.type = 'checkbox';
		attr.class.push('mdl-icon-toggle__input');

		return <label {...attrLabel} for={id}>
			<input {...attr} />
            <Icon class="mdl-icon-toggle__label">{icon}</Icon>
		</label>;
	}
};
