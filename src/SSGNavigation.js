'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './SSGNavigation.soy';

class SSGNavigation extends Component {
	attached() {
	}
};

Soy.register(SSGNavigation, templates);

export default SSGNavigation;
