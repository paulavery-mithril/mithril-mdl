import {mixin, fromMixin} from '../../mixin';

export let menuitem = mixin('menuitem', 'mdl-menu__item');
export let MenuItem = fromMixin(menuitem, 'li');
