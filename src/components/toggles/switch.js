import m from 'mithril';
import {Toggle} from './toggle';
import {joinClasses} from '../../utils';

export let Switch = {
	__proto__: Toggle,
	innerClass: ['mdl-switch__input'],
	outerClass: ['mdl-switch', 'mdl-js-switch'],

	createLabel({labelClass = []}, attr, children) {
		if(typeof labelClass === 'string') labelClass = [labelClass];
		labelClass.push('mdl-switch__label');
		labelClass.toString = joinClasses;
		return <span class={labelClass}>{children}</span>;
	}
};
