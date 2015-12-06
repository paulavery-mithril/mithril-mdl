import { Mixable } from './mixin';

export let Grid = new Mixable((args, attr)=>{
	let {nospacing} = args;

	attr.class.push('mdl-grid');
	if (nospacing) attr.class.push('mdl-grid--no-spacing');
});

export let Cell = new Mixable((args, attr)=>{
	let {align, width, phone, tablet, desktop, nophone, notablet, nodesktop} = args;

	attr.class.push('mdl-cell');
	if(align) attr.class.push(`mdl-cell--${align}`);
	if(width) attr.class.push(`mdl-cell--${width}-col`);
	if(phone) attr.class.push(`mdl-cell--${phone}-col-phone`);
	if(tablet) attr.class.push(`mdl-cell--${tablet}-col-tablet`);
	if(desktop) attr.class.push(`mdl-cell--${desktop}-col-desktop`);
	if(nophone) attr.class.push('mdl-cell--hide-phone');
	if(notablet) attr.class.push('mdl-cell--hide-tablet');
	if(nodesktop) attr.class.push('mdl-cell--hide-desktop');
});
