import m from 'mithril';
import attributes from './attributes';

export let Grid = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);

		attr.class.push('mdl-grid');
		return <div {...attr}>{children}</div>;
	}
};

export let Cell = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
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

		return <div {...attr}>{children}</div>;
	}
};
