import {mixin, fromMixin} from '../../mixin';

export let grid = mixin('grid', function({nospacing}) {
	this.class.push('mdl-grid');

	if (nospacing) this.class.push('mdl-grid--no-spacing');
});

export let Grid = fromMixin(grid);
