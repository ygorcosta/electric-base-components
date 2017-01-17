'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './ElectricCode.soy';

class ElectricCode extends Component {
	handleCopyClick() {
		console.log('copy');
	}
};

Soy.register(ElectricCode, templates);

export default ElectricCode;
