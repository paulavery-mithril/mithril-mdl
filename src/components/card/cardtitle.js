import {baseMixin, callMixin} from '../../mixin.js';

export let CardTitle = {
	view(ctrl, srcAttribs, ...children) {
		let trgAttribs = {};
		let {expand} = srcAttribs;

		callMixin(baseMixin, srcAttribs, trgAttribs);

		trgAttribs.class.push('mdl-card__title');
		if(expand) trgAttribs.class.push('mdl-card--expand');

		return <div {...trgAttribs}><h2 class="mdl-card__title-text">{children}</h2></div>;
	}
};
