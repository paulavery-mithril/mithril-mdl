import m from 'mithril';
import {Toggle} from './toggle';
import {joinClasses} from '../../utils';
import {Icon} from '../misc/icon';

export let IconToggle = {
	__proto__: Toggle,
	innerClass: ['mdl-icon-toggle__input'],
	outerClass: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],

	createLabel({iconClass = []}, attr, children) {
		if(typeof iconClass === 'string') iconClass = [iconClass];
		iconClass.push('mdl-icon-toggle__label');
		iconClass.toString = joinClasses;
		return <Icon class={iconClass}>{children}</Icon>;
	}
};
