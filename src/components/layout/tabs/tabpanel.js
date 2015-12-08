import {mixin, fromMixin} from '../../../mixin';

export let tabpanel = mixin('tabpanel', 'mdl-layout__tab-panel');
export let TabPanel = fromMixin(tabpanel, 'section');
