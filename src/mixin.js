import attributes from './attributes';

let isArray = Array.isArray || ((obj)=> Object.prototype.toString.call(obj) === '[object Array]');

export class Component {
	constructor(tag) {
		this.tag = tag;
	}

	// This is the default view for mixable objects which just mixes them in into a div.
	view(ctrl, args, ...children) {
		args = args || {};
		let ctx = {ctrl, children};
		let attr = attributes(args, ctx);

		if(this.customizeView != null) {
			this.customizeView(args, attr, ctx);
		}

		// MSX doesn't evalute tag names so we build the virtual DOM by ourselves here:
		// We could use m() instead. I'm not sure about the performance impact.
		return {
			tag: this.tag,
			attrs: attr,
			children: ctx.children
		};
	}
}

// This is the default view for mixable components which just mixes them in into an HTML element (<div> by default).
export class Mixable extends Component {
	// tag name is optional ('div' by default)
	// arg is either the applyMixin function or an object with properties to override
	constructor(tag, arg) {
		if(typeof tag !== 'string') {
			// No tag is specified: default is DIV.
			arg = tag;
			tag = 'div';
		}
		super(tag);

		if(typeof arg === 'function') {
			this.applyMixin = arg;
		}
		else if(arg) {
			for (let prop in arg) {
				if (arg.hasOwnProperty(prop)) this[prop] = arg[prop];
			}
		}
	}

	// applyMixin signature is `applyMixin(args, attr, ctx)`.
	applyMixin() {
		throw new Error(`applyMixin() is not implemented on ${this}`);
	}

	mixin(args) {
		return (attr, ctx)=> { this.applyMixin(args, attr, ctx); };
	}

	customizeView(args, attr, ctx) {
		this.applyMixin(args, attr, ctx);
	}
}

export function applyMixin(mixin, attr, ctx) {
	if (mixin != null) {
		if(mixin.tag === 'mixin') {
			// Support special <mixin from={mixinTemplate} {...args} /> style syntax to defined
			// They'll be compiled to { tag: 'mixin', attrs: {from: mixinTemplate,...args } }
			// mixinTemplate is either a function receiving any arguments and returning a mixin
			// or an object with a 'mixin' attribute which does the same.
			// This allows users to define mixins with a more natural MSX syntax.
			let args = mixin.attrs;
			let mixinConstructor = args.from;
			delete args.from;
			if(mixinConstructor.mixin != null) {
				mixin = mixinConstructor.mixin(args)
			}
			else {
				mixin = mixinConstructor(args);
			}
		}
		if(typeof mixin === 'function') {
			// Apply a mixin function
			mixin(attr, ctx);
		}
		else {
			// Apply attributes from mixin
			for (let prop in mixin) {
				if(mixin.hasOwnProperty(prop)) attr[prop] = mixin[prop];
			}
		}
	}
}

export function applyMixins(mixins, attr, ctx) {
	if(isArray(mixins)) {
		for (let mixin of mixins) {
			applyMixin(mixin, attr, ctx);
		}
	}
	else {
		applyMixin(mixins, attr, ctx);
	}
}

