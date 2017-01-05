'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './ElectricNavigation.soy';

class ElectricNavigation extends Component {
	attached() {
	}
};

Soy.register(ElectricNavigation, templates);

export default ElectricNavigation;
