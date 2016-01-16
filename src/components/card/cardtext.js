import {mixin, fromMixin} from '../../mixin.js';

export let cardtext = mixin('card', function({border, expand}) {
	this.class.push('mdl-card__supporting-text');
	if(border) this.class.push('mdl-card--border');
	if(expand) this.class.push('mdl-card--expand');
});

export let CardText = fromMixin(cardtext);
