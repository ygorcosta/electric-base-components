'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './ElectricUpdates.soy';

class ElectricUpdates extends Component {
	attached() {
	}
};

ElectricUpdates.STATE = {
	updates: {
		validator: core.isArray,
		value: []
	}
};

Soy.register(ElectricUpdates, templates);

export default ElectricUpdates;
