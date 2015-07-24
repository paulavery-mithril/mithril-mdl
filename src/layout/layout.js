import m from 'mithril';
import attributes from '../attributes';

export let Layout = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {drawer, fixedDrawer, fixedHeader, fixedTabs} = args;

		attr.class.push('mdl-layout mdl-js-layout');

		if(fixedTabs) attr.class.push('mdl-layout--fixed-tabs');
		if(fixedDrawer) attr.class.push('mdl-layout--fixed-drawer');
		if(fixedHeader) attr.class.push('mdl-layout--fixed-header');
		if(drawer || fixedDrawer) attr.class.push('mdl-layout--overlay-drawer-button');

		return <div {...attr}>{children}</div>;
	}
};

export let Content = {
	view(ctrl, args, ...children) {
		let attr = attributes(args || {});
		attr.class.push('mdl-layout__content');

		return <main {...attr}>{children}</main>;
	}
};

export let Title = {
	view(ctrl, args, ...children) {
		let attr = attributes(args || {});

		attr.class.push('mdl-layout-title');

		return <span {...attr}>{children}</span>;
	}
};
