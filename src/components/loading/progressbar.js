import {mixin, fromMixin} from '../../mixin';

function setProgress(e, progress, buffer) {
	this.MaterialProgress.setProgress(progress);

	if(buffer) {
		this.MaterialProgress.setBuffer(buffer);
	}
}

export let progressbar = mixin('progressbar', function({progress, buffer}) {
	this.class.push('mdl-progress', 'mdl-js-progress');

	if(progress) {
		let config = this.config;

		this.config = function(e, isInitialized) {
			config.apply(this, Array.from(arguments));

			if(isInitialized) {
				setProgress(e, progress, buffer);
			} else {
				e.addEventListener('mdl-componentupgraded', function() {
					setProgress(e, progress, buffer);
				});
			}
		};
	} else {
		this.class.push('mdl-progress__indeterminate');
	}
});

export let ProgressBar = fromMixin(progressbar);
