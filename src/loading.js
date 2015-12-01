import m from 'mithril';
import attributes from './attributes';

export let ProgressBar = {
	view(ctrl, args) {
		args = args || {};
		let attr = attributes(args);
		let {progress, buffer} = args;


		attr.class.push('mdl-progress', 'mdl-js-progress');
		if(!progress) attr.class.push('mdl-progress__indeterminate');

		let config = (el) => {
			if(progress) {
				el.addEventListener('mdl-componentupgraded', function() {
					this.MaterialProgress.setProgress(progress);
					if(buffer) this.MaterialProgress.setBuffer(buffer);
				});
			}
		};

		return <div {...attr} config={config}></div>;
	}
};

export let Spinner = {
	view(ctrl, args) {
		args = args || {};
		let attr = attributes(args);
		let {active, singleColor} = args;

		attr.class.push('mdl-spinner', 'mdl-js-spinner');
		if(active) attr.class.push('is-active');
		if(singleColor) attr.class.push('mdl-spinner--single-color');

		return <div {...attr}></div>;
	}
};
