import {mixin, fromMixin} from '../../mixin';

export let menu = mixin('menu', function({bottomLeft, bottomRight, topLeft, topRight}) {
	this.class.push('mdl-menu', 'mdl-js-menu');

	if(bottomLeft) this.class.push('mdl-menu--bottom-left');
	if(bottomRight) this.class.push('mdl-menu--bottom-right');
	if(topLeft) this.class.push('mdl-menu--top-left');
	if(topRight) this.class.push('mdl-menu--top-right');
});

export let Menu = fromMixin(menu, 'ul');
