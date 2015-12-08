import {mixin, fromMixin} from '../../mixin';

export let cell = mixin('cell', function({align, width, phone, tablet, desktop, nophone, notablet, nodesktop}) {
	this.class.push('mdl-cell');

	if(align) this.class.push(`mdl-cell--${align}`);
	if(width) this.class.push(`mdl-cell--${width}-col`);
	if(phone) this.class.push(`mdl-cell--${phone}-col-phone`);
	if(tablet) this.class.push(`mdl-cell--${tablet}-col-tablet`);
	if(desktop) this.class.push(`mdl-cell--${desktop}-col-desktop`);
	if(nophone) this.class.push('mdl-cell--hide-phone');
	if(notablet) this.class.push('mdl-cell--hide-tablet');
	if(nodesktop) this.class.push('mdl-cell--hide-desktop');
});

export let Cell = fromMixin(cell);
