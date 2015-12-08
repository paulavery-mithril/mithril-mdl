import {mixin, fromMixin} from '../../../mixin';

export let header = mixin('header', function({scroll, waterfall, transparent, castShadow}) {
	this.class.push('mdl-layout__header');

	if(scroll) this.class.push('mdl-layout__header--scroll');
	if(waterfall) this.class.push('mdl-layout__header--waterfall');
	if(transparent) this.class.push('mdl-layout__header--transparent');
	if(castShadow) this.class.push('is-casting-shadow');
});

export let Header = fromMixin(header, 'header');
