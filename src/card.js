import m from 'mithril';
import attributes from './attributes';
import {Mixable} from './mixin';

export let Card = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);

		attr.class.push('mdl-card');

		return <div {...attr}>{children}</div>;
	}
};

// Create a component from a simple function that returns a mithril view
// independent of the controller.
function simpleComponent(fn) {
	return {
		view(ctrl, ...args) {
			return fn(...args);
		}
	};
}

function cardTitleText({size}, text) {
	size = size || 2;
	return m('h' + size.toString(), {'class': 'mdl-card__title-text'}, text);
}

function cardSubtitleText({size}, text) {
	size = size || 3;
	return m('h' + size.toString(), {'class': 'mdl-card__subtitle-text'}, text);
}

export let CardTitleText = simpleComponent(cardTitleText);
export let CardSubtitleText = simpleComponent(cardSubtitleText);

// Usage:
//	 MSX:
//	 * Both titles specified as attributes:
//		 <CardTitle title='Title Text' subtitle='Subtitle Text' />
//	 * Subtitle attribute, title string child:
//		 <CardTitle subtitle='Subtitle text'>Title Text</CardTitle>
//	 * Subtitle attribute, explicit title element child:
//		 <CardTitle subtitle='Subtitle text'><CardTitleText>Title Text</CardTitleText></CardTitle>
//	 * Both title and subtitle are explicit child elements:
//		 <CardTitle>
//			 <CardTitleText>Title Text</CardTitleText>
//			 <CardSubtitleText>Subtitle Text</SubtitleText>
//		 </CardTitle>
//	 With m() function interface:
//	 * Shorthand with two string children:
//		 m(CardTitle, 'Title Text', 'Subtitle Text')
export let CardTitle = {
	view(ctrl, args, ...children) {
		args = args || {};
		let attr = attributes(args);
		let {expand} = args;

		attr.class.push('mdl-card__title');
		if(expand) attr.class.push('mdl-card--expand');

		// If title is specified directly as an attribute don't use children
		if(args.title) {
			children = [args.title];
		}

		// Title is given as a string, assume <h2> by default
		let title = children[0];
		if(typeof title === 'string') {
			children[0] = cardTitleText({size: args.size}, title);
		}

		// Subtitle string is specified, assume <h3> by default
		let subtitle = args.subtitle || children[1];
		if(typeof subtitle === 'string') {
			children[1] = cardSubtitleText({subtitleSize: args.subtitleSize}, title);
		}

		return <div {...attr}>{children}</div>;
	}
};

export class CardSection extends Mixable {
	constructor(type) {
		super('div');
		this.type = type;
	}

	applyMixin({border, expand}, attr) {
		attr.class.push(`mdl-card__${this.type}`);
		if(border) attr.class.push('mdl-card--border');
		if(expand) attr.class.push('mdl-card--expand');
	}
}

export let CardActions = new CardSection('actions');
export let CardMedia = new CardSection('media');
export let CardSupportingText = new CardSection('supporting-text');

