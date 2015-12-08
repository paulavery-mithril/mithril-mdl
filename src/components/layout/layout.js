import {mixin, fromMixin} from '../../mixin';

export let layout = mixin('layout', function({drawer, fixedDrawer, fixedHeader, fixedTabs}) {
	this.class.push('mdl-layout mdl-js-layout');

	if(fixedTabs) this.class.push('mdl-layout--fixed-tabs');
	if(fixedDrawer) this.class.push('mdl-layout--fixed-drawer');
	if(fixedHeader) this.class.push('mdl-layout--fixed-header');
	if(drawer || fixedDrawer) this.class.push('mdl-layout--overlay-drawer-button');
});

export let Layout = fromMixin(layout);
