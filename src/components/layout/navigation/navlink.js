import {mixin, fromMixin} from '../../../mixin';

export let navlink = mixin('navlink', 'mdl-navigation__link');
export let NavLink = fromMixin(navlink, 'a');
