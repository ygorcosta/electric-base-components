'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './SSGUpdates.soy';

class SSGUpdates extends Component {
	attached() {
	}
};

SSGUpdates.STATE = {
	updates: {
		validator: core.isArray,
		value: []
	}
};

Soy.register(SSGUpdates, templates);

export default SSGUpdates;
