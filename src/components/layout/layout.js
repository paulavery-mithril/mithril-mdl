import {mixin, fromMixin} from '../../mixin';

export let layout = mixin('layout', function({fixedDrawer, fixedHeader, fixedTabs}) {
	this.class.push('mdl-layout mdl-js-layout');

	if(fixedTabs) this.class.push('mdl-layout--fixed-tabs');
	if(fixedDrawer) this.class.push('mdl-layout--fixed-drawer');
	if(fixedHeader) this.class.push('mdl-layout--fixed-header');
});

export let Layout = fromMixin(layout);
