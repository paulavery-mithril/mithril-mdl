import {mixin, fromMixin} from '../../mixin';

export let title = mixin('title', 'mdl-layout-title');
export let Title = fromMixin(title, 'span');
