import m from 'mithril';
import {Toggle} from './toggle';
import {joinClasses} from '../../utils';

export let Checkbox = {
	__proto__: Toggle,
	innerClass: ['mdl-checkbox__input'],
	outerClass: ['mdl-checkbox', 'mdl-js-checkbox'],

	createLabel({labelClass = []}, attr, children) {
		if(typeof labelClass === 'string') labelClass = [labelClass];
		labelClass.push('mdl-checkbox__label');
		labelClass.toString = joinClasses;
		return <span class={labelClass}>{children}</span>;
	}
};
